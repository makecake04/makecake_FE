import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { api } from "../../shared/api";

//action type
const FIX_LIST = "FIX_LIST";
const PERSONAL_LIST = "PERSONAL_LIST";
const UNREAD_LIST = "UNREAD_LIST";

//action creators
const fixList = createAction(FIX_LIST, (list) => ({ list }));
const personalList = createAction(PERSONAL_LIST, (list) => ({ list }));
const unreadList = createAction(UNREAD_LIST, (list) => ({ list }));

const initialState = {
  fixlist: [],
  personallist: [],
  checked: true,
};

const getNewNotiDB = () => {
  return function (dispatch, getState) {
    api
      .getNewNoti()
      .then((res) => {
        dispatch(unreadList(res.data.checked));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getNotiDB = () => {
  return function (dispatch, getState) {
    api
      .getNoti()
      .then((res) => {
        dispatch(fixList(res.data.fixNotiList));
        dispatch(personalList(res.data.personalNotiList));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default handleActions(
  {
    [FIX_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.fixlist = action.payload.list;
      }),
    [PERSONAL_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.personallist = action.payload.list;
      }),

    [UNREAD_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.checked = action.payload.list;
      }),
  },
  initialState
);

const actionCreators = {
  fixList,
  personalList,
  unreadList,
  getNotiDB,
  getNewNotiDB,
};

export { actionCreators };
