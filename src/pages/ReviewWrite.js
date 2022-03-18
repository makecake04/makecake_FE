import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as PlusBtnSvg } from "../svg/plusBtn.svg";
import { ReactComponent as DeleteBtnSvg } from "../svg/deleteBtn.svg";
import { actionCreators as reviewAction } from "../redux/modules/review";
import { actionCreators as storeAction } from "../redux/modules/store";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

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
              navigate(`/reactstore`);
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
              <PlusBtnSvg className="plusSvg" />
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
            <DeleteBtnSvg onClick={deleteImg} className="delete_btn" />
          </div>
        </ImageBox>
      </div>
    </ReviewWrap>
  );
};

const ReviewWrap = styled.div`
  .title {
    padding: 40px 0px 20px 30px;
    display: flex;
    align-items: center;
  }
  .left {
    color: #646464;
    margin: 0px 70px 0px 0px;
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

  .enter {
    margin-left: 50px;
    font-weight: 700;
    color: #ff679e;
  }

  .top {
    text-align: center;
    padding: 30px;
  }

  .p {
    margin-top: 10px;
  }

  .area {
    margin: 0 auto;
    width: 90%;
    height: auto;
  }

  textarea {
    width: 100%;
    height: 200px;
    padding: 10px;
    border-radius: 4px;
  }

  .plus_btn {
    margin: 20px auto 0px auto;
    width: 90%;
    background-color: #fff0f6;
    border-radius: 4px;
  }

  .image_plus {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  .plusSvg {
    path {
      stroke: #ff679e;
      fill: none;
    }
  }

  .btn {
    margin-top: 0px;
    margin-left: 10px;
    color: #ff679e;
    font-weight: 600;
    font-size: 16px;
  }

  .delete_btn {
    position: absolute;
    bottom: 75px;
    left: 75px;
  }
`;

const ImageBox = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 20px;
  gap: 20px;
  margin-top: 10px;
  overflow: hidden;

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
`;

export default ReviewWrite;
