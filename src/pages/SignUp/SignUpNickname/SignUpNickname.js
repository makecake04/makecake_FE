import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actionCreators as userAction } from "../../../redux/modules/user";

import { Container } from "./style";

const SignUpNickname = () => {
  const dispatch = useDispatch();
  const [nickname, setNickname] = React.useState("");
  const navigate = useNavigate();

  const username = useSelector((state) => state.user.username);
  const password = useSelector((state) => state.user.password);
  const passwordCheck = useSelector((state) => state.user.passwordCheck);
  console.log(username, password, passwordCheck);

  // 중복 체크
  const [nicknameCurrent, setNicknameCurrent] = React.useState(false);

  // 비활성화 여부
  const [active, setActive] = React.useState(true);

  const checkActive = () => {
    nickname !== "" ? setActive(false) : setActive(true);
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
      <button
        className="backButton"
        onClick={() => {
          navigate(-1);
        }}
      >
        &lt;
      </button>
      <h1 className="cakeText">케이크를 만들어요!</h1>
      <p className="signupText">회원가입을 위한 닉네임을 입력해주세요.</p>

      <div>
        <input
          className="inputNickname"
          placeholder="닉네임"
          type="text"
          value={nickname}
          onChange={is_Nickname}
          onKeyUp={checkActive}
        ></input>
        <button
          className="nextButton"
          disabled={active}
          onClick={() => {
            saveNickname();
          }}
        >
          다음
        </button>
      </div>
    </Container>
  );
};

export default SignUpNickname;
