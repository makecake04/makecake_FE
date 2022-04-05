import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

//image
import { ad1, ad2, ad3 } from "../../../assets/images/image";

//css
import {
  StoreWrap,
  SubWrap,
  ImageWrap,
  AdItem,
  StyleSlider,
  HrWrap,
} from "./style";

const AdList = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
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
              <img
                src={ad1}
                alt="ad1"
                onClick={() => {
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLScNkit7VzuKf3iKSFr0axrRvs86UWO7VCZLpKcEraViCPKsJQ/viewform?usp=sf_link"
                  );
                }}
              />
            </AdItem>
            <AdItem>
              <img
                src={ad2}
                alt="ad2"
                onClick={() => {
                  window.open("https://www.instagram.com/__makecake/");
                }}
              />
            </AdItem>
            <AdItem>
              <img
                src={ad3}
                alt="ad3"
                onClick={() => {
                  navigate("/order/guide");
                }}
              />
            </AdItem>
          </StyleSlider>
        </ImageWrap>
        <HrWrap />
      </SubWrap>
    </StoreWrap>
  );
};

export default AdList;
