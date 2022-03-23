import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { api } from "../../shared/api";
import axios from "axios";

const HOT_LIST = "HOT_LIST";
const NEW_REVIEW_LIST = "NEW_REVIEW_LIST";
const LIKE_STORE = "LIKE_STORE";
const MY_REVIEW = "MY_REVIEW";
const STORE_DETAIL = "STORE_DETAIL";
const STORE_CAKE_LIST = "STORE_CAKE_LIST";
const STORE_REVIEW_LIST = "STORE_REVIEW_LIST";

const initialState = {
  list: [],
  lists: [],
  likeStore: [],
  myReview: [],
  store: [],
  cake: [],
  review: [],
};

const hotList = createAction(HOT_LIST, (list) => ({ list }));
const newReviewList = createAction(NEW_REVIEW_LIST, (lists) => ({ lists }));
const likeStore = createAction(LIKE_STORE, (likestore) => ({ likestore }));
const myReview = createAction(MY_REVIEW, (myreview) => ({ myreview }));
const storeDetail = createAction(STORE_DETAIL, (store) => ({ store }));
const storeCakeList = createAction(STORE_CAKE_LIST, (cake) => ({ cake }));
const storeReviewList = createAction(STORE_REVIEW_LIST, (review) => ({
  review,
}));

const getHotListDB = () => {
  return function (dispatch, getState) {
    api
      .getlist()
      .then((res) => {
        dispatch(hotList(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getNewReviewDB = () => {
  return function (dispatch, getState) {
    api
      .getreview()
      .then((res) => {
        dispatch(newReviewList(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getStoreDetailDB = (storeId) => {
  return function (dispatch, getState) {
    api
      .getStore(storeId)
      .then((res) => {
        dispatch(storeDetail(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getLikeStoreDB = (page_num) => {
  const token = localStorage.getItem("token");
  return function (dispatch, getState) {
    axios
      .get("http://3.38.153.67/stores/myReact", {
        params: {
          page: parseInt(page_num),
        },
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        dispatch(likeStore(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getMyReviewDB = (page_num) => {
  const token = localStorage.getItem("token");
  return function (dispatch, getState) {
    axios
      .get("http://3.38.153.67/stores/myReview", {
        params: {
          page: parseInt(page_num),
        },
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        dispatch(myReview(res.data.reverse()));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getStoreCakeListDB = (storeId, page_num) => {
  return function (dispatch, getState) {
    axios
      .get(`http://3.38.153.67/api/stores/cakes`, {
        storeId,
        params: {
          page: parseInt(page_num),
          storeId: storeId,
        },
      })
      .then((res) => {
        dispatch(storeCakeList(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getStoreReviewListDB = (storeId, page_num) => {
  return function (dispatch, getState) {
    axios
      .get(`http://3.38.153.67/api/stores/reviews`, {
        storeId,
        params: {
          page: parseInt(page_num),
          storeId: storeId,
        },
      })
      .then((res) => {
        dispatch(storeReviewList(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default handleActions(
  {
    [HOT_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.list;
      }),

    [NEW_REVIEW_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.lists = action.payload.lists;
      }),

    [LIKE_STORE]: (state, action) =>
      produce(state, (draft) => {
        draft.likeStore.push(...action.payload.likestore);
        //중복 검사
        draft.likeStore = draft.likeStore.reduce((acc, cur) => {
          if (acc.findIndex((a) => a.storeId === cur.storeId) === -1) {
            return [...acc, cur];
          } else {
            acc[acc.findIndex((a) => a.storeId === cur.storeId)] = cur;
            return acc;
          }
        }, []);
      }),

    [MY_REVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.myReview.push(...action.payload.myreview);
        //중복 검사
        draft.myReview = draft.myReview.reduce((acc, cur) => {
          if (acc.findIndex((a) => a.reviewId === cur.reviewId) === -1) {
            return [...acc, cur];
          } else {
            acc[acc.findIndex((a) => a.reviewId === cur.reviewId)] = cur;
            return acc;
          }
        }, []);
      }),

    [STORE_DETAIL]: (state, action) =>
      produce(state, (draft) => {
        draft.store = action.payload.store;
      }),
    [STORE_CAKE_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.cake.push(...action.payload.cake);
        //중복 검사
        draft.cake = draft.cake.reduce((acc, cur) => {
          if (acc.findIndex((a) => a.cakeId === cur.cakeId) === -1) {
            return [...acc, cur];
          } else {
            acc[acc.findIndex((a) => a.cakeId === cur.cakeId)] = cur;
            return acc;
          }
        }, []);
      }),
    [STORE_REVIEW_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.review = action.payload.review;
        //중복 검사
        draft.review = draft.review.reduce((acc, cur) => {
          if (acc.findIndex((a) => a.reviewId === cur.reviewId) === -1) {
            return [...acc, cur];
          } else {
            acc[acc.findIndex((a) => a.reviewId === cur.reviewId)] = cur;
            return acc;
          }
        }, []);
      }),
  },
  initialState
);

const actionCreators = {
  hotList,
  getHotListDB,
  newReviewList,
  getNewReviewDB,
  likeStore,
  getLikeStoreDB,
  myReview,
  getMyReviewDB,
  storeDetail,
  getStoreDetailDB,
  storeCakeList,
  getStoreCakeListDB,
  storeReviewList,
  getStoreReviewListDB,
};

export { actionCreators };
