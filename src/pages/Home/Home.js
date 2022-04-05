import React from "react";

import {
  SearchBar,
  HotStoreList,
  BestCake,
  NewReview,
  AdList,
} from "../../components/component";
import { useDispatch } from "react-redux";
import { actionCreators as storeAction } from "../../redux/modules/store";

const Home = (props) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(storeAction.getHotListDB());
  }, []);

  return (
    <React.Fragment>
      <SearchBar />
      <HotStoreList />
      <AdList />
      <BestCake />
      <NewReview />
    </React.Fragment>
  );
};

export default Home;
