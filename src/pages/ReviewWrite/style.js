import styled from "styled-components";

//image
import { image_upload, black_back_button } from "../../assets/images/image";

export const ReviewWrap = styled.div`
  h3 {
    color: #282828;
  }

  textarea {
    width: 100%;
    height: 200px;
    padding: 10px;
    border-radius: 4px;
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
`;

export const SubWrap = styled.div``;

export const Title = styled.div`
  padding: 40px 0px 20px 20px;
  display: flex;
  align-items: center;
`;

export const BlackBackIcon = styled.img.attrs({
  src: `${black_back_button}`,
})`
  margin: 0px 70px 0px 0px;
  cursor: pointer;
`;

export const Enter = styled.p`
  margin-left: 50px;
  color: #ff679e;
  cursor: pointer;
`;

export const HrWrap = styled.hr`
  border: 0.7px solid #e5e5e5;
  width: 100%;
`;

export const TopWrap = styled.div`
  text-align: center;
  padding: 30px;
`;

export const P = styled.p`
  margin-top: 10px;
`;

export const AreaWrap = styled.div`
  margin: 0 auto;
  width: 90%;
  height: auto;
`;

export const PlusButton = styled.div`
  margin: 20px auto 0px auto;
  width: 90%;
  background-color: #fff0f6;
  border-radius: 4px;
`;

export const LabelWrap = styled.label``;

export const PlusImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  cursor: pointer;
`;

export const ImageWrap = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 20px;
  gap: 20px;
  margin-top: 10px;
  overflow: hidden;
`;

export const ImageBox = styled.div`
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

export const ImageUpload = styled.img.attrs({
  src: `${image_upload}`,
})``;
