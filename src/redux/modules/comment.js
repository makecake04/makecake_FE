import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { api } from "../../shared/api";

const GET_COMMENT = "GET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const GET_MY_COMMENT = "GET_MY_COMMENT";
const COMMENT_REPLACE = "COMMENT_REPLACE";

const getComment = createAction(GET_COMMENT, (commentList) => ({
  commentList,
}));
const addComment = createAction(ADD_COMMENT, (postId, content) => ({
  postId,
  content,
}));

const getMyComment = createAction(GET_MY_COMMENT, (commentList) => ({
  commentList,
}));
const commentReplace = createAction(COMMENT_REPLACE, (comment) => ({
  comment,
}));

const initialState = {
  list: [],
  my_comment_list: [],
};

const getCommentDB = (postId, page_num) => {
  return function (dispatch, getState, { history }) {
    api
      .getComment(postId, page_num)
      .then((res) => {
        dispatch(getComment(res.data));
      })
      .catch((err) => {
        console.log("댓글 정보를 가져올 수 없어요!", err);
      });
  };
};

const addCommentDB = (postId, content) => {
  return function (dispatch, getState, { history }) {
    api
      .postComment(postId, content)
      .then((res) => {
        dispatch(addComment(postId, content));
        window.location.reload();
      })
      .catch((err) => {
        console.log("댓글을 추가할 수 없어요!", err);
      });
  };
};

const deleteCommentDB = (commentId) => {
  return function (dispatch, getState, { history }) {
    api
      .deleteComment(commentId)
      .then((res) => {
        window.location.reload();
      })
      .catch((e) => {
        alert("댓글 삭제에 실패하였습니다.");
      });
  };
};

const getMyCommentDB = (page_num) => {
  return function (dispatch, getState, { history }) {
    api
      .getMyComment(page_num)
      .then((res) => {
        dispatch(getMyComment(res.data));
      })
      .catch((err) => {
        console.log("댓글 정보를 가져올 수 없어요!", err);
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

    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list = [...draft.list, action.payload];
      }),
    [GET_MY_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.my_comment_list.push(...action.payload.commentList);
        //중복 검사
        draft.my_comment_list = draft.my_comment_list.reduce((acc, cur) => {
          if (acc.findIndex((a) => a.commentId === cur.commentId) === -1) {
            return [...acc, cur];
          } else {
            acc[acc.findIndex((a) => a.commentId === cur.commentId)] = cur;
            return acc;
          }
        }, []);
      }),
    [COMMENT_REPLACE]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.comment;
      }),
  },
  initialState
);

const actionCreators = {
  getComment,
  getCommentDB,
  addComment,
  addCommentDB,
  deleteCommentDB,
  getMyCommentDB,
  commentReplace,
};

export { actionCreators };
