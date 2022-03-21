import React from "react";

import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { actionCreators as reviewAction } from "../../redux/modules/review";
import { actionCreators as storeAction } from "../../redux/modules/store";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

//image
import { image_upload, preview_delete } from "../../assets/images/image";

//css
import { ReviewWrap, ImageBox, ImageUpload, PreviewDelete } from "./style";

const ReviewWrite = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store_id = useSelector((state) => state.store.store);
  const one_review = useSelector((state) => state.review.list);
  const params = useParams();
  const review_id = params.reviewId;
  const imgUrl = one_review.reviewImage;

  const is_edit = review_id ? true : false;

  React.useEffect(() => {
    if (is_edit) {
      dispatch(reviewAction.getOneReviewDB(review_id));
    }
  }, []);

  const [contents, setContents] = React.useState(
    review_id ? one_review.content : ""
  );

  const [fileName, setFileName] = React.useState(null);
  const fileInput = React.useRef();

  const selectFiles = (e) => {
    const reader = new FileReader();
    const currentFile = fileInput.current.files[0];
    setFileName(currentFile.name);
    reader.readAsDataURL(currentFile);
    reader.onloadend = () => {
      dispatch(reviewAction.setPreview(reader.result));
    };
  };

  const preview = useSelector((state) => state.review.preview);

  const deleteImg = () => {
    setFileName(null);
  };

  const changeContent = (e) => {
    setContents(e.target.value);
  };

  const addReview = () => {
    dispatch(
      reviewAction.addReviewDB(
        store_id.storeId,
        contents,
        fileInput.current.files[0]
      )
    );
  };

  const editReview = () => {
    dispatch(
      reviewAction.editReviewDB(
        review_id,
        contents,
        fileInput.current.files[0],
        imgUrl
      )
    );
  };

  return (
    <ReviewWrap>
      <div>
        <div className="title">
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="left"
            onClick={() => {
              navigate("/react/store");
            }}
          />
          <h3>{is_edit ? "매장 리뷰 수정하기" : "매장 리뷰 작성하기"}</h3>
          {is_edit ? (
            <p className="enter" onClick={editReview}>
              완료
            </p>
          ) : (
            <p className="enter" onClick={addReview}>
              등록
            </p>
          )}
        </div>
        <hr />
        <div className="top">
          <p>이용하신 매장은 만족스러우셨나요?</p>
          <p className="p">해당 매장의 리뷰를 남겨주세요.</p>
        </div>
        <div className="area">
          {is_edit ? (
            <textarea
              placeholder="내용을 입력하세요."
              onChange={changeContent}
              defaultValue={one_review.content}
            />
          ) : (
            <textarea
              placeholder="내용을 입력하세요."
              onChange={changeContent}
            />
          )}
        </div>
        <div className="plus_btn">
          <label>
            <input
              type="file"
              multiple
              ref={fileInput}
              onChange={selectFiles}
              accept=".jpg,.jpeg,.png"
            ></input>
            <div className="image_plus">
              <ImageUpload className="plusSvg" />
              <p className="btn">이미지 추가하기</p>
            </div>
          </label>
        </div>
        <ImageBox>
          <div className="img_wrap">
            <img
              src={
                preview
                  ? preview
                  : "https://k-startup.go.kr/images/homepage/prototype/noimage.gif"
              }
              alt="reviewImage"
            />
            <PreviewDelete onClick={deleteImg} className="delete_btn" />
          </div>
        </ImageBox>
      </div>
    </ReviewWrap>
  );
};

export default ReviewWrite;
