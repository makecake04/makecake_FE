import styled from "styled-components";

//image
import {
  clock,
  location,
  review_write,
  shop,
  profile_image,
  more_button,
} from "../../assets/images/image";

export const StoreDetailContainer = styled.div`
  /* overflow: auto; */
  height: 844px;
  position: relative;

  .title {
    display: flex;
  }

  .left {
    color: #646464;
    position: absolute;
    margin-top: 40px;
    margin-left: 40px;
  }

  .hr_wrap {
    border: 0.7px solid #e5e5e5;
    width: 100%;
    margin-top: 190px;
    z-index: 1;
  }

  .title_wrap {
    position: relative;
    z-index: 2;
    left: 10%;
    top: -50px;
    width: 80%;
    height: 100px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0px 3px 8px rgba(152, 153, 150, 0.3);
    padding: 16px;
  }

  .container {
    position: relative;
    top: -40px;
  }

  .info_box {
    width: 100%;
  }

  .top_wrap {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .info_wrap {
    display: flex;
    flex-direction: column;
  }

  .store {
    font-weight: 700;
  }

  .shop_wrap {
    display: flex;
  }

  .shop {
    height: 24px;
    width: 24px;
  }

  .heart {
    color: #ff679e;
    font-size: 20px;
  }

  .nomal {
    flex: 1;
    padding-left: 5px;
    font-size: 13px;
  }

  .insta {
    flex: 1;
    padding-left: 30px;
  }

  .bloc-tabs {
    display: flex;
    margin: 0px 20px;
  }
  .tabs {
    padding: 15px;
    text-align: center;
    width: 50%;
    background: #fff;
    cursor: pointer;
    border-bottom: 2px solid #e5e5e5;
    box-sizing: content-box;
    outline: none;
    font-size: 15px;
    font-weight: 400;
    color: #777;
  }

  .active-tabs {
    background: #fff;
    padding: 15px;
    text-align: center;
    width: 50%;
    cursor: pointer;
    border-bottom: 2px solid #ff679e;
    box-sizing: content-box;
    outline: none;
    font-size: 15px;
    font-weight: 400;
    color: #ff679e;
  }

  .active-tabs::before {
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

  button {
    border: none;
  }

  .content-tabs {
    flex-grow: 1;
  }

  .content {
    background: #fff;
    padding: 20px;
    width: 100%;
    height: 100%;
    border: none;
    display: none;
  }

  .active-content {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .content_wrap {
    padding: 20px;
  }

  .icon_wrap {
    display: flex;
    margin-bottom: 20px;
    flex: 1;
  }

  .icon {
    margin-right: 10px;
    width: 20px;
    height: 20px;
    path {
      stroke: #777;
    }
  }

  .description {
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
  }

  .users_wrap {
    display: flex;
  }

  .bottom {
    border: 3px solid #f7f7f7;
    width: 100%;
  }

  .picture_wrap {
    margin: 10px 20px 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .picture {
    color: #282828;
    font-weight: 700;
  }

  .plus {
    color: #777;
    font-size: 15px;
  }

  .right_wrap {
    display: flex;
    align-items: center;
  }

  .right {
    width: 18px;
    height: 18px;
    path {
      stroke: #777;
    }
  }

  .img_box {
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 20px;
    gap: 20px;
    overflow: hidden;
  }

  .img_wrap {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    border-radius: 10px;
    overflow: hidden;
  }

  .kind {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .kind2 {
    display: flex;
    justify-content: space-between;
  }

  .type {
    display: flex;
  }

  .size {
    color: #777;
    font-size: 15px;
    margin-right: 5px;
  }

  .line {
    color: #dadada;
  }

  .price {
    font-size: 15px;
    font-weight: 700;
  }

  .insert_dt {
    margin: 0px 0px 5px 0px;
    font-size: 13px;
    color: #777;
  }

  .nickname {
    font-size: 15px;
    color: #282828;
  }

  .title_wrap2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }

  .hr_wrap2 {
    border: 0.7px solid #e5e5e5;
    width: 100%;
    margin: 25px 0px 0px 0px;
  }

  .p_wrap {
    word-break: break-all;
    display: -webkit-box;
    word-wrap: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0px 20px;
  }

  .review {
    position: absolute;
    /* bottom: 1.3rem;
  right: 1.3rem; */
    width: 4.8rem;
    height: 4.8rem;
    margin-top: 48rem;
    bottom: 1rem;
    right: 1.3rem;
    z-index: 10;
  }

  .profile {
    width: 45px;
    height: 45px;
    border-radius: 45px;
    background-color: #ddd;
    background-image: url(${profile_image});
    background-position: center;
    background-size: 50px;
  }

  .info_wrap2 {
    display: flex;
    align-items: center;
  }

  .info {
    margin: 0px 0px 0px 10px;
  }

  .nickname {
    font-size: 15px;
    color: #282828;
  }

  .img_wrap2 {
    position: relative;
    width: 90%;
    background: url(${(props) => props.src}) no-repeat center / cover;
    border-radius: 5px;
    object-fit: cover;
    margin: 10px auto 0 auto;
  }

  .button_wrap {
    margin: 20px 20px 0px 0px;
    display: flex;
    justify-content: end;
  }

  .edit_btn {
    width: 80px;
    height: 35px;
    font-size: 13px;
    color: #777;
    border: 1px solid #777;
    border-radius: 20px;
    margin-right: 10px;
  }

  .delete_btn {
    width: 80px;
    height: 35px;
    font-size: 13px;
    color: #e10000;
    border: 1px solid #e10000;
    border-radius: 20px;
  }
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

export const ShopSvg = styled.img.attrs({
  src: `${shop}`,
  alt: "img",
})``;

export const MarkerSvg = styled.img.attrs({
  src: `${location}`,
  alt: "img",
})``;

export const ClockSvg = styled.img.attrs({
  src: `${clock}`,
  alt: "img",
})``;

export const UsersSvg = styled.img.attrs({
  src: `${profile_image}`,
  alt: "img",
})``;

export const RightSvg = styled.img.attrs({
  src: `${more_button}`,
  alt: "img",
})``;

export const ReviewSvg = styled.img.attrs({
  src: `${review_write}`,
  alt: "img",
})``;
