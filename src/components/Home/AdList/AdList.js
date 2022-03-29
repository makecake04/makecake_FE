import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//image
import { event } from "../../../assets/images/image";

//css
import {
  StoreWrap,
  SubWrap,
  ImageWrap,
  AdItem,
  StyleSlider,
  HrWrap,
  AdTitle,
  Link,
} from "./style";

const AdList = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <StoreWrap>
      <SubWrap>
        <ImageWrap>
          <StyleSlider {...settings}>
            <AdItem>
              <AdTitle>
                <img src={event} alt="event" />
                <p>😘&nbsp; 기프티콘 & 2만원 페이백을 드려요!</p>
              </AdTitle>
              <Link
                href="https://www.instagram.com/__makecake/"
                target="_blank"
              >
                👉🏻이벤트 참여 방법 보러가기
              </Link>
            </AdItem>
            <AdItem>
              <AdTitle>
                <img src={event} alt="event" />
                <p>&nbsp;설문 참여하고 기프티콘 받아가세요!☕️ </p>
              </AdTitle>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLScNkit7VzuKf3iKSFr0axrRvs86UWO7VCZLpKcEraViCPKsJQ/viewform?usp=sf_link"
                target="_blank"
              >
                👉🏻설문 참여하러 가기
              </Link>
            </AdItem>
            <AdItem>
              <AdTitle>
                <img src={event} alt="event" />
                <p>&nbsp;주문하기 기능을 이용해보세요💸️ </p>
              </AdTitle>
              <Link
                onClick={() => {
                  navigate("/order");
                }}
              >
                👉🏻주문하기 기능 안내 보기
              </Link>
            </AdItem>
          </StyleSlider>
        </ImageWrap>
        <HrWrap />
      </SubWrap>
    </StoreWrap>
  );
};

export default AdList;
