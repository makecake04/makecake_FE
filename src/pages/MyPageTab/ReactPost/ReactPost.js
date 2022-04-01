import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";

import { actionCreators as commentAction } from "../../../redux/modules/comment";
import { actionCreators as designAction } from "../../../redux/modules/design";

//css
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
  NeedLikeBox,
  CakeIcon,
  PressLikeText,
  GoToSeePostText,
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
  NeedCommentBox,
  NeedCommentText,
  CommentWrap,
  InsertDt,
  NicknameAndDelete,
  Delete,
} from "./style";

const ReactWrite = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [refDesign, inViewDesign] = useInView();
  const [refComment, inViewComment] = useInView();

  const [toggleState, setToggleState] = useState(1);

  const [pageNumber, setPageNumber] = useState(0);

  const likedesign = useSelector((state) => state.design.likeDesign);
  const commentList = useSelector((state) => state.comment.my_comment_list);

  const deleteComment = (commentId) => {
    dispatch(commentAction.deleteMyCommentDB(commentId));
  };

  useEffect(() => {
    if (toggleState === 1) {
      dispatch(designAction.getLikeDesignDB(pageNumber));
    } else if (toggleState === 2) {
      dispatch(commentAction.getMyCommentDB(pageNumber));
    }
  }, [pageNumber, toggleState]);

  useEffect(() => {
    if (inViewDesign) {
      setPageNumber(pageNumber + 1);
    } else if (inViewComment) {
      setPageNumber(pageNumber + 1);
    }
  }, [inViewDesign, inViewComment]);

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
            <LikeButton
              onClick={() => {
                setToggleState(1);
                setPageNumber(0);
              }}
              toggleState={toggleState}
            >
              좋아요 한 게시글
            </LikeButton>
            <CommentButton
              onClick={() => {
                setToggleState(2);
                setPageNumber(0);
              }}
              toggleState={toggleState}
            >
              내가 남긴 댓글
            </CommentButton>
          </LikeAndCommentWrap>
          <ContentTabs>
            <PostWrapOne toggleState={toggleState}>
              {likedesign.length === 0 ? (
                <NeedLikeBox>
                  <CakeIcon />
                  <PressLikeText>게시글에 좋아요를 눌러보세요</PressLikeText>
                  <GoToSeePostText
                    onClick={() => {
                      navigate("/design/list");
                    }}
                  >
                    게시글 구경하러 가기
                  </GoToSeePostText>
                </NeedLikeBox>
              ) : (
                likedesign.map((v, idx) => {
                  return (
                    <PostWrap
                      key={idx}
                      ref={likedesign.length === idx + 1 ? refDesign : null}
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
                })
              )}
            </PostWrapOne>

            <PostWrapTwo toggleState={toggleState}>
              {commentList.length === 0 ? (
                <NeedCommentBox>
                  <CakeIcon />
                  <NeedCommentText>게시글에 댓글을 달아보세요</NeedCommentText>
                  <GoToSeePostText
                    onClick={() => {
                      navigate("/design/list");
                    }}
                  >
                    게시글 구경하러 가기
                  </GoToSeePostText>
                </NeedCommentBox>
              ) : (
                commentList.map((v, i) => {
                  return (
                    <CommentWrap
                      key={i}
                      ref={commentList.length === i + 1 ? refComment : null}
                    >
                      <ContentText
                        onClick={() => {
                          navigate(`/post/${v.postId}`);
                        }}
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
                })
              )}
            </PostWrapTwo>
          </ContentTabs>
        </Wrap>
      </Container>
    </ReactWriteWrap>
  );
};

export default ReactWrite;
