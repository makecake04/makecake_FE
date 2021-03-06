import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

import { actionCreators as reviewAction } from "../../redux/modules/review";

//css
import {
  ReviewWrap,
  SubWrap,
  Title,
  BlackBackIcon,
  Enter,
  HrWrap,
  TopWrap,
  P,
  AreaWrap,
  PlusButton,
  LabelWrap,
  PlusImg,
  ImageWrap,
  ImageBox,
  ImgBox,
  ImageUpload,
} from "./style";

//image
import { preview_icon } from "../../assets/images/image";

import Compressor from "compressorjs";

const ReviewWrite = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const one_review = useSelector((state) => state.review.list);
  const params = useParams();
  const review_id = params.reviewId;
  const store_id = params.storeId;
  const imgUrl = one_review.reviewImage;
  const is_edit = review_id ? true : false;

  useEffect(() => {
    if (is_edit) {
      dispatch(reviewAction.getOneReviewDB(review_id));
    }
  }, []);

  const [contents, setContents] = useState(review_id ? one_review.content : "");

  const [file, setFile] = useState(null);
  const fileInput = useRef();

  const selectFiles = async (e) => {
    const reader = new FileReader();
    const currentFile = fileInput.current.files[0];

    new Compressor(currentFile, {
      quality: 0.6,
      success(result) {
        setFile(result);
      },
    });

    reader.readAsDataURL(currentFile);
    reader.onloadend = () => {
      dispatch(reviewAction.setPreview(reader.result));
    };
  };

  const preview = useSelector((state) => state.review.preview);

  const changeContent = (e) => {
    setContents(e.target.value);
  };

  const addReview = () => {
    if (contents === "") {
      Swal.fire({
        title: "내용을 입력해주세요!",
        showCancelButton: false,
        confirmButtonText: "네!",
        confirmButtonColor: "#ff679e",
      });
      return;
    }
    dispatch(reviewAction.reviewReplace([]));
    dispatch(reviewAction.addReviewDB(store_id, contents, file));
  };

  const editReview = () => {
    if (!contents) {
      dispatch(
        reviewAction.editReviewDB(
          review_id,
          one_review.content,
          file,
          imgUrl,
          one_review.storeId
        )
      );
    } else {
      dispatch(
        reviewAction.editReviewDB(
          review_id,
          contents,
          file,
          imgUrl,
          one_review.storeId
        )
      );
    }
  };

  return (
    <ReviewWrap>
      <SubWrap>
        <Title>
          <BlackBackIcon
            onClick={() => {
              navigate(-1);
              dispatch(reviewAction.previewReplace(preview_icon));
            }}
          />
          <h3>{is_edit ? "매장 리뷰 수정하기" : "매장 리뷰 작성하기"}</h3>
          {is_edit ? (
            <Enter onClick={editReview}>완료</Enter>
          ) : (
            <Enter onClick={addReview}>등록</Enter>
          )}
        </Title>
        <HrWrap />
        <TopWrap>
          <p>이용하신 매장은 만족스러우셨나요?</p>
          <P>해당 매장의 리뷰를 남겨주세요.</P>
        </TopWrap>
        <AreaWrap>
          {is_edit ? (
            <textarea
              placeholder="내용을 입력하세요(100자 이내)"
              onChange={changeContent}
              defaultValue={one_review.content}
              maxLength={100}
            />
          ) : (
            <textarea
              placeholder="내용을 입력하세요(100자 이내)"
              onChange={changeContent}
              maxLength={100}
            />
          )}
        </AreaWrap>
        <PlusButton>
          <LabelWrap>
            <input
              type="file"
              multiple
              ref={fileInput}
              onChange={selectFiles}
              accept=".jpg,.jpeg,.png"
            />
            <PlusImg>
              <ImageUpload />
              <p className="btn">이미지 추가하기</p>
            </PlusImg>
          </LabelWrap>
        </PlusButton>
        <ImageWrap>
          <ImageBox>
            <ImgBox src={preview ? preview : preview_icon} alt="reviewImage" />
          </ImageBox>
        </ImageWrap>
      </SubWrap>
    </ReviewWrap>
  );
};

export default ReviewWrite;
