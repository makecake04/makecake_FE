import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";
import { actionCreators as storeAction } from "../redux/modules/store";
import { actionCreators as reviewAction } from "../redux/modules/review";
import { useDispatch, useSelector } from "react-redux";

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
    <ReactStoreWrap>
      <div>
        <div className="title">
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="left"
            onClick={() => {
              navigate(`/mypage`);
            }}
          />
          <h3>내가 반응한 매장</h3>
        </div>
        <hr />
        <div className="container">
          <div className="bloc-tabs">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => {
                toggleTab(1);
              }}
            >
              좋아요 한 매장
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => {
                toggleTab(2);
              }}
            >
              내가 남긴 후기
            </button>
          </div>
          <div className="content-tabs">
            <div className={toggleState === 1 ? "active-content" : "content"}>
              {likeStore &&
                likeStore.map((v, idx) => {
                  return (
                    <div key={idx}>
                      <div className="img_wrap">
                        <img src={v.mainImg} alt="img" />
                        <FontAwesomeIcon icon={faHeart} className="heart" />
                      </div>
                      <p className="store">{v.name}</p>
                      <div className="address_wrap">
                        <FontAwesomeIcon
                          icon={faLocationDot}
                          className="location"
                        />
                        <p className="address">{v.addressSimple}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className={toggleState === 2 ? "active-contents" : "content"}>
              {myReview &&
                myReview.map((v, idx) => {
                  return (
                    <div className="comment_wrap" key={idx}>
                      <div className="title_wrap2">
                        <p className="nickname">{v.name}</p>
                        <p className="insert_dt">{v.createdDate}</p>
                      </div>
                      <p className="p_wrap">{v.content}</p>
                      <div className="review_img" src={v.reviewImages} />
                      <div className="button_wrap">
                        <button
                          className="edit_btn"
                          onClick={() => {
                            navigate(`/review/${v.reviewId}`);
                          }}
                        >
                          수정하기
                        </button>
                        <button
                          className="delete_btn"
                          onClick={() => {
                            dispatch(reviewAction.deleteReviewDB(v.reviewId));
                          }}
                        >
                          삭제하기
                        </button>
                      </div>
                      <hr className="hr_wrap" />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </ReactStoreWrap>
  );
};

const ReactStoreWrap = styled.div`
  .title {
    margin: 40px 0px 20px 30px;
    display: flex;
    align-items: center;
  }
  .left {
    color: #646464;
    margin: 0px 80px 0px 0px;
  }

  h3 {
    font-weight: 700;
    font-size: 19px;
    color: #282828;
  }

  hr {
    border: 0.7px solid #e5e5e5;
    width: 100%;
  }

  .img_wrap {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
  }

  img {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    object-fit: cover;
  }

  .heart {
    font-size: 30px;
    color: #ff679e;
    margin-top: 10px;
    position: absolute;
    right: 10px;
  }

  .store {
    margin: 10px 0px;
    color: #282828;
  }

  .address_wrap {
    display: flex;
  }

  .address {
    margin-bottom: 10px;
    margin-left: 5px;
    color: #777;
    font-size: 15px;
  }

  .location {
    color: #777;
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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 20px;
    gap: 20px;
    margin-top: 10px;
  }

  .active-contents {
    position: relative;
    display: grid;
    padding: 20px;
    gap: 20px;
    margin-top: 10px;
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
    margin-bottom: 20px;
  }

  .review_img {
    background: url(${(props) => props.src}) no-repeat center / cover;
    position: relative;
    width: 100%;
    object-fit: cover;
  }

  .button_wrap {
    margin-top: 20px;
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

  .hr_wrap {
    border: 0.7px solid #e5e5e5;
    width: 100%;
    margin: 25px 0px;
  }

  .p_wrap {
    display: -webkit-box;
    word-wrap: break-word;
    word-break: break-all;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 10px;
  }
`;

export default ReactStore;
