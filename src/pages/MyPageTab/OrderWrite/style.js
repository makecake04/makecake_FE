import styled from "styled-components";

export const Wrapper = styled.section`
  text-align: center;
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
    margin-left: 19%;
    vertical-align: middle;
    font-weight: 500;
  }
`;

export const Body = styled.section`
  padding: 5rem 2rem 2rem;
  img:first-child {
    border-radius: 0.4rem;
    padding-bottom: 1rem;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  h3 {
    font-size: 1.7rem;
    padding-bottom: 1rem;
  }
  img {
    padding-left: 0.4rem;
    padding-bottom: 0.5rem;
  }
`;

export const OrderItem = styled.div`
  display: flex;
  margin-bottom: 1.2rem;
  text-align: left;
  span {
    font-size: 1.4rem;
    font-weight: 400;
    margin-right: 5px;
  }
  input {
    color: #777777;
    overflow: auto;
    font-size: 1.2rem;
    outline: none;
    border: none;
    border-bottom: 1px solid #ffe3e3;
    background-color: #fcfcfc;
    flex: 2;
    transition: border-color 350ms;
    &:focus {
      border-bottom: 1px solid #fd9898;
    }
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

export const OrderButton = styled.button`
  background-color: #ff8fa5;
  height: 49px;
  width: 195px;
  border-radius: 45px;
  border: none;
  color: #fcfcfc;
  font-weight: 700;
  margin-top: 2rem;
  &:disabled {
    background-color: lightgray;
  }
`;

export const ModalWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 3rem 1rem;
  height: 75vh;
  overflow-y: auto;
  img {
    position: absolute;
    right: 4%;
    top: 1%;
  }
`;

export const Category = styled.span`
  border-radius: 5rem;
  color: #ff679e;
  border: 1px solid #ff679e;
  font-size: 14px;
  font-weight: 500;
  padding: 0.5rem 0.7rem;
  margin: 3rem 0 0.5rem 0;
`;

export const CategoryWrap = styled.div`
  width: 100%;
  text-align: left;
  padding: 1rem 1.2rem;
`;

export const CategoryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  align-items: center;
  span {
    font-size: 14px;
  }
  p {
    font-size: 12px;
  }
  /* hr {
    border: none;
    background-image: linear-gradient(
      90deg,
      #dadada,
      #dadada 50%,
      transparent 40%,
      transparent 100%
    );
    margin-left: 3%;
    width: 38%;
    background-size: 5px 5px, 100% 3px;
  } */
`;

export const CategoryDetail = styled.div`
  font-size: 12px;
  color: #777777;
`;
