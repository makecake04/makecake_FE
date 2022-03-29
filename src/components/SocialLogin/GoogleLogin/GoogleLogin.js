import React from "react";

//css
import { Container, GoogleButton } from "./style";

const GoogleLogin = (props) => {
  let _clientId = "291461089259-e5riml4i90u5ej2ubfuc2t08aammtjld";
  let _callBack = "https://make-cake.com/user/google/callback";

  return (
    <Container>
      <GoogleButton
        onClick={() => {
          window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${_clientId}&redirect_uri=${_callBack}&response_type=code&scope=email%20profile%20openid&access_type=offline`;
        }}
      />
    </Container>
  );
};

export default GoogleLogin;
