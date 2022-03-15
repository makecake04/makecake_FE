import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { api } from "../../shared/api";
import axios from "axios";

const CAKE_LIST = "CAKE_LIST";
const CAKE_IMAGE = "CAKE_IMAGE";

const initialState = {
  list: [],
  lists: "",
};

const cakeList = createAction(CAKE_LIST, (list) => ({ list }));
const cakeImage = createAction(CAKE_IMAGE, (img) => ({ img }));

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
        // if (page_num === 0) {
        //   dispatch(cakeList(res.data));
        // } else {
        //   let cake_list = [];
        //   for (let i = 0; i < res.data.length; i++) {
        //     cake_list.push(res.data[i]);
        //   }
        //   dispatch(cakeList(cake_list));
        // }
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
        dispatch(cakeImage(res.data.img));
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
      }),
    [CAKE_IMAGE]: (state, action) =>
      produce(state, (draft) => {
        draft.lists = action.payload;
      }),
  },
  initialState
);

const actionCreators = {
  cakeList,
  getCakeListDB,
  cakeImage,
  getCakeImageDB,
};

export { actionCreators };
