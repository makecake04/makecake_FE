import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { actionCreators as storeAction } from "../../redux/modules/store";
import { actionCreators as reviewAction } from "../../redux/modules/review";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";

//import css
import {
  StoreDetailContainer,
  DetailWrap,
  Title,
  WhiteBackIcon,
  HrWrap,
  TitleWrap,
  InfoBox,
  TopWrap,
  Store,
  HeartSvg,
  InfoWrap,
  ShopWrap,
  Nomal,
  ContainerBox,
  BlocTab,
  OneButton,
  TwoButton,
  ThreeButton,
  FourButton,
  ContentTab,
  ContentOne,
  ContentTwo,
  ContentThree,
  ContentFour,
  ContentBox,
  ContentWrap,
  IconWrap,
  Description,
  CallWrap,
  BottomHr,
  PictureBox,
  PictureWrap,
  Picture,
  RightWrap,
  PlusP,
  ImageBox,
  Images,
  Kind,
  Kind2,
  Type,
  SizeP,
  PriceP,
  ProfileImage,
  CommentWrap,
  TitleTwo,
  InfoTwo,
  Info,
  NicknameP,
  CreatedDateP,
  Pwrap,
  ImgWrapTwo,
  ButtonWrap,
  EditButton,
  DeleteButton,
  HrWrapTwo,
  ReviewSvg,
  RightSvg,
  CallSvg,
  ClockSvg,
  MarkerSvg,
  ShopSvg,
  ImgWrap,
  ImgBox,
} from "./style";

//component

