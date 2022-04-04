import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { api } from "../../shared/api";
import axios from "axios";
import Swal from "sweetalert2";

const ADD_REVIEW = "ADD_REVIEW";
const SET_PREVIEW = "SET_PREVIEW";
const PREVIEW_REPLACE = "PREVIEW_REPLACE";
const EDIT_REVEIW = "EDIT_REVIEW";
const DELETE_REVIEW = "DELETE_REVIEW";
const GET_ONE_REVIEW = "GET_ONE_REVIEW";
const REVIEW_REPLACE = "REVIEW_REPLACE";

const addReview = createAction(ADD_REVIEW, (review) => ({ review }));
const setPreview = createAction(SET_PREVIEW, (preview) => ({ preview }));
const previewReplace = createAction(PREVIEW_REPLACE, (preview) => ({
  preview,
}));
const editReview = createAction(EDIT_REVEIW, (review) => ({ review }));
const deleteReview = createAction(DELETE_REVIEW, (reviewId) => ({ reviewId }));
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
        dispatch(editReview(res.data));
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
        dispatch(deleteReview(reviewId));
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
    // [EDIT_REVEIW]: (state, action) =>
    //   produce(state, (draft) => {
    //     const new_review = draft.list[action.payload.reviewId].find(
    //       (r) => r.reviewId === action.payload.reviewId
    //     );
    //     new_review.content = action.payload.content;
    //   }),
    // [DELETE_REVIEW]: (state, action) =>
    //   produce(state, (draft) => {
    //     const new_review_list = draft.list.filter((c, i) => {
    //       return parseInt(action.payload.review_idx) !== i;
    //     });

    //     draft.list = new_review_list;
    //   }),
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
  deleteReview,
  deleteReviewDB,
  editReview,
  editReviewDB,
  getOneReview,
  getOneReviewDB,
  reviewReplace,
};

export { actionCreators };
