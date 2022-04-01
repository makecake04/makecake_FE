import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
  IconWrap,
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
  const sort = useSelector((state) => state.design.design_sort_type);

  useEffect(() => {
    setPageNumber(0);
  }, [sortType]);

  useEffect(() => {
    dispatch(designAction.getDesignListDB(pageNumber, sortType));
  }, [sortType, pageNumber]);

  useEffect(() => {
    if (inView) {
      setPageNumber(pageNumber + 1);
    }
  }, [inView]);

  useEffect(() => {
    setSortType(sort);
  }, [sort]);

  return (
    <DrawWrap>
      <h3>도안 모아보기</h3>
      <HrWrap />
      <ButtonWrap>
        <NewButton
          onClick={() => {
            setSortType("createdDate");
            dispatch(designAction.setDesignSortType("createdDate"));
          }}
          sortType={sortType}
        >
          최신순
        </NewButton>

        <LikeButton
          onClick={() => {
            setSortType("likeCnt");
            dispatch(designAction.setDesignSortType("likeCnt"));
          }}
          sortType={sortType}
        >
          좋아요순
        </LikeButton>
        <CommentButton
          onClick={() => {
            setSortType("commentCnt");
            dispatch(designAction.setDesignSortType("commentCnt"));
          }}
          sortType={sortType}
        >
          댓글순
        </CommentButton>
        <CheckButton
          onClick={() => {
            setSortType("viewCnt");
            dispatch(designAction.setDesignSortType("viewCnt"));
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
                    navigate(`/post/${v.postId}`, { state: { sortType } });
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
                    navigate(`/post/${v.postId}`, { state: { sortType } });
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
                    navigate(`/post/${v.postId}`, { state: { sortType } });
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
                    navigate(`/post/${v.postId}`, { state: { sortType } });
                  }}
                />
              </ImgWrap>
            );
          })}
      </ImageWrap>
      <IconWrap>
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
      </IconWrap>
    </DrawWrap>
  );
};

export default DesignList;
