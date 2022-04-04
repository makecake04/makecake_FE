import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { actionCreators as storeAction } from "../../redux/modules/store";
import { actionCreators as cakeAction } from "../../redux/modules/cake";
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
  UrlWrap,
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
  ModalWrap2,
  ModalImg,
  StoreWrap,
  ContentTwo,
  ContentThree,
  ContentFour,
  ContentBox,
  ContentWrap,
  PlusWrap,
  ModalWrap,
  StoreBody,
  StoreName,
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
  Toggle,
  RightSvg,
  CallSvg,
  ClockSvg,
  MarkerSvg,
  DescriptionAddress,
  ShopSvg,
  ImgWrap,
  ImgBox,
  EmptyHeartIcon,
  FullHeartIcon,
  LikeInfo,
  LikeCnt,
  LikeCnt2,
} from "./style";

//image
import { close } from "../../assets/images/image";

//component

const StoreDetail = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const params = useParams();
  const store_id = params.storeid;

  const [pageNumber, setPageNumber] = useState(0);
  const [ref, inView] = useInView();
  const [toggleState, setToggleState] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);

  const cake_img = useSelector((state) => state.cake.lists);
  const cake_id = useSelector((state) => state.cake.lists);
  const my_like = useSelector((state) => state.cake.lists);
  const store_cake = useSelector((state) => state.store.cake);
  const store_review = useSelector((state) => state.store.review);
  const user_nickname = useSelector((state) => state.user.user);
  const login = useSelector((state) => state.user.is_login);
  const store_info = useSelector((state) => state.store.store);
  const sort = useSelector((state) => state.store.store_sort_type);
  const is_session = localStorage.getItem("token");

  const toggleTab = (index) => {
    setToggleState(index);
  };

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

  const likeToggle2 = () => {
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
      dispatch(cakeAction.addLikeCakeDB(cake_id.cakeId, !my_like.myLike));
    }
  };

  const saveInformation = (storeId) => {
    navigate(`/searchmap/${storeId}`);
  };

  useEffect(() => {
    if (store_cake.length !== 0) {
      dispatch(storeAction.storeCakeReplace([]));
    }
    if (store_review.length !== 0) {
      dispatch(storeAction.storeReviewReplace([]));
    }
    dispatch(storeAction.getStoreDetailDB(store_id));
  }, []);

  useEffect(() => {
    if (toggleState === 3) {
      dispatch(storeAction.getStoreCakeListDB(store_id));
    } else if (toggleState === 4) {
      dispatch(storeAction.getStoreReviewListDB(store_id, pageNumber));
    }
  }, [toggleState, pageNumber]);

  useEffect(() => {
    if (inView) {
      setPageNumber(pageNumber + 1);
    }
  }, [inView]);

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
            {store_info.urlList && store_info.urlList.length !== 0 && (
              <InfoWrap>
                {store_info.urlList.length === 1 && (
                  <ShopWrap>
                    <ShopSvg />
                    <Nomal as="a" href={store_info.urlList[0].url}>
                      매장 주문 페이지
                    </Nomal>
                  </ShopWrap>
                )}
                {store_info.urlList.length === 2 &&
                  (store_info.urlList[0].type === "nromal" ||
                    store_info.urlList[1].type === "normal") && (
                    <ShopWrap>
                      <ShopSvg />
                      <UrlWrap>
                        {store_info.urlList[0].type === "normal" && (
                          <Nomal as="a" href={store_info.urlList[0].url}>
                            매장 주문 페이지
                          </Nomal>
                        )}
                        {store_info.urlList[1].type === "normal" && (
                          <Nomal as="a" href={store_info.urlList[1].url}>
                            매장 주문 페이지
                          </Nomal>
                        )}
                        {store_info.urlList[0].type === "normal" && (
                          <Insta as="a" href={store_info.urlList[1].url}>
                            {store_info.urlList[1].type}
                          </Insta>
                        )}
                        {store_info.urlList[1].type === "normal" && (
                          <Insta as="a" href={store_info.urlList[0].url}>
                            {store_info.urlList[0].type}
                          </Insta>
                        )}
                      </UrlWrap>
                    </ShopWrap>
                  )}
                {store_info.urlList.length === 2 &&
                  store_info.urlList[0].type !== "nromal" &&
                  store_info.urlList[1].type !== "normal" && (
                    <ShopWrap>
                      <ShopSvg />
                      <UrlWrap>
                        <Nomal as="a" href={store_info.urlList[0].url}>
                          매장 주문 페이지
                        </Nomal>
                        <Insta as="a" href={store_info.urlList[1]?.url}>
                          {store_info.urlList[1].type}
                        </Insta>
                      </UrlWrap>
                    </ShopWrap>
                  )}
              </InfoWrap>
            )}
          </InfoBox>
        </TitleWrap>
        <ContainerBox>
          {toggleState === 4 &&
            (is_session ? (
              <Toggle>
                <ReviewSvg
                  onClick={() => {
                    navigate(`/review/write/${store_id}`);
                    dispatch(storeAction.getStoreDetailDB(store_id));
                  }}
                />
              </Toggle>
            ) : (
              <Toggle>
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
              </Toggle>
            ))}
          <BlocTab>
            <OneButton
              onClick={() => {
                toggleTab(1);

                dispatch(storeAction.setStoreSortType(1));
              }}
              toggleState={toggleState}
            >
              소개
            </OneButton>
            <TwoButton
              onClick={() => {
                toggleTab(2);
              }}
              toggleState={toggleState}
            >
              메뉴
            </TwoButton>
            <ThreeButton
              onClick={() => {
                toggleTab(3);
              }}
              toggleState={toggleState}
            >
              사진
            </ThreeButton>
            <FourButton
              onClick={() => {
                toggleTab(4);
                setPageNumber(0);
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
                    <DescriptionAddress
                      onClick={() => {
                        navigate(`/searchmap/${store_id}`);
                      }}
                    >
                      {store_info.roadAddress}
                    </DescriptionAddress>
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
                          dispatch(storeAction.getStoreCakeListDB(store_id));
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
                            <ImgBox
                              src={v.img}
                              onClick={() => {
                                setModalIsOpen2(true);
                                dispatch(cakeAction.getCakeImageDB(v.cakeId));
                              }}
                            />
                          </Images>
                        );
                      })}
                  </ImageBox>
                </PictureBox>
              </ContentBox>
            </ContentOne>
            <Modal
              isOpen={modalIsOpen2}
              onRequestClose={() => {
                setModalIsOpen2(false);
                dispatch(cakeAction.cakeImage({}));
              }}
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
                  background: "none",
                  border: "none",
                  overflow: "auto",
                  borderRadius: "5px",
                  transform: "translate(-50%,-50%)",
                  WebkitOverflowScrolling: "touch",
                },
              }}
            >
              <ModalWrap2>
                <ModalImg
                  src={cake_img.img}
                  onClick={() => setModalIsOpen2(false)}
                  alt="cakeDetailImage"
                />
                <StoreWrap>
                  <StoreBody>
                    <StoreName>{cake_img.storeName}</StoreName>
                  </StoreBody>
                  <div>
                    {my_like.myLike ? (
                      <FullHeartIcon onClick={likeToggle2} />
                    ) : (
                      <EmptyHeartIcon onClick={likeToggle2} />
                    )}
                    <LikeCnt2>{cake_img.likeCnt}</LikeCnt2>
                  </div>
                </StoreWrap>
              </ModalWrap2>
            </Modal>
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

                <BottomHr />
                <PictureBox>
                  <PictureWrap>
                    <Picture>사진</Picture>
                    <RightWrap>
                      <PlusP
                        onClick={() => {
                          toggleTab(3);
                          dispatch(storeAction.getStoreCakeListDB(store_id));
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
                            <ImgBox
                              src={v.img}
                              onClick={() => {
                                setModalIsOpen2(true);
                                dispatch(cakeAction.getCakeImageDB(v.cakeId));
                              }}
                            />
                          </Images>
                        );
                      })}
                  </ImageBox>
                </PictureBox>
              </ContentBox>
            </ContentTwo>
            <ContentThree toggleState={toggleState}>
              <ContentBox>
                <ImageBox>
                  {store_cake &&
                    store_cake.map((v, idx) => {
                      return (
                        <Images key={idx}>
                          <ImgBox
                            src={v.img}
                            onClick={() => {
                              setModalIsOpen2(true);
                              dispatch(cakeAction.getCakeImageDB(v.cakeId));
                            }}
                          />
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
                    <CommentWrap
                      key={idx}
                      ref={store_review.length === idx + 1 ? ref : null}
                    >
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

                      {v.reviewImgList[0] && (
                        <ImgWrapTwo>
                          <img src={v.reviewImgList[0]} alt="img" />
                        </ImgWrapTwo>
                      )}

                      {v.writerNickname === user_nickname?.nickname && (
                        <ButtonWrap>
                          <EditButton
                            onClick={() => {
                              dispatch(reviewAction.reviewReplace([]));
                              navigate(`/review/${v.reviewId}`);
                            }}
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setModalIsOpen(false);
          dispatch(cakeAction.cakeImage({}));
        }}
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
          <img src={close} alt="close" onClick={() => setModalIsOpen(false)} />
          {store_info.moreDetails?.cakeMenuList.length === 0 ? (
            <div>
              <Category>케이크 종류</Category>
              <NoContent>정보 없음</NoContent>
            </div>
          ) : (
            <>
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
            </>
          )}
          {store_info.moreDetails?.cakeTasteList.length === 0 ? (
            <div>
              <Category>케이크 시트 맛</Category>
              <NoContent>정보 없음</NoContent>
            </div>
          ) : (
            <>
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
            </>
          )}
          {store_info.moreDetails?.cakeOptionList.length === 0 ? (
            <div>
              <Category>추가 옵션</Category>
              <NoContent>정보 없음</NoContent>
            </div>
          ) : (
            <>
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
            </>
          )}
        </ModalWrap>
      </Modal>
    </StoreDetailContainer>
  );
};

export default StoreDetail;
