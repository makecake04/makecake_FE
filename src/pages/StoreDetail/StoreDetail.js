import React from "react";
import { useNavigate } from "react-router-dom";
import { actionCreators as storeAction } from "../../redux/modules/store";
import { actionCreators as reviewAction } from "../../redux/modules/review";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import Swal from "sweetalert2";
import Modal from "react-modal";

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
  InfoWrap,
  ShopWrap,
  Nomal,
  Insta,
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
  PlusWrap,
  ModalWrap,
  Category,
  NoContent,
  CategoryWrap,
  CategoryItem,
  CategoryDetail,
  PlusButton,
  StorePlusButton,
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
  EmptyHeartIcon,
  FullHeartIcon,
  LikeInfo,
  LikeCnt,
} from "./style";

//image
import { close } from "../../assets/images/image";

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
  const login = useSelector((state) => state.user.is_login);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const is_session = localStorage.getItem("token");

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

  const likeToggle = () => {
    if (!login) {
      Swal.fire({
        title: "로그인이 필요한 서비스입니다!",
        showCancelButton: true,
        confirmButtonText: '<a href="/">로그인 할래요!</a>',
        confirmButtonColor: "#ff679e",
        cancelButtonColor: "#777",
        cancelButtonText: "그냥 둘러볼래요.",
      });
    } else {
      dispatch(storeAction.addLikeStoreDB(store_id, !store_info.myLike));
    }
  };

  return (
    <StoreDetailContainer>
      <DetailWrap>
        <ImgWrap src={store_info.mainImg}>
          <Title>
            <WhiteBackIcon
              onClick={() => {
                navigate(-1);
              }}
            />
            <HrWrap />
          </Title>
        </ImgWrap>
        <TitleWrap>
          <InfoBox>
            <TopWrap>
              <Store>{store_info.name}</Store>
              <LikeInfo>
                {store_info.myLike ? (
                  <FullHeartIcon onClick={likeToggle} />
                ) : (
                  <EmptyHeartIcon onClick={likeToggle} />
                )}
                <LikeCnt>{store_info.likeCnt}</LikeCnt>
              </LikeInfo>
            </TopWrap>
            {store_info.urlList && (
              <InfoWrap>
                <ShopWrap>
                  <ShopSvg />
                  {store_info.urlList[0]?.type === "normal" && (
                    <Nomal as="a" href={store_info.urlList[0]?.url}>
                      {store_info.urlList[0]?.url}
                    </Nomal>
                  )}
                  {store_info.urlList[1]?.type === "normal" && (
                    <Nomal as="a" href={store_info.urlList[1]?.url}>
                      {store_info.urlList[1]?.url}
                    </Nomal>
                  )}
                  {store_info.urlList[0]?.type === "instagram" &&
                    store_info.urlList.length === 1 && (
                      <Nomal as="a" href={store_info.urlList[0]?.url}>
                        {store_info.urlList[0]?.url}
                      </Nomal>
                    )}
                  {store_info.urlList[1]?.type === "instagram" &&
                    store_info.urlList.length === 1 && (
                      <Nomal as="a" href={store_info.urlList[1]?.url}>
                        {store_info.urlList[1]?.url}
                      </Nomal>
                    )}
                </ShopWrap>
                {store_info.urlList[0]?.type === "instagram" &&
                  store_info.urlList.length === 2 && (
                    <Insta as="a" href={store_info.urlList[0].url}>
                      instagram
                    </Insta>
                  )}
                {store_info.urlList[1]?.type === "instagram" &&
                  store_info.urlList.length === 2 && (
                    <Insta as="a" href={store_info.urlList[1].url}>
                      instagram
                    </Insta>
                  )}
              </InfoWrap>
            )}
          </InfoBox>
        </TitleWrap>
        <ContainerBox>
          {toggleState === 4 &&
            (is_session ? (
              <ReviewSvg
                onClick={() => {
                  navigate("/review/write");
                  dispatch(storeAction.getStoreDetailDB(store_id));
                }}
              />
            ) : (
              <ReviewSvg
                onClick={() => {
                  Swal.fire({
                    title: "로그인이 필요한 서비스입니다!",
                    showCancelButton: true,
                    confirmButtonText: '<a href="/">로그인 할래요!</a>',
                    confirmButtonColor: "#ff679e",
                    cancelButtonColor: "#777",
                    cancelButtonText: "그냥 둘러볼래요.",
                  });
                }}
              />
            ))}
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
                      <span>({store_info.openTimeToday?.descriptionTime})</span>
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
                      <PlusP
                        onClick={() => {
                          toggleTab(3);
                          dispatch(
                            storeAction.getStoreCakeListDB(store_id, pageNumber)
                          );
                        }}
                      >
                        더보기
                      </PlusP>
                      <RightSvg />
                    </RightWrap>
                  </PictureWrap>
                  <ImageBox>
                    {store_info.cakeImgList &&
                      store_info.cakeImgList.map((v, idx) => {
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
                  {store_info.menuList && store_info.menuList.length === 0 && (
                    <Kind>
                      <Type>
                        <SizeP>레터링 케이크</SizeP>
                      </Type>
                      <PriceP>가격 변동</PriceP>
                    </Kind>
                  )}
                  {store_info.menuList && store_info.menuList[0] && (
                    <Kind>
                      <Type>
                        <SizeP>{store_info.menuList[0].type}</SizeP>
                        <SizeP>{store_info.menuList[0].size}</SizeP>
                      </Type>
                      <PriceP>{store_info.menuList[0].price}</PriceP>
                    </Kind>
                  )}

                  {store_info.menuList && store_info.menuList[1] && (
                    <Kind>
                      <Type>
                        <SizeP>{store_info.menuList[1].type}</SizeP>
                        <SizeP>{store_info.menuList[1].size}</SizeP>
                      </Type>
                      <PriceP>{store_info.menuList[1].price}</PriceP>
                    </Kind>
                  )}
                  {store_info.menuList && store_info.menuList[2] && (
                    <Kind>
                      <Type>
                        <SizeP>{store_info.menuList[2].type}</SizeP>
                        <SizeP>{store_info.menuList[2].size}</SizeP>
                      </Type>
                      <PriceP>{store_info.menuList[2].price}</PriceP>
                    </Kind>
                  )}
                  {store_info.menuList && store_info.menuList[3] && (
                    <Kind2>
                      <Type>
                        <SizeP>{store_info.menuList[3].type}</SizeP>
                        <SizeP>{store_info.menuList[3].size}</SizeP>
                      </Type>
                      <PriceP>{store_info.menuList[3].price}</PriceP>
                    </Kind2>
                  )}
                </ContentWrap>
                <PlusWrap>
                  {store_info.moreDetails?.cakeMenuList.length !== 0 &&
                    store_info.moreDetails?.cakeTasteList.length !== 0 &&
                    store_info.moreDetails?.cakeOptionList.length !== 0 && (
                      <PlusButton onClick={() => setModalIsOpen(true)}>
                        자세히보기 <StorePlusButton />
                      </PlusButton>
                    )}
                </PlusWrap>
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={() => setModalIsOpen(false)}
                  style={{
                    overlay: {
                      position: "fixed",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: "rgba(76, 76, 76, 0.7)",
                      zIndex: "20",
                    },
                    content: {
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      bottom: "auto",
                      width: "300px",
                      height: "auto",
                      padding: "0",
                      border: "none",
                      overflow: "auto",
                      borderRadius: "5px",
                      transform: "translate(-50%,-50%)",
                      WebkitOverflowScrolling: "touch",
                    },
                  }}
                >
                  <ModalWrap>
                    <img
                      src={close}
                      alt="close"
                      onClick={() => setModalIsOpen(false)}
                    />
                    {store_info.moreDetails?.cakeMenuList.length === 0 ? (
                      <div>
                        <Category>케이크 종류</Category>
                        <NoContent>정보 없음</NoContent>
                      </div>
                    ) : (
                      <div>
                        <Category>케이크 종류</Category>
                        {store_info &&
                          store_info.moreDetails?.cakeMenuList.map((m, i) => {
                            return (
                              <CategoryWrap key={i}>
                                <CategoryItem>
                                  <span>
                                    {m.type} {m.size}
                                  </span>
                                  {/* <hr /> */}
                                  <span>{m.price}</span>
                                </CategoryItem>
                                <CategoryDetail>
                                  <p>{m.moreInfo}</p>
                                </CategoryDetail>
                              </CategoryWrap>
                            );
                          })}
                      </div>
                    )}
                    {store_info.moreDetails?.cakeTasteList.length === 0 ? (
                      <div>
                        <Category>케이크 시트 맛</Category>
                        <NoContent>정보 없음</NoContent>
                      </div>
                    ) : (
                      <div>
                        <Category>케이크 시트 맛</Category>
                        {store_info &&
                          store_info.moreDetails?.cakeTasteList.map((t, i) => {
                            return (
                              <CategoryWrap key={i}>
                                <CategoryItem>
                                  <span>{t.flavor}</span>
                                  {/* <hr /> */}
                                  <span>{t.addedPrice}</span>
                                </CategoryItem>
                                <CategoryDetail>
                                  <p>{t.moreInfo}</p>
                                </CategoryDetail>
                              </CategoryWrap>
                            );
                          })}
                      </div>
                    )}
                    {store_info.moreDetails?.cakeOptionList.length === 0 ? (
                      <div>
                        <Category>추가 옵션</Category>
                        <NoContent>정보 없음</NoContent>
                      </div>
                    ) : (
                      <div>
                        <Category>추가 옵션</Category>
                        {store_info &&
                          store_info.moreDetails?.cakeOptionList.map((o, i) => {
                            return (
                              <CategoryWrap key={i}>
                                <CategoryItem>
                                  <span>{o.name}</span>
                                  {/* <hr /> */}
                                  <span>{o.price}</span>
                                </CategoryItem>
                                <CategoryDetail>
                                  <p>{o.moreInfo}</p>
                                </CategoryDetail>
                              </CategoryWrap>
                            );
                          })}
                      </div>
                    )}
                  </ModalWrap>
                </Modal>
                <BottomHr />
                <div>
                  <PictureWrap>
                    <Picture>사진</Picture>
                    <RightWrap>
                      <PlusP
                        onClick={() => {
                          toggleTab(3);
                          dispatch(
                            storeAction.getStoreCakeListDB(store_id, pageNumber)
                          );
                        }}
                      >
                        더보기
                      </PlusP>
                      <RightSvg />
                    </RightWrap>
                  </PictureWrap>
                  <ImageBox>
                    {store_info.cakeImgList &&
                      store_info.cakeImgList.map((v, idx) => {
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
              {store_review &&
                store_review.map((v, idx) => {
                  return (
                    <CommentWrap key={idx}>
                      <TitleTwo>
                        <InfoTwo>
                          <ProfileImage src={v.writerImg} />
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
                      {v.writerNickname === user_nickname?.nickname && (
                        <ButtonWrap>
                          <EditButton
                            onClick={() => navigate(`/review/${v.reviewId}`)}
                          >
                            수정하기
                          </EditButton>
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
