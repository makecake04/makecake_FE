import React from "react";

import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

//import css
import { SearchWrap, Search, NotiIcon } from "./style";

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
        <FontAwesomeIcon icon={faSearch} />
      </Search>
      <NotiIcon />
    </SearchWrap>
  );
};

export default SearchBar;
