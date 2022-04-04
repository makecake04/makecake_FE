import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { api } from "../../shared/api";

const SET_SEARCH = "SET_SEARCH";

const setSearch = createAction(SET_SEARCH, (search) => ({ search }));

const initialState = {
  list: [],
};

// 매장 불러오기
const searchPlaceDB = (searchType, searchText) => {
  return function (dispatch, getState) {
    api
      .getSearch(searchType, searchText)
      .then((res) => {
        console.log(res);
        dispatch(setSearch(res.data));
      })
      .catch((err) => {
        console.log("리스트 불러오기 실패", err);
      });
  };
};

// 지도에서 매장 정보 보내주기
const mapInfoDB = (storeId) => {
  return function (dispatch, getState) {
    api
      .mapSearch(storeId)
      .then((res) => {
        dispatch(setSearch([res.data]));
        console.log(res.data);
      })
      .catch((err) => {
        console.log("리스트 불러오기 실패", err);
      });
  };
};

export default handleActions(
  {
    [SET_SEARCH]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.search;
      }),
  },
  initialState
);

const actionCreators = {
  searchPlaceDB,
  mapInfoDB,
};

export { actionCreators };
