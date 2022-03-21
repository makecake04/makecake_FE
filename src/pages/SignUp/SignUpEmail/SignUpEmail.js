import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { usernameCheck } from "../../../shared/SignUpRule";
import { useNavigate } from "react-router-dom";
import { actionCreators as userAction } from "../../../redux/modules/user";

//css
import { Container } from "./style";

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

  //   const checkUsername = () => {
  //     if (username === "") {
  //         window.alert("이메일이 공란입니다!")
  //         return;
  //     }

  //     console.log(username, "의 중복확인 요청을 dispatch 했습니다.");
  //     dispatch(userActions.usernameCheckF(username, false));
  //     setIsCheckUsername(true)
  // }

  const saveUsername = () => {
    dispatch(userAction.usernameCheckDB(username));

    navigate("/signup/password");
  };

  return (
    <Container>
      <button
        className="backButton"
        onClick={() => {
          navigate("/");
        }}
      >
        &lt;
      </button>
      <h2 className="cakeText">케이크를 만들어요!</h2>
      <p className="signupText">회원가입을 위한 이메일을 입력해주세요.</p>
      <div>
        <input
          className="inputEmail"
          placeholder="이메일"
          type="text"
          value={username}
          onChange={is_Username}
          onKeyUp={checkActive}
        ></input>

        {username.length > 0 && (
          <>
            <p
              style={{
                color: `${(props) =>
                  props.className === "success" ? "green" : "red"}`,
                marginLeft: "20px",
                fontSize: "14px",
              }}
              className={`${isUsername ? "success" : "error"}`}
            >
              {usernameMessage}
            </p>
          </>
        )}
        <button
          className="nextButton"
          disabled={active}
          onClick={() => {
            // checkUsername()
            saveUsername();
          }}
        >
          다음
        </button>
      </div>
    </Container>
  );
};

export default SignUpEmail;
