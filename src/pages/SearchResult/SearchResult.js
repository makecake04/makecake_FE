import React, { useState } from "react";
import { useSelector } from "react-redux";

import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreators as searchAction } from "../../redux/modules/search";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

//css
import { Container, SearchWrap, WhiteBackBtn } from "./style";

const SearchResult = () => {
  let _ = require("lodash");
  const dispatch = useDispatch();
  const [selected, setSelected] = React.useState("");
  const [searchInput, setSearchInput] = React.useState("");
  const searchs = useSelector((state) => state.search.list);
  const [sortType, setSortType] = useState("likeCount");
  // console.log("인기순: ", searchs);
  // console.log("리뷰순: ", _.sortBy(searchs, "reviewCnt").reverse());

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
    dispatch(searchAction.searchPlaceDB(selected, searchInput, "null"));
    navigate("/searchDetail");
  };

  return (
    <Container>
      <SearchWrap>
        <div className="back-icon">
          <WhiteBackBtn onClick={() => navigate(-1)} />
        </div>
        <div className="search_wrap">
          <select defaultValue="default" onChange={changeSelectOption}>
            <option value="default" disabled hidden>
              검색옵션
            </option>
            <option value="store">매장</option>
            <option value="address">주소</option>
            <option value="place">핫플</option>
          </select>
          <input
            placeholder="검색 옵션을 선택해주세요!"
            onChange={changeInput}
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="search"
            onClick={() => {
              if (!selected || !searchInput) return;
              mapSearching();
            }}
          />
        </div>
      </SearchWrap>

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

export default SearchResult;
