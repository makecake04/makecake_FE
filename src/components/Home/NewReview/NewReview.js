import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { actionCreators as storeAction } from "../../../redux/modules/store";

//import css
import {
  ReviewWrap,
  SubWrap,
  Title,
  CommentWrap,
  ReviewsWrap,
  ImageWrap,
  Image,
  ImgBox,
  Reviews,
  InfoWrap,
  Name,
  CreatedDate,
} from "./style";

const NewReview = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(storeAction.getNewReviewDB());
  }, []);

  const review_list = useSelector((state) => state.store.lists);
  console.log(review_list);

  return (
    <ReviewWrap>
      <SubWrap>
        <Title>최신 리뷰 👍</Title>
        <CommentWrap>
          {review_list &&
            review_list.map((v, idx) => {
              return (
                <ReviewsWrap
                  key={idx}
                  onClick={() => navigate(`/storedetail/${v.storeId}`)}
                >
                  <ImageWrap>
                    <Image>
                      <ImgBox src={v.img} alt="reiview-img" />
                    </Image>
                  </ImageWrap>
                  <Reviews>
                    <p>{v.content}</p>
                    <InfoWrap>
                      <Name>{v.nickname}</Name>
                      <CreatedDate>{v.createdDate?.split(" ")[0]}</CreatedDate>
                    </InfoWrap>
                  </Reviews>
                </ReviewsWrap>
              );
            })}
        </CommentWrap>
      </SubWrap>
    </ReviewWrap>
  );
};

export default NewReview;
