import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import smoothscroll from "smoothscroll-polyfill";

import { actionCreators as userAction } from "../redux/modules/user";

//components
import {
  NavBar,
  KakaoLoginHandler,
  GoogleLoginHandler,
  NaverLoginHandler,
} from "../components/component";

//pages
import {
  Home,
  CakeList,
  SearchResult,
  MyPage,
  DesignList,
  ProfileEdit,
  MyDesign,
  ReactPost,
  ReactStore,
  ReactCake,
  Order,
  OrderStore,
  OrderWrite,
  OrderDetail,
  StoreDetail,
  Noti,
  OrderGuide,
  OrderGuide2,
  SignUpEmail,
  SignUpNickname,
  SignUpPassword,
  Search,
  LoginEmail,
  LoginPassword,
  SearchMap,
  FirstPage,
  Drawing,
  PostWrite,
  PostDetail,
  ReviewWrite,
  NotFound,
} from "../pages/page";

//css
import "../css/App.css";

//image
import { background } from "../assets/images/image";

function App() {
  const dispatch = useDispatch();
  const is_session = localStorage.getItem("token");
  smoothscroll.polyfill();
  useEffect(() => {
    if (is_session) {
      dispatch(userAction.loginCheckDB());
    }
  }, []);

  return (
    <Container>
      <div id="wrap">
        <Setting>
          <Routes>
            <Route element={<NavBar />}>
              {is_session && <Route path="/" element={<Home />} />}
              {!is_session && <Route path="/home" element={<Home />} />}
              <Route path="/home" element={<Home />} />
              <Route path="/cake" element={<CakeList />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/design/list" element={<DesignList />} />
              <Route path="/profile/edit" element={<ProfileEdit />} />
              <Route path="/storedetail/:storeid" element={<StoreDetail />} />
              <Route path="/search/" element={<Search />} />
              <Route path="/post/:id" element={<PostDetail />} />
              <Route path="/post/write/:designid" element={<PostWrite />} />
              <Route
                path="/post/write/:designid/:postid"
                element={<PostWrite />}
              />
            </Route>
            {!is_session && <Route path="/" element={<FirstPage />} />}
            <Route path="/mydesign" element={<MyDesign />} />
            <Route path="/react/post" element={<ReactPost />} />
            <Route path="/react/store" element={<ReactStore />} />
            <Route path="/react/cake" element={<ReactCake />} />

            <Route path="/noti" element={<Noti />} />
            <Route path="/order" element={<Order />} />
            <Route path="/order/:id" element={<OrderStore />} />
            <Route
              path="/order/write/:designId/:orderId"
              element={<OrderWrite />}
            />
            <Route path="/order/detail/:id" element={<OrderDetail />} />
            <Route path="/signup/email" element={<SignUpEmail />} />
            <Route path="/signup/nickname" element={<SignUpNickname />} />
            <Route path="/signup/password" element={<SignUpPassword />} />
            <Route path="/login/email" element={<LoginEmail />} />
            <Route path="/login/password" element={<LoginPassword />} />
            <Route path="/review/write/:storeId" element={<ReviewWrite />} />
            <Route path="/review/:reviewId" element={<ReviewWrite />} />
            <Route path="/searchmap/:storeId/" element={<SearchMap />} />
            <Route
              path="/search/result/:searchSelect/:searchInput"
              element={<SearchResult />}
            />
            <Route path="/drawing" element={<Drawing />} />
            <Route
              path="/user/kakao/callback"
              element={<KakaoLoginHandler />}
            />
            <Route
              path="/user/google/callback"
              element={<GoogleLoginHandler />}
            />
            <Route path="/order/guide" element={<OrderGuide />} />
            <Route path="/order/guide2" element={<OrderGuide2 />} />
            <Route
              path="/user/naver/callback"
              element={<NaverLoginHandler />}
            />

            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Setting>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  /* background: #f9c9c9; */
  /* overflow: hidden; */
  position: relative;
  #wrap {
    width: 100%;
    max-width: 390px;
    height: 100%;
    min-height: 100vh;
    margin: 0 auto;
    padding: 0 auto;
    background-color: #fcfcfc;
    position: relative;
    -webkit-overflow-scrolling: touch;
    @media (min-width: 500px) {
      left: 0%;
      top: 0%;
      overflow: hidden auto;
    }
    @media (min-width: 1000px) {
      left: 25%;
      top: 0%;
      overflow: hidden auto;
    }
  }
  @media (min-width: 500px) {
    background: url(${background}) 0% 0% / cover no-repeat;
  }
  & ::-webkit-scrollbar {
    display: none;
  }
`;

const Setting = styled.div`
  width: 100%;
  height: auto;
  max-height: 100vh;
  /* overflow-y: scroll; */
`;

export default App;
