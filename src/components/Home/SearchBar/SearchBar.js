import React from "react";
import { useNavigate } from "react-router-dom";

//import css
import { SearchWrap, Search, NotiIcon, SearchIcon } from "./style";

const SearchBar = (props) => {
  const navigate = useNavigate();

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
      <NotiIcon onClick={() => navigate("/noti")} />
    </SearchWrap>
  );
};

export default SearchBar;
