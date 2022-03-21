import styled from "styled-components";

import { image_upload, preview_delete } from "../../assets/images/image";

export const ReviewWrap = styled.div`
  .title {
    padding: 40px 0px 20px 30px;
    display: flex;
    align-items: center;
  }
  .left {
    color: #646464;
    margin: 0px 70px 0px 0px;
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

  .enter {
    margin-left: 50px;
    font-weight: 700;
    color: #ff679e;
  }

  .top {
    text-align: center;
    padding: 30px;
  }

  .p {
    margin-top: 10px;
  }

  .area {
    margin: 0 auto;
    width: 90%;
    height: auto;
  }

  textarea {
    width: 100%;
    height: 200px;
    padding: 10px;
    border-radius: 4px;
  }

  .plus_btn {
    margin: 20px auto 0px auto;
    width: 90%;
    background-color: #fff0f6;
    border-radius: 4px;
  }

  .image_plus {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  .plusSvg {
    path {
      stroke: #ff679e;
      fill: none;
    }
  }

  .btn {
    margin-top: 0px;
    margin-left: 10px;
    color: #ff679e;
    font-weight: 600;
    font-size: 16px;
  }

  .delete_btn {
    position: absolute;
    bottom: 75px;
    left: 75px;
  }
`;

export const ImageBox = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 20px;
  gap: 20px;
  margin-top: 10px;
  overflow: hidden;

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
`;

export const ImageUpload = styled.img`
  src: ${image_upload};
`;

export const PreviewDelete = styled.img`
  src: ${preview_delete};
`;
