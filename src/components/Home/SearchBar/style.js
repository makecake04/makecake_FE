import styled from "styled-components";

// image
import { noti_icon } from "../../../assets/images/image";

export const SearchWrap = styled.div`
  padding: 20px;
  padding-top: 40px;
  background-color: #f9c9c9;
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;

  .search_wrap {
    height: 3.5rem;
    display: flex;
    align-items: center;
    flex: auto;
    margin-right: 10px;
    /* border-radius: 10px; */
    /* border: 1px solid #ebebeb; */
    background-color: #fff;
  }

  .search {
    color: #777777;
    margin-left: 1.7rem;
  }

  input {
    width: 85%;
    padding: 8px 10px;
    box-sizing: border-box;
    border: none;
    color: #777777;
  }

  .notice_wrap {
    display: felx;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    border-radius: 35px;
    border: 1px solid #ebebeb;
    background-color: #fff;
  }

  .bell {
    margin-top: 0.85rem;
  }
`;

export const NotiIcon = styled.img.attrs({
  src: `${noti_icon}`,
})``;
