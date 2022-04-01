import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";

import { actionCreators as designAction } from "../../../redux/modules/design";
import { actionCreators as orderAction } from "../../../redux/modules/order";

//image
import { black_back_button, beta } from "../../../assets/images/image";

//css
import {
  Wrapper,
  Header,
  Tab,
  OrderDesign,
  OrderCheck,
  Body,
  DesignList,
  NeedDesignBox,
  DrawingIcon,
  NeedDesignText,
  GoToDesignText,
  OrderList,
  NeedOrderBox,
  PostIcon,
  NeedOrderText,
  ImgWrap,
  ImgBox,
  ModalWrap,
  ModalImg,
  OrderIcon,
} from "./style";

Modal.setAppElement("#root");

const Order = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const no_order_list = useSelector((state) => state.order.no_order_list);
  const order_list = useSelector((state) => state.order.order_list);
  const design_image = useSelector((state) => state.design.design_detail);
  const [toggleState, setToggleState] = React.useState(1);
  const [order, setOrder] = useState("notOrdered");
  const [pageNumber, setPageNumber] = React.useState(0);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [ref, inView] = useInView();
  const toggleTab = (index) => {
    setToggleState(index);
    if (index === 1) {
      setOrder("notOrdered");
    } else {
      setOrder("ordered");
    }
  };

  useEffect(() => {
    setPageNumber(0);
    dispatch(orderAction.getOrdersDB(0, order));
  }, [toggleState]);

  useEffect(() => {
    console.log("dispatch");
    if (pageNumber > 0) dispatch(orderAction.getOrdersDB(pageNumber, order));
  }, [pageNumber]);

  useEffect(() => {
    if (inView) {
      setPageNumber(pageNumber + 1);
    }
  }, [inView]);

  return (
    <Wrapper>
      <Header>
        <img
          src={black_back_button}
          alt="back-button"
          onClick={() => navigate("/mypage")}
        />
        <h3>케이크 주문하기</h3>
        <img src={beta} alt="beta" />
      </Header>
      <hr />
      <Tab>
        <OrderDesign toggleState={toggleState} onClick={() => toggleTab(1)}>
          주문할 도안 선택
        </OrderDesign>
        <OrderCheck toggleState={toggleState} onClick={() => toggleTab(2)}>
          주문서 확인
        </OrderCheck>
      </Tab>
      <Body>
        <DesignList toggleState={toggleState}>
          {no_order_list.length === 0 ? (
            <NeedDesignBox>
              <DrawingIcon />
              <NeedDesignText>
                주문을 하기 위해서는 도안이 필요해요!
              </NeedDesignText>
              <GoToDesignText onClick={() => navigate("/drawing")}>
                도안 그리러 가기
              </GoToDesignText>
            </NeedDesignBox>
          ) : (
            no_order_list.map((v, idx) => {
              return (
                <ImgWrap key={idx} ref={ref}>
                  <ImgBox
                    src={v.img}
                    onClick={() => {
                      setModalIsOpen(true);
                      dispatch(designAction.getDesignImageDB(v.designId));
                    }}
                    alt="cakeImage"
                  />
                </ImgWrap>
              );
            })
          )}
        </DesignList>
        <OrderList toggleState={toggleState}>
          {order_list.length === 0 ? (
            <NeedOrderBox>
              <PostIcon />
              <NeedOrderText>주문서 작성을 먼저 해주세요!</NeedOrderText>
            </NeedOrderBox>
          ) : (
            order_list.map((v, idx) => {
              return (
                <ImgWrap key={idx} ref={ref}>
                  <ImgBox
                    src={v.img}
                    onClick={() => {
                      navigate(`/order/detail/${v.userOrdersId}`);
                    }}
                    alt="orderImage"
                  />
                </ImgWrap>
              );
            })
          )}
        </OrderList>
      </Body>
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
          <ModalImg
            src={design_image.img}
            onClick={() => setModalIsOpen(false)}
            alt="cakeDetailImage"
          />
          <OrderIcon
            onClick={() => navigate(`/order/${design_image.designId}`)}
          />
        </ModalWrap>
      </Modal>
    </Wrapper>
  );
};

export default Order;
