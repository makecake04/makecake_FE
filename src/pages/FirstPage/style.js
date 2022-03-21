import styled from "styled-components";

//image
import { logo } from "../../assets/images/image";

export const Container = styled.div`
  .mainLogo {
    margin-left: 101.5px;
    margin-top: 160px;
  }

  .mainText {
    width: 266px;
    height: 26px;
    color: #ff679e;
    font-weight: bold;
    margin-left: 62px;
    margin-top: -20px;
    text-align: center;
    font-size: 18px;
  }

  .loginDiv {
    width: 337px;
    height: 49px;
    background-color: #ff8fa5;
    border-radius: 45px;
    margin-left: 26.5px;
    margin-top: 270px;
  }

  .loginText {
    width: 204px;
    height: 22px;
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
    margin-left: 80px;
    padding-top: 15px;

    /* margin: 10px auto 0 auto; */
  }

  .signupDiv {
    width: 337px;
    height: 49px;
    background-color: #ffffff;
    border: 2px solid #ff8fa5;
    border-radius: 45px;
    margin-left: 26.5px;
    margin-top: 10px;
  }

  .justSee {
    width: 204px;
    height: 22px;
    color: #ff8fa5;
    font-size: 16px;
    font-weight: bold;
    margin-left: 143px;
    margin-top: 13px;
  }

  .noLogin {
    width: 120px;
    height: 14px;
    color: #6b6b6b;
    font-size: 12px;
    margin-top: 20px;
    margin-left: 110px;
  }

  .signupText {
    width: 120px;
    height: 14px;
    color: #6b6b6b;
    font-size: 12px;
    font-weight: bold;
    margin-top: 25px;
    margin-left: 110px;
    text-decoration: underline;
  }

  .noLoginText2 {
    width: 230px;
    height: 14px;
    color: #6b6b6b;
    font-size: 12px;
    margin-top: 5px;
    margin-left: 15px;
  }

  .loginBox {
    height: 0;
    display: flex;
    margin-left: 80px;
  }
`;

export const MainLogo = styled.img.attrs({
  src: `${logo}`,
  alt: "logo",
})`
  margin-top: 2rem;
`;
