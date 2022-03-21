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

//import css
import { ReactStoreWrap } from "./style";

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

export default ReactStore;
