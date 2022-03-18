import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
        <h3>핫 매장 리스트</h3>
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

const StoreWrap = styled.div`
  > div {
    width: 90%;
    margin: 0 auto;
  }
  h3 {
    margin: 20px 0px 10px 0px;
    text-align: start;
    font-weight: 700;
    font-size: 19px;
    color: #282828;
  }

  hr {
    border: 0.7px solid #e5e5e5;
    width: 100%;
    margin: auto;
  }
`;

const ImageWrap = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 20px;
  text-align: start;

  > div {
    flex: 1;
  }
  .img_wrap {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    border-radius: 10px;
    overflow: hidden;
  }

  img {
    position: absolute;
    display: block;
    object-fit: cover;
  }

  .text {
    margin-top: 10px;
    color: #777777;
    font-size: 18px;
  }
`;

const ImgBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${(props) => props.src}) no-repeat center / cover;
`;

const StyleSlider = styled(Slider)`
  width: 100%;

  .slick-list {
    border-radius: 10px;
    overflow: hidden;
    margin: 0 -10px;
  }

  .slick-slide {
    padding: 0 10px;
  }

  .slick-prev {
    &:before {
      color: #212121;
    }
    left: 15px !important;
    z-index: 1;
  }

  .slick-next {
    &:before {
      color: #212121;
    }
    right: 15px !important;
  }

  .slick-initialized .slick-slide {
    & > div {
      display: flex;
    }
  }

  .slick-dots {
    display: flex !important;
    justify-content: center;
    bottom: auto;
    li {
      border: none !important;
    }

    li button {
      margin: 0;
      padding: 0;
      &:before {
        color: #fff;
      }
    }
  }
`;

export default HotStoreList;
