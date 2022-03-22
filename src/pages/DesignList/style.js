import styled from "styled-components";

//image
import { paint, write, plus_button, x_button } from "../../assets/images/image";

export const DrawWrap = styled.div`
  overflow-y: auto;
  height: 800px;
  h3 {
    margin: 40px 0px 20px 0px;
    text-align: center;
    font-weight: 700;
    font-size: 19px;
    color: #282828;
  }

  .ellipsis {
    color: #fff;
    font-size: 20px;
  }

  .xmark {
    color: #777;
    font-size: 20px;
  }

  .draw {
  }

  .write {
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

export const PlusOff = styled.div`
  display: flex;
  position: absolute;
  right: 20px;
  bottom: 70px;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: #ff679e;
  justify-content: center;
  align-items: center;
`;

export const PlusOn = styled.div`
  display: flex;
  position: absolute;
  right: 20px;
  bottom: 70px;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

export const PlusIcon = styled.img.attrs({
  src: `${plus_button}`,
})``;

export const XIcon = styled.img.attrs({
  src: `${x_button}`,
})``;

export const PaintIcon = styled.img.attrs({
  src: `${paint}`,
})`
  display: flex;
  position: absolute;
  bottom: 100px;
  width: 52.2px;
  height: 52.2;
  border-radius: 65px;
  justify-content: center;
  align-items: center;
`;

export const WriteIcon = styled.img.attrs({
  src: `${write}`,
})`
  display: flex;
  position: absolute;
  bottom: 40px;
  width: 65px;
  height: 60px;
  border-radius: 65px;
  justify-content: center;
  align-items: center;
  padding-right: 1px;
`;
