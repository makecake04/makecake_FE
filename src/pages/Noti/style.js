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

export const Wrapper = styled.div`
  overflow-y: auto;
  height: 100%;
`;

export const NotiWrap = styled.div``;

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
  position: relative;
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
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 280px;
  max-height: 63px;
  margin-bottom: 5px;
`;

export const SubText = styled.p`
  color: #282828;
  font-size: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  width: 280px;
`;

export const TimeText = styled.p`
  color: #777777;
  font-size: 11.5px;
  width: 70px;
  width: 275px;
  text-align: right;
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
  left: 366px;
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
