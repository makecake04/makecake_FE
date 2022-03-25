import styled from "styled-components";

//image
import { profile_image } from "../../../assets/images/image";

export const MyWrap = styled.div`
  text-align: center;
  overflow: scroll;
  height: calc(100% - 6rem);
  box-sizing: border-box;
  width: 100%;
  h3 {
    padding: 40px 0px 20px 0px;
    text-align: center;
    font-weight: 700;
    font-size: 19px;
    color: #282828;
  }
`;

export const SubWrap = styled.div``;

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

export const ContenteP = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #282828;
`;

export const ProfileHr = styled.hr`
  border: 0.7px solid #eaeaea;
  width: 90%;
  margin: 0 auto;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: end;
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

export const ModalWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

export const TitleP = styled.p`
  color: #292929;
  font-weight: 700;
  margin: 20px 0px 10px 0px;
`;

export const DescriptionP = styled.p`
  color: #292929;
  font-size: 15px;
  margin: 0px 0px 20px 0px;
`;

export const ModalHr = styled.hr`
  border: 0.7px solid #e5e5e5;
  width: 100%;
  margin: 20px 0px 10px 0px;
`;

export const FooterWrap = styled.div`
  display: flex;
`;

export const BackButton = styled.button`
  color: #ff679e;
  font-weight: 700;
  border: none;
  width: 140px;
`;

export const Vl = styled.div`
  border-left: 2px solid #e5e5e5;
  height: 41px;
  position: absolute;
  left: 50%;
  bottom: 0;
`;

export const EnterButton = styled.button`
  color: #c6c6c8;
  font-weight: 700;
  width: 140px;
  border: none;
`;
