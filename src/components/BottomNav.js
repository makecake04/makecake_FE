import React from "react";
import styled from "styled-components";
import { ReactComponent as CakeSvg } from "../svg/cake.svg";
import { ReactComponent as HomeSvg } from "../svg/home.svg";
import { ReactComponent as DrawSvg } from "../svg/draw.svg";
import { ReactComponent as MypageSvg } from "../svg/mypage.svg";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const BottomNav = (props) => {
  const navigate = useNavigate();
  const url_param = window.location.pathname;
  const [activeNav, setActiveNav] = React.useState(url_param);
  const is_session = localStorage.getItem("token");
  return (
    <>
      <NavWrap>
        <div>
          {is_session && (
            <HomeSvg
              onClick={() => {
                setActiveNav((prevUrl) => (prevUrl = `/`));
                navigate(`/`);
              }}
              className={activeNav === `/` ? "active" : "nav-item"}
            />
          )}
          {!is_session && (
            <HomeSvg
              onClick={() => {
                setActiveNav((prevUrl) => (prevUrl = `/home`));
                navigate(`/home`);
              }}
              className={activeNav === `/home` ? "active" : "nav-item"}
            />
          )}
        </div>
        <div>
          <CakeSvg
            onClick={() => {
              setActiveNav((prevUrl) => (prevUrl = `/cake`));
              navigate(`/cake`);
            }}
            className={activeNav === `/cake` ? "active" : "nav-item"}
          />
        </div>
        <div>
          <DrawSvg
            onClick={() => {
              setActiveNav((prevUrl) => (prevUrl = `/draw`));
              navigate(`/draw`);
            }}
            className={activeNav === `/draw` ? "active" : "nav-item"}
          />
        </div>
        <div>
          <MypageSvg
            onClick={() => {
              setActiveNav((prevUrl) => (prevUrl = `/mypage`));
              navigate(`/mypage`);
            }}
            className={activeNav === `/mypage` ? "active" : "nav-item"}
          />
        </div>
      </NavWrap>
      <Outlet />
    </>
  );
};

const NavWrap = styled.nav`
  overflow: hidden;
  position: absolute;
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

export default BottomNav;
