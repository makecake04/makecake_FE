import styled from "styled-components";

//image
import { black_back_button } from "../../../assets/images/image";

export const Container = styled.div`
  button:disabled {
    background-color: lightgray;
  }
`;

export const BlackBackButton = styled.img.attrs({
  src: `${black_back_button}`,
  alt: "BlackBackButton",
})`
  margin-left: 20px;
  margin-top: 30px;
  cursor: pointer;
`;

export const CakeText = styled.h1`
  width: 220px;
  height: 35px;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
  letter-spacing: -0.02em;
  color: #282828;
  margin: 30px auto 0 30px;
`;

export const SignupText = styled.p`
  width: 340px;
  height: 21px;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 130%;
  color: #282828;
  margin: 5px auto 0 30px;
`;

export const InputAndButton = styled.div``;

export const Input = styled.input`
  display: block;
  width: 337px;
  height: 49px;
  background: #f5f5f5;
  border-radius: 45px;
  border: none;
  margin: 54px auto 0 auto;
  padding-left: 20px;
`;

export const NextButton = styled.button`
  display: block;
  width: 337px;
  height: 49px;
  background: #ff8fa5;
  border-radius: 45px;
  border: none;
  font-weight: bold;
  font-size: 16px;
  color: white;
  margin: 290px auto 0 auto;
`;
