import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { usernameCheck } from '../shared/common';
import { useNavigate } from 'react-router-dom'
import { userActions } from '../redux/modules/user';

const Email = () => {

    const dispatch = useDispatch();
    const [username, setUsername] = React.useState("");
    const navigate = useNavigate();

    // 중복 체크
    const [usernameCurrent, setUsernameCurrent] = React.useState(false);

     // 유효성 검사
    const [isUsername, setIsUsername] = React.useState("");

    // 에러 메세지 상태 저장
    const [usernameMessage, setUsernameMessage] = React.useState("");

    // 비활성화 여부
    const [active, setActive] = React.useState(true);

    const checkActive = () => {
        console.log(usernameCheck(usernameCurrent))
        usernameCheck(usernameCurrent) 
          ? setActive(false)
          : setActive(true);
      };
    
    const [isCheckUsername, setIsCheckUsername] = React.useState(false);

    const is_Username = (e) => {
        setUsername(e.target.value);
        const usernameCurrent = e.target.value;
        setUsernameCurrent(usernameCurrent);
    
        if (!usernameCheck(usernameCurrent)) {
            setUsernameMessage("이메일 형식에 맞게 만들어주세요!");
            setIsUsername(false);
        } else {
            setUsernameMessage("올바른 이메일 형식입니다!");
            setIsUsername(true);
        }
        
      };

    //   const checkUsername = () => {
    //     if (username === "") {
    //         window.alert("이메일이 공란입니다!")
    //         return;
    //     }

    //     console.log(username, "의 중복확인 요청을 dispatch 했습니다.");
    //     dispatch(userActions.usernameCheckF(username, false));
    //     setIsCheckUsername(true)
    // }

      const saveUsername = () => {
        dispatch(userActions.usernameCheckF(username));

        navigate('/password')
      }

    return(
        <Container>
            <button className='backButton' onClick={() => {navigate('/firstlogin')}}>&lt;</button>
            <h2 className='cakeText'>케이크를 만들어요!</h2>
            <p className='signupText'>회원가입을 위한 이메일을 입력해주세요.</p>
            <div>
                <input className='inputEmail' placeholder='이메일' type='text' value={username} onChange={is_Username} onKeyUp={checkActive}></input>
         
                {username.length > 0 && (
                      <>
                        
                        <p 
                          style={{ color: `${(props) => (props.className === "success" ? "green" : "red")}`, marginLeft:"20px", fontSize:"14px"}}
                          
                          className={`${isUsername ? "success" : "error"}`}
                        >
                          {usernameMessage}
                        </p>
                      </>
                    )}
                <button className='nextButton' disabled={active} onClick={()=>{
                    // checkUsername()
                    saveUsername()
                   
                }}>다음</button> 
            </div>
            
        </Container>
    )
}




const Container = styled.div`

    button:disabled {
        background-color: lightgray;
    }

    .backButton {
    width: 20px;
    height: 20px;
    margin: 40px 0 0 30px;
    border: none;
    background: white;
    font-size: 30px;
    color: #282828;
    }

    .cakeText {
    width: 187px;
    height: 35px;
    margin: 60px 0 0 30px;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: -0.02em;
    color: #282828;
    }

    .signupText {
    width: 261px;
    height: 21px;
    margin: 5px 0 0 30px;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 130%;
    color: #282828;
    }

    .inputEmail {
    display: block;
    width: 337px;
    height: 49px;
    margin: 30px auto 0 auto;
    background: #F5F5F5;
    border-radius: 45px;
    border:none;
    padding-left: 20px;
   }

    .nextButton {
    display: block;
    width: 337px;
    height: 49px;
    margin: 400px auto 0 auto;
    background: #FF8FA5;
    border-radius: 45px;
    border: none;
    font-weight: bold;
    font-size: 16px;
    color: white;
    
    }
`;

export default Email;

