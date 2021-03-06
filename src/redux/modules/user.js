import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import Swal from "sweetalert2";

import { api } from "../../shared/api";

const SET_USER = "SET_USER";
const SET_USERNAME = "SET_USERNAME";
const ADD_PASSWORD = "ADD_PASSWORD";
const ADD_PASSWORDCHECK = "ADD_PASSWORDCHECK";
const ADD_NICKNAME = "ADD_NICKNAME";
const LOADING = "LOADING";
const LOG_OUT = "LOG_OUT";
const GET_USER_INFO = "GET_USER_INFO";
const EDIT_PROFILE = "EDIT_PROFILE";

const setUser = createAction(SET_USER, (user) => ({ user }));
const setUsername = createAction(SET_USERNAME, (username, isTrue) => ({
  username,
  isTrue,
}));
const addPassword = createAction(ADD_PASSWORD, (password) => ({ password }));
const addPasswordCheck = createAction(ADD_PASSWORDCHECK, (passwordCheck) => ({
  passwordCheck,
}));
const addNickname = createAction(ADD_NICKNAME, (nickname) => ({ nickname }));
const loading = createAction(LOADING, (is_loading) => ({ is_loading }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUserInfo = createAction(GET_USER_INFO, (userInfo) => ({ userInfo }));
const editProfile = createAction(EDIT_PROFILE, (profile) => ({ profile }));

const initialState = {
  user: null,
  username: null,
  password: null,
  passwordCheck: null,
  nickname: null,
  isTrue: true,
  is_login: false,
  userInfo: [],
  profile: [],
};

// 이메일 중복검사
const usernameCheckDB = (username) => {
  return async function (dispatch, getState, { history }) {
    try {
      const email = await api.postUsernameCheck(username);
      if (!email.data.isTrue) {
        dispatch(setUsername(username, email.data.isTrue));
        return true;
      } else {
        Swal.fire({
          title: "이미 사용 중인 아이디입니다!",
          showCancelButton: false,
          confirmButtonText: "확인",
          confirmButtonColor: "#ff679e",
        });
        return false;
      }
    } catch (err) {
      console.log("아이디 중복", err);
      window.alert("아이디 중복확인에 문제가 생겼습니다!");
    }
  };
};

// 닉네임 중복검사
const nicknameCheckDB = (username, password, passwordCheck, nickname) => {
  return function (dispatch, getState) {
    api
      .postNicknameCheck(nickname)
      .then((res) => {
        if (!res.data.isTrue) {
          api
            .postSignUp(username, password, passwordCheck, nickname)
            .then((res) => {
              if (res.data.signup) {
                window.location.replace("/");
              } else if (!res.data.signup) {
                Swal.fire({
                  title: "회원가입에 실패하셨습니다!",
                  showCancelButton: false,
                  confirmButtonText: "확인",
                  confirmButtonColor: "#ff679e",
                });
                window.location.replace("/signup/nickname");
              }
            })
            .catch((err) => {
              alert("회원가입에 실패했습니다!");
              console.log(err);
            });
        } else {
          Swal.fire({
            title: "이미 사용 중인 닉네임입니다!",
            showCancelButton: false,
            confirmButtonText: "확인",
            confirmButtonColor: "#ff679e",
          });
          return;
        }
      })
      .catch((err) => {
        console.log("닉네임 통과 후  에러: ", err);
        window.alert("회원가입에 문제가 생겼습니다!");
      });
  };
};

// 카카오 로그인
const kakaoLoginDB = (code) => {
  return function (dispatch, getState, { history }) {
    api
      .kakaoLogin(code)
      .then((res) => {
        dispatch(setUser(res.headers));
        localStorage.setItem("token", res.headers.authorization);
        window.location.replace("/");
      })
      .catch((err) => {
        console.log("카카오로그인 에러", err);
        window.location.replace("/");
        dispatch(loading(false));
      });
  };
};

// 구글 로그인
const googleLoginDB = (code) => {
  return function (dispatch, getState, { history }) {
    api
      .googleLogin(code)
      .then((res) => {
        dispatch(setUser(res.headers));
        localStorage.setItem("token", res.headers.authorization);
        window.location.replace("/");
      })
      .catch((err) => {
        console.log("구글로그인 에러", err);
        window.location.replace("/");
        dispatch(loading(false));
      });
  };
};

// 네이버 로그인
const naverLoginDB = (code, state) => {
  return function (dispatch, getState, { history }) {
    api
      .naverLogin(code, state)
      .then((res) => {
        dispatch(setUser(res.headers));
        localStorage.setItem("token", res.headers.authorization);
        window.location.replace("/");
      })
      .catch((err) => {
        console.log("네이버로그인 에러", err);
        window.location.replace("/");
        dispatch(loading(false));
      });
  };
};

// 로그인
const logInDB = (username, password) => {
  return function (dispatch, getState, { history }) {
    api
      .postLogin(username, password)
      .then((res) => {
        dispatch(setUser(res.headers));
        localStorage.setItem("token", res.headers.authorization);
        window.location.replace("/");
      })
      .catch((err) => {
        Swal.fire({
          title: "아이디 혹은 비밀번호를 다시 확인해주세요.",
          showCancelButton: false,
          confirmButtonText: "확인",
          confirmButtonColor: "#ff679e",
        });
        console.log(err);
      });
  };
};

// 로그인 유지
const loginCheckDB = () => {
  return function (dispatch, getState, { history }) {
    api
      .loginCheck()
      .then((res) => {
        dispatch(
          setUser({
            uid: res.data.userId,
            nickname: res.data.nickname,
          })
        );
      })
      .catch((err) => {
        console.log("로그인 확인 실패", err.response.data);
        if (err.response.data.message === "유효기간이 지난 토큰입니다.") {
          localStorage.removeItem("token");
          window.location.replace("/");
        }
      });
  };
};

const logOutDB = () => {
  return function (dispatch, getState, { history }) {
    localStorage.removeItem("token");
    dispatch(logOut());
    window.location.replace("/");
  };
};

const getUserInfoDB = () => {
  return function (dispatch, getState) {
    api
      .getUserInfo()
      .then((res) => {
        dispatch(getUserInfo(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const editProfileDB = (nickname, img) => {
  return function (dispatch, getState) {
    const form = new FormData();
    if (img) {
      form.append("imgFile", img);
      form.append("nickname", nickname);
    } else if (!img) {
      form.append("nickname", nickname);
    }
    api
      .editProfile(form)
      .then((res) => {
        dispatch(editProfile(res.data));
        window.location.replace("/mypage");
      })
      .catch((err) => {
        console.log(err.response.data);
        Swal.fire({
          title: "이미 사용 중인 닉네임입니다!",
          showCancelButton: false,
          confirmButtonText: "확인",
          confirmButtonColor: "#ff679e",
        });
      });
  };
};

const resignDB = () => {
  return function (dispatch, getState) {
    api
      .putResign()
      .then((res) => {
        localStorage.removeItem("token");
        window.location.replace("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default handleActions(
  {
    [SET_USERNAME]: (state, action) =>
      produce(state, (draft) => {
        draft.username = action.payload.username;
        draft.isTrue = action.payload.isTrue;
      }),

    [ADD_PASSWORD]: (state, action) =>
      produce(state, (draft) => {
        draft.password = action.payload.password;
      }),

    [ADD_PASSWORDCHECK]: (state, action) =>
      produce(state, (draft) => {
        draft.passwordCheck = action.payload.passwordCheck;
      }),

    [ADD_NICKNAME]: (state, action) =>
      produce(state, (draft) => {
        draft.nickname = action.payload.nickname;
      }),

    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.is_loading = action.payload.is_loading;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.is_login = false;
      }),
    [GET_USER_INFO]: (state, action) =>
      produce(state, (draft) => {
        draft.userInfo = action.payload.userInfo;
      }),
    [EDIT_PROFILE]: (state, action) =>
      produce(state, (draft) => {
        draft.profile = action.payload.profile;
      }),
  },
  initialState
);

const actionCreators = {
  setUsername,
  addPassword,
  addPasswordCheck,
  addNickname,
  usernameCheckDB,
  nicknameCheckDB,
  kakaoLoginDB,
  logInDB,
  loginCheckDB,
  getUserInfoDB,
  logOutDB,
  editProfile,
  editProfileDB,
  resignDB,
  googleLoginDB,
  naverLoginDB,
};

export { actionCreators };
