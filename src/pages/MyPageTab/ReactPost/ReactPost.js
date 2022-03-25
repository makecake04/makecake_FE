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
    dispatch(commentAction.getMyCommentDB(pageNumber));
    dispatch(designAction.getLikeDesignDB(pageNumber));
  }, [pageNumber]);

  const getMoreComment = async () => {
    setPageNumber(pageNumber + 1);
  };

  React.useEffect(() => {
    if (inView) {
      getMoreComment();
    }
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
                    <PostWrap key={idx} ref={ref}>
                      <ReviewWrap>
                        <TitleWrap>
                          <Profile></Profile>
                          <Info>
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
                      <ContentText value={content}>{v.content}</ContentText>

                      <InsertDt>{v.createdDate}</InsertDt>

                      <NicknameAndDelete>
                        <NickName>{v.postTitle}</NickName>
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
