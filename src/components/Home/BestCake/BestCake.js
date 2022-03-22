import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//import css
import {
  CakeWrap,
  SubWrap,
  CakesWrap,
  TitleWrap,
  PlusWrap,
  Pwrap,
  RightSvg,
  ImageWrap,
  ImagesWrap,
  Images,
  ImgBox,
  StyleSlider,
  HrWrap,
} from "./style";

const BestCake = (props) => {
  const navigate = useNavigate();
  const cake_list = useSelector((state) => state.store.list);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <CakeWrap>
      <SubWrap>
        <CakesWrap>
          <TitleWrap>베스트 메잌케잌 🍰</TitleWrap>
          <PlusWrap>
            <Pwrap
              onClick={() => {
                navigate(`/cake`);
              }}
            >
              더보기
            </Pwrap>
            <RightSvg />
          </PlusWrap>
        </CakesWrap>
        <ImageWrap>
          <StyleSlider {...settings}>
            {cake_list.homeCakeDtoList &&
              cake_list.homeCakeDtoList.map((v, idx) => {
                return (
                  <ImagesWrap key={idx}>
                    <Images>
                      <ImgBox src={v.mainImg} />
                    </Images>
                  </ImagesWrap>
                );
              })}
          </StyleSlider>
        </ImageWrap>
        <HrWrap />
      </SubWrap>
    </CakeWrap>
  );
};

export default BestCake;
