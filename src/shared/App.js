import "../css/App.css";
import { Route, Routes } from "react-router-dom";
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
  Login,Email,Nickname,Password,Search,LoginEmail,LoginPassword,SearchMap,FirstLogin
} from "../pages/page";
import BottomNav from "../components/BottomNav";
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { userActions } from '../redux/modules/user';

function App() {
  const dispatch = useDispatch();

  const is_session = localStorage.getItem("token");

  React.useEffect(() => {
    if (is_session) {
      dispatch(userActions.loginCheckDB());
    }
  }, []);
  
  return (
    <MobileView>
      <Routes>
        <Route element={<BottomNav />}>
          <Route path="/" element={<Home />} />
          <Route path="/cake" element={<CakeList />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/draw" element={<Draw />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/mydraw" element={<MyDraw />} />
            <Route path="Search" element={<Search/>}/>
        </Route>
        <Route path="/reactwrite" element={<ReactWrite />} />
        <Route path="/reactstore" element={<ReactStore />} />
        <Route path="/reactcake" element={<ReactCake />} />
        <Route path="storedetail" element={<StoreDetail />} />
        <Route path="/noti" element={<Noti />} />
          <Route path="login" element={<Login/>}/>
          <Route path="Email" element={<Email/>}/>
          <Route path="Nickname" element={<Nickname/>}/>
          <Route path="Password" element={<Password/>}/>
            <Route path="LoginEmail" element={<LoginEmail/>}/>
          <Route path="LoginPassword" element={<LoginPassword/>}/>
            <Route path="FirstLogin" element={<FirstLogin/>}/>
              <Route path="SearchMap" element={<SearchMap/>}/>
          <Route path="SearchDetail" element={<SearchDetail/>}/>
          
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
