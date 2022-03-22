import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { actionCreators as userAction } from "../redux/modules/user";

//components
import { NavBar, KakaoLoginHandler } from "../components/component";

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
  StoreDetail,
  Noti,
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
} from "../pages/page";

//css
import "../css/App.css";

function App() {
  const dispatch = useDispatch();
  const is_session = localStorage.getItem("token");

  useEffect(() => {
    if (is_session) {
      dispatch(userAction.loginCheckDB());
    }
  }, []);

  return (
    <MobileView>
      <Routes>
        <Route element={<NavBar />}>
          {is_session && <Route path="/" element={<Home />} />}
          {!is_session && <Route path="/home" element={<Home />} />}
          <Route path="/home" element={<Home />} />
          <Route path="/cake" element={<CakeList />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/design/list" element={<DesignList />} />
          <Route path="/profile/edit" element={<ProfileEdit />} />
          <Route path="/mydesign" element={<MyDesign />} />
          <Route path="/search" element={<Search />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/post/write/:designid" element={<PostWrite />} />
          <Route path="/post/write/:designid/:postid" element={<PostWrite />} />
          {/* <Route path="/*" element={<NotFound />} /> */}
        </Route>
        {!is_session && <Route path="/" element={<FirstPage />} />}
        <Route path="/react/post" element={<ReactPost />} />
        <Route path="/react/store" element={<ReactStore />} />
        <Route path="/react/cake" element={<ReactCake />} />
        <Route path="/storedetail/:storeid" element={<StoreDetail />} />
        <Route path="/noti" element={<Noti />} />
        <Route path="/signup/email" element={<SignUpEmail />} />
        <Route path="/signup/nickname" element={<SignUpNickname />} />
        <Route path="/signup/password" element={<SignUpPassword />} />
        <Route path="/login/email" element={<LoginEmail />} />
        <Route path="/login/password" element={<LoginPassword />} />
        <Route path="/review/write" element={<ReviewWrite />} />
        <Route path="/review/:reviewId" element={<ReviewWrite />} />

        <Route path="/searchmap/:storeId" element={<SearchMap />} />
        <Route path="/search/result" element={<SearchResult />} />
        <Route path="/drawing" element={<Drawing />} />
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