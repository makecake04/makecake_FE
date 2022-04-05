import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actionCreators as orderAction } from "../../redux/modules/order";
import { actionCreators as searchAction } from "../../redux/modules/search";

//image
import { black_back_button, beta } from "../../assets/images/image";

//css
import {
  OrderGuideWrap,
  Header,
  GuideWrap,
  Question,
  Answer,
  Answer2,
  StoreWrap,
  TitleWrap,
  StoreList,
  StoreInfo,
  StoreName,
  Address,
  StoreButton,
} from "./style";
import { useNavigate } from "react-router-dom";

const OrderGuide2 = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const guideInfo = useSelector((state) => state.order.order_guide);

  useEffect(() => {
    dispatch(orderAction.getOrderGuideDB());
  }, []);

  return (
    <OrderGuideWrap>
      <Header>
        <img
          src={black_back_button}
          alt="back-button"
          onClick={() => navigate(-1)}
        />
        <h3>주문하기 안내</h3>
        <img src={beta} alt="beta" />
      </Header>
      <hr />
      <GuideWrap>
        <div>
          <Question>Q. 주문하기 기능은 어떻게 이용하나요?</Question>
          <Answer>
            도안탭 {">"} 버튼 {">"} 그리기에서 도안을 그린 후,
          </Answer>
          <Answer>마이페이지 {">"} 케이크 주문하기에서</Answer>
          <Answer2>도안 클릭 {">"} 주문하기 버튼을 눌러보세요!</Answer2>
          <Question>Q. 주문하기를 이용하면 바로 주문이 넣어지나요?</Question>
          <Answer>실제 매장에 바로 주문이 연결되는 것이 아니라,</Answer>
          <Answer2>양식에 맞춰 작성하는 것까지 도와드리고 있어요.</Answer2>
          <Question>Q. 이벤트는 어떻게 참여하나요?</Question>
          <Answer>@__makecake 인스타그램 계정을 참고해주세요.</Answer>
          <Answer>주문하기를 이용하시면 다양한 상품을 드린답니다!</Answer>
        </div>
      </GuideWrap>
      <TitleWrap>
        <h3>주문하기 가능 매장 🍰</h3>
        <hr />
      </TitleWrap>
      {guideInfo &&
        guideInfo.map((v, idx) => {
          return (
            <StoreWrap key={idx}>
              <StoreList>
                <StoreName>{v.name}</StoreName>
                <StoreInfo>
                  <Address>{v.simpleAddress}</Address>
                  <StoreButton
                    onClick={() => {
                      navigate(`/searchmap/${v.storeId}`);
                      dispatch(searchAction.mapInfoDB(v.storeId));
                    }}
                  >
                    매장 보러 가기
                  </StoreButton>
                </StoreInfo>
              </StoreList>
              <hr />
            </StoreWrap>
          );
        })}
    </OrderGuideWrap>
  );
};

export default OrderGuide2;
