import styled from "styled-components";

//image
import { not_found } from "../../assets/images/image";

export const NotFoundWrap = styled.div``;

export const Container = styled.div`
  padding: 2rem 0;
  display: flex;
`;

export const HeaderText = styled.h3`
  margin-left: 14.5rem;
  text-align: center;
`;

export const Line = styled.hr`
  border: 1px solid #e5e5e5;
  width: 100%;
`;

export const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20rem;
`;

export const ErrorMessage = styled.p`
  color: #e1e1e1;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  margin-top: 2rem;
`;

export const HomePage = styled.p`
  color: #000;
  font-weight: 100;
  font-size: 16px;
  text-align: center;
  text-decoration-line: underline;
`;

export const NotFoundIcon = styled.img.attrs({
  src: `${not_found}`,
  alt: "img",
})``;
