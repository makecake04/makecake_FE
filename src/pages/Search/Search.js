import React from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as searchAction } from "../../redux/modules/search";

//css
import {
  SDetailWrap,
  HeaderWrap,
  SearchWrap,
  Select,
  Option,
  Input,
  SearchIcon,
  Bell,
  EmptySpace,
  Container,
  CommendText,
  PlaceList1,
  PlaceList2,
  Place,
  Place2,
  Place3,
} from "./style";

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
    navigate("/search/result");
  };

  return (
    <SDetailWrap>
      <HeaderWrap>
        <SearchWrap className="search_wrap">
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
          <SearchIcon onClick={mapSearching} />
        </SearchWrap>
        <Bell />
      </HeaderWrap>

      <EmptySpace />

      <Container>
        <CommendText>플레이스 추천</CommendText>
        <PlaceList1>
          <Place>터틀힙</Place>
          <Place>래빗힙</Place>
          <Place>베니케이크</Place>
        </PlaceList1>
        <PlaceList2>
          <Place>더케이크스토리</Place>
          <Place>두두케이크</Place>
        </PlaceList2>
      </Container>

      <Container>
        <CommendText>매장 추천</CommendText>
        <PlaceList1>
          <Place2>터틀힙</Place2>
          <Place2>래빗힙</Place2>
          <Place2>베니케이크</Place2>
        </PlaceList1>
        <PlaceList2>
          <Place2>더케이크스토리</Place2>
          <Place2>두두케이크</Place2>
        </PlaceList2>
      </Container>

      <Container>
        <CommendText>주소 추천</CommendText>
        <PlaceList1>
          <Place3>터틀힙</Place3>
          <Place3>래빗힙</Place3>
          <Place3>베니케이크</Place3>
        </PlaceList1>
        <PlaceList2>
          <Place3>더케이크스토리</Place3>
          <Place3>두두케이크</Place3>
        </PlaceList2>
      </Container>
    </SDetailWrap>
  );
};

export default Search;
