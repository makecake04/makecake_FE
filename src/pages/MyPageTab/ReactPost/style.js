import styled, { css } from "styled-components";

//image
import {
  profile_image,
  black_back_button,
  like,
} from "../../../assets/images/image";

export const ReactWriteWrap = styled.div``;

export const Container = styled.div``;

export const HeaderWrap = styled.div`
  padding: 2rem 0;
  display: flex;
  align-items: center;
`;

export const BlackBackButton = styled.img.attrs({
  src: `${black_back_button}`,
  alt: "BlackBackButton",
})`
  cursor: pointer;
  margin-left: 3%;
`;

export const HeaderText = styled.h3`
  margin-left: 22%;
  vertical-align: center;
`;

export const Line = styled.hr`
  border: 1px solid #e5e5e5;
  width: 100%;
`;

export const Wrap = styled.div``;

export const LikeAndCommentWrap = styled.div`
  display: flex;
  margin: 0px 20px;
`;

export const LikeButton = styled.button`
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

export const CommentButton = styled.button`
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

export const ContentTabs = styled.div`
  flex-grow: 1;
`;

export const PostWrapOne = styled.div`
  ${(props) =>
    props.toggleState === 1
      ? css`
          position: relative;
          padding: 20px;
          width: 100%;
          height: 100%;
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

export const PostWrap = styled.div``;

export const ReviewWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TitleWrap = styled.div`
  display: flex;
`;

export const Profile = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 45px;
  background-color: #ddd;
  background-image: url(${profile_image});
  background-position: center;
  background-size: 50px;
`;

export const Info = styled.div`
  margin: 5px 0px 0px 10px;
`;

export const CreatedDate = styled.p`
  color: #777;
  font-size: 12px;
`;

export const NickName = styled.p`
  font-size: 14px;
  color: #282828;
  font-weight: 500;
`;

export const HeartIcon = styled.img.attrs({
  src: `${like}`,
  alt: "HeartIcon",
})`
  width: 32px;
  height: 32px;
`;

export const ContentWrap = styled.div`
  margin: 10px 0px;
`;

export const ContentText = styled.p`
  color: #777;
  font-size: 14px;
  word-break: break-all;
  display: -webkit-box;
  word-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 20px;
`;

export const ImgWrap = styled.div`
  position: relative;
  width: 100%;
  border-radius: 5px;
  background-position: center;
  background-size: 100%;
  object-fit: cover;
`;

export const Img = styled.img``;

export const HrWrap = styled.hr`
  border: 0.7px solid #e5e5e5;
  width: 100%;
  margin: 20px 0px;
`;

export const PostWrapTwo = styled.div`
  ${(props) =>
    props.toggleState === 2
      ? css`
          position: relative;
          width: 100%;
          height: 100%;
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

export const CommentWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  margin: auto;
  /* border-bottom: 1px solid #E5E5E5; */
`;

export const InsertDt = styled.p`
  margin: 10px 0px 5px 0px;
  font-size: 12px;
  color: #777;
`;

export const NicknameAndDelete = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;

export const Delete = styled.button`
  width: 64px;
  height: 33px;
  font-size: 12px;
  color: #e10000;
  border: 1px solid #e10000;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;
