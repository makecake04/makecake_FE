// import React from 'react'
// import { renderMatches } from 'react-router-dom';
// import styled from 'styled-components'
// import { useState } from 'react';
// import { usernameCheck, nicknameCheck, pwdCheck } from '../shared/common';

// const SignUp = () => {

//     const [text, setText] = useState();
//     const [username, setUsername] = useState('');
//     const [nickname, setNickname] = useState('');
//     const [password, setPassword] = useState('');
//     const [passwordCheck, setPasswordCheck] = useState('');

//     // 이메일, 닉네임 중복검사
//     const [username_check, setUsernameCheck] = useState(false);
//     const [nickname_check, setNicknameCheck] = useState(false);

//     const checkUsername = () => {
//         if (!usernameCheck(username)) {
//           alert("이메일 형식이 맞지 않습니다!");
//           return;
//         }
//         // dispatch(userActions.emailCheckF(email));
//       };
    
//     const checkNickname = () => {
//         if (!nicknameCheck(nickname)) {
//           alert("닉네임 형식이 맞지 않습니다!");
//           return;
//         }
//         // dispatch(userActions.emailCheckF(email));
//       };
    

//  // 회원가입 시 미입력 내역 있을 시 alert 띄워줌
// const signup = () => {
//     if (
//       username === "" ||
//       nickname === "" ||
//       password === "" ||
//       passwordCheck === ""
//     ) {
//       window.alert("입력사항을 모두 입력해주세요!");
//       return;
//     }


// //회원가입 시 이메일, 닉네임, 비밀번호, 비밀번호 확인, 유효성 검사
// if (!usernameCheck(username)) {
//     window.alert("이메일 형식이 맞지 않습니다!");
//     return;
//     }

// if (!nicknameCheck(nickname)) {
//     window.alert("닉네임 형식이 맞지 않습니다!");
//     return;
//     }

// if (!pwdCheck(password)) {
//     window.alert("비밀번호 형식이 맞지 않습니다!");
//     return;
//     }

// if (password !== passwordCheck) {
//     window.alert("비밀번호와 비밀번호 확인이 일치하지 않습니다!");
//     return;
//     }

//     //signupDB에 회원가입 시 입력한 내역들을 보내주기
// //   dispatch(
// //     userActions.signupDB(username, password, passwordCheck, email, nickname)
// //   );
// };

//     return (
//        <Container>
//            <h1>로고</h1>
//            <h1 className='signup'>회원가입</h1>
           
//            <br/>

//            <div className="div">
//            이메일(id) <input value={text} className="input" placeholder="예: makecake@cake.com" onChange={(e) => {
//                setUsername(e.target.value);
               
//            }}/>
//            <button>중복검사</button>
//            </div>
           
//            <br/>

//            <div className="div">
//            닉네임 <input className="input" value={text} placeholder="닉네임을 입력해주세요." onChange={(e) => {
//               setNickname(e.target.value);
               
//            }}/>
//            <button>중복검사</button>
//            <p> ・ 6자 이상의 영문 혹은 영문과 숫자를 조합</p>
//            </div>

//            <br/>

//            <div className="div">
//            비밀번호 <input value={text} className="input" placeholder="비밀번호를 입력해주세요."  onChange={(e) => {
//                setPassword(e.target.value);
               
//            }}/>
//            <p> ・ 10글자 이상 입력</p>
//            <p >・ 영문/숫자/특수문자(공백 제외)만 허용, 3개 이상의 조합</p>
//            </div>
           
//            <br/>

//             <div className="div">
//            비밀번호 확인 <input value={text} className="input" placeholder="비밀번호를 한번 더 입력해주세요."  onChange={(e) => {
//               setPasswordCheck(e.target.value);
               
//            }}/>
//            </div>

//            <br/>

//            <div>
//                <button>가입하기</button>
//            </div>
//        </Container>
//     )
// }

// const Container = styled.div`
//     text-align: center;

//     .signup {
//         margin-top: 50px;
//     }

//     .input {
//         width: 60%;
//     }

//     .div {
//         padding: 15px;
//     }
// `;

// export default SignUp;