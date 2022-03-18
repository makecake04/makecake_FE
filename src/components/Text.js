import React from "react";
import styled from "styled-components";
import { fabric } from "fabric";

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

const TextWrap = styled.div`
  margin-top: 3rem;
  .text-box {
    margin: 0 auto;
    background-color: #ffffff;
    width: 29.6rem;
    height: 8.8rem;
    border-radius: 1rem;
    vertical-align: middle;
    padding: 2.3rem;
    p {
      color: #777777;
      font-weight: 700;
    }
    span {
      color: #ff679e;
      font-size: 1.4rem;
    }
  }
`;

export default Text;
