import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { api } from "../../shared/api";

const ADD_REVIEW = "ADD_REVIEW";
const SET_PREVIEW = "SET_PREVIEW";
const PREVIEW_REPLACE = "PREVIEW_REPLACE";
const GET_ONE_REVIEW = "GET_ONE_REVIEW";
const REVIEW_REPLACE = "REVIEW_REPLACE";

const addReview = createAction(ADD_REVIEW, (review) => ({ review }));
const setPreview = createAction(SET_PREVIEW, (preview) => ({ preview }));
const previewReplace = createAction(PREVIEW_REPLACE, (preview) => ({
  preview,
}));
const getOneReview = createAction(GET_ONE_REVIEW, (oneReview) => ({
  oneReview,
}));
const reviewReplace = createAction(REVIEW_REPLACE, (oneReview) => ({
  oneReview,
}));

const initialState = {
  list: [],
  preview: null,
};

const addReviewDB = (storeId, content, imgFileList) => {
  return function (dispatch, getState) {
    const form = new FormData();
    form.append("content", content);
    form.append("imgFileList", imgFileList);
    api
      .postReview(storeId, form)
      .then((res) => {
        dispatch(addReview(res.data));
        window.location.replace(`/storedetail/${storeId}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const editReviewDB = (reviewId, content, imgFileList, imgUrl) => {
  return function (dispatch, getState) {
    const form = new FormData();
    if (imgFileList) {
      form.append("content", content);
      form.append("imgFileList", imgFileList);
      form.append("imgUrlList", "");
    } else if (!imgFileList && imgUrl) {
      form.append("content", content);
      form.append("imgUrlList", imgUrl);
    } else if (!imgFileList && !imgUrl) {
      form.append("content", content);
      form.append("imgUrlList", "");
    }
    api
      .putReview(reviewId, form)
      .then((res) => {
        window.history.back();
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const deleteReviewDB = (reviewId) => {
  const token = localStorage.getItem("token");
  return function (dispatch, getState) {
    if (!reviewId) {
      return;
    }
    api
      .deleteReview(reviewId, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getOneReviewDB = (reviewId) => {
  return function (dispatch, getState) {
    api
      .getOneReview(reviewId)
      .then((res) => {
        dispatch(getOneReview(res.data));
        if (res.data.reviewImage) {
          dispatch(setPreview(res.data.reviewImage));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default handleActions(
  {
    [ADD_REVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.review);
      }),
    [SET_PREVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.preview = action.payload.preview;
      }),
    [PREVIEW_REPLACE]: (state, action) =>
      produce(state, (draft) => {
        draft.preview = action.payload.preview;
      }),
    [GET_ONE_REVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.oneReview;
      }),
    [REVIEW_REPLACE]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.oneReview;
      }),
  },
  initialState
);

const actionCreators = {
  addReview,
  addReviewDB,
  setPreview,
  previewReplace,
  deleteReviewDB,
  editReviewDB,
  getOneReview,
  getOneReviewDB,
  reviewReplace,
};

export { actionCreators };
