import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";

import { actionCreators as storeAction } from "../../../redux/modules/store";
import { actionCreators as reviewAction } from "../../../redux/modules/review";

//css
import {
  Wrapper,
  Header,
  BlackBackButton,
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
import { location } from "../../../assets/images/image";

const ReactStore = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [refStore, inViewStore] = useInView();
  const [refReview, inViewReview] = useInView();

  const [toggleState, setToggleState] = useState(1);
  const [pageNumber, setPageNumber] = useState(0);

  const likeStore = useSelector((state) => state.store.likeStore);
  const myReview = useSelector((state) => state.store.myReview);
  const sort = useSelector((state) => state.store.store_sort_type);

  useEffect(() => {
    if (toggleState === 1) {
      dispatch(storeAction.getLikeStoreDB(pageNumber));
    } else if (toggleState === 2) {
      dispatch(storeAction.getMyReviewDB(pageNumber));
    }
  }, [pageNumber, toggleState]);

  useEffect(() => {
    if (inViewStore) {
      setPageNumber(pageNumber + 1);
    } else if (inViewReview) {
      setPageNumber(pageNumber + 1);
    }
  }, [inViewStore, inViewReview]);

  useEffect(() => {
    setToggleState(sort);
  }, [sort]);

  return (
    <Wrapper>
      <Header>
        <BlackBackButton onClick={() => navigate(-1)} />
        <h3>내가 반응한 매장</h3>
      </Header>
      <hr />
      <Tab>
        <LikeStore
          toggleState={toggleState}
          onClick={() => {
            setToggleState(1);
            setPageNumber(0);
            dispatch(storeAction.setStoreSortType(1));
          }}
        >
          좋아요한 매장
        </LikeStore>
        <MyReview
          toggleState={toggleState}
          onClick={() => {
            setToggleState(2);
            setPageNumber(0);

            dispatch(storeAction.setStoreSortType(2));
          }}
        >
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
                  ref={likeStore.length === idx + 1 ? refStore : null}
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
                <OneReview
                  key={idx}
                  ref={myReview.length === idx + 1 ? refReview : null}
                >
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
                        dispatch(reviewAction.reviewReplace([]));
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
