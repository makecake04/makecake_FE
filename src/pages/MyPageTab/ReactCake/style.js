import styled from "styled-components";

export const ReactCakeWrap = styled.div`
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
`;

export const ImageWrap = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 20px;
  gap: 20px;
  margin-top: 10px;

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
    border-radius: 5px;
    object-fit: cover;
  }

  .heart {
    font-size: 30px;
    color: #ff679e;
    margin-top: 10px;
    position: absolute;
    right: 10px;
  }

  .store {
    margin: 10px 0px;
    color: #282828;
  }

  .name {
    margin-bottom: 10px;
    color: #777;
    font-size: 15px;
  }
`;
