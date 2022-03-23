import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userAction } from "../../../redux/modules/user";

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
  ContenteP,
  ProfileHr,
  ButtonWrap,
  LogoutButton,
} from "./style";

const MyPage = (props) => {
  const { nickname, email } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user_info = useSelector((state) => state.user.userInfo);

  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  React.useEffect(() => {
    dispatch(userAction.getUserInfoDB());
  }, []);

  return (
    <MyWrap>
      <SubWrap>
        <h3>MY PAGE</h3>
        <HrWrap />
        <ProfileImage />
      </SubWrap>
      <SubWrap>
        <NicknameP>{user_info.nickname}</NicknameP>
        <EmailP>{user_info.email}</EmailP>
        <BoldHr />
      </SubWrap>
      <Content>
        <ContenteP>프로필 수정하기</ContenteP>
        <FontAwesomeIcon
          icon={faAngleRight}
          onClick={() => {
            navigate("/profile/edit");
          }}
        />
      </Content>
      <ProfileHr />
      <Content>
        <ContenteP>내가 그린 도안</ContenteP>
        <FontAwesomeIcon
          icon={faAngleRight}
          onClick={() => {
            navigate("/mydesign");
          }}
        />
      </Content>
      <ProfileHr />
      <Content>
        <ContenteP>내가 반응한 게시글</ContenteP>
        <FontAwesomeIcon
          icon={faAngleRight}
          onClick={() => {
            navigate("/react/post");
          }}
        />
      </Content>
      <ProfileHr />
      <Content>
        <ContenteP>내가 반응한 매장</ContenteP>
        <FontAwesomeIcon
          icon={faAngleRight}
          onClick={() => {
            navigate("/react/store");
          }}
        />
      </Content>
      <ProfileHr />
      <Content>
        <ContenteP>내가 반응한 케이크</ContenteP>
        <FontAwesomeIcon
          icon={faAngleRight}
          onClick={() => {
            navigate("/react/cake");
          }}
        />
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
            top: "45%",
            left: "50%",
            bottom: "auto",
            width: "300px",
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
          <p className="title">로그아웃</p>
          <p className="description">다시 돌아오실거죠..?</p>
          <hr className="modal_hr" />
          <div className="footer_wrap">
            <button
              className="footer_one"
              onClick={() => setModalIsOpen(false)}
            >
              돌아가기
            </button>
            <div className="vl" />
            <button
              className="footer_two"
              onClick={() => {
                dispatch(userAction.logOutDB());
              }}
            >
              확인
            </button>
          </div>
        </ModalWrap>
      </Modal>
    </MyWrap>
  );
};

MyPage.defaultProps = {
  nickname: "케이크장인",
  email: "asdf@naver.com",
};

export default MyPage;
