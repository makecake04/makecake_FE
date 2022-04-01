import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";
import Swal from "sweetalert2";

import { actionCreators as postAction } from "../../redux/modules/post";
import { actionCreators as commentAction } from "../../redux/modules/comment";
import { actionCreators as designAction } from "../../redux/modules/design";

//image
import { black_back_button, view, send } from "../../assets/images/image";

//css
import {
  Wrapper,
  Header,
  UserInfo,
  ProfileImage,
  ButtonWrapper,
  ImageWrapper,
  ImageInfo,
  IconWrapper,
  OptionWrapper,
  PostInfo,
  CommentWrapper,
  CommentInput,
  SendButton,
  EmptyHeartIcon,
  FullHeartIcon,
  Container,
  CommentBox,
  InfoBox,
  NickName,
  CommentDate,
  Content,
  Button,
  DeleteBox,
} from "./style";

const PostDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const post_id = useParams().id;

  const [content, setContent] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [ref, inView] = useInView();

  const is_session = localStorage.getItem("token");

  const post = useSelector((state) => state.post.list);
  const nickname = useSelector((state) => state.user.user?.nickname);
  const sort = useSelector((state) => state.design.mydesign_sort_type);
  const commentList = useSelector((state) => state.comment.list);
  const userInfo = useSelector((state) => state.user.user);
  const noti = useSelector((state) => state.noti?.fixlist);
  const locationState = useLocation().state?.sortType;
  console.log(noti);
  const deleteComment = (commentId) => {
    dispatch(commentAction.deleteCommentDB(commentId));
  };

  const checkLogin = () => {
    if (!is_session) {
      Swal.fire({
        title: "로그인이 필요한 서비스입니다!",
        showCancelButton: true,
        confirmButtonText: '<a href="/">로그인 할래요!</a>',
        confirmButtonColor: "#ff679e",
        cancelButtonColor: "#777",
        cancelButtonText: "그냥 둘러볼래요.",
      });
    }
  };

  const changeComment = (e) => {
    if (!is_session) {
      Swal.fire({
        title: "로그인이 필요한 서비스입니다!",
        showCancelButton: true,
        confirmButtonText: '<a href="/">로그인 할래요!</a>',
        confirmButtonColor: "#ff679e",
        cancelButtonColor: "#777",
        cancelButtonText: "그냥 둘러볼래요.",
      });
    }
    setContent(e.target.value);
  };

  const clickComment = () => {
    if (!is_session) {
      Swal.fire({
        title: "로그인이 필요한 서비스입니다!",
        showCancelButton: true,
        confirmButtonText: '<a href="/">로그인 할래요!</a>',
        confirmButtonColor: "#ff679e",
        cancelButtonColor: "#777",
        cancelButtonText: "그냥 둘러볼래요.",
      });
    }
    if (is_session && !content) {
      Swal.fire({
        title: "댓글을 입력해 주세요!",
        showCancelButton: false,
        confirmButtonText: "댓글 입력할래요!",
        confirmButtonColor: "#ff679e",
      });
    }
    dispatch(commentAction.addCommentDB(post_id, content));
    setContent("");
  };

  const likeToggle = () => {
    if (!is_session) {
      Swal.fire({
        title: "로그인이 필요한 서비스입니다!",
        showCancelButton: true,
        confirmButtonText: '<a href="/">로그인 할래요!</a>',
        confirmButtonColor: "#ff679e",
        cancelButtonColor: "#777",
        cancelButtonText: "그냥 둘러볼래요.",
      });
    } else {
      dispatch(postAction.addLikePostDB(post_id, !post.myLike));
    }
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      clickComment();
    }
  };
  useEffect(() => {
    if (commentList.length !== 0) {
      dispatch(commentAction.commentReplace([]));
    }
    dispatch(postAction.getOnePostDB(post_id));
  }, []);

  useEffect(() => {
    dispatch(commentAction.getCommentDB(post_id, pageNumber));
  }, [pageNumber]);

  useEffect(() => {
    if (inView) {
      setPageNumber(pageNumber + 1);
    }
  }, [inView]);

  return (
    <Wrapper>
      <Header>
        <img
          src={black_back_button}
          alt="back-button"
          onClick={() => {
            navigate(-1);
            dispatch(designAction.setMyDesignSortType(2));
          }}
        />
        <h3>게시글</h3>
      </Header>

      <UserInfo>
        <ProfileImage>
          <img src={post.profileImg} alt="profile-img" />
        </ProfileImage>
        <p>{post.createdDate?.split(" ")[0]}</p>
        <h4>{post.nickname}</h4>
        {post.nickname === nickname && (
          <ButtonWrapper>
            <button
              onClick={() =>
                navigate(`/post/write/${post.designId}/${post.postId}`)
              }
            >
              수정하기
            </button>
            <button
              onClick={() => {
                dispatch(postAction.deletePostDB(post_id));
              }}
            >
              삭제하기
            </button>
          </ButtonWrapper>
        )}
      </UserInfo>

      <ImageWrapper>
        <img src={post.img} alt="post-img" />
      </ImageWrapper>
      <ImageInfo>
        <IconWrapper>
          {post.myLike ? (
            <FullHeartIcon onClick={likeToggle} />
          ) : (
            <EmptyHeartIcon onClick={likeToggle} />
          )}
          <p>{post.likeCnt}</p>
          <img src={view} alt="view-icon" />
          <p>{post.viewCnt}</p>
        </IconWrapper>
        <OptionWrapper>
          <button>{post.size}</button>
          <button>{post.shape}</button>
          <button>{post.purpose}</button>
          {post.orders ? <button>주문 완료</button> : null}
        </OptionWrapper>
      </ImageInfo>

      <PostInfo>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </PostInfo>

      <CommentWrapper>
        <h3>
          댓글<span>{post.commentCnt}</span>
        </h3>
        <CommentInput
          type="text"
          placeholder="댓글을 입력해주세요(100자 이내)"
          value={content}
          onChange={changeComment}
          onKeyPress={onKeyPress}
          maxLength={100}
          onClick={() => checkLogin()}
        />
        <SendButton onClick={() => clickComment()}>
          <img src={send} alt="send" />
        </SendButton>
        <Container>
          {commentList &&
            commentList.map((v, i) => {
              return (
                <CommentBox
                  key={i}
                  ref={commentList.length === i + 1 ? ref : null}
                >
                  <InfoBox>
                    <NickName>{v.nickname}</NickName>
                    <CommentDate>{v.createdDate?.split(" ")[0]}</CommentDate>
                  </InfoBox>
                  <Content>{v.content}</Content>

                  <Button>
                    {v.nickname === userInfo?.nickname ? (
                      <>
                        <DeleteBox onClick={() => deleteComment(v.commentId)}>
                          삭제하기
                        </DeleteBox>
                      </>
                    ) : null}
                  </Button>
                </CommentBox>
              );
            })}
        </Container>
      </CommentWrapper>
    </Wrapper>
  );
};

