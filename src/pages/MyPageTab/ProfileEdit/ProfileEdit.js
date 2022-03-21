import React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { actionCreators as userAction } from "../../../redux/modules/user";

//import css
import { ProfileWrap, ModalWrap } from "./style";

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
      <div>
        <div className="title">
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="left"
            onClick={() => {
              navigate(`/mypage`);
            }}
          />
          <h3>프로필 수정하기</h3>
        </div>
        <hr />
        <div>
          <div className="profile_img"></div>
          <p className="nickname">{user_info.nickname}</p>
          <p className="email">{user_info.email}</p>
          <hr className="bold" />
        </div>
        <div className="content">
          <p className="contents">이메일</p>
          <p>{user_info.email}</p>
        </div>
        <hr className="profile_hr" />
        <div className="content">
          <p className="contents">닉네임</p>
          <p>{user_info.nickname}</p>
          <button onClick={() => setModalIsOpen1(true)}>변경</button>
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
                top: "45%",
                left: "50%",
                bottom: "auto",
                width: "300px",
                height: "200px",
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
              <p className="title">닉네임 변경</p>
              <p className="description">변경할 닉네임을 입력해주세요.</p>
              <input className="modal_input"></input>
              <hr className="modal_hr" />
              <button className="footer" onClick={changeNickname}>
                변경하기
              </button>
            </ModalWrap>
          </Modal>
        </div>
        <hr className="profile_hr" />
        <div className="btn_wrap">
          <button
            className="signout"
            onClick={() => {
              setModalIsOpen2(true);
            }}
          >
            회원탈퇴
          </button>
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
              <p className="title">회원탈퇴</p>
              <p className="description">다시 돌아오실거죠..?</p>
              <hr className="modal_hr" />
              <div className="footer_wrap">
                <button
                  className="footer_one"
                  onClick={() => setModalIsOpen2(false)}
                >
                  돌아가기
                </button>
                <div className="vl" />
                <button
                  className="footer_two"
                  onClick={() => {
                    dispatch(userAction.resignDB());
                  }}
                >
                  탈퇴하기
                </button>
              </div>
            </ModalWrap>
          </Modal>
        </div>
      </div>
    </ProfileWrap>
  );
};

export default Profile;
