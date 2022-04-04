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
const STORE_CAKE_REPLACE = "STORE_CAKE_REPLACE";
const STORE_REVIEW_LIST = "STORE_REVIEW_LIST";
const STORE_REVIEW_REPLACE = "STORE_REVIEW_REPLACE";
const ADD_LIKE_STORE = "ADD_LIKE_STORE";
const SET_STORE_SORTTPYE = "SET_STORE_SORTTYPE";

const initialState = {
  list: [],
  lists: [],
  likeStore: [],
  myReview: [],
  store: [],
  cake: [],
  review: [],
  store_sort_type: 1,
};

const hotList = createAction(HOT_LIST, (list) => ({ list }));
const newReviewList = createAction(NEW_REVIEW_LIST, (lists) => ({ lists }));
const likeStore = createAction(LIKE_STORE, (likestore) => ({ likestore }));
const myReview = createAction(MY_REVIEW, (myreview) => ({ myreview }));
const storeDetail = createAction(STORE_DETAIL, (store) => ({ store }));
const storeCakeList = createAction(STORE_CAKE_LIST, (cake) => ({ cake }));
const storeCakeReplace = createAction(STORE_CAKE_REPLACE, (cake) => ({ cake }));
const storeReviewList = createAction(STORE_REVIEW_LIST, (review) => ({
  review,
}));
const storeReviewReplace = createAction(STORE_REVIEW_REPLACE, (review) => ({
  review,
}));
const addLikeStore = createAction(
  ADD_LIKE_STORE,
  (storeId, isLike, likeCnt) => ({
    storeId,
    isLike,
    likeCnt,
  })
);
const setStoreSortType = createAction(SET_STORE_SORTTPYE, (list) => ({ list }));

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
  return function (dispatch, getState) {
    api
      .getLikeStore(page_num)
      .then((res) => {
        dispatch(likeStore(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getMyReviewDB = (page_num) => {
  return function (dispatch, getState) {
    api
      .getMyReview(page_num)
      .then((res) => {
        dispatch(myReview(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getStoreCakeListDB = (storeId) => {
  return function (dispatch, getState) {
    api
      .getStoreCake(storeId)
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
    api
      .getStoreReview(storeId, page_num)
      .then((res) => {
        dispatch(storeReviewList(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const addLikeStoreDB = (storeId, myLike) => {
  return function (dispatch, getState) {
    api
      .addStoreLike(storeId, myLike)
      .then((res) => {
        dispatch(addLikeStore(storeId, res.data.myLike, res.data.likeCnt));
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
        // if (
        //   action.payload.cake
        //     .map((a) => a.cakedId)
        //     .includes(draft.cake[0]?.cakeId)
        // ) {
        //   draft.cake = [];
        //   draft.cake.push(...action.payload.cake);
        //   //중복 검사
        //   draft.cake = draft.cake.reduce((acc, cur) => {
        //     if (acc.findIndex((a) => a.cakeId === cur.cakeId) === -1) {
        //       return [...acc, cur];
        //     } else {
        //       acc[acc.findIndex((a) => a.cakeId === cur.cakeId)] = cur;
        //       return acc;
        //     }
        //   }, []);
        // } else {
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
        // }
      }),

    [STORE_CAKE_REPLACE]: (state, action) =>
      produce(state, (draft) => {
        draft.cake = action.payload.cake;
      }),

    [STORE_REVIEW_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.review.push(...action.payload.review);
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
    [STORE_REVIEW_REPLACE]: (state, action) =>
      produce(state, (draft) => {
        draft.review = action.payload.review;
      }),
    [ADD_LIKE_STORE]: (state, action) =>
      produce(state, (draft) => {
        draft.store.myLike = action.payload.isLike;
        draft.store.likeCnt = action.payload.likeCnt;
      }),
    [SET_STORE_SORTTPYE]: (state, action) =>
      produce(state, (draft) => {
        draft.store_sort_type = action.payload.list;
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
  storeCakeReplace,
  storeReviewList,
  storeReviewReplace,
  getStoreReviewListDB,
  addLikeStore,
  addLikeStoreDB,
  setStoreSortType,
};

export { actionCreators };