const StoreDetail = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const store_info = useSelector((state) => state.store.store);
  const params = useParams();
  const store_id = params.storeid;
  const store_cake = useSelector((state) => state.store.cake);
  const store_review = useSelector((state) => state.store.review);
  const user_nickname = useSelector((state) => state.user.user);
  const [pageNumber, setPageNumber] = React.useState(0);
  const [ref, inView] = useInView();

  const imgUrl = useSelector((state) => state.store.myReview);

  React.useEffect(() => {
    dispatch(storeAction.getStoreDetailDB(store_id));
  }, [pageNumber]);

  const [toggleState, setToggleState] = React.useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getMoreCake = async () => {
    setPageNumber(pageNumber + 1);
  };

  React.useEffect(() => {
    if (inView) {
      getMoreCake();
    }
  }, [inView]);

  return (
    <StoreDetailContainer>
      <DetailWrap>
        <ImgWrap src={store_info.mainImg}>
          <Title>
            <WhiteBackIcon
              onClick={() => {
                navigate(`/`);
              }}
            />
            <HrWrap />
          </Title>
        </ImgWrap>
        <TitleWrap>
          <InfoBox>
            <TopWrap>
              <Store>{store_info.name}</Store>
              <HeartSvg />
            </TopWrap>
            {store_info.urls && (
              <InfoWrap>
                <ShopWrap>
                  <ShopSvg />
                  <Nomal>{store_info.urls[0]?.url}</Nomal>
                </ShopWrap>
                {/* <p className="insta">{store_info.urls[0].url}</p> */}
              </InfoWrap>
            )}
          </InfoBox>
        </TitleWrap>
        <ContainerBox>
          <BlocTab>
            <OneButton onClick={() => toggleTab(1)} toggleState={toggleState}>
              소개
            </OneButton>
            <TwoButton onClick={() => toggleTab(2)} toggleState={toggleState}>
              종류
            </TwoButton>
            <ThreeButton
              onClick={() => {
                toggleTab(3);
                dispatch(storeAction.getStoreCakeListDB(store_id, pageNumber));
              }}
              toggleState={toggleState}
            >
              사진
            </ThreeButton>
            <FourButton
              onClick={() => {
                toggleTab(4);
                dispatch(
                  storeAction.getStoreReviewListDB(store_id, pageNumber)
                );
              }}
              toggleState={toggleState}
            >
              리뷰
            </FourButton>
          </BlocTab>
          <ContentTab>
            <ContentOne toggleState={toggleState}>
              <ContentBox>
                <ContentWrap>
                  <IconWrap>
                    <MarkerSvg />
                    <Description>{store_info.roadAddress}</Description>
                  </IconWrap>
                  <IconWrap>
                    <ClockSvg />
                    <Description>
                      <span>{store_info.openTimeToday?.type}: </span>
                      <span>{store_info.openTimeToday?.startTime} ~</span>
                      <span>{store_info.openTimeToday?.endTime}</span>
                      <span>{store_info.openTimeToday?.descritipnTime}</span>
                    </Description>
                  </IconWrap>
                  <CallWrap>
                    <CallSvg />
                    <Description>{store_info.phone}</Description>
                  </CallWrap>
                </ContentWrap>
                <BottomHr />
                <PictureBox>
                  <PictureWrap>
                    <Picture>사진</Picture>
                    <RightWrap>
                      <PlusP onClick={() => toggleTab(3)}>더보기</PlusP>
                      <RightSvg />
                    </RightWrap>
                  </PictureWrap>
                  <ImageBox>
                    {store_info.cakeImages &&
                      store_info.cakeImages.map((v, idx) => {
                        return (
                          <Images key={idx}>
                            <ImgBox src={v.img} />
                          </Images>
                        );
                      })}
                  </ImageBox>
                </PictureBox>
              </ContentBox>
            </ContentOne>
            <ContentTwo toggleState={toggleState}>
              <ContentBox>
                <ContentWrap>
                  {store_info.menus && store_info.menus[0] && (
                    <Kind>
                      <Type>
                        <SizeP>{store_info.menus[0].type}</SizeP>
                        <SizeP>{store_info.menus[0].size}</SizeP>
                      </Type>
                      <PriceP>{store_info.menus[0].price}</PriceP>
                    </Kind>
                  )}

                  {store_info.menus && store_info.menus[1] && (
                    <Kind>
                      <Type>
                        <SizeP>{store_info.menus[1].type}</SizeP>
                        <SizeP>{store_info.menus[1].size}</SizeP>
                      </Type>
                      <PriceP>{store_info.menus[1].price}</PriceP>
                    </Kind>
                  )}
                  {store_info.menus && store_info.menus[2] && (
                    <Kind>
                      <Type>
                        <SizeP>{store_info.menus[2].type}</SizeP>
                        <SizeP>{store_info.menus[2].size}</SizeP>
                      </Type>
                      <PriceP>{store_info.menus[2].price}</PriceP>
                    </Kind>
                  )}
                  {store_info.menus && store_info.menus[3] && (
                    <Kind2>
                      <Type>
                        <SizeP>{store_info.menus[3].type}</SizeP>
                        <SizeP>{store_info.menus[3].size}</SizeP>
                      </Type>
                      <PriceP>{store_info.menus[3].price}</PriceP>
                    </Kind2>
                  )}
                </ContentWrap>
                <BottomHr />
                <div>
                  <PictureWrap>
                    <Picture>사진</Picture>
                    <RightWrap>
                      <PlusP onClick={() => toggleTab(3)}>더보기</PlusP>
                      <RightSvg />
                    </RightWrap>
                  </PictureWrap>
                  <ImageBox>
                    {store_info.cakeImages &&
                      store_info.cakeImages.map((v, idx) => {
                        return (
                          <Images key={idx}>
                            <ImgBox src={v.img} />
                          </Images>
                        );
                      })}
                  </ImageBox>
                </div>
              </ContentBox>
            </ContentTwo>
            <ContentThree toggleState={toggleState}>
              <ContentBox>
                <ImageBox>
                  {store_cake &&
                    store_cake.map((v, idx) => {
                      return (
                        <Images key={idx}>
                          <ImgBox src={v.img} />
                        </Images>
                      );
                    })}
                </ImageBox>
              </ContentBox>
            </ContentThree>
            <ContentFour toggleState={toggleState}>
              <ReviewSvg
                onClick={() => {
                  navigate(`/review/write`);
                  dispatch(storeAction.getStoreDetailDB(store_id));
                }}
              />
              {store_review &&
                store_review.map((v, idx) => {
                  return (
                    <CommentWrap key={idx}>
                      <TitleTwo>
                        <InfoTwo>
                          <ProfileImage />
                          <Info>
                            <NicknameP>{v.writerNickname}</NicknameP>
                          </Info>
                        </InfoTwo>
                        <CreatedDateP>{v.createdDate}</CreatedDateP>
                      </TitleTwo>
                      <Pwrap>{v.content}</Pwrap>
                      {v.reviewImages &&
                        v.reviewImages.map((c, i) => {
                          return (
                            <ImgWrapTwo key={i}>
                              <img src={c} alt="img" />
                            </ImgWrapTwo>
                          );
                        })}

                      {v.writerNickname === user_nickname.nickname && (
                        <ButtonWrap>
                          <EditButton>수정하기</EditButton>
                          <DeleteButton
                            onClick={() => {
                              dispatch(reviewAction.deleteReviewDB(v.reviewId));
                            }}
                          >
                            삭제하기
                          </DeleteButton>
                        </ButtonWrap>
                      )}
                      <HrWrapTwo />
                    </CommentWrap>
                  );
                })}
            </ContentFour>
          </ContentTab>
        </ContainerBox>
      </DetailWrap>
    </StoreDetailContainer>
  );
};

export default StoreDetail;
