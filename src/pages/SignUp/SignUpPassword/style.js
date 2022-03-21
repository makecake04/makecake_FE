import styled from "styled-components";

export const Container = styled.div`
  button:disabled {
    background-color: #777777;
  }

  .backButton {
    border: none;
    background: white;
    font-size: 30px;
    margin: 40px 0 0 30px;
  }

  .passwordText {
    width: 220px;
    height: 35px;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: -0.02em;
    color: #282828;
    margin: 65px auto 0 30px;
  }

  .passwordRule {
    width: 340px;
    height: 21px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 130%;
    color: #282828;
    margin: 5px auto 0 30px;
  }

  .inputPassword {
    display: block;
    width: 337px;
    height: 49px;
    background: #f5f5f5;
    border-radius: 45px;
    border: none;
    margin: 30px auto 0 auto;
    padding-left: 20px;
  }

  .inputPwcheck {
    display: block;
    width: 337px;
    height: 49px;
    background: #f5f5f5;
    border-radius: 45px;
    border: none;
    margin: 30px auto 0 auto;
    padding-left: 20px;
  }

  .nextButton {
    display: block;
    width: 337px;
    height: 49px;
    background: #ff8fa5;
    border-radius: 45px;
    border: none;
    font-weight: bold;
    font-size: 16px;
    color: white;
    margin: 317px auto 0 auto;
  }
`;
