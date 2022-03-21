import styled from "styled-components";

//image
import { white_back_button, profile_image } from "../../../assets/images/image";

export const ReactWriteWrap = styled.div`
  .title {
    margin: 40px 0px 20px 30px;
    display: flex;
    align-items: center;
  }
  .left {
    color: #646464;
    margin: 0px 80px 0px 0px;
  }

  h3 {
    font-weight: 700;
    font-size: 19px;
    color: #282828;
  }

  hr {
    border: 0.7px solid #e5e5e5;
    width: 100%;
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
    padding: 20px;
    width: 100%;
    height: 100%;
  }

  .review_wrap {
    display: flex;
    justify-content: space-between;
  }

  .comment_wrap {
    display: flex;
    flex-direction: column;
    width: 342px;
    /* border-bottom: 1px solid #E5E5E5; */
  }

  .title_wrap {
    display: flex;
  }

  .content_wrap {
    margin: 10px 0px;
  }

  .p_wrap {
    color: #282828;
    font-size: 14px;
    word-break: break-all;
    display: -webkit-box;
    word-wrap: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
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

  .info {
    margin: 5px 0px 0px 10px;
  }

  .insert_dt {
    margin: 10px 0px 5px 0px;
    font-size: 12px;
    color: #777;
  }

  .nicknameAndDelete {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
  }

  .nickname {
    margin-top: 6px;
    font-size: 18px;
    color: #777777;
    font-weight: 500px;
  }

  .heart {
    font-size: 30px;
    color: #ff679e;
    margin-top: 10px;
  }

  .img_wrap {
    position: relative;
    width: 100%;

    border-radius: 5px;
    background-position: center;
    background-size: 100%;
    object-fit: cover;
  }

  .hr_wrap {
    border: 0.7px solid #e5e5e5;
    width: 100%;
    margin: 25px 0px;
  }

  .title_wrap2 {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .btn {
    display: flex;
    justify-content: end;
    margin-top: 20px;
  }

  .modify {
    width: 80px;
    height: 35px;
    font-size: 13px;
    color: #777;
    border: 1px solid #777;
    border-radius: 20px;
    margin-right: 10px;
  }

  .delete {
    width: 64px;
    height: 33px;
    font-size: 12px;
    color: #e10000;
    border: 1px solid #e10000;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
  }
`;
