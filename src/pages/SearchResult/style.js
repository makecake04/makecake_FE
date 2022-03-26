import styled from "styled-components";

//image
import {
  white_back_button,
  search_icon,
  star_icon,
} from "../../assets/images/image";

export const Container = styled.div`
  overflow-y: auto;
  height: 844px;
`;

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
  alt: "logo",
})`
  margin-right: 10px;
  cursor: pointer;
`;

export const Searchgwrap = styled.div`
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
  alt: "logo",
})`
  padding-right: 1rem;
`;

export const SortType = styled.div`
  display: flex;
`;

export const LikeWrap = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 15px;
  > svg path {
    ${(props) => (props.on ? "fill : #FF679E;" : "fill : #B3B3B3;")}
  }
`;

export const SortPopularWrap = styled.div``;

export const SortPopular = styled.h3`
  color: #b3b3b3;
  margin-top: -5px;
  font-size: 14px;
  font-weight: bold;
  ${(props) => (props.on ? "color : #FF679E;" : "color : #B3B3B3;")}
  cursor: pointer;
`;

export const ReviewWrap = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 15px;
  > svg path {
    ${(props) => (props.on ? "fill : #FF679E;" : "fill : #B3B3B3;")}
  }
`;

export const SortReview = styled.h3`
  color: #b3b3b3;
  margin-top: -5px;
  font-size: 14px;
  font-weight: bold;
  ${(props) => (props.on ? "color : #FF679E;" : "color : #B3B3B3;")}
  cursor: pointer;
`;

export const StarIcon = styled.img.attrs({
  src: `${star_icon}`,
  alt: "logo",
})``;

export const LikeAndReview = styled.p`
  width: 200px;
  color: #777777;
  font-size: 13px;
  margin-top: 110px;
  margin-left: -100px;
`;

export const StoreInfoWrap = styled.div`
  border-top: 1px solid #e5e5e5;
  display: flex;
  height: 100px;
  margin-top: 10px;
  margin-bottom: 40px;
`;

export const ImageWrap = styled.div`
  margin-left: 10px;
  margin-top: 25px;
`;

export const Img = styled.img`
  width: 145px;
  height: 89px;
  background: #c4c4c4;
  border-radius: 10px;
`;

export const StoreInfo = styled.div``;

export const StoreName = styled.h3`
  word-break: break-all;
  color: #282828;
  width: 250px;
  font-size: 19px;
  font-weight: bold;
  margin-left: 25px;
  margin-top: 25px;
  cursor: pointer;
`;

export const Address = styled.p`
  width: 250px;
  color: #9c9cdc;
  font-size: 13px;
  margin-left: 25px;
  word-break: keep-all;
`;
