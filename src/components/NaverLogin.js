import React from "react";
import styled from "styled-components";

const NaverButton = (props) => {
  let _clientId = "T7GzPr_3JQK4eoFTQsEq";
  let _callBack = "http://localhost:3000/user/naver/callback";

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
      <div
        className="naver"
        onClick={() => {
          window.location.href = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${_clientId}&redirect_uri=${_callBack}&state=${newState}`;
        }}
      >
        <svg
          className="naverLogo"
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.5966 12.3095L7.0699 0H0V23H7.40657V10.6905L15.9332 23H23V0H15.5966V12.3095Z"
            fill="white"
          />
        </svg>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .naver {
    width: 58.33px;
    height: 56px;
    border-radius: 45px;
    background-color: #03c75a;
    margin-top: 60px;
  }

  .naverLogo {
    margin-left: 17px;
    margin-top: 16px;
  }
`;

export default NaverButton;
