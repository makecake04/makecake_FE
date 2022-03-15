import "../css/App.css";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  CakeList,
  SearchDetail,
  SearchList,
  Mypage,
  Draw,
  Profile,
  MyDraw,
  ReactWrite,
  ReactStore,
  ReactCake,
  StoreDetail,
  Noti,
} from "../pages/page";
import BottomNav from "../components/BottomNav";
import styled from "styled-components";

function App() {
  return (
    <MobileView>
      <Routes>
        <Route element={<BottomNav />}>
          <Route path="/" element={<Home />} />
          <Route path="/cake" element={<CakeList />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/draw" element={<Draw />} />
          <Route path="/search" element={<SearchDetail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/mydraw" element={<MyDraw />} />
        </Route>
        <Route path="/reactwrite" element={<ReactWrite />} />
        <Route path="/reactstore" element={<ReactStore />} />
        <Route path="/reactcake" element={<ReactCake />} />
        <Route path="/result" element={<SearchList />} />
        <Route path="storedetail" element={<StoreDetail />} />
        <Route path="/noti" element={<Noti />} />
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
  border: 1px solid #ddd;
`;

export default App;
