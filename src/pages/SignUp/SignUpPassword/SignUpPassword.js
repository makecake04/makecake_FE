import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { pwdCheck } from "../../../shared/SignUpRule";
import { useSelector } from "react-redux";
import { actionCreators as userAction } from "../../../redux/modules/user";

import { Container } from "./style";

const SignUpPassword = () => {
  const username = useSelector((state) => state.user.username);
  console.log(username);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [password, setPassword] = React.useState("");
  const [passwordCheck, setPasswordCheck] = React.useState("");

  // 중복 체크
  const [passwordCurrent, setPasswordCurrent] = React.useState("");

  // 유효성 검사
  const [isPassword, setIsPassword] = React.useState("");
  const [isPasswordCheck, setIsPasswordCheck] = React.useState("");

  // 에러 메세지 상태 저장
  const [passwordMessage, setPasswordMessage] = React.useState("");
  const [passwordCheckMessage, setPasswordCheckMessage] = React.useState("");

  // 비활성화 여부
  const [active, setActive] = React.useState(true);

  const checkActive = () => {
    password !== "" && passwordCheck !== ""
      ? setActive(false)
      : setActive(true);
  };

  const is_PassWord = (e) => {
    setPassword(e.target.value);

    const passwordCurrent = e.target.value;
    setPasswordCurrent(passwordCurrent);

    if (!pwdCheck(passwordCurrent)) {
      setPasswordMessage(
        "영문, 숫자, 특수문자를 조합하여 10~16자로 만들어주세요!"
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("올바른 비밀번호 형식입니다!");
      setIsPassword(true);
    }
  };

  const is_PasswordCheck = (e) => {
    setPasswordCheck(e.target.value);
    const SamePasswordCurrent = e.target.value;

    if (!pwdCheck(SamePasswordCurrent)) {
      setPasswordCheckMessage("형식에 맞지 않는 비밀번호입니다!");
      setIsPasswordCheck(false);
    } else if (
      password !== "" &&
      passwordCheck !== "" &&
      password === SamePasswordCurrent
    ) {
      setPasswordCheckMessage("비밀번호가 같습니다!");
      setIsPasswordCheck(true);
    } else {
      setPasswordCheckMessage("비밀번호가 같지 않습니다. 다시 확인해주세요!");
      setIsPasswordCheck(false);
    }
  };

  const savePassword = () => {
    dispatch(userAction.addPassword(password));
    dispatch(userAction.addPasswordCheck(passwordCheck));
  };

  return (
    <Container>
      <button
        className="backButton"
        onClick={() => {
          navigate("/email");
        }}
      >
        &lt;
      </button>
      <h1 className="passwordText">비밀번호를 알려주세요!</h1>
      <p className="passwordRule">
        * 영문자, 숫자 각각 하나 이상 포함, 10자리 이상
      </p>

      <div>
        <input
          className="inputPassword"
          placeholder="비밀번호"
          type="password"
          value={password}
          onChange={is_PassWord}
          onKeyUp={checkActive}
        ></input>
        {password.length > 0 && (
          <>
            <p
              style={{
                color: `${(props) =>
                  props.className === "success" ? "green" : "red"}`,
                marginLeft: "20px",
                fontSize: "14px",
              }}
              className={`${isPassword ? "success" : "error"}`}
            >
              {passwordMessage}
            </p>
          </>
        )}
        <input
          className="inputPwcheck"
          placeholder="비밀번호 확인"
          type="password"
          value={passwordCheck}
          onChange={is_PasswordCheck}
          onKeyUp={checkActive}
        ></input>
        {passwordCheck.length > 0 && (
          <>
            <p
              className={`${isPasswordCheck ? "success" : "error"}`}
              style={{
                color: `${(props) =>
                  props.className === "success" ? "green" : "red"}`,
                marginLeft: "20px",
                fontSize: "14px",
              }}
            >
              {passwordCheckMessage}
            </p>
          </>
        )}
        <button
          className="nextButton"
          disabled={active}
          onClick={() => {
            savePassword();
            navigate("/Nickname");
          }}
        >
          다음
        </button>
      </div>
    </Container>
  );
};

export default SignUpPassword;