import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

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
const SET_DESIGN_SORTTYPE = "SET_DESIGN_SORTTYPE";
const SET_MYDESIGN_SORTTYPE = "SET_MYDESIGN_SORTTYPE";

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
const setDesignSortType = createAction(SET_DESIGN_SORTTYPE, (list) => ({
  list,
}));
const setMyDesignSortType = createAction(SET_MYDESIGN_SORTTYPE, (list) => ({
  list,
}));

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
  design_sort_type: "createdDate",
  mydesign_sort_type: 1,
};

//middleware
const addDesignDB = (design) => {
  return function (dispatch, getState, { history }) {
    // const token_key = `${localStorage.getItem("token")}`;
    fetch(design)
      .then((res) => res.blob())
      .then((blob) => {
        const form = new FormData();
        form.append("imgFile", blob);
        api
          .postDesign(form)
          // axios
          //   .post("https://devssk.shop/designs", form, {
          //     headers: {
          //       Authorization: `${token_key}`,
          //     },
          //   })
          .then((res) => {
            dispatch(addDesign(res.data.img));
            window.location.replace("/mydesign");
          })
          .catch(function (error) {
            console.log(error);
          });
      });
  };
};

const getDesignListDB = (page_num, sortType) => {
  return function (dispatch, getState) {
    // axios
    //   .get("https://devssk.shop/api/designs", {
    //     params: {
    //       page: parseInt(page_num),
    //       sortType: sortType,
    //     },
    //   })
    api
      .getDesignList(page_num, sortType)
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
  // const token_key = `${localStorage.getItem("token")}`;
  return function (dispatch, getState) {
    // axios
    //   .get("https://devssk.shop/designs/mine", {
    //     params: { page: page_num, option: option },
    //     headers: {
    //       Authorization: `${token_key}`,
    //     },
    //   })
    api
      .getMyDesignList(page_num, option)
      .then((res) => {
        if (page_num === 0 && option === "nonpost") {
          dispatch(myDesigntList(res.data));
        } else if (page_num === 0 && option === "post") {
          dispatch(myPostList(res.data));
        } else if (option === "nonpost") {
          let design_list = [];
          for (let i = 0; i < res.data.length; i++) {
            design_list.push(res.data[i]);
          }
          if (design_list.length === 0) {
            return;
          }
          dispatch(myDesigntList(design_list));
        } else if (option === "post") {
          let post_list = [];
          for (let i = 0; i < res.data.length; i++) {
            post_list.push(res.data[i]);
          }
          if (post_list.length === 0) {
            return;
          }
          dispatch(myPostList(post_list));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getDesignImageDB = (designId) => {
  // const token_key = `${localStorage.getItem("token")}`;
  return function (dispatch, getState) {
    // axios
    //   .get(`https://devssk.shop/designs/mine/${designId}`, {
    //     headers: {
    //       Authorization: `${token_key}`,
    //     },
    //   })
    api
      .getDesignImage(designId)
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
    // const token_key = `${localStorage.getItem("token")}`;
    // axios
    //   .delete(`https://devssk.shop/designs/${designId}`, {
    //     headers: {
    //       Authorization: `${token_key}`,
    //     },
    //   })
    api
      .deleteDesign(designId)
      .then((res) => {
        window.location.replace("/mydesign");
      })
      .catch((error) => {
        console.log("게시글 삭제 에러:", error);
      });
  };
};

const getLikeDesignDB = (page_num) => {
  // const token = localStorage.getItem("token");
  return function (dispatch, getState) {
    //   axios
    //     .get("https://devssk.shop/designs/myReact", {
    //       params: {
    //         page: parseInt(page_num),
    //       },
    //       headers: {
    //         Authorization: `${token}`,
    //       },
    //     })
    api
      .getLikeDesign(page_num)
      .then((res) => {
        dispatch(likeDesign(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

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
        draft.design_list.push(...action.payload.list);
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
        draft.post_list.push(...action.payload.list);
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
        draft.likeDesign.push(...action.payload.likedesign);
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
    [SET_DESIGN_SORTTYPE]: (state, action) =>
      produce(state, (draft) => {
        draft.design_sort_type = action.payload.list;
      }),
    [SET_MYDESIGN_SORTTYPE]: (state, action) =>
      produce(state, (draft) => {
        draft.mydesign_sort_type = action.payload.list;
      }),
  },
  initialState
);

const actionCreators = {
  addDesignDB,
  newDesignList,
  designDetail,
  getDesignListDB,
  getMyDesignListDB,
  getDesignImageDB,
  deleteDesignDB,
  getLikeDesignDB,
  setDesignSortType,
  setMyDesignSortType,
};

export { actionCreators };
