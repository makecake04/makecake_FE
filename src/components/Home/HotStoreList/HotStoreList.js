import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { actionCreators as storeAction } from "../../../redux/modules/store";

//import css
import {
  StoreWrap,
  SubWrap,
  Title,
  ImageWrap,
  ImagesWrap,
  Images,
  ImgBox,
  Text,
  StyleSlider,
  HrWrap,
} from "./style";

const HotStoreList = (props) => {
  const store_list = useSelector((state) => state.store.list);
  const dispatch = useDispatch();
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
      <SubWrap>
        <Title>핫 매장 리스트 ✨</Title>
        <ImageWrap>
          <StyleSlider {...settings}>
            {store_list.homeStoreDtoList &&
              store_list.homeStoreDtoList.map((v, idx) => {
                return (
                  <ImagesWrap key={idx}>
                    <Images>
                      <ImgBox
                        src={v.mainImg}
                        onClick={() => {
                          dispatch(storeAction.storeDetail([]));
                          navigate(`/storedetail/${v.storeId}`);
                        }}
                      />
                    </Images>
                    <Text>{v.name}</Text>
                  </ImagesWrap>
                );
              })}
          </StyleSlider>
        </ImageWrap>
        <HrWrap />
      </SubWrap>
    </StoreWrap>
  );
};

export default HotStoreList;
