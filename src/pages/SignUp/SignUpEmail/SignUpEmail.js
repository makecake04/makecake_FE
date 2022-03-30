import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { usernameCheck } from "../../../shared/SignUpRule";
import { useNavigate } from "react-router-dom";
import { actionCreators as userAction } from "../../../redux/modules/user";

//css
import {
  Container,
  BlackBackButton,
  CakeText,
  SignupText,
  InputAndButton,
  Input,
  CheckText,
  NextButton,
} from "./style";

const SignUpEmail = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = React.useState("");
  const navigate = useNavigate();

  // 중복 체크
  const [usernameCurrent, setUsernameCurrent] = React.useState(false);

  // 유효성 검사
  const [isUsername, setIsUsername] = React.useState("");

  // 에러 메세지 상태 저장
  const [usernameMessage, setUsernameMessage] = React.useState("");

  // 비활성화 여부
  const [active, setActive] = React.useState(true);

  const checkActive = () => {
    console.log(usernameCheck(usernameCurrent));
    usernameCheck(usernameCurrent) ? setActive(false) : setActive(true);
  };

  const [isCheckUsername, setIsCheckUsername] = React.useState(false);

  const is_Username = (e) => {
    setUsername(e.target.value);
    const usernameCurrent = e.target.value;
    setUsernameCurrent(usernameCurrent);

    if (!usernameCheck(usernameCurrent)) {
      setUsernameMessage("이메일 형식에 맞게 만들어주세요!");
      setIsUsername(false);
    } else {
      setUsernameMessage("올바른 이메일 형식입니다!");
      setIsUsername(true);
    }
  };

  const saveUsername = () => {
    dispatch(userAction.usernameCheckDB(username)).then((res) => {
      if (res) {
        navigate("/signup/password");
      } else {
        return;
      }
    });
    // navigate("/signup/password");
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      saveUsername();
    }
  };

  return (
    <Container>
      <BlackBackButton onClick={() => navigate("/")} />
      <CakeText>케이크를 만들어요!</CakeText>
      <SignupText>회원가입을 위한 이메일을 입력해주세요.</SignupText>

      <InputAndButton>
        <Input
          placeholder="이메일"
          // type="text"
          value={username}
          onChange={is_Username}
          onKeyUp={checkActive}
          onKeyPress={onKeyPress}
        />

        {username.length > 0 && (
          <>
            <CheckText className={`${isUsername ? "success" : "error"}`}>
              {usernameMessage}
            </CheckText>
          </>
        )}
        <NextButton
          disabled={active}
          onClick={() => {
            saveUsername();
          }}
        >
          다음
        </NextButton>
      </InputAndButton>
    </Container>
  );
};

export default SignUpEmail;
