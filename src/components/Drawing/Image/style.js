import styled from "styled-components";

export const Wrapper = styled.section`
  margin-top: 3rem;
`;

export const TextBox = styled.div`
  margin: 0 auto;
  background-color: #ffffff;
  width: 29.6rem;
  height: 8.8rem;
  border-radius: 1rem;
  vertical-align: middle;
  padding: 2.3rem;
  p:first-child {
    color: #777777;
    font-weight: 700;
  }
  p:nth-of-type(2) {
    color: #ff679e;
    font-size: 1.4rem;
  }
  input {
    border: none;
    width: 0;
  }
`;
