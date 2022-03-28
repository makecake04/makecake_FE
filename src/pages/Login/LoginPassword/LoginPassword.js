import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userAction } from "../../../redux/modules/user";
import { useNavigate } from "react-router-dom";

//import css
import { Container, Input, NextButton, BlackBackButton, H, P } from "./style";

const LoginPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = React.useState("");
  const username = useSelector((state) => state.user.username);

  // 비활성화 여부
  const [active, setActive] = React.useState(true);

  const checkActive = () => {
    password !== "" ? setActive(false) : setActive(true);
  };

  const is_Password = (e) => {
    setPassword(e.target.value);
  };

  const savePassword = () => {
    dispatch(userAction.logInDB(username, password));
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      savePassword();
    }
  };

  return (
    <Container>
      <BlackBackButton
        onClick={() => {
          navigate(-1);
        }}
      />

      <H>비밀번호를 알려주세요!</H>
      <P>MAKE CAKE 비밀번호를 입력해주세요.</P>

      <Input
        placeholder="비밀번호"
        type="password"
        value={password}
        onChange={is_Password}
        onKeyUp={checkActive}
        onKeyPress={onKeyPress}
      />

      <NextButton
        disabled={active}
        onClick={() => {
          savePassword();
        }}
      >
        로그인 하기
      </NextButton>
    </Container>
  );
};

export default LoginPassword;
