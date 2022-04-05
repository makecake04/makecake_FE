import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actionCreators as userAction } from "../../../redux/modules/user";

import { nicknameCheck } from "../../../shared/SignUpRule";

import {
  Container,
  BlackBackButton,
  CakeText,
  SignupText,
  InputAndButton,
  Input,
  NextButton,
} from "./style";

const SignUpNickname = () => {
  const dispatch = useDispatch();
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const username = useSelector((state) => state.user.username);
  const password = useSelector((state) => state.user.password);
  const passwordCheck = useSelector((state) => state.user.passwordCheck);

  // 비활성화 여부
  const [active, setActive] = useState(true);

  const checkActive = () => {
    if (!nicknameCheck(nickname)) {
      setActive(true);
    } else if (nicknameCheck(nickname)) {
      setActive(false);
    }
  };

  const is_Nickname = (e) => {
    setNickname(e.target.value);
  };

  const saveNickname = () => {
    dispatch(
      userAction.nicknameCheckDB(username, password, passwordCheck, nickname)
    );
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      saveNickname();
    }
  };

  return (
    <Container>
      <BlackBackButton
        onClick={() => {
          navigate("/signup/password");
        }}
      />
      <CakeText>케이크를 만들어요!</CakeText>
      <SignupText>회원가입을 위한 닉네임을 입력해주세요. (2자~8자)</SignupText>

      <InputAndButton>
        <Input
          placeholder="닉네임"
          value={nickname}
          onChange={is_Nickname}
          onKeyUp={checkActive}
          onKeyPress={onKeyPress}
        />

        <NextButton
          disabled={active}
          onClick={() => {
            saveNickname();
          }}
        >
          다음
        </NextButton>
      </InputAndButton>
    </Container>
  );
};

export default SignUpNickname;
