import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

import { api } from "../../shared/api";
import { initial } from "lodash";

//action type
const ADD_POST = "ADD_POST";
const GET_POST = "GET_POST";
const EDIT_POST = "EDIT_POST";
const DELETE_POST = "DELETE_POST";
const ADD_LIKE_POST = "ADD_LIKE_POST";

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

const initialState = {
  lists: [],
  list: [],
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
        `http://3.38.153.67/posts/${designId}`,
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
        `http://3.38.153.67/api/designs/${postId}`,

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
        `http://3.38.153.67/posts/${postId}`,
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
      .delete(`http://3.38.153.67/posts/${postId}`, {
        headers: {
          Authorization: `${token_key}`,
        },
      })
      .then((res) => {
        console.log(res);
        alert("게시글이 삭제되었습니다!");
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
        `http://3.38.153.67/posts/like/${postId}`,
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
};

export { actionCreators };
