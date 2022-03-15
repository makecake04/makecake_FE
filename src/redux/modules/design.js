import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { api } from "../../shared/api";
import axios from "axios";

const DESIGN_LIST = "DESIGN_LIST";

const initialState = {
  list: [],
};

const designList = createAction(DESIGN_LIST, (list) => ({
  list,
}));

const getDesignListDB = (page_num) => {
  return function (dispatch, getState) {
    axios
      .get("http://3.38.153.67/api/designs", {
        params: {
          page: parseInt(page_num),
        },
      })
      .then((res) => {
        if (page_num === 0) {
          dispatch(designList(res.data));
        } else {
          let design_list = [];
          for (let i = 0; i < res.data.length; i++) {
            design_list.push(res.data[i]);
          }
          dispatch(designList(design_list));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default handleActions(
  {
    [DESIGN_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(...action.payload.list);
      }),
  },
  initialState
);

const actionCreators = {
  designList,
  getDesignListDB,
};

export { actionCreators };