export default PostDetail;

// import React from "react";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";

// import { actionCreators as commentAction } from "../../redux/modules/comment";

// //css
// import {
//   Container,
//   CommentBox,
//   InfoBox,
//   NickName,
//   CommentDate,
//   Content,
//   Button,
//   EditBox,
//   DeleteBox,
// } from "./style";

// const CommentList = (props) => {
//   const dispatch = useDispatch();
//   const commentList = useSelector((state) => state.comment.list);
//   const userInfo = useSelector((state) => state.user.user);

//   const deleteComment = (commentId) => {
//     dispatch(commentAction.deleteCommentDB(commentId));
//   };

//   return (
//     <Container>
//       {commentList &&
//         commentList.map((v, i) => {
//           return (
//             <CommentBox key={i}>
//               <InfoBox>
//                 <NickName>{v.nickname}</NickName>
//                 {/* <CommentDate>{v.createdDate}</CommentDate>  */}
//                 <CommentDate>{v.createdDate?.split(" ")[0]}</CommentDate>
//               </InfoBox>
//               <Content>{v.content}</Content>

//               <Button>
//                 {v.nickname === userInfo?.nickname ? (
//                   <>
//                     <DeleteBox onClick={() => deleteComment(v.commentId)}>
//                       삭제하기
//                     </DeleteBox>
//                   </>
//                 ) : null}
//               </Button>
//             </CommentBox>
//           );
//         })}
//     </Container>
//   );
// };

// export default CommentList;
