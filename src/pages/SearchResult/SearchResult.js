import React, { useState } from "react";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreators as searchAction } from "../../redux/modules/search";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

//css
import {
  Container,
  HeaderWrap,
  WhiteBackButton,
  Searchgwrap,
  Select,
  Option,
  Input,
  SearchIcon,
  SortType,
  LikeWrap,
  SortPopular,
  ReviewWrap,
  SortReview,
  StoreInfoWrap,
  ImageWrap,
  Img,
  StoreInfo,
  StoreName,
  Address,
  LikeAndReview,
} from "./style";

//import svg
import { ReactComponent as StarIcon } from "../../assets/images/home/star-icon.svg";

const SearchResult = (props) => {
  let _ = require("lodash");
  const dispatch = useDispatch();
  const [selected, setSelected] = React.useState("");
  const [searchInput, setSearchInput] = React.useState("");
  const searchs = useSelector((state) => state.search.list);
  const [sortType, setSortType] = useState("likeCount");
  const [review, setReview] = useState(false);

  const _searchSelect = useParams().searchSelect;
  const _searchInput = useParams().searchInput;

  const navigate = useNavigate();

  const changeSelectOption = (e) => {
    setSelected(e.target.value);
  };

  const changeInput = (e) => {
    setSearchInput(e.target.value);
  };

  const saveInformation = (storeId) => {
    navigate(`/searchmap/${storeId}`);
  };

  const mapSearching = () => {
    if (!selected && searchInput) {
      Swal.fire({
        title: "검색 옵션을 먼저 골라주세요!",
        showCancelButton: false,
        confirmButtonText: "네!",
        confirmButtonColor: "#ff679e",
      });
      return;
    } else if (selected && !searchInput) {
      Swal.fire({
        title: "검색값을 입력해주세요!",
        showCancelButton: false,
        confirmButtonText: "네!",
        confirmButtonColor: "#ff679e",
      });
      return;
    } else if (!selected && !searchInput) {
      Swal.fire({
        title: "검색 옵션을 고르시고, 검색값을 입력해주세요!",
        showCancelButton: false,
        confirmButtonText: "네!",
        confirmButtonColor: "#ff679e",
      });
      return;
    }
    dispatch(searchAction.searchPlaceDB(selected, searchInput, "null"));
    navigate(`/search/result/${selected}/${searchInput}`);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      mapSearching();
    }
  };

  React.useEffect(() => {
    dispatch(searchAction.searchPlaceDB(_searchSelect, _searchInput, "null"));
  }, [_searchSelect, _searchInput]);

  return (
    <Container>
      <HeaderWrap>
        <WhiteBackButton
          onClick={() => {
            navigate("/search");
          }}
        />
        <Searchgwrap>
          <Select defaultValue="default" onChange={changeSelectOption}>
            <Option value="default" disabled hidden>
              검색옵션
            </Option>
            <Option value="store">매장</Option>
            <Option value="address">주소</Option>
            <Option value="place">플레이스</Option>
          </Select>
          <Input
            placeholder="검색 옵션을 선택해주세요!"
            onChange={changeInput}
            onKeyPress={onKeyPress}
          />
          <SearchIcon
            onClick={() => {
              mapSearching();
            }}
          />
        </Searchgwrap>
      </HeaderWrap>

      <SortType>
        <LikeWrap on={!review && true}>
          <StarIcon />
          <SortPopular
            onClick={() => {
              setSortType("likeCount");
              setReview(false);
            }}
            on={!review && true}
          >
            &nbsp; 인기순
          </SortPopular>
        </LikeWrap>

        <ReviewWrap on={review && true}>
          <StarIcon />
          <SortReview
            onClick={() => {
              setSortType("reviewCount");
              setReview(true);
            }}
            on={review && true}
          >
            &nbsp; 리뷰순
          </SortReview>
        </ReviewWrap>
      </SortType>

      {sortType === "likeCount" &&
        searchs.map((v, i) => {
          return (
            <StoreInfoWrap key={i}>
              <ImageWrap>
                <Img
                  src={v.mainImg}
                  onClick={() => {
                    saveInformation(v.storeId);
                  }}
                ></Img>
              </ImageWrap>

              <StoreInfo>
                <StoreName
                  onClick={() => {
                    saveInformation(v.storeId);
                  }}
                >
                  {v.name}
                </StoreName>
                <Address>{v.roadAddress}</Address>
              </StoreInfo>

              <LikeAndReview>
                좋아요 {v.likeCnt} &nbsp;&nbsp;&nbsp; 리뷰 {v.reviewCnt}
              </LikeAndReview>
            </StoreInfoWrap>
          );
        })}
      {sortType === "reviewCount" &&
        _.sortBy(searchs, "reviewCnt")
          .reverse()
          .map((v, i) => {
            return (
              <StoreInfoWrap key={i}>
                <ImageWrap>
                  <Img src={v.mainImg}></Img>
                </ImageWrap>

                <StoreInfo>
                  <StoreName
                    onClick={() => {
                      saveInformation(v.storeId);
                    }}
                  >
                    {v.name}
                  </StoreName>
                  <Address>{v.roadAddress}</Address>
                </StoreInfo>

                <LikeAndReview>
                  좋아요 {v.likeCnt} &nbsp;&nbsp;&nbsp; 리뷰 {v.reviewCnt}
                </LikeAndReview>
              </StoreInfoWrap>
            );
          })}
    </Container>
  );
};

export default SearchResult;
