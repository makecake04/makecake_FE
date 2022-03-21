import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//import css
import { CakeWrap, RightSvg, ImageWrap, ImgBox, StyleSlider } from "./style";

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
      <div>
        <div className="cake_wrap">
          <h3>베스트 메잌케잌 🍰</h3>
          <div className="plus">
            <p
              className="p_wrap"
              onClick={() => {
                navigate(`/cake`);
              }}
            >
              더보기
            </p>
            <RightSvg className="right" />
          </div>
        </div>
        <ImageWrap>
          <StyleSlider {...settings}>
            {cake_list.homeCakeDtoList &&
              cake_list.homeCakeDtoList.map((v, idx) => {
                return (
                  <div key={idx}>
                    <div className="img_wrap">
                      <ImgBox src={v.mainImg} />
                    </div>
                  </div>
                );
              })}
          </StyleSlider>
        </ImageWrap>
        <hr />
      </div>
    </CakeWrap>
  );
};

export default BestCake;
