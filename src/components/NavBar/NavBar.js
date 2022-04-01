import React from "react";

import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

import Swal from "sweetalert2";

//css
import {
  NavWrap,
  SubWrap,
  HomeIcon,
  CakeIcon,
  DrawIcon,
  MypageIcon,
  ColorCakeIcon,
  ColorDesignIcon,
  ColorHomeIcon,
  ColorMypageIcon,
} from "./style";
const NavBar = (props) => {
  const navigate = useNavigate();
  const pathName = window.location.pathname;
  const [activeNav, setActiveNav] = React.useState(
    pathName.split("/")[1] === "" || "home" ? "home" : pathName.split("/")[1]
  );
  const is_session = localStorage.getItem("token");

  React.useEffect(() => {
    if (pathName === "/" || pathName === "/home") {
      setActiveNav("home");
    } else if (pathName === "/cake") {
      setActiveNav("cake");
    } else if (
      pathName === "/design/list" ||
      pathName === "/post/:id" ||
      pathName === "/post/write/:designid" ||
      pathName === "/post/write/:designid/:postid"
    ) {
      setActiveNav("design");
    } else if (
      pathName === "/mypage" ||
      pathName === "/profile/edit" ||
      pathName === "/mydesign"
    ) {
      setActiveNav("mypage");
    }
  }, [pathName]);

  return (
    <>
      <NavWrap>
        <SubWrap>
          {is_session && activeNav === "home" ? (
            <ColorHomeIcon
              onClick={() => {
                navigate("/");
              }}
            />
          ) : is_session && activeNav !== "home" ? (
            <HomeIcon
              onClick={() => {
                navigate(`/`);
              }}
            />
          ) : !is_session && activeNav === "home" ? (
            <ColorHomeIcon
              onClick={() => {
                navigate(`/home`);
              }}
            />
          ) : (
            <HomeIcon
              onClick={() => {
                navigate(`/home`);
              }}
            />
          )}
        </SubWrap>
        <SubWrap>
          {activeNav === "cake" ? (
            <ColorCakeIcon
              onClick={() => {
                navigate(`/cake`);
              }}
            />
          ) : (
            <CakeIcon
              onClick={() => {
                navigate(`/cake`);
              }}
            />
          )}
        </SubWrap>
        <SubWrap>
          {activeNav === "design" ? (
            <ColorDesignIcon
              onClick={() => {
                navigate(`/design/list`);
              }}
            />
          ) : (
            <DrawIcon
              onClick={() => {
                navigate(`/design/list`);
              }}
            />
          )}
        </SubWrap>
        <SubWrap>
          {is_session && activeNav === "mypage" ? (
            <ColorMypageIcon
              onClick={() => {
                navigate(`/mypage`);
              }}
            />
          ) : is_session && activeNav !== "mypage" ? (
            <MypageIcon
              onClick={() => {
                navigate(`/mypage`);
              }}
            />
          ) : (
            <MypageIcon
              onClick={() => {
                Swal.fire({
                  title: "로그인이 필요한 서비스입니다!",
                  showCancelButton: true,
                  confirmButtonText: '<a href="/">로그인 할래요!</a>',
                  confirmButtonColor: "#ff679e",
                  cancelButtonColor: "#777",
                  cancelButtonText: "그냥 둘러볼래요.",
                });
              }}
            />
          )}
        </SubWrap>
      </NavWrap>
      <Outlet />
    </>
  );
};

export default NavBar;
