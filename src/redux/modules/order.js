import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { api } from "../../shared/api";

//action type
const GET_ORDERS = "GET_ORDERS";
const GET_NO_ORDERS = "GET_NO_ORDERS";
const GET_STORES = "GET_STORES";
const GET_ORDER_FORM = "GET_ORDER_FORM";
const GET_ONE_ORDER = "GET_ONE_ORDER";
const GET_IMAGE_FILE = "GET_IMAGE_FILE";
const GET_ORDER_GUIDE = "GET_ORDER_GUIDE";
// const DELETE_ORDER = "DELETE_ORDER";
// const ADD_ORDER = "ADD_ORDER";

//actionCreator
const getOrders = createAction(GET_ORDERS, (list) => ({
  list,
}));
const getNoOrders = createAction(GET_NO_ORDERS, (list) => ({
  list,
}));
const getStores = createAction(GET_STORES, (list) => ({
  list,
}));
const getOrderForm = createAction(GET_ORDER_FORM, (list) => ({
  list,
}));
const getOneOrder = createAction(GET_ONE_ORDER, (list) => ({
  list,
}));
const getImageFile = createAction(GET_IMAGE_FILE, (list) => ({
  list,
}));
const getOrderGuide = createAction(GET_ORDER_GUIDE, (list) => ({ list }));
// const addOrder = createAction(ADD_ORDER, (list) => ({ list }));

const initialState = {
  order_list: [],
  no_order_list: [],
  store_list: [],
  order_form: [],
  order_detail: [],
  order_guide: [],
  image_file: "",
};

