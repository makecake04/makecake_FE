import styled from "styled-components";

//image
import { cake, design, home, mypage } from "../../assets/images/image";

export const NavWrap = styled.nav`
  overflow: hidden;
  position: fixed;
  z-index: 1;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  border-top: 1px #fafafa;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #fafafa;
  /* box-shadow: 0px 3px 8px rgba(152, 153, 150, 0.3); */

  > div {
    text-align: center;
    float: left;
    width: 25%;
    margin-top: 5px;
    background-color: #fafafa;
    height: 60px;
    line-height: 60px;
  }

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
