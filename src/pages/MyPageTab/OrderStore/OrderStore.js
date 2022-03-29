import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { actionCreators as orderAction } from "../../../redux/modules/order";

//css
import {
  Wrapper,
  Header,
  Body,
  SearchBar,
  SearchIcon,
  SearchListBox,
  OrderButton,
  OneStore,
} from "./style";

//image
import {
  black_back_button,
  beta,
  order_marker,
} from "../../../assets/images/image";

const OrderStore = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const design_id = useParams().id;
  const [showStores, setShowStores] = useState(false);
  const [storeName, setStoreName] = useState("");
  const [orderId, setOrderId] = useState(0);
  const store_list = useSelector((state) => state.order.store_list);

  useEffect(() => {
    dispatch(orderAction.getStoresDB());
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
        <img src={order_marker} alt="marker" />
        <p>주문 가능한 매장을 찾아보세요</p>
        <p>현재는 일부 매장만 주문하기를 지원하고 있어요.</p>
        <SearchBar onClick={() => setShowStores(!showStores)}>
          <span>매장 ㅣ</span>
          <input type="text" defaultValue={storeName} readOnly />
          <SearchIcon />
        </SearchBar>
        {showStores ? (
          <SearchListBox>
            {store_list &&
              store_list.map((s, idx) => {
                return (
                  <OneStore
                    key={idx}
                    onClick={() => {
                      setStoreName(`${s.name}`);
                      setOrderId(`${s.orderFormId}`);
                    }}
                  >
                    {s.name}
                  </OneStore>
                );
              })}
            {/* <OneStore
              onClick={() => {
                setStoreName("밈미레터링케이크(홀케이크)");
                setOrderId(1);
              }}
            >
              밈미레터링케이크(홀케이크)
            </OneStore>
            <OneStore
              onClick={() => {
                setStoreName("밈미레터링케이크(도시락케이크)");
                setOrderId(2);
              }}
            >
              밈미레터링케이크(도시락케이크)
            </OneStore>
            <OneStore
              onClick={() => {
                setStoreName("밈미레터링케이크(홀케이크)");
              }}
            >
              밈미레터링케이크(홀케이크)
            </OneStore>
            <OneStore
              onClick={() => {
                setStoreName("밈미레터링케이크(도시락케이크)");
              }}
            >
              밈미레터링케이크(도시락케이크)
            </OneStore>
            <OneStore
              onClick={() => {
                setStoreName("밈미레터링케이크(홀케이크)");
              }}
            >
              밈미레터링케이크(홀케이크)
            </OneStore>
            <OneStore
              onClick={() => {
                setStoreName("밈미레터링케이크(도시락케이크)");
              }}
            >
              밈미레터링케이크(도시락케이크)
            </OneStore>
            <OneStore
              onClick={() => {
                setStoreName("밈미레터링케이크(홀케이크)");
              }}
            >
              밈미레터링케이크(홀케이크)
            </OneStore>
            <OneStore
              onClick={() => {
                setStoreName("밈미레터링케이크(도시락케이크)");
              }}
            >
              밈미레터링케이크(도시락케이크)
            </OneStore>
            <OneStore
              onClick={() => {
                setStoreName("밈미레터링케이크(홀케이크)");
              }}
            >
              밈미레터링케이크(홀케이크)
            </OneStore>
            <OneStore
              onClick={() => {
                setStoreName("밈미레터링케이크(도시락케이크)");
              }}
            >
              밈미레터링케이크(도시락케이크)
            </OneStore>
            <OneStore
              onClick={() => {
                setStoreName("밈미레터링케이크(홀케이크)");
              }}
            >
              밈미레터링케이크(홀케이크)
            </OneStore>
            <OneStore
              onClick={() => {
                setStoreName("밈미레터링케이크(도시락케이크)");
              }}
            >
              밈미레터링케이크(도시락케이크)
            </OneStore>
            <OneStore
              onClick={() => {
                setStoreName("밈미레터링케이크(홀케이크)");
              }}
            >
              밈미레터링케이크(홀케이크)
            </OneStore>
            <OneStore
              onClick={() => {
                setStoreName("밈미레터링케이크(도시락케이크)");
              }}
            >
              밈미레터링케이크(도시락케이크)
            </OneStore> */}
          </SearchListBox>
        ) : null}
        {storeName && (
          <OrderButton
            onClick={() => navigate(`/order/write/${design_id}/${orderId}`)}
          >
            주문하러 가기
          </OrderButton>
        )}
      </Body>
    </Wrapper>
  );
};
export default OrderStore;

// const SearchList = (props) => {
//   const { store_list } = props;
//   console.log(store_list);
//   return (
//     // <SearchListBox>
//     //   {store_list &&
//     //     store_list.map((s, idx) => {
//     //       return <OneStore key={idx} onClick={()=>setStoreName}>{s.name}</OneStore>;
//     //     })}
//     // </SearchListBox>
//   );
// };
