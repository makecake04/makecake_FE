import React from "react";
import { useNavigate } from "react-router-dom";

//component
import {
  KakaoLogin,
  GoogleLogin,
  NaverLogin,
} from "../../components/component";

//css
import {
  Container,
  MainLogo,
  HeaderText,
  LoginWrap,
  LoginText,
  NoLoginWrap,
  NoLoginText,
  QuestionText,
  SignupText,
  Span,
  SocialLoginWrap,
} from "./style";

const FirstPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <MainLogo />

      <HeaderText>나만의 케이크, 그려보지 않을래요?</HeaderText>

      <LoginWrap>
        <LoginText
          onClick={() => {
            navigate("/login/email");
          }}
        >
          Make Cake 계정으로 로그인
        </LoginText>
      </LoginWrap>

      <NoLoginWrap>
        <NoLoginText
          onClick={() => {
            navigate("/home");
          }}
        >
          둘러보기
        </NoLoginText>
      </NoLoginWrap>

      <QuestionText>아직 계정이 없으신가요?</QuestionText>
      <SignupText>
        <Span
          onClick={() => {
            navigate("/signup/email");
          }}
        >
          회원가입
        </Span>
        하러가기
      </SignupText>

      <SocialLoginWrap>
        <KakaoLogin />
        <GoogleLogin />
        {/* <NaverLogin /> */}
      </SocialLoginWrap>
    </Container>
  );
};

export default FirstPage;
