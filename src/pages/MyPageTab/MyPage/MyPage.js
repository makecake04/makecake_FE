import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userAction } from "../../../redux/modules/user";

//css
import { MyWrap, ModalWrap } from "./style";

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
            navigate("/profile/edit");
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
            navigate("/mydesign");
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
            navigate("/react/post");
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
            navigate("/react/store");
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
            navigate("/react/cake");
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
