import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";
import { actionCreators as storeAction } from "../../../redux/modules/store";
import { actionCreators as reviewAction } from "../../../redux/modules/review";
import { useDispatch, useSelector } from "react-redux";

//css
import {
  Wrapper,
  Header,
  Tab,
  LikeStore,
  MyReview,
  Body,
  StoreList,
  ReviewList,
  OneStore,
  StoreAddress,
  OneReview,
  ReviewHeader,
  ReviewContent,
  ButtonWrapper,
} from "./style";

//image
import { black_back_button, location } from "../../../assets/images/image";

const ReactStore = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [toggleState, setToggleState] = React.useState(1);
  const [pageNumber, setPageNumber] = React.useState(0);

  const likeStore = useSelector((state) => state.store.likeStore);
  const myReview = useSelector((state) => state.store.myReview);

  const [ref, inView] = useInView();

  React.useEffect(() => {
    dispatch(storeAction.getLikeStoreDB(pageNumber));
    dispatch(storeAction.getMyReviewDB(pageNumber));
  }, [pageNumber]);

  const getMoreStore = async () => {
    setPageNumber(pageNumber + 1);
  };

  const toggleTab = (index) => {
    setToggleState(index);
  };

  React.useEffect(() => {
    if (inView) {
      getMoreStore();
    }
  }, [inView]);

  return (
    <Wrapper>
      <Header>
        <img
          src={black_back_button}
          alt="back-button"
          onClick={() => navigate(-1)}
        />
        <h3>내가 반응한 매장</h3>
      </Header>
      <hr />
      <Tab>
        <LikeStore toggleState={toggleState} onClick={() => toggleTab(1)}>
          좋아요한 매장
        </LikeStore>
        <MyReview toggleState={toggleState} onClick={() => toggleTab(2)}>
          내가 남긴 후기
        </MyReview>
      </Tab>
      <Body>
        <StoreList toggleState={toggleState}>
          {likeStore &&
            likeStore.map((v, idx) => {
              return (
                <OneStore key={idx}>
                  <img src={v.mainImg} alt="store-img" />
                  <p>{v.name}</p>
                  <StoreAddress>
                    <img src={location} alt="" />
                    <p>{v.addressSimple}</p>
                  </StoreAddress>
                </OneStore>
              );
            })}
        </StoreList>
        <ReviewList toggleState={toggleState}>
          {myReview &&
            myReview.map((v, idx) => {
              return (
                <OneReview key={idx}>
                  <ReviewHeader>
                    <span>{v.name}</span>
                    <p>{v.createdDate?.split(" ")[0]}</p>
                  </ReviewHeader>
                  <ReviewContent>{v.content}</ReviewContent>
                  <img src={v.reviewImages} />
                  <ButtonWrapper>
                    <button
                      onClick={() => {
                        navigate(`/review/${v.reviewId}`);
                      }}
                    >
                      수정하기
                    </button>
                    <button
                      onClick={() => {
                        dispatch(reviewAction.deleteReviewDB(v.reviewId));
                      }}
                    >
                      삭제하기
                    </button>
                  </ButtonWrapper>
                  <hr />
                </OneReview>
              );
            })}
        </ReviewList>
      </Body>
    </Wrapper>
  );
};

export default ReactStore;
