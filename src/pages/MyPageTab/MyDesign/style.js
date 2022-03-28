import styled, { css } from "styled-components";

//image
import { remove_design, write_design } from "../../../assets/images/image";

export const Wrapper = styled.div`
  /* text-align: center;
  overflow: scroll;
  height: calc(100% - 6rem); */
  box-sizing: border-box;
  width: 100%;
  padding-bottom: 6rem;

  hr {
    border: 0.7px solid #e5e5e5;
    width: 100%;
  }
`;

export const Header = styled.header`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  img {
    margin-left: 3%;
  }
  h3 {
    margin-left: 23%;
    vertical-align: middle;
  }
`;

export const Tab = styled.div`
  display: flex;
  margin: 0px 20px;
`;
export const NotPost = styled.button`
  ${(props) =>
    props.toggleState === 1
      ? css`
          background: #fff;
          padding: 15px;
          text-align: center;
          width: 50%;
          cursor: pointer;
          border-top: none;
          border-left: none;
          border-right: none;
          border-bottom: 2px solid #ff679e;
          box-sizing: content-box;
          outline: none;
          font-size: 15px;
          font-weight: 400;
          color: #ff679e;
          &::before {
            content: "";
            display: block;
            position: absolute;
            top: -5px;
            left: 50%;
            transform: translateX(-50%);
            width: calc(100% + 2px);
            height: 5px;
            background: #fff;
          }
        `
      : css`
          padding: 15px;
          text-align: center;
          width: 50%;
          background: #fff;
          cursor: pointer;
          border-top: none;
          border-left: none;
          border-right: none;
          border-bottom: 2px solid #e5e5e5;
          box-sizing: content-box;
          outline: none;
          font-size: 15px;
          font-weight: 400;
          color: #777;
        `}
`;
export const Post = styled.button`
  ${(props) =>
    props.toggleState === 2
      ? css`
          background: #fff;
          padding: 15px;
          text-align: center;
          width: 50%;
          cursor: pointer;
          border-top: none;
          border-left: none;
          border-right: none;
          border-bottom: 2px solid #ff679e;
          box-sizing: content-box;
          outline: none;
          font-size: 15px;
          font-weight: 400;
          color: #ff679e;
          &::before {
            content: "";
            display: block;
            position: absolute;
            top: -5px;
            left: 50%;
            transform: translateX(-50%);
            width: calc(100% + 2px);
            height: 5px;
            background: #fff;
          }
        `
      : css`
          padding: 15px;
          text-align: center;
          width: 50%;
          background: #fff;
          cursor: pointer;
          border-top: none;
          border-left: none;
          border-right: none;
          border-bottom: 2px solid #e5e5e5;
          box-sizing: content-box;
          outline: none;
          font-size: 15px;
          font-weight: 400;
          color: #777;
        `}
`;

export const Body = styled.section`
  flex-grow: 1;
`;

export const DesignList = styled.div`
  ${(props) =>
    props.toggleState === 1
      ? css`
          position: relative;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          padding: 20px;
          gap: 20px;
          margin-top: 10px;
        `
      : css`
          background: #fff;
          padding: 20px;
          width: 100%;
          height: 100%;
          border: none;
          display: none;
        `}
`;

export const PostList = styled.div`
  ${(props) =>
    props.toggleState === 2
      ? css`
          position: relative;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          padding: 20px;
          gap: 20px;
          margin-top: 10px;
        `
      : css`
          background: #fff;
          padding: 20px;
          width: 100%;
          height: 100%;
          border: none;
          display: none;
        `}
`;

export const ImageList = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
`;

export const ModalWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  img:first-child {
    width: 30rem;
    height: 30rem;
    object-fit: cover;
  }
`;
export const ModalWrap2 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  p {
    color: #292929;
    &:first-child {
      font-weight: 700;
      margin: 20px 0px 10px 0px;
    }
    &:nth-of-type(2) {
      font-size: 15px;
      margin: 0px 0px 25px 0px;
    }
  }

  hr {
    border: 1px solid #e5e5e5;
    width: 100%;
  }
`;
export const ModalChoice = styled.div`
  display: flex;
  padding-top: 0.3rem;
  button {
    &:first-child {
      color: #ff679e;
    }
    &:nth-of-type(2) {
      color: #c6c6c8;
    }
    font-weight: 700;
    border: none;
    width: 15rem;
    padding-top: 0.6rem;
  }
`;
export const VerticalLine = styled.div`
  border-left: 2px solid #e5e5e5;
  height: 4.7rem;
  position: absolute;
  left: 50%;
  bottom: 0;
`;

//image
export const DeleteIcon = styled.img.attrs({
  src: `${remove_design}`,
})`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export const WriteIcon = styled.img.attrs({
  src: `${write_design}`,
})`
  position: absolute;
  top: 1rem;
  right: 5rem;
`;
