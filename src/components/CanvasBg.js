import React from "react";
import styled from "styled-components";

const CanvasBg = () => {
  return (
    <BgWrap>
      <div className="bg-box">
        <p>배경 색상을 변경해보세요</p>
        <span>*좌측 상단의 컬러 피커 활용*</span>
      </div>
    </BgWrap>
  );
};

const BgWrap = styled.div`
  margin-top: 3rem;
  .bg-box {
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

export default CanvasBg;
