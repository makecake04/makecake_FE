import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { api } from "../../shared/api";
import axios from "axios";

const CAKE_LIST = "CAKE_LIST";
const CAKE_IMAGE = "CAKE_IMAGE";
const LIKE_CAKE = "LIKE_CAKE";
const ADD_LIKE_CAKE = "ADD_LIKE_CAKE";

const initialState = {
  list: [],
  lists: {},
  likeCake: [],
};

const cakeList = createAction(CAKE_LIST, (list) => ({ list }));
const cakeImage = createAction(CAKE_IMAGE, (img) => ({ img }));
const likeCake = createAction(LIKE_CAKE, (likeCake) => ({ likeCake }));
const addLikeCake = createAction(ADD_LIKE_CAKE, (cakeId, isLike, likeCnt) => ({
  cakeId,
  isLike,
  likeCnt,
}));

const getCakeListDB = (page_num) => {
  return function (dispatch, getState) {
    axios
      .get("http://3.38.153.67/api/cakes", {
        params: {
          page: parseInt(page_num),
        },
      })
      .then((res) => {
        dispatch(cakeList(res.data));
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
  const token = localStorage.getItem("token");
  return function (dispatch, getState) {
    axios
      .get("http://3.38.153.67/cakes/myReact", {
        params: {
          page: parseInt(page_num),
        },
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        dispatch(likeCake(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const addLikeCakeDB = (cakeId, myLike) => {
  console.log(myLike);
  const token = localStorage.getItem("token");
  return function (dispatch, getState) {
    axios
      .post(
        `http://3.38.153.67/cakes/like/${cakeId}`,
        {
          myLike: myLike,
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        dispatch(addLikeCake(cakeId, res.data.myLike, res.data.likeCnt));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default handleActions(
  {
    [CAKE_LIST]: (state, action) =>
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
        // const idx = draft.is_like.findIndex(
        //   (c) => c.cakeId === action.payload.cakeId
        // );
        draft.lists.myLike = action.payload.isLike;
        draft.lists.likeCnt = action.payload.likeCnt;
      }),
  },
  initialState
);

const actionCreators = {
  cakeList,
  getCakeListDB,
  cakeImage,
  getCakeImageDB,
  likeCake,
  getLikeCakeDB,
  addLikeCake,
  addLikeCakeDB,
};

export { actionCreators };
