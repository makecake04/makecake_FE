import styled from "styled-components";

//image
import {
  cake_store_icon,
  empty_heart_icon,
  full_heart_icon,
} from "../../assets/images/image";

export const CakeContainer = styled.div`
  text-align: center;
  overflow: scroll;
  height: calc(100% - 6rem);
  box-sizing: border-box;
  width: 100%;

  h3 {
    padding: 40px 0px 20px 20px;
    box-sizing: border-box;
    font-weight: 700;
    font-size: 19px;
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
  position: absolute;
  top: 8px;
  right: 15px;
  color: #777;
`;

export const StoreIcon = styled.img.attrs({
  src: `${cake_store_icon}`,
  alt: "img",
})`
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const EmptyHeartIcon = styled.img.attrs({
  src: `${empty_heart_icon}`,
  alt: "img",
})`
  position: absolute;
  top: 10px;
  right: 30px;
`;

export const FullHeartIcon = styled.img.attrs({
  src: `${full_heart_icon}`,
  alt: "img",
})`
  position: absolute;
  top: 10px;
  right: 30px;
`;
