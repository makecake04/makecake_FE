import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { actionCreators as storeAction } from "../../../redux/modules/store";

//import css
import { ReviewWrap, CommentWrap } from "./style";

const NewReview = (props) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(storeAction.getNewReviewDB());
  }, []);

  const review_list = useSelector((state) => state.store.lists);

  return (
    <ReviewWrap>
      <div>
        <h3>최신 리뷰 👍</h3>
        <CommentWrap>
          {review_list &&
            review_list.map((v, idx) => {
              return (
                <div key={idx}>
                  <div className="wrap">
                    <div className="img_wrap">
                      <img src={v.img} alt="reiview-img" />
                    </div>
                  </div>
                  <div className="review_wrap">
                    <p>{v.content}</p>
                    <div className="info_wrap">
                      <div className="name">{v.nickname}</div>
                      <div>{v.createdDate}</div>
                    </div>
                  </div>
                </div>
              );
            })}
        </CommentWrap>
      </div>
    </ReviewWrap>
  );
};

export default NewReview;
