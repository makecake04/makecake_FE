import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { pwdCheck } from '../shared/common';
import { useSelector } from 'react-redux';
import { userActions } from '../redux/modules/user';

const Password = () => {

    const username = useSelector((state) => (state.user.username))
    console.log(username)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [password, setPassword] = React.useState("");
    const [passwordCheck, setPasswordCheck] = React.useState("");
    

    // 중복 체크
    const [passwordCurrent, setPasswordCurrent] = React.useState("");

     // 유효성 검사
     const [isPassword, setIsPassword] = React.useState("");
     const [isPasswordCheck, setIsPasswordCheck] = React.useState("");

    // 에러 메세지 상태 저장
    const [passwordMessage, setPasswordMessage] = React.useState("");
    const [passwordCheckMessage, setPasswordCheckMessage] = React.useState("");

    // 비활성화 여부
    const [active, setActive] = React.useState(true);

    const checkActive = () => {
        password !== "" &&
        passwordCheck !== ""
          ? setActive(false)
          : setActive(true);
      };

      const is_PassWord = (e) => {
        setPassword(e.target.value);

        const passwordCurrent = e.target.value;
        setPasswordCurrent(passwordCurrent);
    
        if (!pwdCheck(passwordCurrent)) {
          setPasswordMessage("영문, 숫자, 특수문자를 조합하여 10~16자로 만들어주세요!");
          setIsPassword(false);
        } else {
          setPasswordMessage("올바른 비밀번호 형식입니다!");
          setIsPassword(true);
        }
      };

      const is_PasswordCheck = (e) => {
        setPasswordCheck(e.target.value);
        const SamePasswordCurrent = e.target.value;
    
        if (!pwdCheck(SamePasswordCurrent)) {
          setPasswordCheckMessage("형식에 맞지 않는 비밀번호입니다!");
          setIsPasswordCheck(false);
        } else if (
          password !== "" &&
          passwordCheck !== "" &&
          password === SamePasswordCurrent
        ) {
          setPasswordCheckMessage("비밀번호가 같습니다!");
          setIsPasswordCheck(true);
        } else {
          setPasswordCheckMessage("비밀번호가 같지 않습니다. 다시 확인해주세요!");
          setIsPasswordCheck(false);
        }
      };
      
      const savePassword = () => {
        dispatch(userActions.addPassword(password))
        dispatch(userActions.addPasswordCheck(passwordCheck))
      }

    return(
        <Container>
            <button className='backButton' onClick={() => {navigate('/email')}}>&lt;</button>
            <h1 className='passwordText'>비밀번호를 알려주세요!</h1>
            <p className='passwordRule'>* 영문자, 숫자 각각 하나 이상 포함, 10자리 이상</p>
            
            <div>           
                <input className='inputPassword' placeholder='비밀번호' type="password" value={password} onChange={is_PassWord} onKeyUp={checkActive}></input>
                {password.length > 0 && (
                      <>
                        
                        <p 
                          style={{ color: `${(props) => (props.className === "success" ? "green" : "red")}`, marginLeft:"20px", fontSize:"14px"}}
                          
                          className={`${isPassword ? "success" : "error"}`}
                        >
                          {passwordMessage}
                        </p>
                      </>
                    )}
                <input className='inputPwcheck' placeholder='비밀번호 확인' type="password" value={passwordCheck} onChange={is_PasswordCheck} onKeyUp={checkActive}></input>
                {passwordCheck.length > 0 && (
                      <>
                        
                        <p
                          className={`${isPasswordCheck ? "success" : "error"}`}
                          style={{ color: `${(props) => (props.className === "success" ? "green" : "red")}`, marginLeft:"20px", fontSize:"14px"}}
                          
                        >
                          {passwordCheckMessage}
                        </p>
                      </>
                    )}
                <button className='nextButton' disabled={active} onClick={() => {
                    savePassword()
                    navigate('/Nickname');
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

    .passwordText {
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

    .passwordRule {
    width: 340px;
    height: 21px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 130%;
    color: #282828;
    margin: 5px auto 0 30px;
    }

    .inputPassword {
    display: block;
    width: 337px;
    height: 49px;
    background: #F5F5F5;
    border-radius: 45px;
    border:none;
    margin: 30px auto 0 auto;
    padding-left: 20px;

   }

   .inputPwcheck {
    display: block;
    width: 337px;
    height: 49px;
    background: #F5F5F5;
    border-radius: 45px;
    border: none;
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

export default Password;

