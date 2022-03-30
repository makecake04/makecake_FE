import styled from "styled-components";

//image
import { search_icon } from "../../../assets/images/image";

export const Wrapper = styled.section`
  text-align: center;

  hr {
    border: 0.7px solid #e5e5e5;
    width: 100%;
  }
`;

export const Header = styled.header`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  img:first-child {
    margin-left: 3%;
  }
  img:nth-of-type(2) {
    padding: 0.3rem 0 0 0.7rem;
  }
  h3 {
    margin-left: 19%;
    vertical-align: middle;
    font-weight: 500;
  }
`;

export const Body = styled.div`
  padding: 6.5rem 2rem 1rem;
  p:nth-of-type(1) {
    margin-top: 1rem;
    font-size: 1.8rem;
    font-weight: 700;
    color: #ff679e;
  }
  p:nth-of-type(2) {
    font-size: 1.3rem;
    font-weight: 500;
    color: rgba(40, 40, 40, 0.52);
  }
`;

export const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem auto 0;
  width: 304px;
  height: 35px;
  background-color: #fee9ee;
  color: #777777;
  font-weight: 500;
  span {
    /* margin-left: -15px; */
    padding: 0.4rem 0rem 0.4rem 2.2rem;
    width: 161px;
  }

  input {
    width: 100%;
    border: none;
    background: none;
    outline: none;
    padding: 1rem 2.5rem 1.2rem 0rem;
    color: #777777;
    font-weight: 500;
  }
`;

export const SearchIcon = styled.img.attrs({
  src: `${search_icon}`,
})`
  width: 12px;
  height: 12px;
  position: absolute;
  right: 13%;
  margin-top: 1.1rem;
`;

export const SearchListBox = styled.div`
  margin-left: auto;
  margin-right: 2.3rem;
  width: 215px;
  height: 344px;
  border: 3px solid #fee9ee;
  border-top: 1px;
  overflow-y: auto;
`;

export const OneStore = styled.div`
  color: #777777;
  font-weight: 500;
  font-size: 14px;
  padding: 0.5rem 0 0 0.5rem;
  text-align: left;
`;

export const OrderButton = styled.button`
  background-color: #ff8fa5;
  height: 49px;
  width: 195px;
  border-radius: 45px;
  border: none;
  color: #fcfcfc;
  font-weight: 700;
  margin-top: 2rem;
`;
