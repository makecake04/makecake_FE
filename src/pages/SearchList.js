import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const SearchList = (props) => {
  const navigate = useNavigate();

  return (
    <SListWrap>
      <HWrap>
        <div
          className="angleWrap"
          onClick={() => {
            navigate(`/search`);
          }}
        >
          <FontAwesomeIcon icon={faAngleLeft} className="angle-left" />
        </div>
        <div
          className="search_wrap"
          onClick={() => {
            navigate(`/search`);
          }}
        >
          <FontAwesomeIcon icon={faSearch} className="search" />
          <input placeholder="검색하기" />
        </div>
      </HWrap>
      <h3>강남구 신사동</h3>
    </SListWrap>
  );
};

const SListWrap = styled.div`
  h3 {
    margin: 10px 0px 10px 10px;
    text-align: start;
    font-weight: 400;
    font-size: 16px;
    color: #282828;
  }
`;

const HWrap = styled.div`
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

  .angleWrap {
    display: flex;
    align-items: center;
    width: 35px;
    height: 35px;
  }

  .angle-left {
    color: #fff;
  }

  .search {
    color: #777777;
    margin-left: 5px;
  }

  input {
    width: 70%;
    padding: 8px 10px;
    box-sizing: border-box;
    border: none;
    color: #777777;
  }
`;

export default SearchList;
