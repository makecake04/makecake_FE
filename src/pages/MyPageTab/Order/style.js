import styled, { css } from "styled-components";

//image
import { order_circle } from "../../../assets/images/image";

export const Wrapper = styled.div`
  text-align: center;
  overflow: scroll;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  hr {
    border: 0.7px solid #e5e5e5;
    width: 100%;
    font-weight: 500;
  }
`;

export const Header = styled.header`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  img:first-child {
    margin-left: 3%;
  }
  img:nth-of-type(2) {
    padding: 0.3rem 0 0 0.7rem;
  }
  h3 {
    margin-left: 19%;
    vertical-align: middle;
    font-weight: 500;
  }
`;

export const Tab = styled.div`
  display: flex;
  margin: 0px 20px;
`;

export const OrderDesign = styled.button`
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
export const OrderCheck = styled.button`
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
export const OrderList = styled.div`
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

//image
export const OrderIcon = styled.img.attrs({
  src: `${order_circle}`,
})`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;
