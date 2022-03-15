import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <hr />
      <button onClick={() => navigate("/design")}>도안</button>
    </Container>
  );
};

const Container = styled.div``;

export default NavBar;
