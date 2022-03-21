import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

//component
import {
  KakaoLogin,
  GoogleLogin,
  NaverLogin,
} from "../../components/component";

//import css
import { Container, MainLogo } from "./style";

const FirstPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <MainLogo />

      <p className="mainText">나만의 케이크, 그려보지 않을래요?</p>
      <div className="loginDiv">
        <p
          className="loginText"
          onClick={() => {
            navigate("/login/email");
          }}
        >
          Make Cake 계정으로 로그인
        </p>
      </div>
      <div className="signupDiv">
        <p
          className="justSee"
          onClick={() => {
            navigate("/home");
          }}
        >
          둘러보기
        </p>
        <p className="noLogin">아직 계정이 없으신가요?</p>
        <p className="noLoginText2">
          <span
            className="signupText"
            onClick={() => {
              navigate("/signup/email");
            }}
          >
            회원가입
          </span>{" "}
          하러가기
        </p>
      </div>

      <div className="loginBox">
        <KakaoLogin />
        <GoogleLogin />
        <NaverLogin />
      </div>
    </Container>
  );
};

export default FirstPage;
