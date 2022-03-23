import styled from "styled-components";

//image
import { black_back_button } from "../../../assets/images/image";

export const ReactCakeWrap = styled.div`
`;

export const Container = styled.div`
`;

export const HeaderWrap = styled.div`
  display:flex;
  padding: 2rem 0;
  align-items: center;
  
`;

export const BlackBackButton = styled.img.attrs({
  src: `${black_back_button}`,
  alt: "BlackBackButton",
})`cursor: pointer;
   margin-left: 3%;
   `;

export const HeaderText = styled.h3`
  font-weight: 700;
  font-size: 19px;
  color: #282828;
  margin-left: 21%;
  vertical-align: middle;
`;

export const ImageWrap = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 20px;
  gap: 20px;
  margin-top: 10px;

  .heart {
    font-size: 30px;
    color: #ff679e;
    margin-top: 10px;
    position: absolute;
    right: 10px;
  }

  .name {
    margin-bottom: 10px;
    color: #777;
    font-size: 15px;
  }
`;

export const PostWrap = styled.div`

`;

export const Line = styled.hr`
  border: 0.7px solid #e5e5e5;
  width: 100%;
`;

export const ImgWrap = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
`;

export const Img = styled.img`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  object-fit: cover;
`;

export const StoreName = styled.p`
  margin: 10px 0px;
  color: #282828;
`;