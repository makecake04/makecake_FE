import styled from "styled-components";

//image
import { profile_image } from "../../../assets/images/image";

export const ProfileWrap = styled.div`
  .title {
    padding: 40px 0px 20px 30px;
    display: flex;
    align-items: center;
  }
  .left {
    color: #646464;
    margin: 0px 80px 0px 0px;
  }

  h3 {
    font-weight: 700;
    font-size: 19px;
    color: #282828;
  }

  hr {
    border: 0.7px solid #e5e5e5;
    width: 100%;
  }

  .profile_img {
    width: 100px;
    height: 100px;
    margin: 50px auto 20px auto;
    border-radius: 100px;
    background-color: #ddd;
    background-image: url(${profile_image});
    background-position: center;
    background-size: 100px;
  }

  .nickname {
    text-align: center;
    font-weight: 700;
    font-size: 16px;
    color: #282828;
    margin: 0 auto 5px auto;
  }

  .email {
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    color: #646464;
    margin: 0 auto 40px auto;
  }

  .bold {
    border: 3px solid #f7f7f7;
    width: 100%;
  }

  .content {
    display: flex;
    margin: 30px 30px;
    align-items: center;
  }

  .contents {
    font-weight: 400;
    font-size: 16px;
    color: #282828;
    margin: 0px 30px 0px 0px;
  }

  button {
    width: 50px;
    height: 30px;
    border: 1px solid #eaeaea;
    font-size: 13px;
    margin: 0px 0px 0px 16rem;
  }

  .profile_hr {
    border: 0.7px solid #eaeaea;
    width: 90%;
    margin: 0 auto;
  }

  .btn_wrap {
    display: flex;
    justify-content: end;
  }

  .signout {
    width: 80px;
    height: 20px;
    margin: 20px 20px 0px 0px;
    color: #777;
    font-size: 13px;
    border: none;
  }
`;

export const ModalWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  .title {
    color: #292929;
    font-weight: 700;
    margin: 20px 0px 10px 0px;
  }

  .description {
    color: #292929;
    font-size: 15px;
    margin: 0px 0px 20px 0px;
  }

  .modal_input {
    width: 250px;
    height: 50px;
    border-radius: 20px;
    background-color: #f5f5f5;
    border: 1px solid #fff;
  }

  .modal_hr {
    border: 0.7px solid #e5e5e5;
    width: 100%;
    margin: 20px 0px 10px 0px;
  }

  .footer_wrap {
    display: flex;
  }

  .footer {
    color: #ff679e;
    font-weight: 700;
    border: none;
    width: 140px;
  }

  .footer_one {
    color: #ff679e;
    font-weight: 700;
    border: none;
    width: 140px;
  }

  .vl {
    border-left: 2px solid #e5e5e5;
    height: 41px;
    position: absolute;
    left: 50%;
    bottom: 0;
  }

  .footer_two {
    color: #c6c6c8;
    font-weight: 700;
    width: 140px;
    border: none;
  }
`;
