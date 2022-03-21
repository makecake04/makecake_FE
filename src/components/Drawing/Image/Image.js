import React, { useState } from "react";
import { fabric } from "fabric";

//css
import { ImageWrap } from "./style";

const Image = (props) => {
  const { canvas } = props;
  const [fileName, setFileName] = useState("선택한 파일이 없습니다");
  const fileInput = React.useRef();

  const selectFile = (e) => {
    const reader = new FileReader();
    const currentFile = fileInput.current.files[0];
    setFileName(currentFile.name);
    reader.readAsDataURL(currentFile);
    reader.onloadend = () => {
      if (currentFile.size > 5000000) {
        alert("파일 사이즈가 너무 큽니다!");
        return;
      }
      fabric.Image.fromURL(reader.result, (img) => {
        img.scale(0.1);
        canvas.add(img).centerObject(img).renderAll();
      });
    };
  };

  return (
    <ImageWrap>
      <div className="image-box">
        <label>
          <p>이미지를 불러오세요</p>
          <span>*jpg,png 파일만 가능*</span>
          <input
            style={{ border: "none" }}
            type="file"
            accept=".jpg, .jpeg, .png"
            onChange={selectFile}
            ref={fileInput}
          />
        </label>
      </div>
    </ImageWrap>
  );
};

export default Image;
