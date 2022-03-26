import styled, { css } from "styled-components";

//image
import {
  clock,
  location,
  review_write,
  shop,
  call,
  profile_image,
  more_button,
  white_back_button,
  empty_heart_icon,
  full_heart_icon,
  store_plus_button,
} from "../../assets/images/image";

export const StoreDetailContainer = styled.div`
  /* overflow: auto; */
`;

export const DetailWrap = styled.div``;

export const Title = styled.div`
  display: flex;
`;

export const WhiteBackIcon = styled.img.attrs({
  src: `${white_back_button}`,
})`
  position: absolute;
  margin-top: 40px;
  margin-left: 20px;
`;

export const HrWrap = styled.hr`
  border: 0.7px solid #e5e5e5;
  width: 100%;
  margin-top: 190px;
  z-index: 1;
`;

export const TitleWrap = styled.div`
  position: relative;
  z-index: 2;
  left: 10%;
  top: -50px;
  width: 80%;
  height: 120px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 3px 8px rgba(152, 153, 150, 0.3);
  padding: 16px;
`;

export const InfoBox = styled.div`
  width: 100%;
`;

export const TopWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const LikeInfo = styled.div`
  display: flex;
`;

export const LikeCnt = styled.p`
  color: #777;
  margin-left: 8px;
`;

export const Store = styled.div`
  font-weight: 700;
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ShopWrap = styled.div`
  display: flex;
`;

export const Nomal = styled.div`
  flex: 1;
  font-size: 13px;
  word-break: break-all;
  color: #282828;
  margin-left: 5px;
`;

export const Insta = styled.p`
  flex: 1;
  color: #9c9cdc;
  font-size: 13px;
  margin-left: 5px;
`;

export const ContainerBox = styled.div`
  margin-top: -40px;
  height: calc(100vh - 192px - 40px);
  overflow-x: hidden;
  overflow-y: auto;
`;

export const BlocTab = styled.div`
  display: flex;
  margin: 0px 20px;
`;

export const OneButton = styled.button`
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

