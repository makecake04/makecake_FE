import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <button onClick={() => navigate("/design")}>도안그리기</button>
      <h1>Home Tab</h1>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
`;

export default Home;
