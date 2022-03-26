import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { saveAs } from "file-saver";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { actionCreators as orderAction } from "../../../redux/modules/order";

//image
import { black_back_button, beta } from "../../../assets/images/image";

//css
import {
  Wrapper,
  Header,
  Body,
  MustRead,
  Info,
  OrderItem,
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
  const image_file = useSelector((state) => state.order.image_file);
  console.log(order_detail.copyText);
  // console.log(image_file);

  useEffect(() => {
    dispatch(orderAction.getOneOrderDB(user_order_id));
    dispatch(orderAction.getImageFileDB(user_order_id));
  }, []);

  return (
    <Wrapper>
      <Header>
        <img
          src={black_back_button}
          alt="back-button"
          onClick={() => navigate("/order")}
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
                <span>{o}: </span>
                <span>{order_detail.userInput[i]}</span>
              </OrderItem>
            );
          })}
        <CopyToClipboard text={order_detail.copyText}>
          <span onClick={() => setCopied(true)}>복사</span>
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
