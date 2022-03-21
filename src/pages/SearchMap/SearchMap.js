import React, { useState } from "react";

import { RenderAfterNavermapsLoaded } from "react-naver-maps";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { actionCreators as searchAction } from "../../redux/modules/search";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import { ReactComponent as BackIcon } from "../svg/fi_chevron-left.svg";

//component
import { KakaoMap } from "../../components/component";

//css
import { Container, SearchWrap, BackIcon } from "./style";

const SearchMap = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [placeInput, setPlaceInput] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selected, setSelected] = React.useState("store");
  const [searchInput, setSearchInput] = React.useState("");

  const storeId = useParams().storeId;
  console.log(storeId);

  const onSearchKeywordChange = (e) => {
    setPlaceInput(e.target.value);
  };

  const searchPlace = () => {
    setSearchKeyword(placeInput);
  };

  const changeSelectOption = (e) => {
    setSelected(e.target.value);
  };

  const changeInput = (e) => {
    setSearchInput(e.target.value);
  };

  const searchs = useSelector((state) => state.search.list);
  console.log(searchs);

  const storeData = searchs.filter((a) => a.storeId === +storeId);
  console.log(storeData);

  const mapSearching = () => {
    console.log(selected, searchInput);
    dispatch(searchAction.searchPlaceDB(selected, searchInput, "null"));
    navigate("/searchDetail");
  };

  return (
    <Container>
      <SearchWrap>
        <div className="back-icon">
          <BackIcon onClick={() => navigate(-1)} />
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

      <KakaoMap />

      {storeData.map((v, i) => {
        return (
          <div
            className="storeInformation"
            key={i}
            onClick={() => {
              navigate(`/storedetail/${storeId}`);
            }}
          >
            <div>
              <img src={v.mainImg} className="img"></img>
            </div>

            <h3 className="store">{v.name}</h3>
            <p className="addressAndOpneClose">{v.addressSimple}</p>
            <p className="likeAndReview">
              좋아요 {v.likeCnt} &nbsp;&nbsp;&nbsp; 리뷰 {v.reviewCnt}
            </p>
          </div>
        );
      })}
    </Container>
  );
};

export default SearchMap;
