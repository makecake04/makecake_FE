import styled from "styled-components";

export const ReviewWrap = styled.div`
  > div {
    width: 90%;
    margin: 0 auto;
  }
  h3 {
    margin: 20px 0px 0px 0px;
    text-align: start;
    font-weight: 700;
    font-size: 19px;
    color: #282828;
  }
  hr {
    border: 0.7px solid #e5e5e5;
    width: 90%;
    margin: auto;
  }
`;

export const CommentWrap = styled.div`
  height: 200px;
  > div {
    display: flex;
    padding: 10px 0px;
  }

  .wrap {
    width: 55px;
    flex: none;
  }

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
    border-radius: 10px;
    object-fit: cover;
    background: no-repeat;
  }

  .review_wrap {
    position: relative;
    margin: 0 10px;
    text-align: start;
  }

  .info_wrap {
    display: flex;
    margin: 0px 10px;
  }

  p {
    width: 200px;
    margin-left: 10px;
    margin-bottom: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .name {
    margin-right: 10px;
  }

  .stack {
    padding: 0px 0px;
  }
`;
