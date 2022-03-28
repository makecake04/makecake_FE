import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { actionCreators as searchAction } from "../../redux/modules/search";
import Swal from "sweetalert2";

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
  const [selected, setSelected] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const storeId = useParams().storeId;

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

  useEffect(() => {
    if (searchs.length === 0) {
      dispatch(searchAction.mapInfoDB(storeId));
    }
  }, [searchs]);

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      mapSearching();
    }
  };

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
