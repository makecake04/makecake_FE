import styled from "styled-components";

//image
import { empty_heart_icon, full_heart_icon } from "../../assets/images/image";

export const CakeContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding-bottom: 6rem;
  h3 {
    padding: 2.25rem 0;
    text-align: center;
    font-weight: 500;
    font-size: 24px;
    color: #282828;
  }
`;

export const HrWrap = styled.hr`
  border: 0.7px solid #e5e5e5;
  width: 100%;
`;

export const ImageWrap = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 20px;
  gap: 20px;
  margin-top: 10px;
  overflow: hidden;
`;

export const ImgWrap = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
`;

export const ImgBox = styled.img`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  object-fit: cover;
`;

export const ModalWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

export const ModalImg = styled.img`
  width: 300px;
  height: 300px;
  background: url(${(props) => props.src}) no-repeat center / cover;
  object-fit: cover;
`;

export const LikeCnt = styled.div`
  color: #fcfcfc;
`;

export const StoreWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 100%;

  > div {
    display: flex;
  }
`;

export const StoreName = styled.p`
  color: #fcfcfc;
  font-weight: 300;
  text-decoration: underline;
`;

export const StoreBody = styled.div`
  display: flex;
`;

export const EmptyHeartIcon = styled.img.attrs({
  src: `${empty_heart_icon}`,
  alt: "img",
})`
  margin-right: 5px;
`;

export const FullHeartIcon = styled.img.attrs({
  src: `${full_heart_icon}`,
  alt: "img",
})`
  margin-right: 5px;
`;
