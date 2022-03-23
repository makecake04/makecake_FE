import styled from "styled-components";
import { ReactComponent as HomeSvg } from "../../assets/images/nav-bar/home.svg";

//image
import { cake, design, home, mypage } from "../../assets/images/image";

export const NavWrap = styled.nav`
  width: 100%;
  height: 60px;
  position: absolute;
  bottom: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #f3f3f3;

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
  background-color: #fafafa;
  height: 60px;
  line-height: 60px;
`;

export const HomeIcon = styled(HomeSvg)`
  ${(props) =>
    props.activNav &&
    `
path {
  stroke: #ff679e;
}
path:last-of-type {
  fill: #ff679e;
  stroke: none;
}
`}
  path {
    stroke: #dadada;
  }
  path:last-of-type {
    fill: #dadada;
    stroke: none;
  }
`;
export const CakeIcon = styled.img.attrs({
  src: `${cake}`,
})``;
export const DrawIcon = styled.img.attrs({
  src: `${design}`,
})``;
export const MypageIcon = styled.img.attrs({
  src: `${mypage}`,
})``;
