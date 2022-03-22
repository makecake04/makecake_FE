import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreators as userAction } from "../../../redux/modules/user";

//import css
import { Container, Input, NextButton, BlackBackButton, H, P } from "./style";

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
      <BlackBackButton onClick={() => {navigate('/');}}/>

      <H>반갑습니다!</H>
      <P>MAKE CAKE 아이디를 입력해주세요.</P>
 
      <Input
        placeholder="아이디"
        type="text"
        value={username}
        onChange={(e) => {
          changeUsername(e.target.value);
        }}
        onKeyUp={checkActive}
      />

      <NextButton
        disabled={active}
        onClick={() => {
          saveUsername();
          navigate("/login/password");
        }}
      >
        다음
      </NextButton>
    </Container>
  );
};

export default LoginEmail;
