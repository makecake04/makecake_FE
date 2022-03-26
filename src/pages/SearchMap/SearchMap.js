import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { actionCreators as searchAction } from "../../redux/modules/search";
import { useEffect } from "react";

//component
import { KakaoMap } from "../../components/component";

//css
import {
  Container,
  HeaderWrap,
  WhiteBackButton,
  SearchWrap,
  Select,
  Option,
  Input,
  SearchIcon,
  StoreInfoWrap,
  ImgWrap,
  Img,
  StoreInfo,
  StoreName,
  Address,
  LikeAndReview,
} from "./style";

const SearchMap = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [placeInput, setPlaceInput] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selected, setSelected] = React.useState("store");
  const [searchInput, setSearchInput] = React.useState("");
  // const [focusId, setFocusId] = useState(null);

  const storeId = useParams().storeId;
  console.log(storeId);

  // const _mapLat = useParams().mapLat;
  // const _mapLon = useParams().mapLon;

  // const onChnageFocusId = focusId => {
  //   setFocusId(focusId);
  // };

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
    dispatch(searchAction.searchPlaceDB(selected, searchInput, "null"));
    navigate(`/search/result/${selected}/${searchInput}`);
  };

  useEffect(() => {
    if (searchs.length === 0) {
      dispatch(searchAction.mapInfoDB(storeId));
    }
  }, [searchs]);

  return (
    <Container>
      <HeaderWrap>
        <WhiteBackButton
          onClick={() => {
            navigate(-1);
          }}
        />
        <SearchWrap>
          <Select defaultValue="default" onChange={changeSelectOption}>
            <Option value="default" disabled hidden>
              검색옵션
            </Option>
            <Option value="store">매장</Option>
            <Option value="address">주소</Option>
            <Option value="place">핫플</Option>
          </Select>
          <Input
            placeholder="검색 옵션을 선택해주세요!"
            onChange={changeInput}
          />
          <SearchIcon
            onClick={() => {
              if (!selected || !searchInput) return;
              mapSearching();
            }}
          />
        </SearchWrap>
      </HeaderWrap>

      <KakaoMap />

      {storeData.map((v, i) => {
        return (
          <StoreInfoWrap
            key={i}
            onClick={() => {
              navigate(`/storedetail/${storeId}`);
            }}
          >
            <ImgWrap>
              <Img src={v.mainImg}></Img>
            </ImgWrap>

            <StoreInfo>
              <StoreName>{v.name}</StoreName>
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

export default SearchMap;
