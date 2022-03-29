import React from "react";
import { useNavigate } from "react-router-dom";

//css
import {
  NotFoundWrap,
  Container,
  HeaderText,
  Line,
  IconWrap,
  NotFoundIcon,
  ErrorMessage,
  HomePage,
} from "./style";

const NotFound = (props) => {
  const navigate = useNavigate();

  return (
    <NotFoundWrap>
      <Container>
        <HeaderText>Error 페이지</HeaderText>
      </Container>
      <Line />
      <IconWrap>
        <NotFoundIcon />
      </IconWrap>
      <ErrorMessage>없는 페이지에요!</ErrorMessage>
      <HomePage
        onClick={() => {
          navigate("/");
        }}
      >
        홈페이지로 돌아가기
      </HomePage>
    </NotFoundWrap>
  );
};

export default NotFound;
