import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userAction } from "../../../redux/modules/user";
import Spinner from "../../Spinner/Spinner";

const KakaoLoginHandler = (props) => {
  const dispatch = useDispatch();
  let code = new URL(window.location.href).searchParams.get("code");

  React.useEffect(() => {
    const kakaoLogin = async () => {
      await dispatch(userAction.kakaoLoginDB(code));
    };
    kakaoLogin();
  }, []);
  return <Spinner />;
};
export default KakaoLoginHandler;
