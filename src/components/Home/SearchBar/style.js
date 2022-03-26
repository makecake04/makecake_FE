import styled from "styled-components";

// image
import {
  noti_icon,
  search_icon,
  noti_check_dot,
} from "../../../assets/images/image";

export const SearchWrap = styled.div`
  padding: 20px;
  padding-top: 40px;
  background-color: #f9c9c9;
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;

  .search {
    color: #777777;
    margin-left: 1.7rem;
  }

  input {
    font-size: 15px;
    width: 85%;
    height: 3.5rem;
    padding: 8px 10px;
    box-sizing: border-box;
    border: none;
    color: #777777;
  }
`;

export const Search = styled.div`
  height: 3.5rem;
  display: flex;
  align-items: center;
  flex: auto;
  margin-right: 10px;
  background-color: #fff;
`;

export const NotiIcon = styled.img.attrs({
  src: `${noti_icon}`,
})`
  margin-top: 0.7rem;
`;

export const SearchIcon = styled.img.attrs({
  src: `${search_icon}`,
})`
  margin-left: 1.7rem;
`;

export const NotiCheckDot = styled.img.attrs({
  src: `${noti_check_dot}`,
})`
  width: 8px;
  height: 8px;
  position: absolute;
  right: 23px;
  top: 52px;
`;
