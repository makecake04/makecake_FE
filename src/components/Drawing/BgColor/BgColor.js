import React from "react";

//css
import { BgWrap } from "./style";
const BgColor = () => {
  return (
    <BgWrap>
      <div className="bg-box">
        <p>배경 색상을 변경해보세요</p>
        <span>*좌측 상단의 컬러 피커 활용*</span>
      </div>
    </BgWrap>
  );
};

export default BgColor;
