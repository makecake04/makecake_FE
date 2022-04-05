import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import Swal from "sweetalert2";

import { api } from "../../shared/api";

//action type
const ADD_POST = "ADD_POST";
const GET_POST = "GET_POST";
const ADD_LIKE_POST = "ADD_LIKE_POST";
const SET_POST_SORTTYPE = "SET_POST_SORTTYPE";

//actioncreators
const getOnePost = createAction(GET_POST, (list) => ({ list }));
const addLikePost = createAction(ADD_LIKE_POST, (postId, isLike, likeCnt) => ({
  postId,
  isLike,
  likeCnt,
}));
const setPostSortType = createAction(SET_POST_SORTTYPE, (list) => ({ list }));

const initialState = {
  lists: [],
  list: [],
  post_sort_type: 1,
};

//middlewear

//add post
const addPostDB = (title, content, size, shape, purpose, designId) => {
  return function (dispatch, getState) {
    let post = {
      title: title,
      content: content,
      size: size,
      shape: shape,
      purpose: purpose,
    };
    api
      .postPost(post, designId)
      .then((res) => {
        window.location.replace(`/post/${res.data.postId}`);
      })
      .catch((err) => {
        console.log("게시글 작성 오류: ", err);
      });
  };
};

//get one post
const getOnePostDB = (postId) => {
  return function (dispatch, getState) {
    api
      .getOnePost(postId)
      .then((res) => {
        dispatch(getOnePost(res.data));
      })
      .catch((err) => {
        console.log("게시글 불러오기 오류: ", err);
        Swal.fire({
          title: "게시글 정보가 없습니다!",
          showCancelButton: false,
          confirmButtonText: '<a href="/design/list">돌아가기</a>',
          confirmButtonColor: "#ff679e",
        });
      });
  };
};

//edit post
const editPostDB = (title, content, size, shape, purpose, postId) => {
  return function (dispatch, getState) {
    let post = {
      title: title,
      content: content,
      size: size,
      shape: shape,
      purpose: purpose,
    };
    api
      .putPost(post, postId)
      .then((res) => {
        window.location.replace(`/post/${postId}`);
      })
      .catch((err) => {
        console.log("게시글 수정하기 오류: ", err);
      });
  };
};

const deletePostDB = (postId) => {
  return async function (dispatch, getState) {
    api
      .deletePost(postId)
      .then((res) => {
        window.location.replace("/mydesign");
      })
      .catch((error) => {
        console.log("게시글 삭제 에러:", error);
      });
  };
};

const addLikePostDB = (postId, myLike) => {
  return function (dispatch, getState) {
    api
      .postLikePost(postId, myLike)
      .then((res) => {
        dispatch(addLikePost(postId, res.data.myLike, res.data.likeCnt));
      })
      .catch((err) => {
        console.log("게시글 좋아하기 에러:", err);
      });
  };
};

export default handleActions(
  {
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.lists.unshift(action.payload.list);
      }),
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.list;
      }),
    [ADD_LIKE_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.myLike = action.payload.isLike;
        draft.list.likeCnt = action.payload.likeCnt;
      }),
    [SET_POST_SORTTYPE]: (state, action) =>
      produce(state, (draft) => {
        draft.post_sort_type = action.payload.list;
      }),
  },
  initialState
);

const actionCreators = {
  addPostDB,
  getOnePostDB,
  getOnePost,
  editPostDB,
  deletePostDB,
  addLikePost,
  addLikePostDB,
  setPostSortType,
};

export { actionCreators };
