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
  alt: "img",
})`width: 30px;
   height: 30px;
   margin-top: 20px;
   margin-left: 18px;
   `;

export const H = styled.h2`
  width: 250px;
  height: 35px;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
  letter-spacing: -0.02em;
  color: #282828;
  margin: 30px 0 0 30px;
`;

export const P = styled.p`
  width: 340px;
  height: 21px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 130%;
  color: #282828;
  margin: 5px auto 0 30px;
`;

export const Input = styled.input`
    display: block;
    width: 337px;
    height: 49px;
    margin: 30px auto 0 auto;
    background: #f5f5f5;
    border-radius: 45px;
    border: none;
    padding-left: 20px;
`;

export const NextButton = styled.button`
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
`;