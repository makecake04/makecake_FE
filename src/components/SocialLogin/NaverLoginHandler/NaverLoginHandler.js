import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userAction } from "../../../redux/modules/user";
import Spinner from "../../Spinner/Spinner";

const NaverLoginHandler = (props) => {
  const dispatch = useDispatch();

  let code = new URL(window.location.href).searchParams.get("code");
  let state = new URL(window.location.href).searchParams.get("state");

  React.useEffect(() => {
    const naverLogin = async () => {
      await dispatch(userAction.naverLoginDB(code, state));
    };
    naverLogin();
  }, []);

  return <Spinner />;
};

export default NaverLoginHandler;
