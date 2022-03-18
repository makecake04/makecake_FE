import React from "react";
import styled from "styled-components";
const KakaoButton = (props) => {
  let REST_API_KEY = "acaeb2db08a3beea2ca7a11d9a22bb97";
  let REDIRECT_URI = "http://localhost:3000/user/kakao/callback";
  return (
    <Container>
      <div
        className="kakaoBackground"
        onClick={() => {
          window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
        }}
      >
        <svg
          className="kakaoLogo"
          width="24"
          height="22"
          viewBox="0 0 24 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.9914 0C5.35332 0 0 4.24707 0 9.40308C0 12.7498 2.22698 15.6803 5.56745 17.3537L4.43683 21.5414C4.41551 21.6041 4.41223 21.6715 4.42736 21.736C4.44249 21.8005 4.47543 21.8596 4.52248 21.9066C4.5911 21.9666 4.67939 21.9998 4.77088 22C4.84674 21.994 4.91871 21.9642 4.97644 21.9151L9.84154 18.6618C10.5597 18.7601 11.2836 18.8111 12.0086 18.8147C18.6381 18.8147 24 14.5676 24 9.40308C24 4.23858 18.621 0 11.9914 0Z"
            fill="black"
          />
        </svg>
      </div>
    </Container>
  );
};
const Container = styled.div`
  .kakaoBackground {
    display: inline-flex;
    width: 58.33px;
    height: 56px;
    background: #fee500;
    border-radius: 50%;
    margin-top: 60px;
  }
  .kakaoLogo {
    margin: auto;
  }
`;
export default KakaoButton;
