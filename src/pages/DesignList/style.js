import styled, { css } from "styled-components";

//image
import { paint, write, plus_button, x_button } from "../../assets/images/image";

export const DrawWrap = styled.div`
  padding-bottom: 6rem;
  box-sizing: border-box;
  width: 100%;
  h3 {
    padding: 2.25rem 0;
    margin-left: 37%;
    font-weight: 500;
    font-size: 20px;
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

export const ButtonWrap = styled.div`
  display: flex;
  margin: 15px 0px 0px 20px;
  button + button,
  button + button + button,
  button + button + button + button {
    margin-left: 1.2rem;
  }
`;

export const NewButton = styled.button`
  ${(props) =>
    props.sortType === "createdDate"
      ? css`
          width: 100%
          height: 36px;
          border-radius: 50px;
          border: 1px solid #fff;
          font-size: 13px;
          font-style: normal;
          font-weight: 400;
          color: #fff;
          background: #ff8fa5;
          padding: 0.7rem;
        `
      : css`
          width: 100%
          height: 36px;
          border-radius: 50px;
          border: 1px solid #dadada;
          font-size: 13px;
          font-style: normal;
          font-weight: 400;
          color: #777;
          background: #fff;
          padding: 0.7rem;
        `}
`;

export const LikeButton = styled.button`
  ${(props) =>
    props.sortType === "likeCnt"
      ? css`
          width: 100%
          height: 36px;
          border-radius: 50px;
          border: 1px solid #fff;
          font-size: 13px;
          font-style: normal;
          font-weight: 400;
          color: #fff;
          background: #ff8fa5;
          padding: 0.7rem;
        `
      : css`
          width: 100%
          height: 36px;
          border-radius: 50px;
          border: 1px solid #dadada;
          font-size: 13px;
          font-style: normal;
          font-weight: 400;
          color: #777;
          background: #fff;
          padding: 0.7rem;
        `}
`;

export const CommentButton = styled.button`
  ${(props) =>
    props.sortType === "commentCnt"
      ? css`
          width: 100%
          height: 36px;
          border-radius: 50px;
          border: 1px solid #fff;
          font-size: 13px;
          font-style: normal;
          font-weight: 400;
          color: #fff;
          background: #ff8fa5;
          padding: 0.7rem;
        `
      : css`
          width: 100%
          height: 36px;
          border-radius: 50px;
          border: 1px solid #dadada;
          font-size: 13px;
          font-style: normal;
          font-weight: 400;
          color: #777;
          background: #fff;
          padding: 0.7rem;
        `}
`;

export const CheckButton = styled.button`
  ${(props) =>
    props.sortType === "viewCnt"
      ? css`
          width: 100%
          height: 36px;
          border-radius: 50px;
          border: 1px solid #fff;
          font-size: 13px;
          font-style: normal;
          font-weight: 400;
          color: #fff;
          background: #ff8fa5;
          padding: 0.7rem;
        `
      : css`
          width: 100%
          height: 36px;
          border-radius: 50px;
          border: 1px solid #dadada;
          font-size: 13px;
          font-style: normal;
          font-weight: 400;
          color: #777;
          background: #fff;
          padding: 0.7rem;
        `}
`;

export const ImageWrap = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 20px;
  gap: 20px;
`;

export const ImgWrap = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  cursor: pointer;
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
  width: 50px;
  height: 50px;
  border-radius: 40px;
  background-color: #ff679e;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const PlusOn = styled.div`
  display: flex;
  position: absolute;
  right: 20px;
  bottom: 70px;
  width: 50px;
  height: 50px;
  border-radius: 40px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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
  bottom: 110px;
  width: 52.2px;
  height: 52.2px;
  border-radius: 65px;
  justify-content: center;
  align-items: center;
`;

export const WriteIcon = styled.img.attrs({
  src: `${write}`,
})`
  display: flex;
  position: absolute;
  bottom: 50px;
  width: 65px;
  height: 60px;
  border-radius: 65px;
  justify-content: center;
  align-items: center;
  padding-right: 1px;
`;

export const IconWrap = styled.div`
  position: fixed;
  width: 393px;
  bottom: 6px;
`;
