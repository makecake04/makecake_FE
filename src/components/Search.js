import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

const Search = (props) => {
  const navigate = useNavigate();

  return (
    <SearchWrap>
      <div
        className="search_wrap"
        onClick={() => {
          navigate(`/search`);
        }}
      >
        <FontAwesomeIcon icon={faSearch} className="search" />
        <input placeholder="검색하기" />
      </div>
      <div className="notice_wrap">
        <FontAwesomeIcon icon={faBell} className="bell" />
      </div>
    </SearchWrap>
  );
};

const SearchWrap = styled.div`
  padding: 20px;
  padding-top: 40px;
  background-color: #f9c9c9;
  display: flex;
  justify-content: space-between;
  position: relative;

  .search_wrap {
    display: flex;
    align-items: center;
    flex: auto;
    margin-right: 10px;
    border-radius: 10px;
    border: 1px solid #ebebeb;
    background-color: #fff;
  }

  .search {
    color: #777777;
    margin-left: 5px;
  }

  input {
    width: 85%;
    padding: 8px 10px;
    box-sizing: border-box;
    border: none;
    color: #777777;
  }

  .notice_wrap {
    display: felx;
    align-items: center;
    justify-content: center;
    width: 35px;
    heigth: 35px;
    border-radius: 35px;
    border: 1px solid #ebebeb;
    background-color: #fff;
  }

  .bell {
    color: #ff679e;
  }
`;

export default Search;
