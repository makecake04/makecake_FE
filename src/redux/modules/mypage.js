import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { api } from "../../shared/api";
import { useSelector } from "react-redux";

const GET_COMMENT = "GET_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

const getComment = createAction(GET_COMMENT, (commentList) => ({
  commentList,
}));
const deleteComment = createAction(DELETE_COMMENT, (commentId) => ({
  commentId,
}));

const initialState = {
  list: [],
};

const getCommentDB = (page_num) => {
  const token = localStorage.getItem("token");
  return function (dispatch, getState, { history }) {
    axios({
      method: "get",
      url: "http://3.38.153.67/designs/myComment",
      params: {
        page: parseInt(page_num),
      },
      headers: { Authorization: `${token}` },
    })
      .then((res) => {
        console.log(res.data);
        dispatch(getComment(res.data));
      })
      .catch((err) => {
        console.log("댓글 정보를 가져올 수 없어요!", err);
      });
  };
};

const deleteCommentDB = (commentId) => {
  const token = localStorage.getItem("token");
  return function (dispatch, getState, { history }) {
    //   axios
    //   .delete(`http://3.38.153.67/comments/${commentId}` , {
    // })
    axios({
      method: "delete",
      url: `http://3.38.153.67/comments/${commentId}`,
      headers: { Authorization: `${token}` },
    })
      .then((res) => {
        // dispatch(deleteComment(commentId));
        window.location.reload();
      })
      .catch((e) => {
        alert("댓글 삭제에 실패하였습니다.");
      });
  };
};

//reducer
export default handleActions(
  {
    [GET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(...action.payload.commentList);
        //중복 검사
        draft.list = draft.list.reduce((acc, cur) => {
          if (acc.findIndex((a) => a.commentId === cur.commentId) === -1) {
            return [...acc, cur];
          } else {
            acc[acc.findIndex((a) => a.commentId === cur.commentId)] = cur;
            return acc;
          }
        }, []);
      }),

    // [DELETE_COMMENT]: (state, action) =>
    //   produce(state, (draft) => {
    //     draft.list = action.payload.commentId;
    // }),
  },
  initialState
);

const userActions = {
  getComment,
  getCommentDB,
  deleteComment,
  deleteCommentDB,
};

export { userActions };
