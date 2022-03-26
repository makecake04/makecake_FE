import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  text-align: center;
  overflow-y: auto;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding-bottom: 3rem;
  hr {
    &:nth-of-type(1) {
      border: 0.7px solid #e5e5e5;
      width: 100%;
    }
    &:nth-of-type(2) {
      border: 3px solid #f7f7f7;
    }
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
    margin-left: 25%;
    vertical-align: middle;
    font-weight: 500;
  }
`;

export const Body = styled.section`
  padding: 2rem;
  text-align: right;
  img {
    border-radius: 0.4rem;
  }
  button {
    border: none;
    font-size: 15px;
    font-weight: 400;
  }
  span:last-of-type {
    font-size: 15px;
    font-weight: 400;
    color: #ff679e;
  }
  p:last-of-type {
    font-size: 10px;
    color: #777777;
  }
`;

export const ButtonWrapper = styled.div`
  button {
    border-radius: 5rem;
    width: 7rem;
    font-size: 1.2rem;
    padding: 0.8rem 1rem;
    color: #e10000;
    border: 1px solid #e10000;
    margin-bottom: 1rem;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  h3 {
    font-size: 1.7rem;
    padding-bottom: 1rem;
  }
`;

export const OrderItem = styled.div`
  text-align: left;
  display: flex;
  margin-bottom: 1.2rem;
  align-items: center;
  span:first-child {
    font-size: 1.4rem;
    font-weight: 500;
  }
  span:nth-child(2) {
    color: #777777;
    font-size: 1.2rem;
    padding-left: 5px;
  }
`;

export const MustRead = styled.footer`
  padding: 2rem;
  text-align: left;
  color: #777777;
  font-size: 1.1rem;
  h3 {
    color: #ff679e;
    font-size: 1.4rem;
    font-weight: 500;
  }
`;

export const Default = styled.p`
  color: #ff679e;
  padding-top: 1.3rem;
`;

export const MustReadItem = styled.div`
  p {
    color: #777777;
  }
`;

export const ConnectButton = styled.button`
  background-color: #ff8fa5;
  height: 49px;
  width: 195px;
  border-radius: 45px;
  border: none;
  color: #fcfcfc;
  font-weight: 700;
  margin-top: 2rem;
`;
