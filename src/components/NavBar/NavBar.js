import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";
import Swal from "sweetalert2";

import { actionCreators as storeAction } from "../../redux/modules/store";

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
  const dispatch = useDispatch();
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
    } else if (pathName === "/design/list" || pathName.includes("/post/")) {
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
                dispatch(storeAction.storeDetail([]));
                navigate("/");
              }}
            />
          ) : is_session && activeNav !== "home" ? (
            <HomeIcon
              onClick={() => {
                dispatch(storeAction.storeDetail([]));
                navigate(`/`);
              }}
            />
          ) : !is_session && activeNav === "home" ? (
            <ColorHomeIcon
              onClick={() => {
                dispatch(storeAction.storeDetail([]));
                navigate(`/home`);
              }}
            />
          ) : (
            <HomeIcon
              onClick={() => {
                dispatch(storeAction.storeDetail([]));
                navigate(`/home`);
              }}
            />
          )}
        </SubWrap>
        <SubWrap>
          {activeNav === "cake" ? (
            <ColorCakeIcon
              onClick={() => {
                dispatch(storeAction.storeDetail([]));
                navigate(`/cake`);
              }}
            />
          ) : (
            <CakeIcon
              onClick={() => {
                dispatch(storeAction.storeDetail([]));
                navigate(`/cake`);
              }}
            />
          )}
        </SubWrap>
        <SubWrap>
          {activeNav === "design" ? (
            <ColorDesignIcon
              onClick={() => {
                dispatch(storeAction.storeDetail([]));
                navigate(`/design/list`);
              }}
            />
          ) : (
            <DrawIcon
              onClick={() => {
                dispatch(storeAction.storeDetail([]));
                navigate(`/design/list`);
              }}
            />
          )}
        </SubWrap>
        <SubWrap>
          {is_session && activeNav === "mypage" ? (
            <ColorMypageIcon
              onClick={() => {
                dispatch(storeAction.storeDetail([]));
                navigate(`/mypage`);
              }}
            />
          ) : is_session && activeNav !== "mypage" ? (
            <MypageIcon
              onClick={() => {
                dispatch(storeAction.storeDetail([]));
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
