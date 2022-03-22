import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { api } from "../../shared/api";

const GET_COMMENT = "GET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";
const GET_MY_COMMENT = "GET_MY_COMMENT";
// const DELETE_MY_COMMENT = "DELETE_MY_COMMENT";

const getComment = createAction(GET_COMMENT, (commentList) => ({
  commentList,
}));
const addComment = createAction(ADD_COMMENT, (postId, content) => ({
  postId,
  content,
}));
const deleteComment = createAction(DELETE_COMMENT, (commentId) => ({
  commentId,
}));
const getMyComment = createAction(GET_MY_COMMENT, (commentList) => ({
  commentList,
}));
// const deleteMyComment = createAction(DELETE_MY_COMMENT, (commentId) => ({
//   commentId,
// }));

const initialState = {
  list: [],
  my_comment_list: [],
};

const getCommentDB = (postId, page_num) => {
  return function (dispatch, getState, { history }) {
    axios
      .get(`http://3.38.153.67/api/designs/${postId}/comments`, {
        params: {
          page: parseInt(page_num),
        },
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

const addCommentDB = (postId, content) => {
  const token = localStorage.getItem("token");
  return function (dispatch, getState, { history }) {
    // api

    axios({
      method: "post",
      url: `http://3.38.153.67/comments/${postId}`,
      data: { content: content },
      headers: { Authorization: `${token}` },
    })
      // .post("http://3.38.153.67/comments/10307" , {
      //     // .addComment1(content)
      //     content: content,
      //     headers: {Authorization : `${token}`}
      //     })
      .then((res) => {
        console.log(res.data);
        dispatch(addComment(postId, content));
        window.location.reload();
      })
      .catch((err) => {
        console.log("댓글을 추가할 수 없어요!", err);
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

const getMyCommentDB = (page_num) => {
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
        dispatch(getMyComment(res.data));
      })
      .catch((err) => {
        console.log("댓글 정보를 가져올 수 없어요!", err);
      });
  };
};

const deleteMyCommentDB = (commentId) => {
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
        draft.list = action.payload.commentList;
      }),

    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list = [...draft.list, action.payload];
      }),
    [GET_MY_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.my_comment_list.push(...action.payload.commentList);
        //중복 검사
        draft.my_comment_list = draft.list.reduce((acc, cur) => {
          if (acc.findIndex((a) => a.commentId === cur.commentId) === -1) {
            return [...acc, cur];
          } else {
            acc[acc.findIndex((a) => a.commentId === cur.commentId)] = cur;
            return acc;
          }
        }, []);
      }),
  },
  initialState
);

const actionCreators = {
  getComment,
  getCommentDB,
  addComment,
  addCommentDB,
  deleteComment,
  deleteCommentDB,
  getMyCommentDB,
  deleteMyCommentDB,
};

export { actionCreators };