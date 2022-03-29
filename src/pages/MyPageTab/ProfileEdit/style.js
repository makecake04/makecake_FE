import styled from "styled-components";

//image
import {
  profile_image,
  black_back_button,
  profile_edit_button,
} from "../../../assets/images/image";

export const ProfileWrap = styled.div`
  box-sizing: border-box;
  width: 100%;

  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  input {
    border: none;
  }
`;

export const SubWrap = styled.div``;

export const Header = styled.header`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  h3 {
    margin-left: 21%;
    vertical-align: middle;
    color: #282828;
  }
`;

export const EnterP = styled.p`
  margin-left: 60px;
  color: #ff679e;
  cursor: pointer;
`;

export const BlackBackButton = styled.img.attrs({
  src: `${black_back_button}`,
  alt: "back-button",
})`
  margin-left: 3%;
  cursor: pointer;
`;

export const HrWrap = styled.hr`
  border: 0.7px solid #e5e5e5;
  width: 100%;
`;

export const ContentWrap = styled.div``;

export const ProfileImage = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  margin: 50px auto -1.3rem auto;
  border-radius: 100px;
  background-color: #ddd;
  background: url(${(props) => (props.src ? props.src : profile_image)})
    no-repeat;
  background-position: center;
  background-size: cover;
`;

export const PlusButton = styled.div`
  position: relative;
`;

export const LabelWrap = styled.label``;

export const ProfileEditButton = styled.img.attrs({
  src: `${profile_edit_button}`,
  alt: "edit-button",
})`
  position: relative;
  z-index: 2;
  left: 55%;
  top: -1.8rem;
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

  input {
    background: #f5f5f5;
    border-radius: 10px;
    padding: 5px 5px 5px 10px;
    max-width: 230px;
  }
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
  margin: 0px 0px 0px 6rem;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: end;
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
  padding: 10px;
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
