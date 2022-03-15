import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const ReactCake = (props) => {
  const navigate = useNavigate();
  return (
    <ReactCakeWrap>
      <div>
        <div className="title">
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="left"
            onClick={() => {
              navigate(`/mypage`);
            }}
          />
          <h3>내가 반응한 케이크</h3>
        </div>
        <hr />
        <ImageWrap>
          <div>
            <div className="img_wrap">
              <img src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210528_125%2F1622212613687XKcgw_JPEG%2FUVj0G8PL6HlsonNQZAXJfNmy.jpg" />
              <FontAwesomeIcon icon={faHeart} className="heart" />
            </div>
            <p className="store">더케익스토리</p>
            <p className="name">미니케이크</p>
          </div>
          <div>
            <div className="img_wrap">
              <img src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210528_125%2F1622212613687XKcgw_JPEG%2FUVj0G8PL6HlsonNQZAXJfNmy.jpg" />
              <FontAwesomeIcon icon={faHeart} className="heart" />
            </div>
            <p className="store">더케익스토리</p>
            <p className="name">미니케이크</p>
          </div>
          <div>
            <div className="img_wrap">
              <img src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210528_125%2F1622212613687XKcgw_JPEG%2FUVj0G8PL6HlsonNQZAXJfNmy.jpg" />
              <FontAwesomeIcon icon={faHeart} className="heart" />
            </div>
            <p className="store">더케익스토리</p>
            <p className="name">미니케이크</p>
          </div>
          <div>
            <div className="img_wrap">
              <img src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210528_125%2F1622212613687XKcgw_JPEG%2FUVj0G8PL6HlsonNQZAXJfNmy.jpg" />
              <FontAwesomeIcon icon={faHeart} className="heart" />
            </div>
            <p className="store">더케익스토리</p>
            <p className="name">미니케이크</p>
          </div>
          <div>
            <div className="img_wrap">
              <img src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210528_125%2F1622212613687XKcgw_JPEG%2FUVj0G8PL6HlsonNQZAXJfNmy.jpg" />
              <FontAwesomeIcon icon={faHeart} className="heart" />
            </div>
            <p className="store">더케익스토리</p>
            <p className="name">미니케이크</p>
          </div>
          <div>
            <div className="img_wrap">
              <img src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210528_125%2F1622212613687XKcgw_JPEG%2FUVj0G8PL6HlsonNQZAXJfNmy.jpg" />
              <FontAwesomeIcon icon={faHeart} className="heart" />
            </div>
            <p className="store">더케익스토리</p>
            <p className="name">미니케이크</p>
          </div>
        </ImageWrap>
      </div>
    </ReactCakeWrap>
  );
};

const ReactCakeWrap = styled.div`
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
`;

const ImageWrap = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 20px;
  gap: 20px;
  margin-top: 10px;

  .img_wrap {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
  }

  img {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    object-fit: cover;
  }

  .heart {
    font-size: 30px;
    color: #ff679e;
    margin-top: 10px;
    position: absolute;
    right: 10px;
  }

  .store {
    margin: 10px 0px;
    color: #282828;
  }

  .name {
    margin-bottom: 10px;
    color: #777;
    font-size: 15px;
  }
`;

export default ReactCake;
