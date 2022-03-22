import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";

import { actionCreators as postAction } from "../../redux/modules/post";
import { actionCreators as commentAction } from "../../redux/modules/comment";

//component
import { CommentList } from "../../components/component";

//image
import { black_back_button, like, view, send } from "../../assets/images/image";

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
} from "./style";

const PostDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const post_id = useParams().id;
  const [content, setContent] = useState("");
  const [pageNumber, setPageNumber] = React.useState(0);
  const [ref, inView] = useInView();
  const post = useSelector((state) => state.post.list);
  const nickname = useSelector((state) => state.user.user?.nickname);

  const getMoreComment = async () => {
    setPageNumber(pageNumber + 1);
  };

  React.useEffect(() => {
    if (inView) {
      getMoreComment();
    }
  }, [inView]);

  const changeComment = (e) => {
    setContent(e.target.value);
    console.log(e.target.value);
  };

  const clickComment = () => {
    if (!content) {
      window.alert("댓글을 작성해주세요!");
      return;
    }
    dispatch(commentAction.addCommentDB(post_id, content));
    setContent("");
  };

  useEffect(() => {
    dispatch(postAction.getOnePostDB(post_id));
  }, []);

  useEffect(() => {
    dispatch(commentAction.getCommentDB(post_id, pageNumber));
  }, [pageNumber]);

  return (
    <Wrapper>
      <Header>
        <img
          src={black_back_button}
          alt="back-button"
          onClick={() => navigate(-1)}
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
          <img src={like} alt="like-heart" />
          <p className="likeCnt">{post.likeCnt}</p>
          <img src={view} alt="view-icon" />
          <p className="seeCnt">{post.viewCnt}</p>
        </IconWrapper>
        <OptionWrapper>
          <button>{post.size}</button>
          <button>{post.shape}</button>
          <button>{post.purpose}</button>
        </OptionWrapper>
      </ImageInfo>

      <PostInfo>
        <h3 className="titleText">{post.title}</h3>
        <p className="content">{post.content}</p>
      </PostInfo>

      <CommentWrapper>
        <h3>
          댓글<span>{post.commentCnt}</span>
        </h3>

        <CommentInput
          type="text"
          placeholder="댓글을 입력해주세요"
          value={content}
          onChange={changeComment}
        />

        <SendButton onClick={() => clickComment()}>
          <img src={send} alt="send" />
        </SendButton>
        <CommentList />
      </CommentWrapper>
    </Wrapper>
  );
};

export default PostDetail;
