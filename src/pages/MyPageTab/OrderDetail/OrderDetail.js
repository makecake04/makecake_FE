import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { actionCreators as orderAction } from "../../../redux/modules/order";

//image
import { beta } from "../../../assets/images/image";

//css
import {
  Wrapper,
  Header,
  BlackBackButton,
  Body,
  MustRead,
  Info,
  OrderItem,
  CopyText,
  Default,
  MustReadItem,
  ConnectButton,
  ButtonWrapper,
} from "./style";

const OrderDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [copied, setCopied] = useState(false);
  const user_order_id = useParams().id;
  const order_detail = useSelector((state) => state.order.order_detail);

  useEffect(() => {
    dispatch(orderAction.getOneOrderDB(user_order_id));
  }, []);

  return (
    <Wrapper>
      <Header>
        <BlackBackButton
          onClick={() => {
            navigate("/order");
            dispatch(orderAction.setOrderSortType(2));
          }}
        />
        <h3>주문서 확인</h3>
        <img src={beta} alt="beta" />
      </Header>
      <hr />
      <Body>
        <ButtonWrapper>
          <button
            onClick={() => {
              dispatch(orderAction.deleteOrderDB(user_order_id));
            }}
          >
            삭제하기
          </button>
        </ButtonWrapper>
        <img src={order_detail.img} alt="design-img" />
        <p>이미지를 꾸욱 눌러서 저장할 수 있어요!</p>
        <Info>
          <h3>{order_detail.name}</h3>
        </Info>
        {order_detail &&
          order_detail.formList?.map((o, i) => {
            return (
              <OrderItem key={i}>
                <div>{o}: </div>
                <div>{order_detail.userInput[i]}</div>
              </OrderItem>
            );
          })}
        <CopyToClipboard text={order_detail.copyText}>
          <CopyText onClick={() => setCopied(true)}>복사</CopyText>
        </CopyToClipboard>
        {copied && <p>복사되었습니다!</p>}
      </Body>
      <hr />
      <MustRead>
        <h3>주문 전 필독사항</h3>
        <Default>*실제 날짜와 픽업 시간은 해당 매장과 상의해주세요</Default>
        {order_detail &&
          order_detail.instructionList?.map((o, i) => {
            return (
              <MustReadItem key={i}>
                <p>*{o.split("/ln")[0]}</p>
                {o.split("/ln")[1] && <p>&nbsp;&nbsp;{o.split("/ln")[1]}</p>}
              </MustReadItem>
            );
          })}
      </MustRead>
      <ConnectButton
        onClick={() => {
          window.open(`${order_detail.storeUrl}`);
        }}
      >
        내가 주문한 매장 연결
      </ConnectButton>
    </Wrapper>
  );
};

export default OrderDetail;
