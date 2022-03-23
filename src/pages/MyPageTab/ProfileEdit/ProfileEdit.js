import React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userAction } from "../../../redux/modules/user";

//import css
import {
  ProfileWrap,
  SubWrap,
  Header,
  BlackBackButton,
  HrWrap,
  ContentWrap,
  ProfileImage,
  NicknameP,
  EmailP,
  BoldHr,
  Content,
  ContentP,
  ProfileHr,
  EditButton,
  ButtonWrap,
  SignoutButton,
  TitleP,
  DescriptionP,
  ModalInput,
  ModalHr,
  EditBtn,
  FooterWrap,
  BackButton,
  Vl,
  DropOutButton,
  ModalWrap,
} from "./style";

Modal.setAppElement("#root");

const Profile = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user_info = useSelector((state) => state.user.userInfo);

  React.useEffect(() => {
    dispatch(userAction.getUserInfoDB());
  }, []);

  const [modalIsOpen1, setModalIsOpen1] = React.useState(false);
  const [modalIsOpen2, setModalIsOpen2] = React.useState(false);
  const [nickname, setNickname] = React.useState("");

  const changeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <ProfileWrap>
      <SubWrap>
        <Header>
          <BlackBackButton onClick={() => navigate(-1)} />
          <h3>프로필 수정하기</h3>
        </Header>
        <HrWrap />
        <ContentWrap>
          <ProfileImage />
          <NicknameP>{user_info.nickname}</NicknameP>
          <EmailP>{user_info.email}</EmailP>
          <BoldHr />
        </ContentWrap>
        <Content>
          <ContentP>이메일</ContentP>
          <p>{user_info.email}</p>
        </Content>
        <ProfileHr />
        <Content>
          <ContentP>닉네임</ContentP>
          <p>{user_info.nickname}</p>
          <EditButton onClick={() => setModalIsOpen1(true)}>변경</EditButton>
          <Modal
            isOpen={modalIsOpen1}
            onRequestClose={() => setModalIsOpen1(false)}
            style={{
              overlay: {
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(76, 76, 76, 0.7)",
                zIndex: "20",
              },
              content: {
                position: "absolute",
                top: "50%",
                left: "50%",
                bottom: "auto",
                width: "300px",
                height: "220px",
                padding: "0",
                border: "solid 1px #eee",
                overflow: "auto",
                borderRadius: "5px",
                transform: "translate(-50%,-50%)",
                WebkitOverflowScrolling: "touch",
              },
            }}
          >
            <ModalWrap>
              <TitleP>닉네임 변경</TitleP>
              <DescriptionP>변경할 닉네임을 입력해주세요.</DescriptionP>
              <ModalInput />
              <ModalHr />
              <EditBtn onClick={changeNickname}>변경하기</EditBtn>
            </ModalWrap>
          </Modal>
        </Content>
        <ProfileHr />
        <ButtonWrap>
          <SignoutButton
            className="signout"
            onClick={() => {
              setModalIsOpen2(true);
            }}
          >
            회원탈퇴
          </SignoutButton>
          <Modal
            isOpen={modalIsOpen2}
            onRequestClose={() => setModalIsOpen2(false)}
            style={{
              overlay: {
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(76, 76, 76, 0.7)",
                zIndex: "20",
              },
              content: {
                position: "absolute",
                top: "50%",
                left: "50%",
                bottom: "auto",
                width: "300px",
                height: "160px",
                padding: "0",
                border: "solid 1px #eee",
                overflow: "auto",
                borderRadius: "5px",
                transform: "translate(-50%,-50%)",
                WebkitOverflowScrolling: "touch",
              },
            }}
          >
            <ModalWrap>
              <TitleP>회원탈퇴</TitleP>
              <DescriptionP>다시 돌아오실거죠..?</DescriptionP>
              <ModalHr />
              <FooterWrap>
                <BackButton
                  className="footer_one"
                  onClick={() => setModalIsOpen2(false)}
                >
                  돌아가기
                </BackButton>
                <Vl />
                <DropOutButton
                  className="footer_two"
                  onClick={() => {
                    dispatch(userAction.resignDB());
                  }}
                >
                  탈퇴하기
                </DropOutButton>
              </FooterWrap>
            </ModalWrap>
          </Modal>
        </ButtonWrap>
      </SubWrap>
    </ProfileWrap>
  );
};

export default Profile;
