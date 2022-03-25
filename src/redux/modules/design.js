import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { api } from "../../shared/api";

//action type
const ADD_DESIGN = "ADD_DESIGN";
const NEW_DESIGN_LIST = "NEW_DESIGN_LIST";
const LIKE_DESIGN_LIST = "LIKE_DESIGN_LIST";
const COMMENT_DESIGN_LIST = "COMMENT_DESIGN_LIST";
const VIEW_DESIGN_LIST = "VIEW_DESIGN_LIST";
const MY_DESIGN_LIST = "MY_DESIGN_LIST";
const MY_POST_LIST = "MY_POST_LIST";
const DESIGN_DETAIL = "DESIGN_DETAIL";
const LIKE_DESIGN = "LIKE_DESIGN";
// const DELETE_DESIGN = "DELETE_DESIGN";
// const POST_DETAIL = "POST_DETAIL";

//action creators
const addDesign = createAction(ADD_DESIGN, (design) => ({
  design,
}));
const newDesignList = createAction(NEW_DESIGN_LIST, (list) => ({ list }));
const likeDesignList = createAction(LIKE_DESIGN_LIST, (list) => ({ list }));
const commentDesignList = createAction(COMMENT_DESIGN_LIST, (list) => ({
  list,
}));
const viewDesignList = createAction(VIEW_DESIGN_LIST, (list) => ({ list }));
const myDesigntList = createAction(MY_DESIGN_LIST, (list) => ({ list }));
const myPostList = createAction(MY_POST_LIST, (list) => ({ list }));
const designDetail = createAction(DESIGN_DETAIL, (list) => ({ list }));
const likeDesign = createAction(LIKE_DESIGN, (likedesign) => ({ likedesign }));
// const deleteDesign = createAction(DELETE_DESIGN, (list) => ({ list }));
// const postDetail = createAction(POST_DETAIL, (list) => ({ list }));

const initialState = {
  list: [],
  design_list: [],
  post_list: [],
  design_detail: [],
  likeDesign: [],
  new_list: [],
  like_list: [],
  comment_list: [],
  view_list: [],
};

//middleware
const addDesignDB = (design) => {
  return function (dispatch, getState, { history }) {
    const token_key = `${localStorage.getItem("token")}`;
    console.log(design);
    fetch(design)
      .then((res) => res.blob())
      .then((blob) => {
        const form = new FormData();
        form.append("img", blob);
        axios
          .post("http://3.38.153.67/designs", form, {
            headers: {
              Authorization: `${token_key}`,
            },
          })
          .then((res) => {
            console.log("도안 이미지 전송 성공!: ", res.data);
            dispatch(addDesign(res.data.img));
            window.location.replace("/mydesign");
          })
          .catch(function (error) {
            console.log(error);
          });
        console.log(blob);
      });
  };
};

