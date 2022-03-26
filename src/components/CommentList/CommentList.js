import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actionCreators as commentAction } from "../../redux/modules/comment";

//import css
import { Container } from "./style";

const CommentList = (props) => {
  const ref = props;
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
            <div className="commentBox1" key={i}>
              <div className="infoBox">
                <div className="nickname1">{v.nickname}</div>
                <div className="commentDate">{v.createdDate}</div>
              </div>
              <div className="content1">{v.content}</div>
              <div className="buttons">
                {v.nickname === userInfo?.nickname ? (
                  <div
                    className="deleteBox"
                    onClick={() => deleteComment(v.commentId)}
                  >
                    삭제하기
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
    </Container>
  );
};

export default CommentList;
