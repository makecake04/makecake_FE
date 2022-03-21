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
    background-color: #ffffff;
    color: #777777;
    text-align: center;
  }

  .input {
    display: block;
    margin-top: 77px;
    width: 95%;
    height: 27px;
    border: none;
    padding-left: 10px;
    font-size: 13px;
  }

  .inputButton {
    margin-top: 77px;
    background-color: #ffffff;
  }

  .sortType {
    display: flex;
  }

  .star {
    display: flex;
    margin-top: 20px;
    margin-left: 15px;
  }

  .sortLikeAndReview {
    color: #b3b3b3;
    margin-top: -5px;
    font-size: 14px;
  }

  .line {
    border: 1px solid #e4e4e4;
    margin-top: -10px;
  }

  .one {
    border-top: 1px solid #e5e5e5;
    display: flex;
    height: 100px;
    margin-top: 10px;
    margin-bottom: 40px;
  }
  .store {
    display: flex;
    color: #282828;
    width: 340px;
    margin-top: 35px;
    margin-left: 55px;
    font-size: 19px;
    font-weight: bold;
  }

  .address {
    width: 340px;
    color: #9c9cdc;
    font-size: 13px;
    margin-top: 65px;
    margin-left: -224px;
  }

  .likeAndReview {
    width: 200px;
    color: #777777;
    font-size: 13px;
    margin-top: 100px;
    margin-left: -105px;
  }

  .searchView {
    width: 117px;
    height: 89px;
    background: #c4c4c4;
    border-radius: 10px;
    margin-left: 20px;
    margin-top: 30px;
  }
`;

export const WhiteBackBtn = styled.img`
  src: ${white_back_button};
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
