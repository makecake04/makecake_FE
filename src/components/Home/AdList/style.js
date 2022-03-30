import styled from "styled-components";
import Slider from "react-slick";

export const StoreWrap = styled.div`
  overflow: hidden;
`;

export const SubWrap = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const ImageWrap = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 17px;
  text-align: start;
`;

export const StyleSlider = styled(Slider)`
  width: 100%;

  .slick-list {
    overflow: hidden;
    margin: 0 -10px;
  }

  .slick-slide {
    padding: 0 10px;
  }

  .slick-prev {
    &:before {
      display: none;
    }
    left: 15px !important;
  }

  .slick-next {
    &:before {
      display: none;
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
    bottom: -20px;
    li {
      border: none !important;
      margin: 0;
      width: 15px;
    }

    li button {
      margin: 0;
      padding: 0;
      &:before {
        color: #7d7d7d;
      }
    }
  }
`;

export const HrWrap = styled.hr`
  border: 0.7px solid #e5e5e5;
  width: 100%;
  margin: auto;
`;

export const AdItem = styled.div`
  margin-top: 17px;
  /* background-color: #fee9ee;
  height: 72px;
  width: 100%;
  box-shadow: inset -2px -2px 1px 0px #8b8b8bab;
  padding: 10px; */
  img {
    border-radius: 6px;
  }
  /* text-align: center; */
`;

export const AdTitle = styled.div`
  display: flex;
  color: #282828;
  img {
    padding-right: 5px;
  }
`;

export const Link = styled.a`
  color: #777777;
  font-size: 14px;
  text-decoration: underline;
  text-underline-position: under;
`;
