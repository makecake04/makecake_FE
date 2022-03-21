import React from "react";
import { fabric } from "fabric";

//css
import { TextWrap } from "./style";

const Text = (props) => {
  const { canvas } = props;
  const addText = (canvas) => {
    const text = new fabric.IText("Tap & Edit", {
      fontFamily: "noto sans",
      fill: "#00000",
      fontSize: 40,
    });
    canvas.setActiveObject(text);
    canvas.add(text).centerObject(text).renderAll();
  };

  return (
    <TextWrap>
      <div className="text-box" onClick={() => addText(canvas)}>
        <p>특별한 텍스트를 담아보세요</p>
        <span>*생일, 기념일, 이름 등*</span>
      </div>
    </TextWrap>
  );
};

export default Text;
