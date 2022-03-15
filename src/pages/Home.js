import React from "react";
import styled from "styled-components";
import {
  Search,
  HotStoreList,
  BestCake,
  NewReview,
} from "../components/component";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as storeAction } from "../redux/modules/store";

const Home = (props) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(storeAction.getHotListDB());
  }, []);

  return (
    <Container>
      <Search />
      <HotStoreList />
      <BestCake />
      <NewReview />
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  overflow-y: auto;
`;

export default Home;
