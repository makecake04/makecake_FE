import styled from "styled-components";

//image
import { pink, grey } from "../../assets/images/image";

export const Container = styled.div`

`;

export const MapWrap = styled.div`
    width: 500px;
    height: 400px;
`;

export const Pink = styled.img.attrs({
  src: `${pink}`,
})``;

export const Grey = styled.img.attrs({
  src: `${grey}`,
})``;

