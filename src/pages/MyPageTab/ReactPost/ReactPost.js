import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentAction } from "../../../redux/modules/comment";
import { actionCreators as designAction } from "../../../redux/modules/design";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

//import css
import {
  ReactWriteWrap,
  Container,
  HeaderWrap,
  BlackBackButton,
  HeaderText,
  Line,
  Wrap,
  LikeAndCommentWrap,
  LikeButton,
  CommentButton,
  ContentTabs,
  PostWrapOne,
  PostWrap,
  ReviewWrap,
  TitleWrap,
  Profile,
  Info,
  CreatedDate,
  NickName,
  HeartIcon,
  ContentWrap,
  ContentText,
  ImgWrap,
  Img,
  HrWrap,
  PostWrapTwo,
  CommentWrap,
  InsertDt,
  NicknameAndDelete,
  Delete,
} from "./style";

const ReactWrite = (props) => {
  const navigate = useNavigate();
  const likedesign = useSelector((state) => state.design.likeDesign);
  const [toggleState, setToggleState] = React.useState(1);
  const [content, setContent] = useState("");
  const [pageNumber, setPageNumber] = React.useState(0);
  const [ref, inView] = useInView();
  const dispatch = useDispatch();
  const commentList = useSelector((state) => state.comment.my_comment_list);
  const deleteComment = (commentId) => {
    dispatch(commentAction.deleteMyCommentDB(commentId));
  };
  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    if (pageNumber === 0) {
      dispatch(designAction.getLikeDesignDB(pageNumber));
      dispatch(commentAction.getMyCommentDB(pageNumber));
    }
    setPageNumber(0);
  }, [toggleState]);

  useEffect(() => {
    // dispatch(designAction.getLikeDesignDB(pageNumber));
    // dispatch(commentAction.getMyCommentDB(pageNumber));
    if (toggleState === 1) {
      dispatch(designAction.getLikeDesignDB(pageNumber));
    } else if (toggleState === 2) {
      dispatch(commentAction.getMyCommentDB(pageNumber));
      console.log("2");
    }
  }, [pageNumber]);

  useEffect(() => {
    // if (inView) {
    setPageNumber(pageNumber + 1);
    // }
  }, [inView]);

  return (
    <ReactWriteWrap>
      <Container>
        <HeaderWrap>
          <BlackBackButton
            onClick={() => {
              navigate(`/mypage`);
            }}
          />
          <HeaderText>내가 반응한 게시글</HeaderText>
        </HeaderWrap>
        <Line />
        <Wrap>
          <LikeAndCommentWrap>
            <LikeButton onClick={() => toggleTab(1)} toggleState={toggleState}>
              좋아요 한 게시글
            </LikeButton>
            <CommentButton
              onClick={() => toggleTab(2)}
              toggleState={toggleState}
            >
              내가 남긴 댓글
            </CommentButton>
          </LikeAndCommentWrap>
          <ContentTabs>
            <PostWrapOne toggleState={toggleState}>
              {likedesign &&
                likedesign.map((v, idx) => {
                  return (
                    <PostWrap
                      key={idx}
                      ref={ref}
                      onClick={() => {
                        navigate(`/post/${v.postId}`);
                      }}
                    >
                      <ReviewWrap>
                        <TitleWrap>
                          <Profile></Profile>
                          <Info>
                            <CreatedDate>{v.createdDate}</CreatedDate>
                            <NickName>{v.nickname}</NickName>
                          </Info>
                        </TitleWrap>
                        <HeartIcon />
                      </ReviewWrap>
                      <ContentWrap>
                        <ContentText>{v.content}</ContentText>
                      </ContentWrap>
                      <ImgWrap>
                        <Img src={v.img} alt="" />
                      </ImgWrap>
                      <HrWrap />
                    </PostWrap>
                  );
                })}
            </PostWrapOne>

            <PostWrapTwo toggleState={toggleState}>
              {commentList &&
                commentList.map((v, i) => {
                  return (
                    <CommentWrap key={i} ref={ref}>
                      <ContentText
                        onClick={() => {
                          navigate(`/post/${v.postId}`);
                        }}
                        value={content}
                      >
                        {v.content}
                      </ContentText>
                      <InsertDt
                        onClick={() => {
                          navigate(`/post/${v.postId}`);
                        }}
                      >
                        {v.createdDate}
                      </InsertDt>

                      <NicknameAndDelete>
                        <NickName
                          onClick={() => {
                            navigate(`/post/${v.postId}`);
                          }}
                        >
                          {v.postTitle}
                        </NickName>
                        <Delete onClick={() => deleteComment(v.commentId)}>
                          삭제하기
                        </Delete>
                      </NicknameAndDelete>

                      <HrWrap />
                    </CommentWrap>
                  );
                })}
            </PostWrapTwo>
          </ContentTabs>
        </Wrap>
      </Container>
    </ReactWriteWrap>
  );
};

export default ReactWrite;
