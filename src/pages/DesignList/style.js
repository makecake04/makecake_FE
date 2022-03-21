import styled from "styled-components";

//image
import { paint, write } from "../../assets/images/image";

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

  hr {
    border: 0.7px solid #e5e5e5;
    width: 100%;
  }

  .more_off {
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
  }

  .ellipsis {
    color: #fff;
    font-size: 20px;
  }

  .more_on {
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
  }

  .xmark {
    color: #777;
    font-size: 20px;
  }

  .draw {
    display: flex;
    position: absolute;
    right: -5px;
    bottom: 110px;
    width: 52.2px;
    height: 52.2px;

    border-radius: 60px;
    justify-content: center;
    align-items: center;
  }

  .write {
    display: flex;
    position: absolute;
    right: -10px;
    bottom: 40px;
    width: 58px;
    height: 58px;
    border-radius: 60px;
    justify-content: center;
    align-items: center;
    padding-right: 1px;
  }
`;

export const ImageWrap = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 20px;
  gap: 20px;
  margin-top: 10px;

  .img_wrap {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
  }

  img {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    object-fit: cover;
  }
`;

export const ModalWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

export const PaintIcon = styled.img.attrs({
  src: `${paint}`,
})``;

export const WriteIcon = styled.img.attrs({
  src: `${write}`,
})``;
