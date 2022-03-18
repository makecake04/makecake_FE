import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import Logo from "../images/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../redux/modules/user";

const Mypage = (props) => {
  const { nickname, email } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user_info = useSelector((state) => state.user.userInfo);

  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  React.useEffect(() => {
    dispatch(userActions.getUserInfoDB());
  }, []);

  return (
    <MyWrap>
      <div>
        <h3>MY PAGE</h3>
        <hr />
        <div className="profile_img"></div>
      </div>
      <div>
        <p className="nickname">{user_info.nickname}</p>
        <p className="email">{user_info.email}</p>
        <hr className="bold" />
      </div>
      <div className="content">
        <p className="contents">프로필 수정하기</p>
        <FontAwesomeIcon
          icon={faAngleRight}
          className="right"
          onClick={() => {
            navigate(`/profile`);
          }}
        />
      </div>
      <hr className="profile_hr" />
      <div className="content">
        <p className="contents">내가 그린 도안</p>
        <FontAwesomeIcon
          icon={faAngleRight}
          className="right"
          onClick={() => {
            navigate(`/mydraw`);
          }}
        />
      </div>
      <hr className="profile_hr" />
      <div className="content">
        <p className="contents">내가 반응한 게시글</p>
        <FontAwesomeIcon
          icon={faAngleRight}
          className="right"
          onClick={() => {
            navigate(`/reactwrite`);
          }}
        />
      </div>
      <hr className="profile_hr" />
      <div className="content">
        <p className="contents">내가 반응한 매장</p>
        <FontAwesomeIcon
          icon={faAngleRight}
          className="right"
          onClick={() => {
            navigate(`/reactstore`);
          }}
        />
      </div>
      <hr className="profile_hr" />
      <div className="content">
        <p className="contents">내가 반응한 케이크</p>
        <FontAwesomeIcon
          icon={faAngleRight}
          className="right"
          onClick={() => {
            navigate(`/reactcake`);
          }}
        />
      </div>
      <hr className="profile_hr" />
      <div className="btn_wrap">
        <button
          className="logout"
          onClick={() => {
            setModalIsOpen(true);
          }}
        >
          로그아웃
        </button>
      </div>
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
                dispatch(userActions.logOutDB());
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

Mypage.defaultProps = {
  nickname: "케이크장인",
  email: "asdf@naver.com",
};

const MyWrap = styled.div`
  h3 {
    padding: 40px 0px 20px 0px;
    text-align: center;
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
    justify-content: space-between;
    margin: 30px 30px;
  }

  .contents {
    font-weight: 400;
    font-size: 16px;
    color: #282828;
  }

  .right {
    color: #646464;
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

  .logout {
    width: 80px;
    height: 20px;
    margin: 10px 20px 0px 0px;
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

  .modal_hr {
    border: 0.7px solid #e5e5e5;
    width: 100%;
    margin: 20px 0px 10px 0px;
  }

  .footer_wrap {
    display: flex;
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

export default Mypage;
