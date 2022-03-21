import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userAction } from "../../../redux/modules/user";
import { useNavigate } from "react-router-dom";

//import css
import { Container } from "./style";

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

  return (
    <Container>
      <button
        className="backButton"
        onClick={() => {
          navigate(-1);
        }}
      >
        &lt;
      </button>
      <h1 className="passwordText">비밀번호를 알려주세요!</h1>
      <p className="passwordRule">MAKE CAKE 비밀번호를 입력해주세요.</p>

      <div>
        <input
          className="inputPassword"
          placeholder="비밀번호"
          type="password"
          value={password}
          onChange={is_Password}
          onKeyUp={checkActive}
        ></input>
        <button
          className="nextButton"
          disabled={active}
          onClick={() => {
            savePassword();
          }}
        >
          로그인 하기
        </button>
      </div>
    </Container>
  );
};

export default LoginPassword;
