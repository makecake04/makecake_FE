import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";

import { actionCreators as designAction } from "../../../redux/modules/design";
import { actionCreators as orderAction } from "../../../redux/modules/order";

//css
import {
  Wrapper,
  Header,
  Body,
  Info,
  MustRead,
  Default,
  MustReadItem,
  ModalWrap,
  Category,
  CategoryWrap,
  CategoryItem,
  CategoryDetail,
  OrderButton,
  OrderItem,
} from "./style";

//image
import {
  black_back_button,
  beta,
  help_icon,
  close,
} from "../../../assets/images/image";

const OrderWrite = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const design_id = useParams().designId;
  const order_id = useParams().orderId;
  const [active, setActive] = React.useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [inputs, setInputs] = useState({});
  const design_detail = useSelector((state) => state.design.design_detail);
  const order_form = useSelector((state) => state.order.order_form);
  const question_length = order_form.formList?.length;
  const list = Object.values(inputs);
  const setUserInput = (e, i) => {
    let key = `${i}`;
    let value = e.target.value;
    setInputs({ ...inputs, [key]: value });
    if (list.length === question_length - 1) setActive(false);
  };

  useEffect(() => {
    dispatch(designAction.getDesignImageDB(design_id));
    dispatch(orderAction.getOrderFormDB(order_id));
  }, []);

  return (
    <Wrapper>
      <Header>
        <img
          src={black_back_button}
          alt="back-button"
          onClick={() => navigate(-1)}
        />
        <h3>케이크 주문하기</h3>
        <img src={beta} alt="beta" />
      </Header>
      <hr />
      <Body>
        <img src={design_detail.img} alt="img" />
        <Info>
          <h3>{order_form.name}</h3>
          <img
            src={help_icon}
            alt="help"
            onClick={() => setModalIsOpen(true)}
          />
        </Info>

        {order_form &&
          order_form.formList?.map((o, i) => {
            return (
              <OrderItem key={i}>
                <span>{o}:</span>
                <input type="text" onChange={(e) => setUserInput(e, i)} />
              </OrderItem>
            );
          })}
      </Body>
      <hr />
      <MustRead>
        <h3>주문 전 필독사항</h3>
        <Default>*실제 날짜와 픽업 시간은 해당 매장과 상의해주세요</Default>
        {order_form &&
          order_form.instructionList?.map((o, i) => {
            return (
              <MustReadItem key={i}>
                <p>*{o.split("/ln")[0]}</p>
                {o.split("/ln")[1] && <p>&nbsp;&nbsp;{o.split("/ln")[1]}</p>}
              </MustReadItem>
            );
          })}
      </MustRead>

      <OrderButton
        disabled={active}
        onClick={() => {
          if (inputs.length < question_length) {
          }
          dispatch(orderAction.addOrderDB(list, order_id, design_id));
        }}
      >
        주문서 작성 완료
      </OrderButton>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(76, 76, 76, 0.7)",
            zIndex: "20",
          },
          content: {
            position: "absolute",
            top: "50%",
            left: "50%",
            bottom: "auto",
            width: "300px",
            height: "auto",
            padding: "0",
            border: "none",
            overflow: "auto",
            borderRadius: "5px",
            transform: "translate(-50%,-50%)",
            WebkitOverflowScrolling: "touch",
          },
        }}
      >
        <ModalWrap>
          <img src={close} alt="close" onClick={() => setModalIsOpen(false)} />
          <Category>케이크 종류</Category>
          {order_form &&
            order_form.moreDetails?.cakeMenuList.map((m, i) => {
              return (
                <CategoryWrap key={i}>
                  <CategoryItem>
                    <span>
                      {m.type} {m.size}
                    </span>
                    <span>{m.price}</span>
                  </CategoryItem>
                  <CategoryDetail>
                    <p>{m.moreInfo}</p>
                  </CategoryDetail>
                </CategoryWrap>
              );
            })}

          <Category>케이크 시트 맛</Category>
          {order_form &&
            order_form.moreDetails?.cakeTasteList.map((t, i) => {
              return (
                <CategoryWrap key={i}>
                  <CategoryItem>
                    <span>{t.flavor}</span>
                    <span>{t.addedPrice}</span>
                  </CategoryItem>
                  <CategoryDetail>
                    <p>{t.moreInfo}</p>
                  </CategoryDetail>
                </CategoryWrap>
              );
            })}

          <Category>추가 옵션</Category>
          {order_form &&
            order_form.moreDetails?.cakeOptionList.map((o, i) => {
              return (
                <CategoryWrap key={i}>
                  <CategoryItem>
                    <span>{o.name}</span>
                    <span>{o.price}</span>
                  </CategoryItem>
                  <CategoryDetail>
                    <p>{o.moreInfo}</p>
                  </CategoryDetail>
                </CategoryWrap>
              );
            })}
        </ModalWrap>
      </Modal>
    </Wrapper>
  );
};

export default OrderWrite;
