import styled from "styled-components";

//image
import {
  cake,
  design,
  home,
  mypage,
  color_cake,
  color_design,
  color_home,
  color_mypage,
} from "../../assets/images/image";

export const NavWrap = styled.nav`
  max-width: 390px;
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #f3f3f3;
  z-index: 10;

  svg {
    padding: 3px 3px;
  }

  .nav-item {
    path {
      stroke: #dadada;
    }
    path:last-of-type {
      fill: #dadada;
      stroke: none;
    }
  }

  .active {
    path {
      stroke: #ff679e;
    }
    path:last-of-type {
      fill: #ff679e;
      stroke: none;
    }
  }
`;

export const SubWrap = styled.div`
  text-align: center;
  float: left;
  width: 25%;
  padding-top: 5px;
  background-color: #f5f5f5;
  height: 60px;
  line-height: 60px;
`;

export const HomeIcon = styled.img.attrs({
  src: `${home}`,
})``;
export const CakeIcon = styled.img.attrs({
  src: `${cake}`,
})``;
export const DrawIcon = styled.img.attrs({
  src: `${design}`,
})``;
export const MypageIcon = styled.img.attrs({
  src: `${mypage}`,
})``;
export const ColorCakeIcon = styled.img.attrs({
  src: `${color_cake}`,
})``;
export const ColorHomeIcon = styled.img.attrs({
  src: `${color_home}`,
})``;
export const ColorDesignIcon = styled.img.attrs({
  src: `${color_design}`,
})``;
export const ColorMypageIcon = styled.img.attrs({
  src: `${color_mypage}`,
})``;
