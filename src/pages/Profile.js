import React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Logo from "../images/logo.png";
import { userActions as userAction } from "../redux/modules/user";

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

const ProfileWrap = styled.div`
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
    background-image: url(${Logo});
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

const ModalWrap = styled.div`
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

export default Profile;
