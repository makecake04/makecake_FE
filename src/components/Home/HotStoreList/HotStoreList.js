import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//import css
import { StoreWrap, ImageWrap, ImgBox, StyleSlider } from "./style";

const HotStoreList = (props) => {
  const store_list = useSelector((state) => state.store.list);
  const storeId = store_list.homeStoreDtoList;
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <StoreWrap>
      <div>
        <h3>핫 매장 리스트 ✨</h3>
        <ImageWrap>
          <StyleSlider {...settings}>
            {store_list.homeStoreDtoList &&
              store_list.homeStoreDtoList.map((v, idx) => {
                return (
                  <div key={idx}>
                    <div className="img_wrap">
                      <ImgBox
                        src={v.mainImg}
                        onClick={() => {
                          navigate(`/storedetail/${v.storeId}`);
                        }}
                      />
                    </div>
                    <div className="text">{v.name}</div>
                  </div>
                );
              })}
          </StyleSlider>
        </ImageWrap>
        <hr />
      </div>
    </StoreWrap>
  );
};

export default HotStoreList;
