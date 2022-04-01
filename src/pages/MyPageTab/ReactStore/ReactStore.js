import React, { useEffect } from "react";

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
  ImgWrap,
  StoreList,
  SelectStoreBox,
  CakeIcon,
  SelectStoreText,
  SearchStoreText,
  ReviewList,
  NeedReviewBox,
  NeedReviewText,
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

  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    if (pageNumber === 0) {
      dispatch(storeAction.getLikeStoreDB(pageNumber));
      dispatch(storeAction.getMyReviewDB(pageNumber));
    }
    setPageNumber(0);
  }, [toggleState]);

  useEffect(() => {
    if (toggleState === 1) {
      dispatch(storeAction.getLikeStoreDB(pageNumber));
    } else if (toggleState === 2) {
      dispatch(storeAction.getMyReviewDB(pageNumber));
    }
  }, [pageNumber]);

  useEffect(() => {
    if (inView) {
      setPageNumber(pageNumber + 1);
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
          {likeStore.length === 0 ? (
            <SelectStoreBox>
              <CakeIcon />
              <SelectStoreText>마음에 드는 매장을 골라보세요</SelectStoreText>
              <SearchStoreText
                onClick={() => {
                  navigate("/search");
                }}
              >
                매장 검색하기
              </SearchStoreText>
            </SelectStoreBox>
          ) : (
            likeStore.map((v, idx) => {
              return (
                <OneStore
                  key={idx}
                  ref={ref}
                  onClick={() => {
                    navigate(`/storedetail/${v.storeId}`);
                  }}
                >
                  <ImgWrap>
                    <img src={v.mainImg} alt="store-img" />
                  </ImgWrap>
                  <p>{v.name}</p>
                  <StoreAddress>
                    <img src={location} alt="" />
                    <p>{v.addressSimple.split(" ")[1]}</p>
                    <p>{v.addressSimple.split(" ")[2]}</p>
                  </StoreAddress>
                </OneStore>
              );
            })
          )}
        </StoreList>
        <ReviewList toggleState={toggleState}>
          {myReview.length === 0 ? (
            <NeedReviewBox>
              <CakeIcon />
              <NeedReviewText>방문한 매장에 후기를 남겨보세요</NeedReviewText>
              <SearchStoreText
                onClick={() => {
                  navigate("/search");
                }}
              >
                매장 검색하기
              </SearchStoreText>
            </NeedReviewBox>
          ) : (
            myReview.map((v, idx) => {
              return (
                <OneReview key={idx} ref={ref}>
                  <ReviewHeader>
                    <span>{v.name}</span>
                    <p>{v.createdDate?.split(" ")[0]}</p>
                  </ReviewHeader>
                  <ReviewContent
                    onClick={() => {
                      navigate(`/storedetail/${v.storeId}`);
                    }}
                  >
                    {v.content}
                  </ReviewContent>
                  {v.reviewImages && (
                    <img src={v.reviewImages} alt="review_img" />
                  )}
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
            })
          )}
        </ReviewList>
      </Body>
    </Wrapper>
  );
};

export default ReactStore;
