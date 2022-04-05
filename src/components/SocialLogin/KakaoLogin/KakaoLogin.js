import React from "react";

//css
import { Container, KakaoButton } from "./style";

const KakaoLogin = (props) => {
  let REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  let REDIRECT_URI = process.env.REACT_APP_REDIRECT_URL;
  return (
    <Container>
      <KakaoButton
        onClick={() => {
          window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
        }}
      />
    </Container>
  );
};

export default KakaoLogin;
