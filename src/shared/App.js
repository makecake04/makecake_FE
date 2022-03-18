import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { userActions } from "../redux/modules/user";
import KakaoLoginHandler from "./KakaoLoginHandler";

//components
import BottomNav from "../components/BottomNav";

//pages
import {
  Home,
  CakeList,
  SearchDetail,
  Mypage,
  Draw,
  Profile,
  MyDraw,
  ReactWrite,
  ReactStore,
  ReactCake,
  StoreDetail,
  Noti,
  Email,
  Nickname,
  Password,
  Search,
  LoginEmail,
  LoginPassword,
  SearchMap,
  FirstLogin,
  Design,
  PostWrite,
  PostDetail,
  ReviewWrite,
} from "../pages/page";

//css
import "../css/App.css";

function App() {
  const dispatch = useDispatch();
  const is_session = localStorage.getItem("token");

  useEffect(() => {
    if (is_session) {
      dispatch(userActions.loginCheckDB());
    }
  }, []);

  return (
    <MobileView>
      <Routes>
        <Route element={<BottomNav />}>
          {is_session && <Route path="/" element={<Home />} />}
          {!is_session && <Route path="/home" element={<Home />} />}
          <Route path="/home" element={<Home />} />
          <Route path="/cake" element={<CakeList />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/draw" element={<Draw />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/mydraw" element={<MyDraw />} />
          <Route path="/search" element={<Search />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/post/write/:designid" element={<PostWrite />} />
          <Route path="/post/write/:designid/:postid" element={<PostWrite />} />
          {/* <Route path="/*" element={<NotFound />} /> */}
        </Route>
        {!is_session && <Route path="/" element={<FirstLogin />} />}

        <Route path="/reactwrite" element={<ReactWrite />} />

        <Route path="/reactstore" element={<ReactStore />} />
        <Route path="/reactcake" element={<ReactCake />} />
        <Route path="/storedetail/:storeid" element={<StoreDetail />} />
        <Route path="/noti" element={<Noti />} />
        <Route path="/email" element={<Email />} />
        <Route path="/nickname" element={<Nickname />} />
        <Route path="/password" element={<Password />} />
        <Route path="/loginEmail" element={<LoginEmail />} />
        <Route path="/loginPassword" element={<LoginPassword />} />
        <Route path="/review" element={<ReviewWrite />} />
        <Route path="/review/:reviewId" element={<ReviewWrite />} />

        <Route path="/searchmap/:storeId" element={<SearchMap />} />
        <Route path="/searchDetail" element={<SearchDetail />} />
        <Route path="/design" element={<Design />} />
        <Route path="/user/kakao/callback" element={<KakaoLoginHandler />} />
      </Routes>
    </MobileView>
  );
}

const MobileView = styled.div`
  margin: 0 auto;
  max-width: 390px;
  position: relative;
  height: 100vh;
  max-height: 844px;
`;

export default App;
