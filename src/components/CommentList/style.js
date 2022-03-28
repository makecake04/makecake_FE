import styled from "styled-components";

export const Container = styled.div`
  margin-top: 0;
`;

export const CommentBox = styled.div`
  padding-bottom: 7px;
  display: flex;
  flex-direction: column;
  width: 342px;
  margin: 10px auto;
  border-bottom: 1px solid #e5e5e5;
`;

export const InfoBox = styled.div`
  width: 342px;
  height: 20px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const NickName = styled.div`
  color: #777777;
  width: 64px;
  height: 20px;
  font-size: 14px;
  margin-top: 0;
  margin-left: 0;
  width: max-content;
`;

export const CommentDate = styled.div`
  color: #777777;
  width: max-content;
  margin-top: 0;
  font-size: 12px;
`;

export const Content = styled.div`
  display: flex;
  min-height: 80px;
  font-size: 14px;
  color: #282828;
  word-break: break-all;
`;

export const Button = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const EditBox = styled.div`
  width: 64px;
  height: 33px;
  border: 1px solid #777777;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  display: flex;
  color: #777777;
  font-size: 12px;
  margin: 0 0 0 10px;
`;

export const DeleteBox = styled.button`
  width: 64px;
  height: 33px;
  border: 1px solid #e10000;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 12px;
  color: #e10000;
`;
