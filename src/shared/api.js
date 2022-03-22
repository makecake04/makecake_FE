import axios from "axios";

// 사용자 정의 인스턴스 기본 설정 참고 (https://yamoo9.github.io/axios/guide/config-defaults.html#%EA%B8%80%EB%A1%9C%EB%B2%8C-axios-%EA%B8%B0%EB%B3%B8-defaults-%EC%84%A4%EC%A0%95)

const instance = axios.create({
  baseURL: "http://3.38.153.67/",
  // baseURL: "http://3.38.115.32:8080//",

  headers: {
    "content-type": "application/json;charset=UTF-8", // 자바스크립트는 json형태로 받아와야 한다.
    accept: "application/json",
  },
});
// Tip. html form 태그를 사용하여 post 방식으로 요청하거나, jQuery의 ajax 등의 요철을 할때
// default Content-Type은 'application/json,'이 아니라 'application/x-www-form-urlencoded'다.

// interceptors의 역할 => then이나 catch로 처리되기 전
// 요청(request)이나 응답(response)을 가로채 어떠한 작업을 수행할 수 있게 한다. 참고 (https://yamoo9.github.io/axios/guide/interceptors.html)

instance.interceptors.request.use(function (config) {
  const accessToken = localStorage.token;
  config.headers.common["Authorization"] = `${accessToken}`; // header에 토큰값을 넣는다 => header에 토큰값이 있어 앞으로 request를 자유자재로 할 수 있다.
  return config;
});

export const api = {
  getlist: () => instance.get(`api/home/`),

  getcake: () => instance.get(`api/cakes`),

  getImage: (cakeId) => instance.post(`api/cakes/detail`, { cakeId: cakeId }),

  getreview: () => instance.get(`api/home/review`),

  getdesign: () => instance.get(`api/designs`),

  getStore: (storeId) =>
    instance.get(`api/stores/${storeId}`, { storeId: storeId }),

  postUsernameCheck: (username) =>
    instance.post(`/user/usernameCheck`, { username: username }),

  postNicknameCheck: (nickname) =>
    instance.post(`/user/nicknameCheck`, { nickname: nickname }),

  postSignUp: (username, password, passwordCheck, nickname) =>
    instance.post(`/user/signup`, {
      username: username,
      password: password,
      passwordCheck: passwordCheck,
      nickname: nickname,
    }),

  postLogin: (username, password) =>
    instance.post(`/login`, { username: username, password: password }),

  getLoginCheck: () => instance.post(`/user/loginCheck`),
  getUserInfo: () => instance.get(`/mypage`),
  postSearch: (searchType, searchText, sortType) =>
    instance.post(`/api/search`, {
      searchType: searchType,
      searchText: searchText,
      sortType: sortType,
    }),

  KakaoLogin: (code) => instance.get(`/user/kakao/callback?code=${code}`),
  NaverLogin: (code, state) =>
    instance.get(`/user/naver/callback?code=${code}&state=${state}`),
  GoogleLogin: (code) => instance.get(`/user/google/callback?code=${code}`),
};