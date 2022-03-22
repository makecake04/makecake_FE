import styled from "styled-components";
import Slider from "react-slick";

//image
import { swiper_arrow } from "../../../assets/images/image";

export const CakeWrap = styled.div``;

export const SubWrap = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const CakesWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TitleWrap = styled.h3`
  margin: 20px 0px 10px 0px;
  text-align: start;
  font-weight: 700;
  font-size: 19px;
  color: #282828;
`;

export const PlusWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Pwrap = styled.p`
  margin: 10px 0px 10px 0px;
  color: #777;
  font-size: 15px;
`;

export const RightSvg = styled.img`
  src: ${swiper_arrow};
  width: 18px;
  height: 18px;
  path {
    stroke: #777;
  }
`;

export const ImageWrap = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 20px;
  text-align: start;
`;

export const ImagesWrap = styled.div`
  flex: 1;
`;

export const Images = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  border-radius: 10px;
  overflow: hidden;
`;

export const ImgBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${(props) => props.src}) no-repeat center / cover;
  object-fit: cover;
`;

export const StyleSlider = styled(Slider)`
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

export const HrWrap = styled.hr`
  border: 0.7px solid #e5e5e5;
  width: 100%;
  margin: auto;
`;
