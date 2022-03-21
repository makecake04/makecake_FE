import styled from "styled-components";

//image
import { white_back_button } from "../../assets/images/image";

export const Container = styled.div`
  overflow-y: auto;
  height: 844px;
  .header {
    display: flex;
    width: 100%;
    height: 15vh;
    background-color: #f9c9c9;
  }

  .direction {
    margin-top: 70px;
    margin-left: 20px;
  }

  .inputWrap {
    display: flex;
    border: none;
    width: 75%;
    height: 15vh;
  }

  .select {
    height: 27px;
    margin-top: 77px;
    border: none;
    color: #777777;
    text-align: center;
    background-color: white;
  }

  .input {
    display: block;
    margin-top: 77px;
    width: 95%;
    height: 27px;
    border: none;
    padding-left: 10px;
  }

  .inputButton {
    margin-top: 77px;
    background-color: #ffffff;
  }

  .sortType {
    display: flex;
  }

  .starIcon {
    display: flex;
    margin-top: 20px;
    margin-left: 15px;
  }

  .like {
    color: #b3b3b3;
    margin-top: -5px;
    font-size: 14px;
  }

  .storeInformation {
    display: flex;
    height: 100px;
  }

  .img {
    width: 197.65px;
    height: 89px;
    border-radius: 10px;
    margin-top: 17px;
    margin-left: 17px;
  }

  .store {
    display: flex;
    font-size: 19px;
    font-weight: bold;
    margin-top: 20px;
    margin-left: 27px;
    width: 340px;
  }

  .addressAndOpneClose {
    width: 465px;
    color: #9c9cdc;
    font-size: 13px;
    margin-top: 46px;
    margin-left: -124px;
  }

  .likeAndReview {
    color: #777777;
    width: 300px;
    font-size: 13px;
    margin-top: 80px;
    right: 172px;
    position: relative;
  }
`;

export const SearchWrap = styled.div`
  padding: 20px;
  padding-top: 40px;
  background-color: #f9c9c9;
  display: flex;
  /* justify-content: space-between; */
  position: relative;
  align-items: center;
  height: 115.5px;
  select {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border: none;
    background-color: #fff;
    color: #777777;
  }
  .search_wrap {
    height: 3.5rem;
    display: flex;
    align-items: center;
    flex: auto;
    margin-right: 10px;
    background-color: #fff;
  }

  .search {
    color: #777777;
    padding-left: 1.5rem;
  }

  input {
    width: 65%;
    padding: 8px 5px 8px 5px;
    box-sizing: border-box;
    border: none;
    color: #777777;
    outline: none;
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

export const BackIcon = styled.img`
  src: ${white_back_button};
`;
