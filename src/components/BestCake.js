import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ReactComponent as RightSvg } from "../svg/right.svg";

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
          <h3>베스트 메잌케잌</h3>
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

const CakeWrap = styled.div`
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

  .cake_wrap {
    display: flex;
    justify-content: space-between;
  }

  .p_wrap {
    margin: 10px 0px 10px 0px;
    color: #777;
    font-size: 15px;
  }

  .plus {
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
  position: relative;

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
    right: 15px !important;
    &:before {
      color: #212121;
    }
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

export default BestCake;