export const TwoButton = styled.button`
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

export const ThreeButton = styled.button`
  ${(props) =>
    props.toggleState === 3
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

export const FourButton = styled.button`
  ${(props) =>
    props.toggleState === 4
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

export const ContentTab = styled.div`
  flex-grow: 1;
`;

export const ContentOne = styled.div`
  ${(props) =>
    props.toggleState === 1
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

export const ContentTwo = styled.div`
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

export const ContentThree = styled.div`
  ${(props) =>
    props.toggleState === 3
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

export const ContentFour = styled.div`
  ${(props) =>
    props.toggleState === 4
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

export const ContentBox = styled.div``;

export const ContentWrap = styled.div`
  padding: 20px;
`;

export const PlusWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const ModalWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 3rem 1rem;
  height: 75vh;
  overflow-y: auto;
  img {
    position: absolute;
    right: 4%;
    top: 1%;
  }
`;

export const Category = styled.span`
  border-radius: 5rem;
  color: #ff679e;
  border: 1px solid #ff679e;
  font-size: 14px;
  font-weight: 500;
  padding: 0.5rem 0.7rem;
  margin: 3rem 0 0.5rem 0;
`;

export const NoContent = styled.p`
  margin: 2rem 0px;
`;

export const CategoryWrap = styled.div`
  width: 100%;
  text-align: left;
  padding: 1rem 1.2rem;
`;

export const CategoryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  align-items: center;
  span {
    font-size: 14px;
  }
  p {
    font-size: 12px;
  }
`;

export const CategoryDetail = styled.div`
  font-size: 12px;
  color: #777777;
`;

export const PlusButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #777;
  font-weight: 400;
  font-size: 14px;
  justify-content: center;
  width: 109px;
  height: 32px;
  border: 1px solid #dadada;
  box-sizing: border-box;
  border-radius: 50px;
`;

export const StorePlusButton = styled.img.attrs({
  src: `${store_plus_button}`,
})``;

export const IconWrap = styled.div`
  display: flex;
  margin-bottom: 20px;
  flex: 1;
`;

export const Description = styled.div`
  font-size: 15px;
  color: #777;
  flex: 1;
  span + span {
    margin-left: 0.5rem;
  }
  span + span + span {
    margin-left: 0.5rem;
  }
  span + span + span + span {
    margin-left: 0.5rem;
  }
`;

export const CallWrap = styled.div`
  display: flex;
`;

export const BottomHr = styled.hr`
  border: 3px solid #f7f7f7;
  width: 100%;
`;

export const PictureBox = styled.div``;

export const PictureWrap = styled.div`
  margin: 10px 20px 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Picture = styled.p`
  color: #282828;
  font-weight: 700;
`;

export const RightWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const PlusP = styled.p`
  color: #777;
  font-size: 15px;
`;

export const ImageBox = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 20px;
  gap: 20px;
  overflow: hidden;
`;

export const Images = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  border-radius: 10px;
  overflow: hidden;
`;

export const Kind = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Kind2 = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Type = styled.div`
  display: flex;
`;

export const SizeP = styled.p`
  color: #777;
  font-size: 15px;
  margin-right: 5px;
`;

export const PriceP = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: #282828;
`;

export const ImgWrap = styled.div`
  background: url(${(props) => props.src}) no-repeat center / cover;
  position: relative;
`;

export const ImgBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${(props) => props.src}) no-repeat center / cover;
`;

export const ProfileImage = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 45px;
  background-color: #ddd;
  background: url(${(props) => (props.src ? props.src : profile_image)})
    no-repeat;
  background-position: center;
  background-size: cover;
`;

export const CommentWrap = styled.div``;

export const TitleTwo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const InfoTwo = styled.div`
  display: flex;
  align-items: center;
`;

export const Info = styled.div`
  margin: 0px 0px 0px 10px;
`;

export const NicknameP = styled.p`
  font-size: 15px;
  color: #282828;
`;

export const CreatedDateP = styled.p`
  margin: 0px 0px 5px 0px;
  font-size: 13px;
  color: #777;
`;

export const Pwrap = styled.p`
  word-break: break-all;
  display: -webkit-box;
  word-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0px 20px;
`;

export const ImgWrapTwo = styled.div`
  position: relative;
  width: 90%;
  background: url(${(props) => props.src}) no-repeat center / cover;
  border-radius: 5px;
  object-fit: cover;
  margin: 10px auto 0 auto;
`;

export const ButtonWrap = styled.div`
  margin: 20px 20px 0px 0px;
  display: flex;
  justify-content: end;
`;

export const EditButton = styled.button`
  width: 80px;
  height: 35px;
  font-size: 13px;
  color: #777;
  border: 1px solid #777;
  border-radius: 20px;
  margin-right: 10px;
`;

export const DeleteButton = styled.button`
  width: 80px;
  height: 35px;
  font-size: 13px;
  color: #e10000;
  border: 1px solid #e10000;
  border-radius: 20px;
`;

export const HrWrapTwo = styled.hr`
  border: 0.7px solid #e5e5e5;
  width: 100%;
  margin: 25px 0px 0px 0px;
`;

export const ShopSvg = styled.img.attrs({
  src: `${shop}`,
  alt: "img",
})`
  height: 24px;
  width: 24px;
`;

export const MarkerSvg = styled.img.attrs({
  src: `${location}`,
  alt: "img",
})`
  margin-right: 10px;
  width: 20px;
  height: 20px;
`;

export const ClockSvg = styled.img.attrs({
  src: `${clock}`,
  alt: "img",
})`
  margin-right: 10px;
  width: 20px;
  height: 20px;
`;

export const CallSvg = styled.img.attrs({
  src: `${call}`,
  alt: "img",
})`
  margin-right: 10px;
  width: 20px;
  height: 20px;
`;

export const RightSvg = styled.img.attrs({
  src: `${more_button}`,
  alt: "img",
})`
  width: 18px;
  height: 18px;
`;

export const ReviewSvg = styled.img.attrs({
  src: `${review_write}`,
  alt: "img",
})`
  position: absolute;
  /* bottom: 1.3rem;
right: 1.3rem; */
  width: 4.8rem;
  height: 4.8rem;
  bottom: 2rem;
  right: 1.3rem;
  z-index: 2;
`;

export const EmptyHeartIcon = styled.img.attrs({
  src: `${empty_heart_icon}`,
  alt: "img",
})``;

export const FullHeartIcon = styled.img.attrs({
  src: `${full_heart_icon}`,
  alt: "img",
})``;
