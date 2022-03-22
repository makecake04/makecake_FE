import styled from "styled-components";

//image
import { kakao } from "../../../assets/images/image";

export const Container = styled.div`
`;

export const KakaoButton = styled.img.attrs({
  src: `${kakao}`,
  alt: "img",
})`width: 58.33px;
   height: 56px;
   margin-top: 40px;
   `;
