import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,

  headers: {
    "content-type": "application/json;charset=UTF-8", // 자바스크립트는 json형태로 받아와야 한다.
    accept: "application/json",
  },
});

instance.interceptors.request.use(function (config) {
  const accessToken = localStorage.token;
  config.headers.common["Authorization"] = `${accessToken}`; // header에 토큰값을 넣는다 => header에 토큰값이 있어 앞으로 request를 자유자재로 할 수 있다.
  return config;
});

export const api = {
  //cake.js
  getChangeSort: (sortType) =>
    instance.get("/cakes", {
      params: {
        page: 0,
        sortType: sortType,
      },
    }),
  getCakeList: (page_num, sortType) =>
    instance.get("/cakes", {
      params: {
        page: parseInt(page_num),
        sortType: sortType,
      },
    }),
  getImage: (cakeId) => instance.get(`/cakes/${cakeId}/detail`),
  getLikeCake: (page_num) =>
    instance.get(`mypage/cakes`, {
      params: {
        page: parseInt(page_num),
      },
    }),
  addCakeLike: (cakeId, myLike) =>
    instance.post(`/cakes/${cakeId}/like`, { myLike: myLike }),

  //comment.js
  getComment: (postId, page_num) =>
    instance.get(`/posts/${postId}/comments`, {
      params: {
        page: parseInt(page_num),
      },
    }),
  postComment: (postId, content) =>
    instance.post(`/posts/${postId}/comments`, { content: content }),
  deleteComment: (commentId) => instance.delete(`/comments/${commentId}`),
  getMyComment: (page_num) =>
    instance.get(`/mypage/comments`, {
      params: {
        page: parseInt(page_num),
      },
    }),

  //store.js
  getlist: () => instance.get(`/home`),
  getreview: () => instance.get(`/home/reviews`),
  getStore: (storeId) =>
    instance.get(`/stores/${storeId}`, { storeId: storeId }),
  getLikeStore: (page_num) =>
    instance.get(`/mypage/stores`, {
      params: {
        page: parseInt(page_num),
      },
    }),
  getMyReview: (page_num) =>
    instance.get(`/mypage/reviews`, {
      params: {
        page: parseInt(page_num),
      },
    }),
  getStoreCake: (storeId) => instance.get(`/stores/${storeId}/cakes`),
  getStoreReview: (storeId, page_num) =>
    instance.get(`/stores/${storeId}/reviews`, {
      params: {
        page: parseInt(page_num),
      },
    }),
  addStoreLike: (storeId, myLike) =>
    instance.post(`/stores/${storeId}/likes`, { myLike: myLike }),

  //review.js
  postReview: (storeId, form) =>
    instance.post(`/stores/${storeId}/reviews`, form),
  putReview: (reviewId, form) => instance.put(`/reviews/${reviewId}`, form),
  deleteReview: (reviewId) =>
    instance.delete(`/reviews/${reviewId}`, { reviewId: reviewId }),
  getOneReview: (reviewId) => instance.get(`/reviews/${reviewId}`),

  //user.js
  postUsernameCheck: (username) =>
    instance.post(`/users/username-check`, { username: username }),
  postNicknameCheck: (nickname) =>
    instance.post(`/users/nickname-check`, { nickname: nickname }),
  postSignUp: (username, password, passwordCheck, nickname) =>
    instance.post(`/users/signup`, {
      username: username,
      password: password,
      passwordCheck: passwordCheck,
      nickname: nickname,
    }),
  postLogin: (username, password) =>
    instance.post(`/login`, { username: username, password: password }),
  getUserInfo: () => instance.get(`/mypage`),
  editProfile: (form) => instance.put(`/users/profile`, form),
  putResign: () => instance.put(`/users/resign`),
  loginCheck: () => instance.get(`/users/login-check`),

  //search.js
  getSearch: (searchType, searchText) =>
    instance.get(`/search`, {
      params: { searchType: searchType, searchText: searchText },
    }),
  mapSearch: (storeId) => instance.get(`/search/${storeId}`),

  //noti.js
  getNoti: () => instance.get(`/noti`),
  getNewNoti: () => instance.get(`/home/new-noti`),

  //design.js
  postDesign: (form) => instance.post("/designs", form),
  getDesignList: (page_num, sortType) =>
    instance.get("/posts", {
      params: { page: parseInt(page_num), sortType: sortType },
    }),
  getMyDesignList: (page_num, option) =>
    instance.get("/mypage/designs", {
      params: { page: parseInt(page_num), option: option },
    }),
  getDesignImage: (designId) => instance.get(`/mypage/designs/${designId}`),
  deleteDesign: (designId) => instance.delete(`/designs/${designId}`),
  getLikeDesign: (page_num) =>
    instance.get("/mypage/posts", {
      params: { page: parseInt(page_num) },
    }),

  //order.js
  getOrders: (page_num, option) =>
    instance.get("/mypage/orders", {
      params: { page: parseInt(page_num), option: option },
    }),
  getOrderStores: () => instance.get("/orders/stores"),
  getOrderForm: (orderFormId) =>
    instance.get(`/orders/order-forms/${orderFormId}`),
  postOrder: (list, orderFormId, designId) =>
    instance.post(`/orders/${orderFormId}`, {
      designId: designId,
      userInput: list,
    }),
  getOneOrder: (userOrdersId) => instance.get(`/orders/${userOrdersId}`),
  deleteOrder: (userOrdersId) => instance.delete(`/orders/${userOrdersId}`),
  getOrderGuide: () => instance.get("/order-guide"),

  //post.js
  postPost: (post, designId) =>
    instance.post(`/posts/${designId}`, {
      ...post,
    }),
  getOnePost: (postId) => instance.get(`/posts/${postId}`),
  putPost: (post, postId) => instance.put(`/posts/${postId}`, { ...post }),
  deletePost: (postId) => instance.delete(`/posts/${postId}`),
  postLikePost: (postId, myLike) =>
    instance.post(`/posts/${postId}/like`, { myLike: myLike }),

  //social login
  kakaoLogin: (code) => instance.get(`/user/kakao/callback?code=${code}`),
  naverLogin: (code, state) =>
    instance.get(`/user/naver/callback?code=${code}&state=${state}`),
  googleLogin: (code) => instance.get(`/user/google/callback?code=${code}`),
};
