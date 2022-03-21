import styled from "styled-components";

export const Container = styled.div`
  margin-top: 0;

  .commentBox1 {
    padding-bottom: 7px;
    display: flex;
    flex-direction: column;
    width: 342px;
    // height: 153px;
    margin: 10px auto;
    border-bottom: 1px solid #e5e5e5;

    .infoBox {
      width: 342px;
      height: 20px;
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
    }

    .nickname1 {
      color: #777777;
      width: 64px;
      height: 20px;
      font-size: 14px;
      margin-top: 0;
      margin-left: 0;
      width: max-content;
    }

    .commentDate {
      /* height: 17px; */
      color: #777777;
      width: max-content;
      margin-top: 0;
      font-size: 12px;
    }

    .content1 {
      display: flex;
      min-height: 80px;
      font-size: 14px;
      color: #282828;
      word-break: break-all;
    }

    .buttons {
      display: flex;
      justify-content: flex-end;
    }

    .editBox {
      width: 64px;
      height: 33px;
      border: 1px solid #777777;
      border-radius: 50px;
      justify-content: center;
      align-items: center;
      display: flex;
      color: #777777;
      font-size: 12px;
    }

    .editText {
      font-size: 12px;
      color: #777777;
      text-align: center;
    }

    .deleteBox {
      width: 64px;
      height: 33px;
      border: 1px solid #e10000;
      border-radius: 50px;
      justify-content: center;
      align-items: center;
      display: flex;
      font-size: 12px;
      color: #e10000;
    }

    .deleteText {
      font-size: 12px;
      color: #e10000;
      text-align: center;
    }

    .editBox ~ .deleteBox {
      margin: 0 0 0 10px;
    }
  }
`;
