import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userActions } from '../redux/modules/user'

const Nickname = () => {

    const dispatch = useDispatch();
    const [nickname, setNickname] = React.useState("");
    const navigate = useNavigate();

    const username = useSelector((state) => (state.user.username))
    const password = useSelector((state) => (state.user.password))
    const passwordCheck = useSelector((state) => (state.user.passwordCheck))
    console.log(username, password, passwordCheck)
    
    // 중복 체크
    const [nicknameCurrent, setNicknameCurrent] = React.useState(false);

    // 비활성화 여부
    const [active, setActive] = React.useState(true);

    const checkActive = () => {    
        nickname !== "" 
          ? setActive(false)
          : setActive(true);
      };

    const is_Nickname = (e) => {
        setNickname(e.target.value);
      };
    
    const saveNickname = () => {
        dispatch(userActions.nicknameCheckF(username, password, passwordCheck, nickname))
    }

    return(
        <Container>
            <button className='backButton' onClick={() => {navigate('/password')}}>&lt;</button>
            <h1 className='cakeText'>케이크를 만들어요!</h1>
            <p className='signupText'>회원가입을 위한 닉네임을 입력해주세요.</p>
            
            <div>           
            <input className='inputNickname' placeholder='닉네임' type="text" value={nickname} onChange={is_Nickname} onKeyUp={checkActive}></input>
            <button className='nextButton' disabled={active} onClick={()=>{
                 saveNickname()
                }}>다음</button>
            </div> 
        </Container>
    )
}

const Container = styled.div`

    button:disabled {
        background-color: #777777;
    }

    .backButton {
    border: none;
    background: white;
    font-size: 30px;
    margin: 40px 0 0 30px;
    }

    .cakeText {
    width: 220px;
    height: 35px;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: -0.02em;
    color: #282828;
    margin: 65px auto 0 30px;
    }

    .signupText {
    width: 340px;
    height: 21px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 130%;
    color: #282828;
    margin: 5px auto 0 30px;
    }

    .inputNickname {
    display: block;
    width: 337px;
    height: 49px;
    background: #F5F5F5;
    border-radius: 45px;
    border:none;
    margin: 30px auto 0 auto;
    padding-left: 20px;
   }

    .nextButton {
    display: block;
    width: 337px;
    height: 49px;
    background: #FF8FA5;
    border-radius: 45px;
    border: none;
    font-weight: bold;
    font-size: 16px;
    color: white;
    margin: 317px auto 0 auto;
    }
`;

export default Nickname;

