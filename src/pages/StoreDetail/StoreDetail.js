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
  ReviewSvg,
  RightSvg,
  UsersSvg,
  ClockSvg,
  MarkerSvg,
  ShopSvg,
  ImgWrap,
  ImgBox,
  StoreDetailContainer,
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
      <div>
        <ImgWrap src={store_info.mainImg}>
          <div className="title">
            <FontAwesomeIcon
              icon={faAngleLeft}
              className="left"
              onClick={() => {
                navigate(`/`);
              }}
            />
            <hr className="hr_wrap" />
          </div>
        </ImgWrap>
        <div className="title_wrap">
          <div className="info_box">
            <div className="top_wrap">
              <p className="store">{store_info.name}</p>
              <FontAwesomeIcon icon={faHeart} className="heart" />
            </div>
            {store_info.urls && (
              <div className="info_wrap">
                <div className="shop_wrap">
                  <ShopSvg className="shop" />
                  <p className="nomal">{store_info.urls[0]?.url}</p>
                </div>
                {/* <p className="insta">{store_info.urls[0].url}</p> */}
              </div>
            )}
          </div>
        </div>
        <div className="container">
          <div className="bloc-tabs">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              소개
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              종류
            </button>
            <button
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => {
                toggleTab(3);
                dispatch(storeAction.getStoreCakeListDB(store_id, pageNumber));
              }}
            >
              사진
            </button>
            <button
              className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
              onClick={() => {
                toggleTab(4);
                dispatch(
                  storeAction.getStoreReviewListDB(store_id, pageNumber)
                );
              }}
            >
              리뷰
            </button>
          </div>
          <div className="content-tabs">
            <div className={toggleState === 1 ? "active-content" : "content"}>
              <div>
                <div className="content_wrap">
                  <div className="icon_wrap">
                    <MarkerSvg className="icon" />
                    <p className="description">{store_info.roadAddress}</p>
                  </div>
                  <div className="icon_wrap">
                    <ClockSvg className="icon" />
                    <p className="description">
                      <span>{store_info.openTimeToday?.type}: </span>
                      <span>{store_info.openTimeToday?.startTime} ~</span>
                      <span>{store_info.openTimeToday?.endTime}</span>
                      <span>{store_info.openTimeToday?.descritipnTime}</span>
                    </p>
                  </div>
                  <div className="users_wrap">
                    <UsersSvg className="icon" />
                    <p className="description">{store_info.phone}</p>
                  </div>
                </div>
                <hr className="bottom" />
                <div>
                  <div className="picture_wrap">
                    <p className="picture">사진</p>
                    <div className="right_wrap">
                      <p className="plus" onClick={() => toggleTab(3)}>
                        더보기
                      </p>
                      <RightSvg className="right" />
                    </div>
                  </div>
                  <div className="img_box">
                    {store_info.cakeImages &&
                      store_info.cakeImages.map((v, idx) => {
                        return (
                          <div className="img_wrap" key={idx}>
                            <ImgBox src={v.img} />
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
            <div className={toggleState === 2 ? "active-content" : "content"}>
              <div>
                <div className="content_wrap">
                  {store_info.menus && store_info.menus[0] && (
                    <div className="kind">
                      <div className="type">
                        <p className="size">{store_info.menus[0].type}</p>
                        <p className="size">{store_info.menus[0].size}</p>
                      </div>
                      <p className="price">{store_info.menus[0].price}</p>
                    </div>
                  )}

                  {store_info.menus && store_info.menus[1] && (
                    <div className="kind">
                      <div className="type">
                        <p className="size">{store_info.menus[1].type}</p>
                        <p className="size">{store_info.menus[1].size}</p>
                      </div>
                      <p className="price">{store_info.menus[1].price}</p>
                    </div>
                  )}
                  {store_info.menus && store_info.menus[2] && (
                    <div className="kind">
                      <div className="type">
                        <p className="size">{store_info.menus[2].type}</p>
                        <p className="size">{store_info.menus[2].size}</p>
                      </div>
                      <p className="price">{store_info.menus[2].price}</p>
                    </div>
                  )}
                  {store_info.menus && store_info.menus[3] && (
                    <div className="kind">
                      <div className="type">
                        <p className="size">{store_info.menus[3].type}</p>
                        <p className="size">{store_info.menus[3].size}</p>
                      </div>
                      <p className="price">{store_info.menus[3].price}</p>
                    </div>
                  )}
                </div>
                <hr className="bottom" />
                <div>
                  <div className="picture_wrap">
                    <p className="picture">사진</p>
                    <div className="right_wrap">
                      <p className="plus" onClick={() => toggleTab(3)}>
                        더보기
                      </p>
                      <RightSvg className="right" />
                    </div>
                  </div>
                  <div className="img_box">
                    {store_info.cakeImages &&
                      store_info.cakeImages.map((v, idx) => {
                        return (
                          <div className="img_wrap" key={idx}>
                            <ImgBox src={v.img} />
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
            <div className={toggleState === 3 ? "active-content" : "content"}>
              <div>
                <div className="img_box">
                  {store_cake &&
                    store_cake.map((v, idx) => {
                      return (
                        <div className="img_wrap" key={idx}>
                          <ImgBox src={v.img} />
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
            <div className={toggleState === 4 ? "active-content" : "content"}>
              <ReviewSvg
                className="review"
                onClick={() => {
                  navigate(`/review/write`);
                  dispatch(storeAction.getStoreDetailDB(store_id));
                }}
              />
              {store_review &&
                store_review.map((v, idx) => {
                  return (
                    <div className="comment_wrap" key={idx}>
                      <div className="title_wrap2">
                        <div className="info_wrap2">
                          <div className="profile"></div>
                          <div className="info">
                            <p className="nickname">{v.writerNickname}</p>
                          </div>
                        </div>
                        <p className="insert_dt">{v.createdDate}</p>
                      </div>
                      <div>
                        <p className="p_wrap">{v.content}</p>
                      </div>
                      {v.reviewImages &&
                        v.reviewImages.map((c, i) => {
                          return (
                            <div className="img_wrap2" key={i}>
                              <img src={c} alt="img" />
                            </div>
                          );
                        })}

                      {v.writerNickname === user_nickname.nickname && (
                        <div className="button_wrap">
                          <button className="edit_btn">수정하기</button>
                          <button
                            className="delete_btn"
                            onClick={() => {
                              dispatch(reviewAction.deleteReviewDB(v.reviewId));
                            }}
                          >
                            삭제하기
                          </button>
                        </div>
                      )}
                      <hr className="hr_wrap2" />
                    </div>
                  );
                })}

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </StoreDetailContainer>
  );
};

export default StoreDetail;
