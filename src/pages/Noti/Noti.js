import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import noti, { actionCreators as notiAction } from "../../redux/modules/noti";
import { useDispatch } from "react-redux";

//import css
import {
  Wrapper,
  NotiWrap,
  Container,
  BlackBackButton,
  HeaderText,
  Line,
  FixListBox,
  PersonalListBox,
  ImgWrap,
  CakeIcon,
  FixTextWrap,
  PersoNalTextWrap,
  MainText,
  SubText,
  TimeText,
  NotNoti,
  BigCakeIcon,
  NotNotiText,
  LoginText,
  LoginBox,
  NotiCheckDot,
  NotiHeart,
  NotiComment,
} from "./style";
import { useSelector } from "react-redux";

const Noti = (props) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [checked, setChecked] = useState("false");
  const dispatch = useDispatch();

  const notiFixList = useSelector((state) => state.noti.fixlist);
  const notiPersonalList = useSelector((state) => state.noti.personallist);
  console.log(notiFixList, notiPersonalList);

  useEffect(() => {
    // notiData?.length === 0
    dispatch(notiAction.getNotiDB());
  }, []);

  return (
    <Wrapper>
      <Container>
        <BlackBackButton
          onClick={() => {
            navigate(-1);
          }}
        />
        <HeaderText>알림</HeaderText>
      </Container>
      <Line />

      {token ? (
        <>
          {notiFixList.map((v, idx) => {
            return (
              <FixListBox
                key={idx}
                onClick={() => {
                  v.type === "BETA"
                    ? window.location.replace(v.redirectUrl)
                    : window.open(v.redirectUrl);
                  // window.open(v.redirectUrl);
                }}
              >
                <ImgWrap>
                  <CakeIcon />
                </ImgWrap>
                <FixTextWrap>
                  <MainText>{v.mainContent}</MainText>
                  <SubText>{v.subContent}</SubText>
                </FixTextWrap>
              </FixListBox>
            );
          })}
          {notiPersonalList.length === 0 ? (
            <>
              <NotiWrap>
                <NotNoti>
                  <BigCakeIcon />
                  <NotNotiText>아직 받은 알람이 없습니다.</NotNotiText>
                </NotNoti>
              </NotiWrap>
            </>
          ) : (
            <>
              {notiPersonalList.map((v, idx) => {
                return (
                  <PersonalListBox
                    key={idx}
                    onClick={() => {
                      // window.open(v.redirectUrl);
                      window.location.replace(v.redirectUrl);
                    }}
                  >
                    <ImgWrap>
                      {v.type === "LIKE" ? <NotiHeart /> : <NotiComment />}
                      {/* <CakeIcon/> */}
                    </ImgWrap>

                    <PersoNalTextWrap>
                      <MainText>{v.mainContent}</MainText>
                      {/* {!v.checked && <NotiCheckDot />} */}
                      <SubText>{v.subContent}</SubText>
                      <TimeText>{v.timeDiff}</TimeText>
                    </PersoNalTextWrap>

                    {!v.checked && <NotiCheckDot />}
                  </PersonalListBox>
                );
              })}
            </>
          )}
        </>
      ) : (
        <NotiWrap>
          <LoginBox>
            <BigCakeIcon />
            <NotNotiText>로그인 먼저 부탁드려요</NotNotiText>
            <LoginText
              onClick={() => {
                navigate("/");
              }}
            >
              로그인하러 가기
            </LoginText>
          </LoginBox>
        </NotiWrap>
      )}
    </Wrapper>
  );
};

export default Noti;
