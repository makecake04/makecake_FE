import React from "react";

import {
  SearchBar,
  HotStoreList,
  BestCake,
  NewReview,
} from "../../components/component";
import { useDispatch } from "react-redux";
import { actionCreators as storeAction } from "../../redux/modules/store";

//import css
import { Container } from "./style";

const Home = (props) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(storeAction.getHotListDB());
  }, []);

  return (
    <Container>
      <SearchBar />
      <HotStoreList />
      <BestCake />
      <NewReview />
    </Container>
  );
};

export default Home;
