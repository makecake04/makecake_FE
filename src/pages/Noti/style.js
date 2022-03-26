import styled from "styled-components";

//image
import {
  black_back_button,
  noti_cake,
  noti_bigcake,
  noti_check_dot,
  noti_heart,
  noti_comment,
} from "../../assets/images/image";

export const NotiWrap = styled.div`
  overflow-y: auto;
`;

export const Container = styled.div`
  padding: 2rem 0;
  display: flex;
  align-items: center;
`;

export const BlackBackButton = styled.img.attrs({
  src: `${black_back_button}`,
  alt: "BlackBackButton",
})`
  margin-left: 3%;
  cursor: pointer;
`;

export const HeaderText = styled.h3`
  margin-left: 33%;
  vertical-align: center;
`;

export const Line = styled.hr`
  border: 1px solid #e5e5e5;
  width: 100%;
`;

export const FixListBox = styled.div`
  width: 390px;
  height: 112px;
  background-color: #fff4f7;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #e5e5e5;
`;

export const PersonalListBox = styled.div`
  width: 390px;
  height: 112px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #e5e5e5;
`;

export const ImgWrap = styled.div`
  margin-top: 10px;
`;

export const CakeIcon = styled.img.attrs({
  src: `${noti_cake}`,
  alt: "NotiCake",
})`
  margin-left: 10px;
  width: 40px;
  height: 40px;
`;

export const FixTextWrap = styled.div`
  margin-top: 10px;
  margin-left: 15px;
`;

export const PersoNalTextWrap = styled.div`
  margin-top: 10px;
  margin-left: 15px;
`;

export const MainText = styled.p`
  color: #282828;
  font-size: 15.5px;
  line-height: 23px;
  display: -webkit-box;
  word-wrap: break-word;
  word-break: keep-all;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 250px;
`;

export const SubText = styled.p`
  color: #282828;
  font-size: 13.5px;
  line-height: 20px;
  display: -webkit-box;
  word-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  width: 250px;
`;

export const TimeText = styled.p`
  /* text-align: right; */
  color: #777777;
  position: absolute;
  font-size: 12px;
  margin-top: 80px;
  width: 70px;
  left: 315px;
  /* margin-right: 5px; */
  /* width: 60px; */
  /* padding-right: 15px; */
`;

export const NotNoti = styled.div`
  width: 201px;
  height: 120px;
  margin: 50px auto auto auto;
`;

export const BigCakeIcon = styled.img.attrs({
  src: `${noti_bigcake}`,
  alt: "NotiBigCake",
})`
  margin-left: 70px;
`;

export const NotNotiText = styled.p`
  color: #e1e1e1;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
`;

export const LoginBox = styled.div`
  width: 201px;
  height: 120px;
  margin: 150px auto auto auto;
`;

export const LoginText = styled.p`
  color: #000000;
  font-size: 16px;
  font-weight: 100;
  text-decoration-line: underline;
  text-align: center;
  cursor: pointer;
`;

export const NotiCheckDot = styled.img.attrs({
  src: `${noti_check_dot}`,
  alt: "NotiCheckDot",
})`
  width: 10px;
  height: 10px;
  margin-top: 15px;
  position: absolute;
  left: 350px;
`;

export const NotiHeart = styled.img.attrs({
  src: `${noti_heart}`,
  alt: "NotiHeart",
})`
  margin-left: 10px;
`;

export const NotiComment = styled.img.attrs({
  src: `${noti_comment}`,
  alt: "NotiComment",
})`
  margin-left: 10px;
`;
