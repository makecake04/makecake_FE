import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { api } from "../../shared/api";

//action type
const ADD_DESIGN = "ADD_DESIGN";
const DESIGN_LIST = "DESIGN_LIST";

//action creators
const addDesign = createAction(ADD_DESIGN, (design) => ({
  design,
}));
const designList = createAction(DESIGN_LIST, (list) => ({ list, }));

const initialState = {
  list: [],
};

//middleware
const addDesignDB = (design) => {
  return function (dispatch, getState, { history }) {
    console.log("design: ", design);

    // const token_key = `${localStorage.getItem("token")}`;

    const form = new FormData();
    form.append("file", design);
    api
      .post("/designs", form, {})
      .then((res) => {
        console.log("도안 이미지 전송: ", res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

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
    [ADD_DESIGN]: (state, action) => produce(state, (draft) => {}),
    [DESIGN_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(...action.payload.list);
      }),
  },
  initialState
);

const actionCreators = {
  addDesignDB,
  designList,
  getDesignListDB,
};

export { actionCreators };
