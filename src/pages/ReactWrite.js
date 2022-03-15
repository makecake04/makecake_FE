import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Logo from "../images/logo.png";

const ReactWrite = (props) => {
  const navigate = useNavigate();
  const [toggleState, setToggleState] = React.useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <ReactWriteWrap>
      <div>
        <div className="title">
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="left"
            onClick={() => {
              navigate(`/mypage`);
            }}
          />
          <h3>내가 반응한 게시글</h3>
        </div>
        <hr />
        <div className="container">
          <div className="bloc-tabs">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              좋아요 한 게시글
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              내가 남긴 댓글
            </button>
          </div>
          <div className="content-tabs">
            <div className={toggleState === 1 ? "active-content" : "content"}>
              <div className="review_wrap">
                <div className="title_wrap">
                  <div className="profile"></div>
                  <div className="info">
                    <p className="insert_dt">2022.3.10</p>
                    <p className="nickname">얌얌얌얌</p>
                  </div>
                </div>
                <FontAwesomeIcon icon={faHeart} className="heart" />
              </div>
              <div className="content_wrap">
                <p className="p_wrap">
                  안녕하세요!ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                </p>
              </div>
              <div className="img_wrap"></div>
              <hr className="hr_wrap" />
              <div className="review_wrap">
                <div className="title_wrap">
                  <div className="profile"></div>
                  <div className="info">
                    <p className="insert_dt">2022.3.10</p>
                    <p className="nickname">쩝쩝쩝쩝</p>
                  </div>
                </div>
                <FontAwesomeIcon icon={faHeart} className="heart" />
              </div>
              <div className="content_wrap">
                <p>반갑습니다!dddddddddddddddddddddddddddddddddd</p>
              </div>
              <div className="img_wrap"></div>
              <hr />
            </div>
            <div className={toggleState === 2 ? "active-content" : "content"}>
              <div className="comment_wrap">
                <div className="title_wrap2">
                  <p className="nickname">게시글 제목 일부</p>
                  <p className="insert_dt">2020.3.10</p>
                </div>
                <p className="p_wrap">
                  반갑습니다!ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                </p>
                <div className="btn">
                  <button className="modify">수정하기</button>
                  <button className="delete">삭제하기</button>
                </div>
                <hr className="hr_wrap" />
              </div>
              <div className="comment_wrap">
                <div className="title_wrap2">
                  <p className="nickname">게시글 제목 일부</p>
                  <p className="insert_dt">2020.3.10</p>
                </div>
                <p>반갑습니다!dddddddddddddddddddddddddddddddddd </p>
                <div className="btn">
                  <button className="modify">수정하기</button>
                  <button className="delete">삭제하기</button>
                </div>
                <hr className="hr_wrap" />
              </div>
              <div className="comment_wrap">
                <div className="title_wrap2">
                  <p className="nickname">게시글 제목 일부</p>
                  <p className="insert_dt">2020.3.10</p>
                </div>
                <p>반갑습니다!dddddddddddddddddddddddddddddddddd </p>
                <div className="btn">
                  <button className="modify">수정하기</button>
                  <button className="delete">삭제하기</button>
                </div>
                <hr className="hr_wrap" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ReactWriteWrap>
  );
};

const ReactWriteWrap = styled.div`
  .title {
    margin: 40px 0px 20px 30px;
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

  .bloc-tabs {
    display: flex;
    margin: 0px 20px;
  }
  .tabs {
    padding: 15px;
    text-align: center;
    width: 50%;
    background: #fff;
    cursor: pointer;
    border-bottom: 2px solid #e5e5e5;
    box-sizing: content-box;
    outline: none;
    font-size: 15px;
    font-weight: 400;
    color: #777;
  }

  .active-tabs {
    background: #fff;
    padding: 15px;
    text-align: center;
    width: 50%;
    cursor: pointer;
    border-bottom: 2px solid #ff679e;
    box-sizing: content-box;
    outline: none;
    font-size: 15px;
    font-weight: 400;
    color: #ff679e;
  }

  .active-tabs::before {
    content: "";
    display: block;
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% + 2px);
    height: 5px;
    background: #fff;
  }

  button {
    border: none;
  }

  .content-tabs {
    flex-grow: 1;
  }

  .content {
    background: #fff;
    padding: 20px;
    width: 100%;
    height: 100%;
    border: none;
    display: none;
  }

  .active-content {
    position: relative;
    padding: 20px;
    width: 100%;
    height: 100%;
  }

  .review_wrap {
    display: flex;
    justify-content: space-between;
  }

  .title_wrap {
    display: flex;
  }

  .content_wrap {
    margin: 10px 0px;
  }

  .p_wrap {
    word-break: break-all;
    display: -webkit-box;
    word-wrap: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .profile {
    width: 45px;
    height: 45px;
    border-radius: 45px;
    background-color: #ddd;
    background-image: url(${Logo});
    background-position: center;
    background-size: 50px;
  }

  .info {
    margin: 5px 0px 0px 10px;
  }

  .insert_dt {
    margin: 0px 0px 5px 0px;
    font-size: 13px;
    color: #777;
  }

  .nickname {
    font-size: 15px;
    color: #282828;
  }

  .heart {
    font-size: 30px;
    color: #ff679e;
    margin-top: 10px;
  }

  .img_wrap {
    position: relative;
    width: 100%;
    padding-bottom: 50%;
    background-image: url("https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20210815_70%2F16290307310817bC2R_JPEG%2Fupload_52d61b3cee3b2c60b9a0f62e8481d724.jpg");
    border-radius: 5px;
    background-position: center;
    background-size: 100%;
    object-fit: cover;
  }

  .hr_wrap {
    border: 0.7px solid #e5e5e5;
    width: 100%;
    margin: 25px 0px;
  }

  .title_wrap2 {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .btn {
    display: flex;
    justify-content: end;
    margin-top: 20px;
  }

  .modify {
    width: 80px;
    height: 35px;
    font-size: 13px;
    color: #777;
    border: 1px solid #777;
    border-radius: 20px;
    margin-right: 10px;
  }

  .delete {
    width: 80px;
    height: 35px;
    font-size: 13px;
    color: #e10000;
    border: 1px solid #e10000;
    border-radius: 20px;
  }
`;

export default ReactWrite;
