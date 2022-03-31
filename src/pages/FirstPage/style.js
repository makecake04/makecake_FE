import styled from "styled-components";

//image
import { logo } from "../../assets/images/image";

export const Container = styled.div``;

export const HeaderText = styled.p`
  color: #ff679e;
  font-weight: bold;
  text-align: center;
  font-size: 18px;
`;

export const LoginWrap = styled.div`
  width: 337px;
  height: 49px;
  background-color: #ff8fa5;
  border-radius: 45px;
  margin: 250px auto 0 auto;
  cursor: pointer;
`;

export const LoginText = styled.p`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  line-height: 45px;
`;

export const NoLoginWrap = styled.div`
  width: 337px;
  height: 49px;
  background-color: #ffffff;
  border: 2px solid #ff8fa5;
  border-radius: 45px;
  margin: 10px auto 0 auto;
  cursor: pointer;
`;

export const NoLoginText = styled.p`
  text-align: center;
  color: #ff8fa5;
  font-size: 16px;
  font-weight: bold;
  line-height: 45px;
`;

export const QuestionText = styled.p`
  margin-top: 10px;
  text-align: center;
  color: #6b6b6b;
  font-size: 12px;
`;

export const SignupText = styled.p`
  text-align: center;
  color: #6b6b6b;
  font-size: 12px;
`;

export const Span = styled.span`
  text-align: center;
  color: #6b6b6b;
  font-size: 12px;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
`;

export const SocialLoginWrap = styled.div`
  display: flex;
  margin-left: 80.5px;
  /* margin-left: 121.5px; */
  cursor: pointer;
`;

export const MainLogo = styled.img.attrs({
  src: `${logo}`,
  alt: "logo",
})`
  margin-left: 100px;
  /* margin-top: 150px; */
  margin-top: 50px;
`;
