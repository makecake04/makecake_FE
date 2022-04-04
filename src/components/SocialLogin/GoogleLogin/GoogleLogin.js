import React from "react";

//css
import { Container, GoogleButton } from "./style";

const GoogleLogin = (props) => {
  // let _clientId =
  //   "785414541280-9tuq85ts44dalvkpd5dah0cobplcmc3n.apps.googleusercontent.com";
  // let _callBack = "https://make-cake.com/user/google/callback";
  let _clientId = process.env.REACT_APP_CLIENT_ID;
  let _callBack = process.env.REACT_APP_CALLBACKURL;

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
