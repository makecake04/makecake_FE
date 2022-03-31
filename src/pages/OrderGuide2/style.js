import styled from "styled-components";

export const OrderGuideWrap = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-y: auto;

  hr {
    border: 0.7px solid #e5e5e5;
    width: 100%;
    font-weight: 500;
  }
`;

export const Header = styled.header`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  img:first-child {
    margin-left: 3%;
  }
  img:nth-of-type(2) {
    padding: 0.3rem 0 0 0.7rem;
  }
  h3 {
    margin-left: 19%;
    vertical-align: middle;
  }
`;

export const GuideWrap = styled.div`
  text-align: center;
  padding: 20px;
  > div {
    background: #fff9f9;
    border-radius: 10px;
    padding: 20px;
  }
`;

export const Question = styled.p`
  color: #ff679e;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Answer = styled.p`
  color: #5e5d5d;
  font-size: 12px;
`;

export const Answer2 = styled.p`
  color: #5e5d5d;
  font-size: 12px;
  margin-bottom: 20px;
`;

export const TitleWrap = styled.div`
  text-align: start;

  h3 {
    margin: 0 0 20px 20px;
    font-weight: 700;
    font-size: 19px;
  }

  hr {
    border: 0.7px solid #eaeaea;
    width: 100%;
    font-weight: 500;
  }
`;

export const StoreWrap = styled.div`
  hr {
    border: 0.7px solid #eaeaea;
    width: 100%;
    font-weight: 500;
  }
`;

export const StoreList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  text-align: start;
`;

export const StoreInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;

export const StoreName = styled.p`
  flex: 1;
  color: #282828;
  font-weight: 700;
  font-size: 17px;
`;

export const Address = styled.p`
  color: #9c9cdc;
  font-weight: 500;
  font-size: 14px;
  max-width: 150px;
  margin-right: 30px;
`;

export const StoreButton = styled.p`
  color: #777;
  font-size: 14px;
  text-decoration: underline;
`;
