import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { api } from "../../shared/api";
import { useNavigate } from "react-router-dom";

const SET_SEARCH = "SET_SEARCH";

const setSearch = createAction(SET_SEARCH, (search) => ({ search }));

const initialState = {
  list: [],
};

// 매장 불러오기
const searchPlaceF = (searchType, searchText, sortType) => {
  return function (dispatch, getState) {
    console.log(searchType, searchText, sortType);
    api
      .postSearch(searchType, searchText, sortType)
      .then((res) => {
        console.log(res);
        dispatch(setSearch(res.data));
        // window.location.replace('/searchDetail')
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

const userActions = {
  searchPlaceF,
};

export { userActions };
