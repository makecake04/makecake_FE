import React from "react";

import {
  SearchBar,
  HotStoreList,
  BestCake,
  NewReview,
  NavBar,
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
    <React.Fragment>
      {/* <Container> */}
      <SearchBar />
      <HotStoreList />
      <BestCake />
      <NewReview />
      {/* <NavBar /> */}
      {/* </Container> */}
    </React.Fragment>
  );
};

export default Home;
