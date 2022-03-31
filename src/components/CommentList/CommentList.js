import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actionCreators as commentAction } from "../../redux/modules/comment";

//import css
import {
  Container,
  CommentBox,
  InfoBox,
  NickName,
  CommentDate,
  Content,
  Button,
  EditBox,
  DeleteBox,
} from "./style";

const CommentList = (props) => {
  const dispatch = useDispatch();
  const commentList = useSelector((state) => state.comment.list);
  const userInfo = useSelector((state) => state.user.user);

  const deleteComment = (commentId) => {
    dispatch(commentAction.deleteCommentDB(commentId));
  };

  return (
    <Container>
      {commentList &&
        commentList.map((v, i) => {
          return (
            <CommentBox key={i}>
              <InfoBox>
                <NickName>{v.nickname}</NickName>
                <CommentDate>{v.createdDate}</CommentDate>
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
  );
};

export default CommentList;
