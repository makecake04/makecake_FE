import React from "react";

import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

//css
import { NavWrap, HomeIcon, CakeIcon, DrawIcon, MypageIcon } from "./style";
const NavBar = (props) => {
  const navigate = useNavigate();
  const url_param = window.location.pathname;
  const [activeNav, setActiveNav] = React.useState(url_param);
  const is_session = localStorage.getItem("token");
  return (
    <>
      <NavWrap>
        <div>
          {is_session && (
            <HomeIcon
              onClick={() => {
                setActiveNav((prevUrl) => (prevUrl = `/`));
                navigate(`/`);
              }}
              className={activeNav === `/` ? "active" : "nav-item"}
            />
          )}
          {!is_session && (
            <HomeIcon
              onClick={() => {
                setActiveNav((prevUrl) => (prevUrl = `/home`));
                navigate(`/home`);
              }}
              className={activeNav === `/home` ? "active" : "nav-item"}
            />
          )}
        </div>
        <div>
          <CakeIcon
            onClick={() => {
              setActiveNav((prevUrl) => (prevUrl = `/cake`));
              navigate(`/cake`);
            }}
            className={activeNav === `/cake` ? "active" : "nav-item"}
          />
        </div>
        <div>
          <DrawIcon
            onClick={() => {
              setActiveNav((prevUrl) => (prevUrl = `/design/list`));
              navigate(`/design/list`);
            }}
            className={activeNav === `/design/list` ? "active" : "nav-item"}
          />
        </div>
        <div>
          <MypageIcon
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

export default NavBar;
