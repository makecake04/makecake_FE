import React from "react";

//css
import { Wrapper, TextBox } from "./style";

const BgColor = () => {
  return (
    <Wrapper>
      <TextBox>
        <p>배경 색상을 변경해보세요</p>
        <p>*좌측 상단의 컬러 피커 활용*</p>
      </TextBox>
    </Wrapper>
  );
};

export default BgColor;
