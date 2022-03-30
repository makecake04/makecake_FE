import React from "react";
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
  const [nickname, setNickname] = React.useState("");
  const navigate = useNavigate();

  const username = useSelector((state) => state.user.username);
  const password = useSelector((state) => state.user.password);
  const passwordCheck = useSelector((state) => state.user.passwordCheck);
  console.log(nickname);
  // console.log(nickname.length);
  // 중복 체크
  const [nicknameCurrent, setNicknameCurrent] = React.useState(false);

  // 비활성화 여부
  const [active, setActive] = React.useState(true);

  const checkActive = () => {
    if (!nicknameCheck(nickname)) {
      console.log("ddd");
      setActive(true);
    } else if (nicknameCheck(nickname)) {
      setActive(false);
    }
    // if (nickname.length < 2) {
    //   setActive(true);
    // }
    // if (2 <= nickname.length) {
    //   setActive(false);
    //   if (nickname.length > 8) setActive(true);
    // }
  };

  const is_Nickname = (e) => {
    setNickname(e.target.value);
  };

  const saveNickname = () => {
    dispatch(
      userAction.nicknameCheckDB(username, password, passwordCheck, nickname)
    );
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
          // type="text"
          value={nickname}
          onChange={is_Nickname}
          onKeyUp={checkActive}
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
