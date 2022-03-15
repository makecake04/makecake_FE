import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

import api from "../../shared/api";

//action type
const ADD_DESIGN = "ADD_DESIGN";

//action creators
const addDesign = createAction(ADD_DESIGN, (design) => ({
  design,
}));

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

export default handleActions(
  {
    [ADD_DESIGN]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const actionCreators = {
  addDesignDB,
};

export { actionCreators };
