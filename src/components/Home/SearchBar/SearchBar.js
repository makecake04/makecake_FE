import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { actionCreators as notiAction } from "../../../redux/modules/noti";

//css
import {
  SearchWrap,
  Search,
  NotiIcon,
  SearchIcon,
  NotiCheckDot,
} from "./style";

const SearchBar = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.user.is_login);
  const notiData = useSelector((state) => state.noti.checked);

  useEffect(() => {
    if (isLogin) {
      dispatch(notiAction.getNewNotiDB());
    }
  }, [isLogin]);

  return (
    <SearchWrap>
      <Search
        onClick={() => {
          navigate("/search");
        }}
      >
        <input type="text" placeholder="검색하기" />
        <SearchIcon />
      </Search>

      {!notiData && <NotiCheckDot />}

      <NotiIcon
        onClick={() => {
          navigate("/noti");
        }}
      />
    </SearchWrap>
  );
};

export default SearchBar;
