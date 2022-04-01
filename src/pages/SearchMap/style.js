import styled from "styled-components";

//image
import { white_back_button, search_icon } from "../../assets/images/image";

export const Container = styled.div``;

export const HeaderWrap = styled.div`
  padding: 20px;
  padding-top: 40px;
  background-color: #f9c9c9;
  display: flex;
  position: relative;
  align-items: center;
  height: 115.5px;
`;

export const WhiteBackButton = styled.img.attrs({
  src: `${white_back_button}`,
  alt: "BackButton",
})`
  margin-right: 10px;
  cursor: pointer;
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
  cursor: pointer;
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
  alt: "SearchIcon",
})`
  padding-right: 1rem;
  cursor: pointer;
`;

export const StoreInfoWrap = styled.div`
  /* display: flex;
  height: 100px;
  margin-top: 10px;
  margin-bottom: 40px; */
  display: flex;
  max-width: 390px;
  width: 100%;
  height: 110px;
  position: fixed;
  /* top: 0; */

  bottom: 0px;

  /* bottom: 0; */
  /* border-top-left-radius: 10px;
  border-top-right-radius: 10px; */
  /* background-color: #f3f3f3; */
  z-index: 1;
  background: white;
`;

export const ImgWrap = styled.div`
  margin-left: 10px;
  margin-top: 15px;
`;

export const Img = styled.img`
  width: 145px;
  height: 89px;
  background: #c4c4c4;
  border-radius: 10px;
  cursor: pointer;
`;

export const StoreInfo = styled.div``;

export const StoreName = styled.h3`
  word-break: break-all;
  color: #282828;
  width: 250px;
  font-size: 19px;
  font-weight: bold;
  margin-left: 25px;
  margin-top: 15px;
  cursor: pointer;
`;

export const Address = styled.p`
  width: 250px;
  color: #9c9cdc;
  font-size: 13px;
  margin-left: 25px;
  word-break: keep-all;
`;

export const LikeAndReview = styled.p`
  width: 200px;
  color: #777777;
  font-size: 13px;
  margin-top: 80px;
  margin-left: -100px;
`;
