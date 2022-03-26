import React from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";

import { actionCreators as userAction } from "../../../redux/modules/user";

//image
import { nav_icon, pink_nav_icon, beta } from "../../../assets/images/image";

//css
import {
  MyWrap,
  ModalWrap,
  SubWrap,
  HrWrap,
  ProfileImage,
  NicknameP,
  EmailP,
  BoldHr,
  Content,
  Order,
  ContenteP,
  ProfileHr,
  ButtonWrap,
  LogoutButton,
  SignoutButton,
  DropOutButton,
  TitleP,
  DescriptionP,
  ModalHr,
  FooterWrap,
  BackButton,
  Vl,
  EnterButton,
} from "./style";

const MyPage = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user_info = useSelector((state) => state.user.userInfo);

  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [modalIsOpen2, setModalIsOpen2] = React.useState(false);

  React.useEffect(() => {
    dispatch(userAction.getUserInfoDB());
  }, []);

  return (
    <MyWrap>
      <SubWrap>
        <h3>마이 페이지</h3>
        <HrWrap />
        <ProfileImage src={user_info.profileImg} />
      </SubWrap>
      <SubWrap>
        <NicknameP>{user_info.nickname}</NicknameP>
        <EmailP>{user_info.email}</EmailP>
        <BoldHr />
      </SubWrap>
      <Order
        onClick={() => {
          navigate("/order");
        }}
      >
        <ContenteP>케이크 주문하러 가기</ContenteP>

        <img src={beta} alt="Beta" />
        <img src={pink_nav_icon} alt="nav-icon" />
      </Order>
      <ProfileHr />
      <Content
        onClick={() => {
          navigate("/profile/edit");
        }}
      >
        <ContenteP>프로필 수정하기</ContenteP>
        <img src={nav_icon} alt="nav-icon" />
      </Content>
      <ProfileHr />
      <Content
        onClick={() => {
          navigate("/mydesign");
        }}
      >
        <ContenteP>내가 그린 도안</ContenteP>
        <img src={nav_icon} alt="nav-icon" />
      </Content>
      <ProfileHr />
      <Content
        onClick={() => {
          navigate("/react/post");
        }}
      >
        <ContenteP>내가 반응한 게시글</ContenteP>
        <img src={nav_icon} alt="nav-icon" />
      </Content>
      <ProfileHr />
      <Content
        onClick={() => {
          navigate("/react/store");
        }}
      >
        <ContenteP>내가 반응한 매장</ContenteP>
        <img src={nav_icon} alt="nav-icon" />
      </Content>
      <ProfileHr />
      <Content
        onClick={() => {
          navigate("/react/cake");
        }}
      >
        <ContenteP>내가 반응한 케이크</ContenteP>
        <img src={nav_icon} alt="nav-icon" />
      </Content>
      <ProfileHr />

      <ButtonWrap>
        <LogoutButton
          onClick={() => {
            setModalIsOpen(true);
          }}
        >
          로그아웃
        </LogoutButton>
        <SignoutButton
          className="signout"
          onClick={() => {
            setModalIsOpen2(true);
          }}
        >
          회원탈퇴
        </SignoutButton>
      </ButtonWrap>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
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
            top: "35%",
            left: "50%",
            bottom: "auto",
            width: "302px",
            height: "150px",
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
          <TitleP>로그아웃</TitleP>
          <DescriptionP>다시 돌아오실거죠..?</DescriptionP>
          <ModalHr />
          <FooterWrap>
            <BackButton onClick={() => setModalIsOpen(false)}>
              돌아가기
            </BackButton>
            <Vl />
            <EnterButton
              onClick={() => {
                dispatch(userAction.logOutDB());
              }}
            >
              확인
            </EnterButton>
          </FooterWrap>
        </ModalWrap>
      </Modal>
      <ButtonWrap>
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
              top: "35%",
              left: "50%",
              bottom: "auto",
              width: "302px",
              height: "150px",
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
    </MyWrap>
  );
};

MyPage.defaultProps = {
  nickname: "케이크장인",
  email: "asdf@naver.com",
};

export default MyPage;
