import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { ReactComponent as MarkerSvg } from "../svg/marker.svg";
import { ReactComponent as UsersSvg } from "../svg/fi_phone.svg";
import { ReactComponent as ClockSvg } from "../svg/clock.svg";
import { ReactComponent as RightSvg } from "../svg/right.svg";
import { ReactComponent as ShopSvg } from "../svg/Shop.svg";
import { ReactComponent as ReviewSvg } from "../svg/Review.svg";
import { actionCreators as storeAction } from "../redux/modules/store";
import { actionCreators as reviewAction } from "../redux/modules/review";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import Logo from "../images/logo.png";

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
    <StoreDetailWrap>
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
                  <p className="nomal">{store_info.urls[0].url}</p>
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

              <ReviewSvg
                className="review"
                onClick={() => {
                  navigate(`/review`);
                  dispatch(storeAction.getStoreDetailDB(store_id));
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </StoreDetailWrap>
  );
};

const StoreDetailWrap = styled.div`
  overflow-y: auto;
  height: 844px;
  position: relative;

  .title {
    display: flex;
  }

  .left {
    color: #646464;
    position: absolute;
    margin-top: 40px;
    margin-left: 40px;
  }

  .hr_wrap {
    border: 0.7px solid #e5e5e5;
    width: 100%;
    margin-top: 190px;
    z-index: 1;
  }

  .title_wrap {
    position: relative;
    z-index: 2;
    left: 10%;
    top: -50px;
    width: 80%;
    height: 100px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0px 3px 8px rgba(152, 153, 150, 0.3);
    padding: 16px;
  }

  .container {
    position: relative;
    top: -40px;
  }

  .info_box {
    width: 100%;
  }

  .top_wrap {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .info_wrap {
    display: flex;
    flex-direction: column;
  }

  .store {
    font-weight: 700;
  }

  .shop_wrap {
    display: flex;
  }

  .shop {
    height: 24px;
    width: 24px;
  }

  .heart {
    color: #ff679e;
    font-size: 20px;
  }

  .nomal {
    flex: 1;
    padding-left: 5px;
    font-size: 13px;
  }

  .insta {
    flex: 1;
    padding-left: 30px;
  }

  .bloc-tabs {
    display: flex;
    margin: 0px 20px;
  }
  .tabs {
    padding: 15px;
    text-align: center;
    width: 50%;
    background: #fff;
    cursor: pointer;
    border-bottom: 2px solid #e5e5e5;
    box-sizing: content-box;
    outline: none;
    font-size: 15px;
    font-weight: 400;
    color: #777;
  }

  .active-tabs {
    background: #fff;
    padding: 15px;
    text-align: center;
    width: 50%;
    cursor: pointer;
    border-bottom: 2px solid #ff679e;
    box-sizing: content-box;
    outline: none;
    font-size: 15px;
    font-weight: 400;
    color: #ff679e;
  }

  .active-tabs::before {
    content: "";
    display: block;
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% + 2px);
    height: 5px;
    background: #fff;
  }

  button {
    border: none;
  }

  .content-tabs {
    flex-grow: 1;
  }

  .content {
    background: #fff;
    padding: 20px;
    width: 100%;
    height: 100%;
    border: none;
    display: none;
  }

  .active-content {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .content_wrap {
    padding: 20px;
  }

  .icon_wrap {
    display: flex;
    margin-bottom: 20px;
    flex: 1;
  }

  .icon {
    margin-right: 10px;
    width: 20px;
    height: 20px;
    path {
      stroke: #777;
    }
  }

  .description {
    font-size: 15px;
    color: #777;
    flex: 1;
    span + span {
      margin-left: 0.5rem;
    }
    span + span + span {
      margin-left: 0.5rem;
    }
    span + span + span + span {
      margin-left: 0.5rem;
    }
  }

  .users_wrap {
    display: flex;
  }

  .bottom {
    border: 3px solid #f7f7f7;
    width: 100%;
  }

  .picture_wrap {
    margin: 10px 20px 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .picture {
    color: #282828;
    font-weight: 700;
  }

  .plus {
    color: #777;
    font-size: 15px;
  }

  .right_wrap {
    display: flex;
    align-items: center;
  }

  .right {
    width: 18px;
    height: 18px;
    path {
      stroke: #777;
    }
  }

  .img_box {
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 20px;
    gap: 20px;
    overflow: hidden;
  }

  .img_wrap {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    border-radius: 10px;
    overflow: hidden;
  }

  .kind {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .kind2 {
    display: flex;
    justify-content: space-between;
  }

  .type {
    display: flex;
  }

  .size {
    color: #777;
    font-size: 15px;
    margin-right: 5px;
  }

  .line {
    color: #dadada;
  }

  .price {
    font-size: 15px;
    font-weight: 700;
  }

  .insert_dt {
    margin: 0px 0px 5px 0px;
    font-size: 13px;
    color: #777;
  }

  .nickname {
    font-size: 15px;
    color: #282828;
  }

  .title_wrap2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }

  .hr_wrap2 {
    border: 0.7px solid #e5e5e5;
    width: 100%;
    margin: 25px 0px 0px 0px;
  }

  .p_wrap {
    word-break: break-all;
    display: -webkit-box;
    word-wrap: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0px 20px;
  }

  .review {
    position: fixed;
    bottom: 1.3rem;
    right: 1.3rem;
    width: 4.8rem;
    height: 4.8rem;
  }

  .profile {
    width: 45px;
    height: 45px;
    border-radius: 45px;
    background-color: #ddd;
    background-image: url(${Logo});
    background-position: center;
    background-size: 50px;
  }

  .info_wrap2 {
    display: flex;
    align-items: center;
  }

  .info {
    margin: 0px 0px 0px 10px;
  }

  .nickname {
    font-size: 15px;
    color: #282828;
  }

  .img_wrap2 {
    position: relative;
    width: 90%;
    background: url(${(props) => props.src}) no-repeat center / cover;
    border-radius: 5px;
    object-fit: cover;
    margin: 10px auto 0 auto;
  }

  .button_wrap {
    margin: 20px 20px 0px 0px;
    display: flex;
    justify-content: end;
  }

  .edit_btn {
    width: 80px;
    height: 35px;
    font-size: 13px;
    color: #777;
    border: 1px solid #777;
    border-radius: 20px;
    margin-right: 10px;
  }

  .delete_btn {
    width: 80px;
    height: 35px;
    font-size: 13px;
    color: #e10000;
    border: 1px solid #e10000;
    border-radius: 20px;
  }
`;

const ImgWrap = styled.div`
  background: url(${(props) => props.src}) no-repeat center / cover;
  position: relative;
`;

const ImgBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${(props) => props.src}) no-repeat center / cover;
`;

export default StoreDetail;
