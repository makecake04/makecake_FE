import React from "react";

//css
import { Container } from "./style";

const GoogleLogin = (props) => {
  let _clientId = "291461089259-e5riml4i90u5ej2ubfuc2t08aammtjld";
  let _callBack = "http://localhost:3000/user/google/callback";

  return (
    <Container>
      <div
        className="googleBackground"
        onClick={() => {
          window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${_clientId}&redirect_uri=${_callBack}&response_type=code&scope=email%20profile%20openid&access_type=offline`;
        }}
      >
        <svg
          className="googleMark"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.56 11.25C21.56 10.47 21.49 9.72 21.36 9H11V13.255H16.92C16.665 14.63 15.89 15.795 14.725 16.575V19.335H18.28C20.36 17.42 21.56 14.6 21.56 11.25Z"
            fill="#4285F4"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.9999 21.9998C13.9699 21.9998 16.4599 21.0148 18.2799 19.3348L14.7249 16.5748C13.7399 17.2348 12.4799 17.6248 10.9999 17.6248C8.13491 17.6248 5.70992 15.6898 4.84492 13.0898H1.16992V15.9398C2.97992 19.5348 6.69992 21.9998 10.9999 21.9998Z"
            fill="#34A853"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.84499 13.09C4.62499 12.4301 4.49999 11.7251 4.49999 11.0001C4.49999 10.2751 4.62499 9.57005 4.84499 8.91005V6.06006H1.17C0.424999 7.54506 0 9.22505 0 11.0001C0 12.775 0.424999 14.455 1.17 15.94L4.84499 13.09Z"
            fill="#FBBC05"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.9999 4.37499C12.6149 4.37499 14.0649 4.92999 15.2049 6.01999L18.3599 2.865C16.4549 1.09 13.9649 0 10.9999 0C6.69992 0 2.97992 2.465 1.16992 6.05999L4.84492 8.90999C5.70992 6.30999 8.13491 4.37499 10.9999 4.37499Z"
            fill="#EA4335"
          />
        </svg>
      </div>
    </Container>
  );
};

export default GoogleLogin;