import styled from "styled-components";

export const Container = styled.div`
  button:disabled {
    background-color: lightgray;
  }

  .backButton {
    width: 20px;
    height: 20px;
    margin: 40px 0 0 30px;
    border: none;
    background: white;
    font-size: 30px;
    color: #282828;
  }

  .cakeText {
    width: 187px;
    height: 35px;
    margin: 60px 0 0 30px;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: -0.02em;
    color: #282828;
  }

  .signupText {
    width: 261px;
    height: 21px;
    margin: 5px 0 0 30px;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 130%;
    color: #282828;
  }

  .inputEmail {
    display: block;
    width: 337px;
    height: 49px;
    margin: 30px auto 0 auto;
    background: #f5f5f5;
    border-radius: 45px;
    border: none;
    padding-left: 20px;
  }

  .nextButton {
    display: block;
    width: 337px;
    height: 49px;
    margin: 400px auto 0 auto;
    background: #ff8fa5;
    border-radius: 45px;
    border: none;
    font-weight: bold;
    font-size: 16px;
    color: white;
  }
`;
