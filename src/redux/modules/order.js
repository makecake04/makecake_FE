import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { api } from "../../shared/api";

//action type
const GET_ORDERS = "GET_ORDERS";
const GET_NO_ORDERS = "GET_NO_ORDERS";
const GET_STORES = "GET_STORES";
const GET_ORDER_FORM = "GET_ORDER_FORM";
const GET_ONE_ORDER = "GET_ONE_ORDER";
const GET_ORDER_GUIDE = "GET_ORDER_GUIDE";
const SET_ORDER_SORTTYPE = "SET_ORDER_SORTTYPE";

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
const getOrderGuide = createAction(GET_ORDER_GUIDE, (list) => ({ list }));
const setOrderSortType = createAction(SET_ORDER_SORTTYPE, (list) => ({ list }));

const initialState = {
  order_list: [],
  no_order_list: [],
  store_list: [],
  order_form: [],
  order_detail: [],
  order_guide: [],
  image_file: "",
  order_sort_type: 1,
};

//middlewear
const getOrdersDB = (page_num, option) => {
  return function (dispatch, getState, { history }) {
    api
      .getOrders(page_num, option)
      .then((res) => {
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
        console.log("orders 불러오기 error:", err);
      });
  };
};

const getOrderStoresDB = () => {
  return function (dispatch, getState, { history }) {
    api
      .getOrderStores()
      .then((res) => {
        dispatch(getStores(res.data));
      })
      .catch((err) => {
        console.log("order stores 불러오기 error:", err);
      });
  };
};

const getOrderFormDB = (orderFormId) => {
  return function (dispatch, getState, { history }) {
    api
      .getOrderForm(orderFormId)
      .then((res) => {
        dispatch(getOrderForm(res.data));
      })
      .catch((err) => {
        console.log("order form 불러오기 error:", err);
      });
  };
};

const addOrderDB = (list, orderFormId, designId) => {
  return function (dispatch, getState, { history }) {
    api
      .postOrder(list, orderFormId, designId)
      .then((res) => {
        window.location.replace(`/order/detail/${res.data.userOrdersId}`);
      })
      .catch((err) => {
        console.log("order 작성하기 error:", err);
      });
  };
};

const getOneOrderDB = (userOrdersId) => {
  return function (dispatch, getState, { history }) {
    api
      .getOneOrder(userOrdersId)
      .then((res) => {
        dispatch(getOneOrder(res.data));
      })
      .catch((err) => {
        console.log("one order 불러오기 error:", err);
      });
  };
};

const deleteOrderDB = (userOrdersId) => {
  return function (dispatch, getState, { history }) {
    api
      .deleteOrder(userOrdersId)
      .then((res) => {
        window.location.replace("/order");
      })
      .catch((err) => {
        console.log("order 삭제하기 error:", err);
      });
  };
};

const getOrderGuideDB = () => {
  return function (dispatch, getState) {
    api
      .getOrderGuide()
      .then((res) => {
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
    [GET_ORDER_GUIDE]: (state, action) =>
      produce(state, (draft) => {
        draft.order_guide = action.payload.list;
      }),
    [SET_ORDER_SORTTYPE]: (state, action) =>
      produce(state, (draft) => {
        draft.order_sort_type = action.payload.list;
      }),
  },
  initialState
);

const actionCreators = {
  getOrdersDB,
  getOrderStoresDB,
  getOrderFormDB,
  addOrderDB,
  getOneOrderDB,
  deleteOrderDB,
  getOrderGuide,
  getOrderGuideDB,
  setOrderSortType,
};

export { actionCreators };
