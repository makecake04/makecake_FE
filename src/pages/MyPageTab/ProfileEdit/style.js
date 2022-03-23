import styled from "styled-components";

//image
import { profile_image, black_back_button } from "../../../assets/images/image";

export const ProfileWrap = styled.div``;

export const SubWrap = styled.div``;

export const Header = styled.header`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  h3 {
    margin-left: 21%;
    vertical-align: middle;
    font-weight: 700;
    font-size: 19px;
    color: #282828;
  }
`;

export const BlackBackButton = styled.img.attrs({
  src: `${black_back_button}`,
  alt: "back-button",
})`
  margin-left: 3%;
`;

export const HrWrap = styled.hr`
  border: 0.7px solid #e5e5e5;
  width: 100%;
`;

export const ContentWrap = styled.div``;

export const ProfileImage = styled.div`
  width: 100px;
  height: 100px;
  margin: 50px auto 20px auto;
  border-radius: 100px;
  background-color: #ddd;
  background-image: url(${profile_image});
  background-position: center;
  background-size: 100px;
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
  margin: 30px 30px;
  align-items: center;
`;

export const ContentP = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #282828;
  margin: 0px 30px 0px 0px;
`;

export const ProfileHr = styled.hr`
  border: 0.7px solid #eaeaea;
  width: 90%;
  margin: 0 auto;
`;

export const EditButton = styled.button`
  width: 50px;
  height: 30px;
  border: 1px solid #eaeaea;
  font-size: 13px;
  margin: 0px 0px 0px 16rem;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: end;
`;

export const SignoutButton = styled.button`
  width: 80px;
  height: 20px;
  margin: 20px 20px 0px 0px;
  color: #777;
  font-size: 13px;
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

export const ModalInput = styled.input`
  width: 250px;
  height: 50px;
  border-radius: 20px;
  background-color: #f5f5f5;
  border: 1px solid #fff;
`;

export const ModalHr = styled.hr`
  border: 0.7px solid #e5e5e5;
  width: 100%;
  margin: 20px 0px 10px 0px;
`;

export const EditBtn = styled.button`
  color: #ff679e;
  font-weight: 700;
  border: none;
  width: 140px;
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

export const DropOutButton = styled.button`
  color: #c6c6c8;
  font-weight: 700;
  width: 140px;
  border: none;
`;
