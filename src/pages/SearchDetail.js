import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../redux/modules/search";

const SearchDetail = () => {
  let _ = require("lodash");
  const dispatch = useDispatch();
  const [selected, setSelected] = React.useState("store");
  const [searchInput, setSearchInput] = React.useState("");
  const searchs = useSelector((state) => state.search.list);
  const [sortType, setSortType] = useState("likeCount");
  console.log("인기순: ", searchs);
  console.log("리뷰순: ", _.sortBy(searchs, "reviewCnt").reverse());

  const navigate = useNavigate();

  const changeSelectOption = (e) => {
    setSelected(e.target.value);
  };

  const changeInput = (e) => {
    setSearchInput(e.target.value);
  };

  const saveInformation = (storeId) => {
    navigate(`/SearchMap/${storeId}`);
  };

  const mapSearching = () => {
    console.log(selected, searchInput);
    dispatch(userActions.searchPlaceF(selected, searchInput, "null"));
    navigate("/searchDetail");
  };

  return (
    <Container>
      <div className="header">
        <svg
          className="direction"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            navigate("/search");
          }}
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="white"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="inputWrap">
          <select className="select" onChange={changeSelectOption}>
            <option>매장</option>
            <option>주소</option>
            <option>핫플레이스</option>
          </select>

          <input
            className="input"
            type="text"
            placeholder="검색하기"
            onChange={changeInput}
          ></input>

          <svg
            onClick={() => {
              mapSearching();
            }}
            className="inputButton"
            width="24"
            height="27"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
              stroke="#777777"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.9999 20.9999L16.6499 16.6499"
              stroke="#777777"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="sortType">
        <div className="star">
          <svg
            width="9"
            height="8"
            viewBox="0 0 9 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.31937 1.63361C3.69098 0.489905 5.30902 0.489905 5.68063 1.63361C5.84682 2.14509 6.32346 2.49139 6.86126 2.49139C8.06383 2.49139 8.56383 4.03024 7.59093 4.73708C7.15584 5.0532 6.97378 5.61352 7.13997 6.125C7.51159 7.26871 6.20256 8.21976 5.22967 7.51292C4.79458 7.1968 4.20542 7.1968 3.77033 7.51292C2.79744 8.21976 1.48842 7.26871 1.86003 6.125C2.02622 5.61352 1.84416 5.0532 1.40907 4.73708C0.436172 4.03024 0.936174 2.49139 2.13874 2.49139C2.67654 2.49139 3.15318 2.14509 3.31937 1.63361Z"
              fill="#B3B3B3"
            />
          </svg>

          <h3
            className="sortLikeAndReview"
            onClick={() => setSortType("likeCount")}
          >
            &nbsp; 인기순
          </h3>
        </div>

        <div className="star">
          <svg
            width="9"
            height="8"
            viewBox="0 0 9 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.31937 1.63361C3.69098 0.489905 5.30902 0.489905 5.68063 1.63361C5.84682 2.14509 6.32346 2.49139 6.86126 2.49139C8.06383 2.49139 8.56383 4.03024 7.59093 4.73708C7.15584 5.0532 6.97378 5.61352 7.13997 6.125C7.51159 7.26871 6.20256 8.21976 5.22967 7.51292C4.79458 7.1968 4.20542 7.1968 3.77033 7.51292C2.79744 8.21976 1.48842 7.26871 1.86003 6.125C2.02622 5.61352 1.84416 5.0532 1.40907 4.73708C0.436172 4.03024 0.936174 2.49139 2.13874 2.49139C2.67654 2.49139 3.15318 2.14509 3.31937 1.63361Z"
              fill="#B3B3B3"
            />
          </svg>

          <h3
            className="sortLikeAndReview"
            onClick={() => setSortType("reviewCount")}
          >
            &nbsp; 리뷰순
          </h3>
        </div>
      </div>

      {/* <div className='line'></div> */}

      {sortType === "likeCount" &&
        searchs.map((v, i) => {
          return (
            <div className="one" key={i}>
              <div>
                <img src={v.mainImg} className="searchView"></img>
              </div>

              <h3
                className="store"
                onClick={() => {
                  saveInformation(v.storeId);
                }}
              >
                {v.name}
              </h3>
              <p className="address">{v.roadAddress}</p>
              <p className="likeAndReview">
                좋아요 {v.likeCnt} &nbsp;&nbsp;&nbsp; 리뷰 {v.reviewCnt}
              </p>
            </div>
          );
        })}
      {sortType === "reviewCount" &&
        _.sortBy(searchs, "reviewCnt")
          .reverse()
          .map((v, i) => {
            return (
              <div className="one" key={i}>
                <div>
                  <img src={v.mainImg} className="searchView"></img>
                </div>

                <h3
                  className="store"
                  onClick={() => {
                    saveInformation(v.storeId);
                  }}
                >
                  {v.name}
                </h3>
                <p className="address">{v.roadAddress}</p>
                <p className="likeAndReview">
                  좋아요 {v.likeCnt} &nbsp;&nbsp;&nbsp; 리뷰 {v.reviewCnt}
                </p>
              </div>
            );
          })}
    </Container>
  );
};

const Container = styled.div`
  .header {
    display: flex;
    width: 100%;
    height: 15vh;
    background-color: #f9c9c9;
  }

  .direction {
    margin-top: 70px;
    margin-left: 20px;
  }

  .inputWrap {
    display: flex;
    border: none;
    width: 75%;
    height: 15vh;
  }

  .select {
    height: 27px;
    margin-top: 77px;
    border: none;
    background-color: #ffffff;
    color: #777777;
    text-align: center;
  }

  .input {
    display: block;
    margin-top: 77px;
    width: 95%;
    height: 27px;
    border: none;
    padding-left: 10px;
    font-size: 13px;
  }

  .inputButton {
    margin-top: 77px;
    background-color: #ffffff;
  }

  .sortType {
    display: flex;
  }

  .star {
    display: flex;
    margin-top: 20px;
    margin-left: 15px;
  }

  .sortLikeAndReview {
    color: #b3b3b3;
    margin-top: -5px;
    font-size: 14px;
  }

  .line {
    border: 1px solid #e4e4e4;
    margin-top: -10px;
  }

  .one {
    border-top: 1px solid #e5e5e5;
    display: flex;
    height: 100px;
    margin-top: 10px;
    margin-bottom: 40px;
  }
  .store {
    display: flex;
    color: #282828;
    width: 340px;
    margin-top: 35px;
    margin-left: 55px;
    font-size: 19px;
    font-weight: bold;
  }

  .address {
    width: 340px;
    color: #9c9cdc;
    font-size: 13px;
    margin-top: 65px;
    margin-left: -224px;
  }

  .likeAndReview {
    width: 200px;
    color: #777777;
    font-size: 13px;
    margin-top: 100px;
    margin-left: -105px;
  }

  .searchView {
    width: 117px;
    height: 89px;
    background: #c4c4c4;
    border-radius: 10px;
    margin-left: 20px;
    margin-top: 30px;
  }
`;

export default SearchDetail;