//middlewear
const getOrdersDB = (page_num, option) => {
  const token_key = `${localStorage.getItem("token")}`;
  return function (dispatch, getState, { history }) {
    axios
      .get("https://devssk.shop/designs/mine/orders", {
        params: {
          page: page_num,
          option: option,
        },
        headers: {
          Authorization: `${token_key}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        if (page_num === 0 && option === "notOrdered") {
          dispatch(getNoOrders(res.data));
        } else if (page_num === 0 && option === "ordered") {
          dispatch(getOrders(res.data));
        } else if (option === "notOrdered") {
          let design_list = [];
          for (let i = 0; i < res.data.length; i++) {
            design_list.push(res.data[i]);
          }
          if (design_list.length === 0) {
            return;
          }
          dispatch(getNoOrders(design_list));
        } else if (option === "ordered") {
          let order_list = [];
          for (let i = 0; i < res.data.length; i++) {
            order_list.push(res.data[i]);
          }
          if (order_list.length === 0) {
            return;
          }
          dispatch(getOrders(order_list));
        }
      })
      .catch((err) => {
        console.log("order 불러오기 error:", err);
      });
  };
};

const getStoresDB = () => {
  const token_key = `${localStorage.getItem("token")}`;
  return function (dispatch, getState, { history }) {
    axios
      .get("https://devssk.shop/api/orders/stores", {
        headers: {
          Authorization: `${token_key}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        dispatch(getStores(res.data));
      })
      .catch((err) => {
        console.log("stores 불러오기 error:", err);
      });
  };
};

const getOrderFormDB = (orderFormId) => {
  const token_key = `${localStorage.getItem("token")}`;
  return function (dispatch, getState, { history }) {
    axios
      .get(`https://devssk.shop/order-forms/${orderFormId}`, {
        headers: {
          Authorization: `${token_key}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        dispatch(getOrderForm(res.data));
      })
      .catch((err) => {
        console.log("order form 불러오기 error:", err);
      });
  };
};

const addOrderDB = (list, orderFormId, designId) => {
  const token_key = `${localStorage.getItem("token")}`;
  return function (dispatch, getState, { history }) {
    axios
      .post(
        `https://devssk.shop/orders/${orderFormId}`,
        {
          designId: designId,
          userInput: list,
        },
        {
          headers: {
            Authorization: `${token_key}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        // dispatch(addOrder(res.data));
        window.location.replace(`/order/detail/${res.data.userOrdersId}`);
      })
      .catch((err) => {
        console.log("order form 불러오기 error:", err);
      });
  };
};

const getOneOrderDB = (userOrdersId) => {
  console.log(userOrdersId);
  const token_key = `${localStorage.getItem("token")}`;
  return function (dispatch, getState, { history }) {
    axios
      .get(`https://devssk.shop/orders/${userOrdersId}`, {
        headers: {
          Authorization: `${token_key}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        dispatch(getOneOrder(res.data));
      })
      .catch((err) => {
        console.log("one order 불러오기 error:", err);
      });
  };
};
const getImageFileDB = (userOrdersId) => {
  console.log(userOrdersId);
  const token_key = `${localStorage.getItem("token")}`;
  return function (dispatch, getState, { history }) {
    axios
      .get(`https://devssk.shop/orders/${userOrdersId}/design`, {
        headers: {
          Authorization: `${token_key}`,
        },
      })
      .then((res) => {
        dispatch(getImageFile(res.data));
      })
      .catch((err) => {
        console.log("one order 불러오기 error:", err);
      });
  };
};

const deleteOrderDB = (userOrdersId) => {
  const token_key = `${localStorage.getItem("token")}`;
  return function (dispatch, getState, { history }) {
    axios
      .delete(`https://devssk.shop/orders/${userOrdersId}`, {
        headers: {
          Authorization: `${token_key}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        window.location.replace("/order");
      })
      .catch((err) => {
        console.log("order 삭제하기 error:", err);
      });
  };
};

const getOrderGuideDB = () => {
  const token_key = `${localStorage.getItem("token")}`;
  return function (dispatch, getState) {
    axios
      .get("https://devssk.shop/api/pages/order-guide", {
        headers: {
          Authorization: `${token_key}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        dispatch(getOrderGuide(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//reducer
export default handleActions(
  {
    [GET_ORDERS]: (state, action) =>
      produce(state, (draft) => {
        draft.order_list.push(...action.payload.list);
        //중복 검사
        draft.order_list = draft.order_list.reduce((acc, cur) => {
          if (acc.findIndex((a) => a.designId === cur.designId) === -1) {
            return [...acc, cur];
          } else {
            acc[acc.findIndex((a) => a.designId === cur.designId)] = cur;
            return acc;
          }
        }, []);
      }),
    [GET_NO_ORDERS]: (state, action) =>
      produce(state, (draft) => {
        draft.no_order_list.push(...action.payload.list);
        //중복 검사
        draft.no_order_list = draft.no_order_list.reduce((acc, cur) => {
          if (acc.findIndex((a) => a.designId === cur.designId) === -1) {
            return [...acc, cur];
          } else {
            acc[acc.findIndex((a) => a.designId === cur.designId)] = cur;
            return acc;
          }
        }, []);
      }),

    [GET_STORES]: (state, action) =>
      produce(state, (draft) => {
        draft.store_list = action.payload.list;
      }),
    [GET_ORDER_FORM]: (state, action) =>
      produce(state, (draft) => {
        draft.order_form = action.payload.list;
      }),
    [GET_ONE_ORDER]: (state, action) =>
      produce(state, (draft) => {
        draft.order_detail = action.payload.list;
      }),
    [GET_IMAGE_FILE]: (state, action) =>
      produce(state, (draft) => {
        draft.image_file = action.payload.list;
      }),
    [GET_ORDER_GUIDE]: (state, action) =>
      produce(state, (draft) => {
        draft.order_guide = action.payload.list;
      }),
  },
  initialState
);

const actionCreators = {
  getOrdersDB,
  getStoresDB,
  getOrderFormDB,
  addOrderDB,
  getOneOrderDB,
  deleteOrderDB,
  getImageFileDB,
  getOrderGuide,
  getOrderGuideDB,
};

export { actionCreators };
