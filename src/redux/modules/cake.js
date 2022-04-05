import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { api } from "../../shared/api";

const GET_CAKE_LIST = "GET_CAKE_LIST";
const CAKE_IMAGE = "CAKE_IMAGE";
const LIKE_CAKE = "LIKE_CAKE";
const ADD_LIKE_CAKE = "ADD_LIKE_CAKE";
const CHANGE_SORT = "CHANGE_SORT";
const SET_CAKE_SORTTYPE = "SET_CAKE_SORTTYPE";

const initialState = {
  list: [],
  lists: {},
  likeCake: [],
  like_cake_list: [],
  random_cake_list: [],
  cake_list: [],
  cake_sort_type: "likeCnt",
};

const getCakeList = createAction(GET_CAKE_LIST, (list) => ({ list }));
const cakeImage = createAction(CAKE_IMAGE, (img) => ({ img }));
const likeCake = createAction(LIKE_CAKE, (likeCake) => ({ likeCake }));
const addLikeCake = createAction(ADD_LIKE_CAKE, (cakeId, isLike, likeCnt) => ({
  cakeId,
  isLike,
  likeCnt,
}));
const changeSort = createAction(CHANGE_SORT, (list) => ({ list }));
const setCakeSortType = createAction(SET_CAKE_SORTTYPE, (list) => ({ list }));

const changeSortDB = (sortType) => {
  return function (dispatch, getState) {
    api
      .getChangeSort(sortType)
      .then((res) => {
        dispatch(changeSort(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getCakeListDB = (page_num, sortType) => {
  return function (dispatch, getState) {
    api
      .getCakeList(page_num, sortType)
      .then((res) => {
        dispatch(getCakeList(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getCakeImageDB = (cakeId) => {
  return function (dispatch, getState) {
    api
      .getImage(cakeId)
      .then((res) => {
        dispatch(cakeImage(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getLikeCakeDB = (page_num) => {
  return function (dispatch, getState) {
    api
      .getLikeCake(page_num)
      .then((res) => {
        dispatch(likeCake(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const addLikeCakeDB = (cakeId, myLike) => {
  return function (dispatch, getState) {
    api
      .addCakeLike(cakeId, myLike)
      .then((res) => {
        dispatch(addLikeCake(cakeId, res.data.myLike, res.data.likeCnt));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default handleActions(
  {
    [GET_CAKE_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(...action.payload.list);
        //중복 검사
        draft.list = draft.list.reduce((acc, cur) => {
          if (acc.findIndex((a) => a.cakeId === cur.cakeId) === -1) {
            return [...acc, cur];
          } else {
            acc[acc.findIndex((a) => a.cakeId === cur.cakeId)] = cur;
            return acc;
          }
        }, []);
      }),
    [CHANGE_SORT]: (state, action) =>
      produce(state, (draft) => {
        draft.list = [];
        draft.list.push(...action.payload.list);
      }),
    [CAKE_IMAGE]: (state, action) =>
      produce(state, (draft) => {
        draft.lists = action.payload.img;
      }),
    [LIKE_CAKE]: (state, action) =>
      produce(state, (draft) => {
        draft.likeCake.push(...action.payload.likeCake);
        //중복 검사
        draft.likeCake = draft.likeCake.reduce((acc, cur) => {
          if (acc.findIndex((a) => a.cakeId === cur.cakeId) === -1) {
            return [...acc, cur];
          } else {
            acc[acc.findIndex((a) => a.cakeId === cur.cakeId)] = cur;
            return acc;
          }
        }, []);
      }),

    [ADD_LIKE_CAKE]: (state, action) =>
      produce(state, (draft) => {
        draft.lists.myLike = action.payload.isLike;
        draft.lists.likeCnt = action.payload.likeCnt;
      }),
    [SET_CAKE_SORTTYPE]: (state, action) =>
      produce(state, (draft) => {
        draft.cake_sort_type = action.payload.list;
      }),
  },
  initialState
);

const actionCreators = {
  changeSortDB,
  getCakeListDB,
  cakeImage,
  getCakeImageDB,
  likeCake,
  getLikeCakeDB,
  addLikeCake,
  addLikeCakeDB,
  setCakeSortType,
};

export { actionCreators };
