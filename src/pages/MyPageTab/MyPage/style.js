import styled from "styled-components";

//image
import { profile_image } from "../../../assets/images/image";

export const MyWrap = styled.div`
  padding-bottom: 7rem;
  svg {
    color: red;
    path {
      fill: #ff769e;
    }
  }
`;

export const SubWrap = styled.div`
  h3 {
    padding: 2.25rem 0;
    text-align: center;
    font-weight: 500;
    font-size: 20px;
    color: #282828;
  }
`;

export const HrWrap = styled.hr`
  border: 0.7px solid #e5e5e5;
  width: 100%;
`;

export const ProfileImage = styled.div`
  width: 100px;
  height: 100px;
  margin: 50px auto 20px auto;
  border-radius: 100px;
  background-color: #ddd;
  background: url(${(props) => (props.src ? props.src : profile_image)})
    no-repeat;
  background-position: center;
  background-size: cover;
`;

export const NicknameP = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 16px;
  color: #282828;
  margin: 0 auto 5px auto;
`;

export const EmailP = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  color: #646464;
  margin: 0 auto 40px auto;
`;

export const BoldHr = styled.hr`
  border: 3px solid #f7f7f7;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 30px;
`;

export const Order = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 30px;
  img:nth-of-type(1) {
    margin-left: 30%;
    padding-bottom: 0.2rem;
  }
`;

export const ContenteP = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #282828;
  cursor: pointer;
`;

export const ProfileHr = styled.hr`
  border: 0.7px solid #eaeaea;
  width: 90%;
  margin: 0 auto;
`;

export const ButtonWrap = styled.div`
  display: flex;
  margin-left: 21.5rem;
`;

export const LogoutButton = styled.button`
  width: 80px;
  height: 20px;
  margin: 20px 0px;
  color: #777;
  font-size: 13px;
  border: none;
`;

export const SignoutButton = styled.button`
  width: 80px;
  height: 20px;
  margin: 20px 20px 0px 0px;
  color: #777;
  font-size: 13px;
  border: none;
`;

export const DropOutButton = styled.button`
  color: #c6c6c8;
  font-weight: 700;
  width: 140px;
  border: none;
`;

export const EnterButton = styled.button`
  color: #c6c6c8;
  font-weight: 700;
  width: 140px;
  border: none;
`;

export const ModalWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  p {
    color: #292929;
    &:first-child {
      font-weight: 700;
      margin: 20px 0px 10px 0px;
    }
    &:nth-of-type(2) {
      font-size: 15px;
      margin: 0px 0px 25px 0px;
    }
  }

  hr {
    border: 1px solid #e5e5e5;
    width: 100%;
  }
`;

export const ModalChoice = styled.div`
  display: flex;
  padding-top: 0.3rem;
  button {
    &:first-child {
      color: #ff679e;
    }
    &:nth-of-type(2) {
      color: #c6c6c8;
    }
    font-weight: 700;
    border: none;
    width: 15rem;
    padding-top: 0.6rem;
  }
`;
export const VerticalLine = styled.div`
  border-left: 2px solid #e5e5e5;
  height: 4.7rem;
  position: absolute;
  left: 50%;
  bottom: 0;
`;
