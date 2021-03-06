import React from "react";

//css
import { Container, NaverButton } from "./style";

const NaverLogin = (props) => {
  let _clientId = process.env.REACT_APP_CLIENTID;
  let _callBack = process.env.REACT_APP_CALLBACK;

  function randomString() {
    const chars =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    const stringLength = 6;
    let randomstring = "";
    for (let i = 0; i < stringLength; i++) {
      const rnum = Math.floor(Math.random() * chars.length);
      randomstring += chars.substring(rnum, rnum + 1);
    }
    return randomstring;
  }
  let newState = randomString();

  return (
    <Container>
      <NaverButton
        onClick={() => {
          window.location.href = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${_clientId}&redirect_uri=${_callBack}&state=${newState}`;
        }}
      />
    </Container>
  );
};

export default NaverLogin;
