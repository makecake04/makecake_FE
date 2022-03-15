import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

const SearchDetail = (props) => {
  const navigate = useNavigate();
  const [selected, setSelected] = React.useState("");

  const changeSelectOption = (e) => {
    setSelected(e.target.value);
  };

  return (
    <SDetailWrap>
      <HeaderWrap>
        <div className="search_wrap">
          <select onChange={changeSelectOption}>
            <option>매장</option>
            <option>주소</option>
            <option>핫플</option>
          </select>
          <input placeholder="검색하기" />
          <FontAwesomeIcon
            icon={faSearch}
            className="search"
            onClick={() => {
              navigate(`/result`);
            }}
          />
        </div>
        <div className="notice_wrap">
          <FontAwesomeIcon icon={faBell} className="bell" />
        </div>
      </HeaderWrap>
      <h3>추천 검색어</h3>
      <p>매장 검색</p>
      <button>터틀힙</button>
      <button>래빗힙</button>
      <button className="benny">베니케이크</button>
      <button className="the">더케이크스토리</button>
      <p className="address">주소 검색</p>
      <button>논현동</button>
      <button className="gangnam">강남구 신사동</button>
      <button>서초구</button>
      <button>서울시</button>
      <p className="place">플레이스 검색</p>
      <button className="garosu">가로수길</button>
      <button className="culture">동대문역사문화공원역</button>
      <button>서울숲</button>
    </SDetailWrap>
  );
};

const SDetailWrap = styled.div`
  h3 {
    margin: 100px 0px 10px 20px;
    text-align: start;
    font-weight: 700;
    font-size: 16px;
    color: #282828;
  }

  p {
    margin: 60px 0px 10px 20px;
    text-align: center;
  }

  button {
    margin: 10px 0px 10px 10px;
    width: 70px;
    height: 32px;
    border-radius: 15px;
    font-weight: 400;
    font-size: 13px;
  }

  .benny {
    margin: 10px 0px 10px 10px;
    width: 87px;
    height: 32px;
    border-radius: 15px;
    font-weight: 400;
    font-size: 13px;
  }

  .the {
    margin: 10px 0px 10px 10px;
    width: 115px;
    height: 32px;
    border-radius: 15px;
    font-weight: 400;
    font-size: 13px;
  }

  .address {
    margin: 40px 0px 10px 20px;
    text-align: center;
  }

  .gangnam {
    margin: 10px 0px 10px 10px;
    width: 115px;
    height: 32px;
    border-radius: 15px;
    font-weight: 400;
    font-size: 13px;
  }

  .place {
    margin: 40px 0px 10px 20px;
    text-align: center;
  }

  .garosu {
    margin: 10px 10px 10px 10px;
    width: 80px;
    height: 32px;
    border-radius: 15px;
    font-weight: 400;
    font-size: 13px;
  }

  .culture {
    margin: 10px 10px 10px 10px;
    width: 160px;
    height: 32px;
    border-radius: 15px;
    font-weight: 400;
    font-size: 13px;
  }
`;

const HeaderWrap = styled.div`
  padding: 20px;
  padding-top: 40px;
  background-color: #f9c9c9;
  display: flex;
  position: relative;
  justify-content: space-between;

  .search_wrap {
    display: flex;
    width: 85%;
    border-radius: 10px;
    border: 1px solid #ebebeb;
    background-color: #fff;
    align-items: center;
  }

  select {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border: none;
    background-color: #fff;
    color: #777777;
  }

  input {
    width: 75%;
    padding: 8px 10px;
    box-sizing: border-box;
    border: none;
    border-right: 1px solid #ebebeb;
    border-left: 1px solid #ebebeb;
    background-color: #fff;
    color: #777777;
  }

  .search {
    color: #777777;
    margin: 0 10px;
  }

  .notice_wrap {
    display: felx;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    border-radius: 35px;
    border: 1px solid #ebebeb;
    background-color: #fff;
  }

  .bell {
    color: #ff679e;
  }
`;

export default SearchDetail;
