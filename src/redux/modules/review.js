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

const addReviewDB = (storeId, content, img) => {
  const token = localStorage.getItem("token");
  return function (dispatch, getState) {
    const form = new FormData();
    form.append("content", content);
    form.append("imgFileList", img);
    axios
      .post(`https://devssk.shop/reviews/${storeId}`, form, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        dispatch(addReview(res.data));
        window.location.replace(`/storedetail/${storeId}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const editReviewDB = (reviewId, content, img, imgurl, storeId, toggleState) => {
  const token = localStorage.getItem("token");
  console.log(toggleState);
  return function (dispatch, getState) {
    const form = new FormData();
    if (img) {
      form.append("content", content);
      form.append("imgFileList", img);
      form.append("imgUrlList", "");
    } else if (!img && imgurl) {
      form.append("content", content);
      form.append("imgUrlList", imgurl);
    } else if (!img && !imgurl) {
      form.append("content", content);
      form.append("imgUrlList", "");
    }
    axios
      .put(`https://devssk.shop/reviews/${reviewId}`, form, {
        headers: {
          Authorization: `${token}`,
        },
      })
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
    axios({
      method: "delete",
      url: `https://devssk.shop/reviews/${reviewId}`,
      data: {
        reviewId: reviewId,
      },
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
  const token = localStorage.getItem("token");
  return function (dispatch, getState) {
    axios({
      method: "get",
      url: `https://devssk.shop/reviews/${reviewId}`,
      headers: {
        Authorization: `${token}`,
      },
    })
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
