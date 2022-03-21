import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as searchAction } from "../../redux/modules/search";

//css
import { SDetailWrap, SearchWrap, Bell } from "./style";

const Search = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selected, setSelected] = React.useState("");
  const [searchInput, setSearchInput] = React.useState("");
  const searchResult = useSelector((state) => state.search.list);

  const changeSelectOption = (e) => {
    setSelected(e.target.value);
  };

  const changeInput = (e) => {
    setSearchInput(e.target.value);
  };

  const mapSearching = () => {
    console.log(selected, searchInput);
    dispatch(searchAction.searchPlaceDB(selected, searchInput, "null"));
    navigate("/searchDetail");
  };

  return (
    <SDetailWrap>
      <SearchWrap>
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

        <Bell className="bell" />
      </SearchWrap>
      <div className="emptySpace"></div>
      <div className="container">
        <div className="commend">플레이스 추천</div>
        <div className="oneList">
          <div className="one_one">터틀힙</div>
          <div className="one_two">래빗힙</div>
          <div className="one_three">베니케이크</div>
        </div>

        <div className="twoList">
          <div className="one_four">더케이크스토리</div>
          <div className="one_five">두두케이크</div>
        </div>
      </div>

      <div className="container">
        <div className="commend">매장 추천</div>
        <div className="oneList">
          <div className="two_one">터틀힙</div>
          <div className="two_two">래빗힙</div>
          <div className="two_three">베니케이크</div>
        </div>

        <div className="twoList">
          <div className="two_four">더케이크스토리</div>
          <div className="two_five">두두케이크</div>
        </div>
      </div>

      <div className="container">
        <div className="commend">주소 추천</div>
        <div className="oneList">
          <div className="three_one">터틀힙</div>
          <div className="three_two">래빗힙</div>
          <div className="three_three">베니케이크</div>
        </div>

        <div className="twoList">
          <div className="three_four">더케이크스토리</div>
          <div className="three_five">두두케이크</div>
        </div>
      </div>
    </SDetailWrap>
  );
};

export default Search;
