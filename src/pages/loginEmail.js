import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userActions } from '../redux/modules/user'

const LoginEmail = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [username, setUsername] = React.useState("");

    // 비활성화 여부
    const [active, setActive] = React.useState(true);

    const checkActive = () => {
        username !== ""
          ? setActive(false)
          : setActive(true);
      };
    
    const changeUsername = (e) => {
        setUsername(e);
    };

    const saveUsername = () => {
        dispatch(userActions.setUsername(username))
      }
      
    return(
        <Container>
            <button className='backButton' onClick={() => {navigate('/login')}}>&lt;</button>
            <h2 className='cakeText'>반갑습니다!</h2>
            <p className='signupText'>MAKE CAKE 아이디를 입력해주세요.</p>
            <div>
                <input className='inputEmail' placeholder='아이디' type='text' value={username} onChange={(e) => {changeUsername(e.target.value)}} onKeyUp={checkActive}></input>
                <button className='nextButton' disabled={active} onClick={() => { 
                    saveUsername()
                    navigate('/LoginPassword') }}>다음</button>
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

export default LoginEmail;

