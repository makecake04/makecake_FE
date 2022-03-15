import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { api } from "../../shared/api";

const HOT_LIST = "HOT_LIST";
const NEW_REVIEW_LIST = "NEW_REVIEW_LIST";

const initialState = {
  list: [],
  lists: [],
};

const hotList = createAction(HOT_LIST, (list) => ({ list }));
const newReviewList = createAction(NEW_REVIEW_LIST, (lists) => ({ lists }));

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
  return async function (dispatch, getState) {
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
  },
  initialState
);

const actionCreators = {
  hotList,
  getHotListDB,
  newReviewList,
  getNewReviewDB,
};

export { actionCreators };
