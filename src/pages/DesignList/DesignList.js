import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import Swal from "sweetalert2";

import { actionCreators as designAction } from "../../redux/modules/design";

//import css
import {
  DrawWrap,
  HrWrap,
  ButtonWrap,
  NewButton,
  LikeButton,
  CheckButton,
  CommentButton,
  ImageWrap,
  ImgWrap,
  ImgBox,
  PlusOff,
  PlusOn,
  PlusIcon,
  XIcon,
  PaintIcon,
  WriteIcon,
} from "./style";

const DesignList = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [toggle, setToggle] = React.useState(false);
  const [pageNumber, setPageNumber] = React.useState(0);
  const [sortType, setSortType] = React.useState("createdDate");
  const [ref, inView] = useInView();
  const new_list = useSelector((state) => state.design.new_list);
  const like_list = useSelector((state) => state.design.like_list);
  const comment_list = useSelector((state) => state.design.comment_list);
  const view_list = useSelector((state) => state.design.view_list);
  const is_session = localStorage.getItem("token");

  React.useEffect(() => {
    setPageNumber(0);
  }, [sortType]);

  React.useEffect(() => {
    dispatch(designAction.getDesignListDB(pageNumber, sortType));
  }, [sortType, pageNumber]);

  React.useEffect(() => {
    if (inView) {
      setPageNumber(pageNumber + 1);
    }
  }, [inView]);

  return (
    <DrawWrap>
      <h3>도안 모아보기</h3>
      <HrWrap />
      <ButtonWrap>
        <NewButton
          onClick={() => {
            setSortType("createdDate");
          }}
          sortType={sortType}
        >
          최신순
        </NewButton>

        <LikeButton
          onClick={() => {
            setSortType("likeCnt");
          }}
          sortType={sortType}
        >
          좋아요순
        </LikeButton>
        <CommentButton
          onClick={() => {
            setSortType("commentCnt");
          }}
          sortType={sortType}
        >
          댓글순
        </CommentButton>
        <CheckButton
          onClick={() => {
            setSortType("viewCnt");
          }}
          sortType={sortType}
        >
          조회수순
        </CheckButton>
      </ButtonWrap>
      <ImageWrap>
        {sortType === "createdDate" &&
          new_list.map((v, idx) => {
            return (
              <ImgWrap key={idx} ref={ref}>
                <ImgBox
                  src={v.img}
                  alt="post-img"
                  onClick={() => {
                    navigate(`/post/${v.postId}`);
                  }}
                />
              </ImgWrap>
            );
          })}
        {sortType === "likeCnt" &&
          like_list.map((v, idx) => {
            return (
              <ImgWrap key={idx} ref={ref}>
                <ImgBox
                  src={v.img}
                  alt="post-img"
                  onClick={() => {
                    navigate(`/post/${v.postId}`);
                  }}
                />
              </ImgWrap>
            );
          })}
        {sortType === "commentCnt" &&
          comment_list.map((v, idx) => {
            return (
              <ImgWrap key={idx} ref={ref}>
                <ImgBox
                  src={v.img}
                  alt="post-img"
                  onClick={() => {
                    navigate(`/post/${v.postId}`);
                  }}
                />
              </ImgWrap>
            );
          })}
        {sortType === "viewCnt" &&
          view_list.map((v, idx) => {
            return (
              <ImgWrap key={idx} ref={ref}>
                <ImgBox
                  src={v.img}
                  alt="post-img"
                  onClick={() => {
                    navigate(`/post/${v.postId}`);
                  }}
                />
              </ImgWrap>
            );
          })}
      </ImageWrap>

      {toggle === false ? (
        <PlusOff
          onClick={() => {
            setToggle(true);
          }}
        >
          <PlusIcon />
        </PlusOff>
      ) : (
        <PlusOn
          onClick={() => {
            setToggle(false);
          }}
        >
          <XIcon />
          {is_session ? (
            <PaintIcon onClick={() => navigate("/drawing")} />
          ) : (
            <PaintIcon
              onClick={() =>
                Swal.fire({
                  title: "로그인이 필요한 서비스입니다!",
                  showCancelButton: true,
                  confirmButtonText: '<a href="/">로그인 할래요!</a>',
                  confirmButtonColor: "#ff679e",
                  cancelButtonColor: "#777",
                  cancelButtonText: "그냥 둘러볼래요.",
                })
              }
            />
          )}
          {is_session ? (
            <WriteIcon onClick={() => navigate("/mydesign")} />
          ) : (
            <WriteIcon
              onClick={() =>
                Swal.fire({
                  title: "로그인이 필요한 서비스입니다!",
                  showCancelButton: true,
                  confirmButtonText: '<a href="/">로그인 할래요!</a>',
                  confirmButtonColor: "#ff679e",
                  cancelButtonColor: "#777",
                  cancelButtonText: "그냥 둘러볼래요.",
                })
              }
            />
          )}
        </PlusOn>
      )}
    </DrawWrap>
  );
};

export default DesignList;
