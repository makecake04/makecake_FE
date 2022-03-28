import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as searchAction } from "../../redux/modules/search";
import Swal from "sweetalert2";

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
  console.log(selected, searchInput);
  // const select = useParams().select

  const changeSelectOption = (e) => {
    setSelected(e.target.value);
  };

  const changeInput = (e) => {
    setSearchInput(e.target.value);
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
    } else if (!selected && !searchInput) {
      Swal.fire({
        title: "검색값을 입력해주세요!",
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
            <Option value="place">플레이스</Option>
          </Select>
          <Input
            placeholder="검색 옵션을 선택해주세요!"
            onChange={changeInput}
            onKeyPress={onKeyPress}
          />
          <SearchIcon onClick={mapSearching} />
        </SearchWrap>
        <Bell />
      </HeaderWrap>

      <EmptySpace />

      <Container>
        <CommendText>매장 추천</CommendText>
        <PlaceList1>
          <Place
            onClick={() => {
              dispatch(searchAction.searchPlaceDB("store", "터틀힙", "null"));
              navigate("/search/result/store/터틀힙");
            }}
          >
            터틀힙
          </Place>
          <Place
            onClick={() => {
              dispatch(searchAction.searchPlaceDB("store", "메모레", "null"));
              navigate("/search/result/store/메모레");
            }}
          >
            메모레
          </Place>
          <Place
            onClick={() => {
              dispatch(
                searchAction.searchPlaceDB("store", "베니케이크", "null")
              );
              navigate("/search/result/store/베니케이크");
            }}
          >
            베니케이크
          </Place>
        </PlaceList1>
        <PlaceList2>
          <Place
            onClick={() => {
              dispatch(
                searchAction.searchPlaceDB("store", "더케익스토리", "null")
              );
              navigate("/search/result/store/더케익스토리");
            }}
          >
            더케익스토리
          </Place>
          <Place
            onClick={() => {
              dispatch(
                searchAction.searchPlaceDB("store", "두두케이크", "null")
              );
              navigate("/search/result/store/두두케이크");
            }}
          >
            두두케이크
          </Place>
        </PlaceList2>
      </Container>

      <Container>
        <CommendText>주소 추천</CommendText>
        <PlaceList1>
          <Place2
            onClick={() => {
              dispatch(searchAction.searchPlaceDB("address", "논현동", "null"));
              navigate("/search/result/address/논현동");
            }}
          >
            논현동
          </Place2>
          <Place2
            onClick={() => {
              dispatch(
                searchAction.searchPlaceDB("address", "강남구 신사동", "null")
              );
              navigate("/search/result/address/강남구 신사동");
            }}
          >
            강남구 신사동
          </Place2>
          <Place2
            onClick={() => {
              dispatch(searchAction.searchPlaceDB("address", "서초구", "null"));
              navigate("/search/result/address/서초구");
            }}
          >
            서초구
          </Place2>
        </PlaceList1>
        <PlaceList2>
          <Place2
            onClick={() => {
              dispatch(
                searchAction.searchPlaceDB("address", "강서구 화곡동", "null")
              );
              navigate("/search/result/address/강서구 화곡동");
            }}
          >
            강서구 화곡동
          </Place2>
          <Place2
            onClick={() => {
              dispatch(searchAction.searchPlaceDB("address", "용산구", "null"));
              navigate("/search/result/address/용산구");
            }}
          >
            용산구
          </Place2>
        </PlaceList2>
      </Container>

      <Container>
        <CommendText>플레이스 추천</CommendText>
        <PlaceList1>
          <Place3
            onClick={() => {
              dispatch(searchAction.searchPlaceDB("place", "가로수길", "null"));
              navigate("/search/result/place/가로수길");
            }}
          >
            가로수길
          </Place3>
          <Place3
            onClick={() => {
              dispatch(searchAction.searchPlaceDB("place", "서울숲", "null"));
              navigate("/search/result/place/서울숲");
            }}
          >
            서울숲
          </Place3>
          <Place3
            onClick={() => {
              dispatch(
                searchAction.searchPlaceDB(
                  "place",
                  "동대문역사문화공원역",
                  "null"
                )
              );
              navigate("/search/result/place/동대문역사문화공원역");
            }}
          >
            동대문역사문화공원역
          </Place3>
        </PlaceList1>
        <PlaceList2>
          <Place3
            onClick={() => {
              dispatch(searchAction.searchPlaceDB("place", "건대입구", "null"));
              navigate("/search/result/place/건대입구");
            }}
          >
            건대입구
          </Place3>
          <Place3
            onClick={() => {
              dispatch(searchAction.searchPlaceDB("place", "샤로수길", "null"));
              navigate("/search/result/place/샤로수길");
            }}
          >
            샤로수길
          </Place3>
        </PlaceList2>
      </Container>
    </SDetailWrap>
  );
};

export default Search;
