import React from "react";
import { fabric } from "fabric";

//css
import { Wrapper, TextBox } from "./style";

const Text = (props) => {
  const { canvas } = props;
  const addText = (canvas) => {
    const text = new fabric.IText("Tap & Edit", {
      fontFamily: "Noto Sans KR",
      fill: "#00000",
      fontSize: 40,
    });
    canvas.setActiveObject(text);
    canvas.add(text).centerObject(text).renderAll();
  };

  return (
    <Wrapper>
      <TextBox onClick={() => addText(canvas)}>
        <p>특별한 텍스트를 담아보세요</p>
        <p>*생일, 기념일, 이름 등*</p>
      </TextBox>
    </Wrapper>
  );
};

export default Text;
