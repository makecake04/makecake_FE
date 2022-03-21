import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreators as userAction } from "../../../redux/modules/user";

//import css
import { Container } from "./style";

const LoginEmail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = React.useState("");

  // 비활성화 여부
  const [active, setActive] = React.useState(true);

  const checkActive = () => {
    username !== "" ? setActive(false) : setActive(true);
  };

  const changeUsername = (e) => {
    setUsername(e);
  };

  const saveUsername = () => {
    dispatch(userAction.setUsername(username));
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
      <h2 className="cakeText">반갑습니다!</h2>
      <p className="signupText">MAKE CAKE 아이디를 입력해주세요.</p>
      <div>
        <input
          className="inputEmail"
          placeholder="아이디"
          type="text"
          value={username}
          onChange={(e) => {
            changeUsername(e.target.value);
          }}
          onKeyUp={checkActive}
        ></input>
        <button
          className="nextButton"
          disabled={active}
          onClick={() => {
            saveUsername();
            navigate("/login/password");
          }}
        >
          다음
        </button>
      </div>
    </Container>
  );
};

export default LoginEmail;
