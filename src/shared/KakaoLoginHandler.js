import React from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../redux/modules/user";
import Spinner from "../components/Spinner";

const KakaoLoginHandler = (props) => {
  const dispatch = useDispatch();
  let code = new URL(window.location.href).searchParams.get("code");

  React.useEffect(() => {
    const kakaoLogin = async () => {
      await dispatch(userActions.kakaoLoginDB(code));
    };
    kakaoLogin();
  }, []);
  return <Spinner />;
};
export default KakaoLoginHandler;
