import styled from "styled-components";

//image
import { noti_icon, search_icon } from "../../assets/images/image";

export const SDetailWrap = styled.div`
  overflow: scroll;
  height: calc(100% - 6rem);
  box-sizing: border-box;
  width: 100%;
`;

export const HeaderWrap = styled.div`
  padding: 20px;
  padding-top: 40px;
  background-color: #f9c9c9;
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
`;

export const SearchWrap = styled.div`
  height: 3.5rem;
  display: flex;
  align-items: center;
  flex: auto;
  margin-right: 10px;
  background-color: #fff;
`;

export const Select = styled.select`
  text-align: center;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border: none;
  background-color: #fff;
  color: #777777;
`;

export const Option = styled.option``;

export const Input = styled.input`
  width: 100%;
  height: 35px;
  font-size: 15px;
  box-sizing: border-box;
  border: none;
  color: #777777;
  outline: none;
  padding: 0 8px 3px 10px;
`;

export const SearchIcon = styled.img.attrs({
  src: `${search_icon}`,
  alt: "search_icon",
})`
  padding-right: 1rem;
`;

export const Bell = styled.img.attrs({
  src: `${noti_icon}`,
  alt: "noti_icon",
})`
  margin-top: 0.85rem;
`;

export const EmptySpace = styled.div`
  width: 390px;
  height: 8vh;
  background-color: white;
  margin: auto;
`;

export const Container = styled.div`
  width: 364px;
  height: 138px;
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  margin: 10px auto 10px auto;
  border-radius: 10px;
`;

export const CommendText = styled.h1`
  color: #282828;
  font-size: 19px;
  font-weight: bold;
  margin-left: 15px;
  margin-top: 15px;
`;

export const PlaceList1 = styled.div`
  display: flex;
  height: 32px;
  margin-left: 15px;
  margin-top: 15px;
  border-radius: 10px;
`;

export const PlaceList2 = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: 15px;
  height: 32px;
`;

export const Place = styled.div`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  border-radius: 50px;
  background: rgba(255, 103, 158, 0.1);
  color: #ff679e;
  font-size: 15px;
  padding: 10px;
`;

export const Place2 = styled.div`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  border-radius: 50px;
  background: rgba(156, 156, 220, 0.1);
  color: #9c9cdc;
  font-size: 15px;
  padding: 10px;
`;

export const Place3 = styled.div`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  border-radius: 50px;
  background: #ededed;
  color: #777777;
  font-size: 15px;
  padding: 10px;
`;
