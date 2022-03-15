import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { ReactComponent as MarkerSvg } from "../svg/marker.svg";
import { ReactComponent as UsersSvg } from "../svg/users.svg";
import { ReactComponent as ClockSvg } from "../svg/clock.svg";
import { ReactComponent as RightSvg } from "../svg/right.svg";

const StoreDetail = (props) => {
  const navigate = useNavigate();

  const [toggleState, setToggleState] = React.useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <StoreDetailWrap>
      <div>
        <div className="title">
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="left"
            onClick={() => {
              navigate(`/mypage`);
            }}
          />
          <hr className="hr_wrap" />
        </div>
        <div className="title_wrap">
          <div className="info_box">
            <div className="top_wrap">
              <p className="store">케이크예스플리즈</p>
              <FontAwesomeIcon icon={faHeart} className="heart" />
            </div>
            <div className="info_wrap">
              <FontAwesomeIcon icon={faInstagram} className="instagram" />
              <p className="insta">cake.yesplease</p>
              <FontAwesomeIcon icon={faInstagram} className="instagram" />
              <p className="insta">cake.yesplease</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="bloc-tabs">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              소개
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              종류
            </button>
            <button
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}
            >
              사진
            </button>
            <button
              className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(4)}
            >
              리뷰
            </button>
          </div>
          <div className="content-tabs">
            <div className={toggleState === 1 ? "active-content" : "content"}>
              <div>
                <div className="content_wrap">
                  <div className="icon_wrap">
                    <MarkerSvg className="icon" />
                    <p className="description">
                      서울 마포구 독막로7길 45 지하1층
                    </p>
                  </div>
                  <div className="icon_wrap">
                    <ClockSvg className="icon" />
                    <p className="description">
                      매일 12:00 ~ 20:00 (라스트 오더 19:30)
                    </p>
                  </div>
                  <div className="users_wrap">
                    <UsersSvg className="icon" />
                    <p className="description">클래스 진행하지 않음</p>
                  </div>
                </div>
                <hr className="bottom" />
                <div>
                  <div className="picture_wrap">
                    <p className="picture">사진</p>
                    <div className="right_wrap">
                      <p className="plus">더보기</p>
                      <RightSvg className="right" />
                    </div>
                  </div>
                  <div className="img_box">
                    <div className="img_wrap">
                      <ImgBox src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20210119_285%2F1611062747978xN03M_JPEG%2Fupload_f69f8a2c9ea06efa16fea9da41387abb.jpeg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={toggleState === 2 ? "active-content" : "content"}>
              <div>
                <div className="content_wrap">
                  <div className="kind">
                    <p className="size">도시락 사이즈</p>
                    <p className="line">---------------</p>
                    <p className="price">가격 변동</p>
                  </div>
                  <div className="kind">
                    <p className="size">미니사이즈</p>
                    <p className="line">---------------</p>
                    <p className="price">가격 변동</p>
                  </div>
                  <div className="kind">
                    <p className="size">1호 사이즈</p>
                    <p className="line">---------------</p>
                    <p className="price">가격 변동</p>
                  </div>
                  <div className="kind2">
                    <p className="size">2호 사이즈</p>
                    <p className="line">---------------</p>
                    <p className="price">가격 변동</p>
                  </div>
                </div>
                <hr className="bottom" />
                <div>
                  <div className="picture_wrap">
                    <p className="picture">사진</p>
                    <div className="right_wrap">
                      <p className="plus">더보기</p>
                      <RightSvg className="right" />
                    </div>
                  </div>
                  <div className="img_box">
                    <div className="img_wrap">
                      <ImgBox src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20210119_285%2F1611062747978xN03M_JPEG%2Fupload_f69f8a2c9ea06efa16fea9da41387abb.jpeg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={toggleState === 3 ? "active-content" : "content"}>
              <div>
                <div className="img_box">
                  <div className="img_wrap">
                    <ImgBox src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20210119_285%2F1611062747978xN03M_JPEG%2Fupload_f69f8a2c9ea06efa16fea9da41387abb.jpeg" />
                  </div>
                </div>
              </div>
            </div>
            <div className={toggleState === 4 ? "active-content" : "content"}>
              <div className="comment_wrap">
                <div className="title_wrap2">
                  <p className="nickname">게시글 제목 일부</p>
                  <p className="insert_dt">2020.3.10</p>
                </div>
                <p className="p_wrap">
                  반갑습니다!dddddddddddddddddddddddddddddddddd
                </p>
                <hr className="hr_wrap2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </StoreDetailWrap>
  );
};

const StoreDetailWrap = styled.div`
  overflow: auto;
  .title {
    display: flex;
    background: url("https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20201125_275%2F1606293151105OHQ5y_JPEG%2FuwUyHhdQdqxQO9xZ91AKAKIz.jpeg.jpg")
      no-repeat center / cover;
  }

  .left {
    color: #646464;
    position: absolute;
    margin-top: 40px;
    margin-left: 40px;
  }

  .hr_wrap {
    border: 0.7px solid #e5e5e5;
    width: 100%;
    margin-top: 190px;
    z-index: 1;
  }

  .title_wrap {
    position: absolute;
    z-index: 2;
    left: 10%;
    top: 155px;
    width: 80%;
    height: 100px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0px 3px 8px rgba(152, 153, 150, 0.3);
    padding: 16px;
  }

  .info_box {
    width: 100%;
  }

  .top_wrap {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .info_wrap {
    display: flex;
    align-items: center;
  }

  .store {
    font-weight: 700;
  }

  .heart {
    color: #ff679e;
    font-size: 20px;
  }

  .insta {
    flex: 1;
    margin-left: 5px;
  }

  .container {
    margin-top: 70px;
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
    width: 100%;
    height: 100%;
  }

  .content_wrap {
    padding: 20px;
  }

  .icon_wrap {
    display: flex;
    margin-bottom: 20px;
  }

  .icon {
    margin-right: 10px;
    width: 20px;
    height: 20px;
    path {
      stroke: #777;
    }
  }

  .description {
    font-size: 15px;
    color: #777;
  }

  .users_wrap {
    display: flex;
  }

  .bottom {
    border: 3px solid #f7f7f7;
    width: 100%;
  }

  .picture_wrap {
    margin: 10px 20px 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .picture {
    color: #282828;
    font-weight: 700;
  }

  .plus {
    color: #777;
    font-size: 15px;
  }

  .right_wrap {
    display: flex;
    align-items: center;
  }

  .right {
    width: 18px;
    height: 18px;
    path {
      stroke: #777;
    }
  }

  .img_box {
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 20px;
    gap: 20px;
    overflow: hidden;
  }

  .img_wrap {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    border-radius: 10px;
    overflow: hidden;
  }

  .kind {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .kind2 {
    display: flex;
    justify-content: space-between;
  }

  .size {
    color: #777;
    font-size: 15px;
  }

  .line {
    color: #dadada;
  }

  .price {
    font-size: 15px;
    font-weight: 700;
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

  .title_wrap2 {
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }

  .hr_wrap2 {
    border: 0.7px solid #e5e5e5;
    width: 100%;
    margin: 25px 0px;
  }

  .p_wrap {
    word-break: break-all;
    display: -webkit-box;
    word-wrap: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0px 20px;
  }
`;

const ImgBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20210119_285%2F1611062747978xN03M_JPEG%2Fupload_f69f8a2c9ea06efa16fea9da41387abb.jpeg")
    no-repeat center / cover;
`;

export default StoreDetail;
