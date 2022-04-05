import styled from "styled-components";

//image
import {
  black_back_button,
  empty_heart_icon,
  full_heart_icon,
} from "../../assets/images/image";

export const Wrapper = styled.section`
  box-sizing: border-box;
  width: 100%;
  position: relative;
  padding-bottom: 6rem;
`;

export const Header = styled.header`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
  img {
    margin-left: 3%;
  }
  h3 {
    margin-left: 30%;
    vertical-align: middle;
  }
`;

export const BlackBackButton = styled.img.attrs({
  src: `${black_back_button}`,
  alt: "BlackBackButton",
})`
  margin-left: 3%;
  cursor: pointer;
`;

export const UserInfo = styled.div`
  display: flex;
  p {
    width: 96px;
    color: #777777;
    font-size: 12px;
    margin-top: 16px;
    margin-left: 5px;
  }
  h4 {
    width: 135px;
    height: 20px;
    color: #282828;
    font-size: 14px;
    margin-top: 32px;
    margin-left: -96px;
  }
`;

export const ProfileImage = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  margin-top: 15px;
  margin-left: 24px;
  border-radius: 100%;
  overflow: hidden;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const ButtonWrapper = styled.div`
  button {
    border-radius: 5rem;
    width: 7rem;
    font-size: 1.2rem;
    padding: 0.8rem 1rem;
    &:first-child {
      color: #777777;
      border: 1px solid #777777;
      margin: 1.8rem 0 0 1.3rem;
    }
    &:nth-of-type(2) {
      color: #e10000;
      border: 1px solid #e10000;
    }
  }

  button + button {
    margin-left: 1rem;
  }
`;

export const ImageWrapper = styled.div`
  padding: 1.5rem 2rem 1.2rem;
  .img {
    border-radius: 0.5rem;
  }
`;

export const ImageInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const IconWrapper = styled.div`
  display: flex;
  padding-left: 1.8rem;
  p {
    margin-left: 0.5rem;
  }
  img + p {
    margin-right: 0.8rem;
  }
`;

export const OptionWrapper = styled.div`
  padding-right: 1.8rem;
  display: flex;
  justify-content: flex-end;
  button {
    color: #ff679e;
    background-color: rgba(255, 103, 158, 0.1);
    border-radius: 9rem;
    border: none;
    font-size: 1.2rem;
    padding: 0.3rem 1.1rem;
    margin-left: 0.5rem;
  }
`;

export const PostInfo = styled.div`
  h3 {
    color: #000000;
    padding: 1.5rem 2.5rem 0.5rem;
    word-break: break-all;
  }

  p {
    padding: 1rem 3rem;
    color: #777777;
    font-size: 14px;
    line-height: 2rem;
    overflow: auto;
    word-break: break-all;
  }
`;

export const ContentText = styled.p`
  white-space: pre-wrap;
`;

export const CommentWrapper = styled.section`
  padding: 0.7rem 2.5rem;
  h3 {
    color: #000000;
    padding-bottom: 1rem;
  }
  span {
    padding-left: 0.5rem;
    color: #ff679e;
  }
`;

export const CommentInput = styled.input`
  width: 100%;
  height: 39px;
  background: rgba(249, 201, 201, 0.2) !important;
  outline: none;
  font-size: 12px;
  padding: 1rem;
  border: none;
  padding-right: 4.5rem;
  &::placeholder {
    color: rgba(255, 103, 158, 0.44);
  }
`;

export const SendButton = styled.button`
  border: none;
  width: 2rem;
  position: absolute;
  right: 4rem;
  padding-top: 1rem;
`;

export const Container = styled.div`
  margin-top: 0;
`;

export const CommentBox = styled.div`
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  width: 342px;
  margin: 10px auto;
  border-bottom: 1px solid #e5e5e5;
`;

export const InfoBox = styled.div`
  width: 342px;
  height: 20px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const NickName = styled.div`
  color: #777777;
  width: 64px;
  height: 20px;
  font-size: 14px;
  margin-top: 0;
  margin-left: 0;
  width: max-content;
`;

export const CommentDate = styled.div`
  color: #777777;
  width: max-content;
  margin-top: 0;
  font-size: 12px;
`;

export const Content = styled.div`
  display: flex;
  min-height: 50px;
  font-size: 14px;
  color: #282828;
  word-break: break-all;
`;

export const Button = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const EditBox = styled.div`
  width: 64px;
  height: 33px;
  border: 1px solid #777777;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  display: flex;
  color: #777777;
  font-size: 12px;
  margin: 0 0 0 10px;
`;

export const DeleteBox = styled.button`
  width: 64px;
  height: 33px;
  border: 1px solid #e10000;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 12px;
  color: #e10000;
`;

export const EmptyHeartIcon = styled.img.attrs({
  src: `${empty_heart_icon}`,
  alt: "img",
})``;

export const FullHeartIcon = styled.img.attrs({
  src: `${full_heart_icon}`,
  alt: "img",
})``;
