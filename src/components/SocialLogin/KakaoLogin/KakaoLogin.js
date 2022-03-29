import React from "react";

//css
import { Container, KakaoButton } from "./style";

const KakaoLogin = (props) => {
  let REST_API_KEY = "acaeb2db08a3beea2ca7a11d9a22bb97";
  let REDIRECT_URI = "https://make-cake.com/user/kakao/callback";
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
