import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import Swal from "sweetalert2";

import { api } from "../../shared/api";
import { initial } from "lodash";

//action type
const ADD_POST = "ADD_POST";
const GET_POST = "GET_POST";
const EDIT_POST = "EDIT_POST";
const DELETE_POST = "DELETE_POST";
const ADD_LIKE_POST = "ADD_LIKE_POST";
const SET_POST_SORTTYPE = "SET_POST_SORTTYPE";

//actioncreators
const addPost = createAction(ADD_POST, (list) => ({ list }));
const getOnePost = createAction(GET_POST, (list) => ({ list }));
const editPost = createAction(EDIT_POST, (list) => ({ list }));
const deletePost = createAction(DELETE_POST, (postId) => ({ postId }));
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
  const token_key = `${localStorage.getItem("token")}`;
  return function (dispatch, getState) {
    let post = {
      title: title,
      content: content,
      size: size,
      shape: shape,
      purpose: purpose,
    };
    axios
      .post(
        `https://devssk.shop/posts/${designId}`,
        { ...post },
        {
          headers: {
            Authorization: `${token_key}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        // dispatch(addPost(res.data));
        window.location.replace(`/post/${res.data.postId}`);
      })
      .catch((err) => {
        console.log("게시글 작성 오류: ", err);
      });
  };
};

//get one post
const getOnePostDB = (postId) => {
  const token_key = `${localStorage.getItem("token")}`;
  return function (dispatch, getState) {
    axios
      .get(
        `https://devssk.shop/api/designs/${postId}`,

        {
          headers: {
            Authorization: `${token_key}`,
          },
        }
      )
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
  const token_key = `${localStorage.getItem("token")}`;
  return function (dispatch, getState) {
    let post = {
      title: title,
      content: content,
      size: size,
      shape: shape,
      purpose: purpose,
    };
    axios
      .put(
        `https://devssk.shop/posts/${postId}`,
        { ...post },
        {
          headers: {
            Authorization: `${token_key}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        // dispatch(editPost(res.data));
        window.location.replace(`/post/${postId}`);
      })
      .catch((err) => {
        console.log("게시글 불러오기 오류: ", err);
      });
  };
};

const deletePostDB = (postId) => {
  return async function (dispatch, getState) {
    const token_key = `${localStorage.getItem("token")}`;

    axios
      .delete(`https://devssk.shop/posts/${postId}`, {
        headers: {
          Authorization: `${token_key}`,
        },
      })
      .then((res) => {
        console.log(res);
        window.location.replace("/mydesign");
      })
      .catch((error) => {
        console.log("게시글 삭제 에러:", error);
      });
  };
};

const addLikePostDB = (postId, myLike) => {
  console.log(myLike);
  const token = localStorage.getItem("token");
  return function (dispatch, getState) {
    axios
      .post(
        `https://devssk.shop/posts/like/${postId}`,
        {
          myLike: myLike,
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        dispatch(addLikePost(postId, res.data.myLike, res.data.likeCnt));
      })
      .catch((err) => {
        console.log(err);
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
    // [EDIT_POST]: (state, action) =>
    //   produce(state, (draft) => {
    //     let idx = draft.lists.findIndex(
    //       (p) => p.postId === action.payload.list.postId
    //     );

    //     draft.post_list[idx] = {
    //       ...draft.lists[idx],
    //       ...action.payload.list,
    //     };
    //   }),
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
  editPostDB,
  deletePostDB,
  addLikePost,
  addLikePostDB,
  setPostSortType,
};

export { actionCreators };