const getDesignListDB = (page_num, sortType) => {
  console.log(sortType);
  return function (dispatch, getState) {
    axios
      .get("http://3.38.153.67/api/designs", {
        params: {
          page: parseInt(page_num),
          sortType: sortType,
        },
      })
      .then((res) => {
        if (sortType === "createdDate") {
          dispatch(newDesignList(res.data));
        } else if (sortType === "likeCnt") {
          dispatch(likeDesignList(res.data));
        } else if (sortType === "commentCnt") {
          dispatch(commentDesignList(res.data));
        } else if (sortType === "viewCnt") {
          dispatch(viewDesignList(res.data));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getMyDesignListDB = (page_num, option) => {
  const token_key = `${localStorage.getItem("token")}`;
  return function (dispatch, getState) {
    axios
      .get("http://3.38.153.67/designs/mine", {
        params: { page: page_num, option: option },
        headers: {
          Authorization: `${token_key}`,
        },
      })
      .then((res) => {
        // const data = res.data.map((a) => a.img);
        if (option === "nonpost") dispatch(myDesigntList(res.data));
        else dispatch(myPostList(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getDesignImageDB = (designId) => {
  const token_key = `${localStorage.getItem("token")}`;
  return function (dispatch, getState) {
    axios
      .get(`http://3.38.153.67/designs/mine/${designId}`, {
        headers: {
          Authorization: `${token_key}`,
        },
      })
      .then((res) => {
        dispatch(designDetail(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const deleteDesignDB = (designId) => {
  return async function (dispatch, getState) {
    const token_key = `${localStorage.getItem("token")}`;

    axios
      .delete(`http://3.38.153.67/designs/${designId}`, {
        headers: {
          Authorization: `${token_key}`,
        },
      })
      .then((res) => {
        console.log(res);
        alert("도안이 삭제되었습니다!");
        window.location.replace("/mydesign");
      })
      .catch((error) => {
        console.log("게시글 삭제 에러:", error);
      });
  };
};

const getLikeDesignDB = (page_num) => {
  const token = localStorage.getItem("token");
  return function (dispatch, getState) {
    axios
      .get("http://3.38.153.67/designs/myReact", {
        params: {
          page: parseInt(page_num),
        },
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        dispatch(likeDesign(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// const getPostImageDB = (postId) => {
//   const token_key = `${localStorage.getItem("token")}`;
//   return function (dispatch, getState) {
//     axios
//       .get(`http://3.38.153.67/posts/mine/${postId}`, {
//         headers: {
//           Authorization: `${token_key}`,
//         },
//       })
//       .then((res) => {
//         dispatch(postDetail(res.data));
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// };

export default handleActions(
  {
    [ADD_DESIGN]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.payload.list);
      }),
    [NEW_DESIGN_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.new_list.push(...action.payload.list);
        //중복 검사
        draft.new_list = draft.new_list.reduce((acc, cur) => {
          if (acc.findIndex((a) => a.postId === cur.postId) === -1) {
            return [...acc, cur];
          } else {
            acc[acc.findIndex((a) => a.postId === cur.postId)] = cur;
            return acc;
          }
        }, []);
      }),
    [LIKE_DESIGN_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.like_list.push(...action.payload.list);
        //중복 검사
        draft.like_list = draft.like_list.reduce((acc, cur) => {
          if (acc.findIndex((a) => a.postId === cur.postId) === -1) {
            return [...acc, cur];
          } else {
            acc[acc.findIndex((a) => a.postId === cur.postId)] = cur;
            return acc;
          }
        }, []);
      }),
    [COMMENT_DESIGN_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.comment_list.push(...action.payload.list);
        //중복 검사
        draft.comment_list = draft.comment_list.reduce((acc, cur) => {
          if (acc.findIndex((a) => a.postId === cur.postId) === -1) {
            return [...acc, cur];
          } else {
            acc[acc.findIndex((a) => a.postId === cur.postId)] = cur;
            return acc;
          }
        }, []);
      }),
    [VIEW_DESIGN_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.view_list.push(...action.payload.list);
        //중복 검사
        draft.view_list = draft.view_list.reduce((acc, cur) => {
          if (acc.findIndex((a) => a.postId === cur.postId) === -1) {
            return [...acc, cur];
          } else {
            acc[acc.findIndex((a) => a.postId === cur.postId)] = cur;
            return acc;
          }
        }, []);
      }),
    [MY_DESIGN_LIST]: (state, action) =>
      produce(state, (draft) => {
        //.reverse() to sort by created at in descending order
        draft.design_list.push(...action.payload.list.reverse());
        //중복 검사
        draft.design_list = draft.design_list.reduce((acc, cur) => {
          if (acc.findIndex((a) => a.designId === cur.designId) === -1) {
            return [...acc, cur];
          } else {
            acc[acc.findIndex((a) => a.designId === cur.designId)] = cur;
            return acc;
          }
        }, []);
      }),
    [MY_POST_LIST]: (state, action) =>
      produce(state, (draft) => {
        //.reverse() to sort by created at in descending order
        draft.post_list.push(...action.payload.list.reverse());
        //중복 검사
        draft.post_list = draft.post_list.reduce((acc, cur) => {
          if (acc.findIndex((a) => a.postId === cur.postId) === -1) {
            return [...acc, cur];
          } else {
            acc[acc.findIndex((a) => a.postId === cur.postId)] = cur;
            return acc;
          }
        }, []);
      }),
    [DESIGN_DETAIL]: (state, action) =>
      produce(state, (draft) => {
        draft.design_detail = action.payload.list;
      }),

    [LIKE_DESIGN]: (state, action) =>
      produce(state, (draft) => {
        draft.likeDesign.unshift(...action.payload.likedesign);
        //중복 검사
        draft.likeDesign = draft.likeDesign.reduce((acc, cur) => {
          if (acc.findIndex((a) => a.postId === cur.postId) === -1) {
            return [...acc, cur];
          } else {
            acc[acc.findIndex((a) => a.postId === cur.postId)] = cur;
            return acc;
          }
        }, []);
      }),
    // [POST_DETAIL]: (state, action) =>
    //   produce(state, (draft) => {
    //     draft.post_detail = action.payload.list;
    //   }),
  },
  initialState
);

const actionCreators = {
  addDesignDB,
  newDesignList,
  getDesignListDB,
  getMyDesignListDB,
  getDesignImageDB,
  deleteDesignDB,
  getLikeDesignDB,
  // getPostImageDB,
};

export { actionCreators };
