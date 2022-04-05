import styled, { css } from "styled-components";

//image
import { cake_icon, black_back_button } from "../../../assets/images/image";

export const Wrapper = styled.div`
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
    margin-left: 20%;
    vertical-align: middle;
  }
`;

export const BlackBackButton = styled.img.attrs({
  src: `${black_back_button}`,
  alt: "BlackBackButton",
})`
  cursor: pointer;
  margin-left: 3%;
`;

export const Tab = styled.div`
  display: flex;
  margin: 0px 20px;
`;

export const LikeStore = styled.button`
  ${(props) =>
    props.toggleState === 1
      ? css`
          background: #fcfcfc;
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
            background: #fcfcfc;
          }
        `
      : css`
          padding: 15px;
          text-align: center;
          width: 50%;
          background: #fcfcfc;
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
export const MyReview = styled.button`
  ${(props) =>
    props.toggleState === 2
      ? css`
          background: #fcfcfc;
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
            background: #fcfcfc;
          }
        `
      : css`
          padding: 15px;
          text-align: center;
          width: 50%;
          background: #fcfcfc;
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

export const StoreList = styled.div`
  ${(props) =>
    props.toggleState === 1
      ? css`
          position: relative;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          padding: 20px;
          gap: 20px;
          margin-top: 10px;
        `
      : css`
          background: #fcfcfc;
          padding: 20px;
          width: 100%;
          height: 100%;
          border: none;
          display: none;
        `}
`;

export const SelectStoreBox = styled.div`
  width: 220px;
  margin-left: 75px;
  margin-top: 100px;
`;

export const CakeIcon = styled.img.attrs({
  src: `${cake_icon}`,
})`
  margin-left: 75px;
`;

export const SelectStoreText = styled.p`
  color: #e1e1e1;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
`;

export const SearchStoreText = styled.p`
  text-align: center;
  color: #000000;
  font-weight: 100;
  font-size: 16px;
  text-decoration: underline;
  cursor: pointer;
  margin-top: 5px;
`;

export const ReviewList = styled.div`
  ${(props) =>
    props.toggleState === 2
      ? css`
          position: relative;
          display: grid;
          padding: 20px;
        `
      : css`
          background: #fcfcfc;
          padding: 20px;
          width: 100%;
          height: 100%;
          border: none;
          display: none;
        `}
`;

export const NeedReviewBox = styled.div`
  width: 220px;
  margin-left: 75px;
  margin-top: 110px;
`;

export const NeedReviewText = styled.p`
  color: #e1e1e1;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
`;

export const OneStore = styled.div`
  p {
    margin: 0.5rem 0;
    color: #282828;
  }
`;

export const ImgWrap = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  cursor: pointer;

  img {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    object-fit: cover;
  }
`;

export const StoreAddress = styled.div`
  display: flex;
  p {
    margin-bottom: 10px;
    margin-left: 5px;
    color: #777;
    font-size: 13px;
  }
  img {
    width: 2rem;
  }
`;

export const OneReview = styled.div`
  img {
    position: relative;
    width: 100%;
    object-fit: cover;
  }

  hr {
    margin: 25px 0px;
  }
`;

export const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  span:first-child {
    font-size: 15px;
    color: #282828;
  }
  p {
    margin: 0px 0px 5px 0px;
    font-size: 13px;
    color: #777;
  }
`;

export const ReviewContent = styled.p`
  display: -webkit-box;
  word-wrap: break-word;
  word-break: break-all;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 10px;
  font-size: 14px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin: 1.25rem 0 0 18.25rem;
  button:first-child {
    width: 80px;
    height: 35px;
    font-size: 13px;
    color: #777;
    border: 1px solid #777;
    border-radius: 20px;
    margin-right: 10px;
  }
  button:nth-of-type(2) {
    width: 80px;
    height: 35px;
    font-size: 13px;
    color: #e10000;
    border: 1px solid #e10000;
    border-radius: 20px;
  }
`;
