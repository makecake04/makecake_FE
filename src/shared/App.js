import {Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import styled from 'styled-components'
// import SignUp from '../pages/signup';
import Login from '../pages/login';
import Email from '../pages/signupEmail';
import Nickname from '../pages/signupNickname';
import Password from '../pages/signupPassword';
import Search from '../pages/Search';
import LoginEmail from '../pages/loginEmail';
import LoginPassword from '../pages/loginPassword';
import SearchDetail from '../pages/SearchDetail';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from '../redux/modules/user';
import SearchMap from '../pages/SearchMap'
import FirstLogin from '../pages/FirstLogin';
// import Kakao from '../components/kakaoLogin';

function App() {

  const dispatch = useDispatch();

  const is_session = localStorage.getItem("token");

  React.useEffect(() => {
    if (is_session) {
      dispatch(userActions.loginCheckDB());
    }
  }, []);

  return (
    <div className='App'>
      <MobileView>
        <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="signup" element={<SignUp/>}/> */}
          <Route path="login" element={<Login/>}/>
          <Route path="Email" element={<Email/>}/>
          <Route path="Nickname" element={<Nickname/>}/>
          <Route path="Password" element={<Password/>}/>
          <Route path="Search" element={<Search/>}/>
          <Route path="LoginEmail" element={<LoginEmail/>}/>
          <Route path="LoginPassword" element={<LoginPassword/>}/>
          <Route path="SearchMap" element={<SearchMap/>}/>
          <Route path="SearchDetail" element={<SearchDetail/>}/>
          <Route path="FirstLogin" element={<FirstLogin/>}/>
          {/* <Route path="/user/kakao/callback" element={<Kakao/>}/> */}
        </Routes>
      </MobileView>
    </div>
  );
}

const MobileView = styled.div`
  max-width: 390px;
  margin: auto;
`;

export default App;
