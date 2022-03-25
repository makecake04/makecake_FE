import { CheckRounded } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { actionCreators as notiAction } from "../../../redux/modules/noti";
import { useDispatch } from "react-redux";

//import css
import { SearchWrap, Search, NotiIcon, SearchIcon, NotiCheckDot } from "./style";

const SearchBar = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.user.is_login)
  const notiData = useSelector((state) => state.noti.checked)
  console.log(notiData)

  useEffect(() => {
  if(isLogin) {
    dispatch(notiAction.getNewNotiDB())
  }
  },[isLogin])

  return (
    <SearchWrap>
      <Search
        onClick={() => {
          navigate("/search");
        }}
      >
        <input placeholder="검색하기" />
        <SearchIcon />
      </Search>
      
      {/* {!notiCheck &&  } */}
      {!notiData && <NotiCheckDot/>}
      
      <NotiIcon onClick={() => {navigate("/noti");}}/>
      
    </SearchWrap>
    
  );
};

export default SearchBar;
