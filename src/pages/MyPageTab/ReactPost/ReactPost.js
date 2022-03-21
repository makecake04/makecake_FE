import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentAction } from "../../../redux/modules/comment";
import { actionCreators as designAction } from "../../../redux/modules/design";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

//import css
import { ReactWriteWrap } from "./style";

const ReactWrite = (props) => {
  const navigate = useNavigate();
  const likedesign = useSelector((state) => state.design.likeDesign);
  const [toggleState, setToggleState] = React.useState(1);
  const [content, setContent] = useState("");
  const [pageNumber, setPageNumber] = React.useState(0);
  const [ref, inView] = useInView();

  const dispatch = useDispatch();

  const commentList = useSelector((state) => state.mypage.my_comment_list);

  const deleteComment = (commentId) => {
    dispatch(commentAction.deleteMyCommentDB(commentId));
  };

  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    dispatch(commentAction.getMyCommentDB(pageNumber));
    dispatch(designAction.getLikeDesignDB(pageNumber));
  }, [pageNumber]);

  const getMoreComment = async () => {
    setPageNumber(pageNumber + 1);
  };

  React.useEffect(() => {
    if (inView) {
      getMoreComment();
    }
  }, [inView]);

  return (
    <ReactWriteWrap>
      <div>
        <div className="title">
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="left"
            onClick={() => {
              navigate(`/mypage`);
            }}
          />
          <h3>내가 반응한 게시글</h3>
        </div>
        <hr />
        <div className="container">
          <div className="bloc-tabs">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              좋아요 한 게시글
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              내가 남긴 댓글
            </button>
          </div>
          <div className="content-tabs">
            <div className={toggleState === 1 ? "active-content" : "content"}>
              {likedesign &&
                likedesign.map((v, idx) => {
                  return (
                    <div key={idx}>
                      <div className="review_wrap">
                        <div className="title_wrap">
                          <div className="profile"></div>
                          <div className="info">
                            <p className="nickname">{v.nickname}</p>
                          </div>
                        </div>
                        <FontAwesomeIcon icon={faHeart} className="heart" />
                      </div>
                      <div className="content_wrap">
                        <p className="p_wrap">{v.content}</p>
                      </div>
                      <div className="img_wrap">
                        <img src={v.img} alt="" />
                      </div>
                      <hr className="hr_wrap" />
                    </div>
                  );
                })}
            </div>
            <div className={toggleState === 2 ? "active-content" : "content"}>
              {commentList &&
                commentList.map((v, i) => {
                  return (
                    <div className="comment_wrap" key={i} ref={ref}>
                      <p className="p_wrap" value={content}>
                        {v.content}
                      </p>

                      <p className="insert_dt">{v.createdDate}</p>

                      <div className="nicknameAndDelete">
                        <p className="nickname">{v.postTitle}</p>
                        <button
                          className="delete"
                          onClick={() => deleteComment(v.commentId)}
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
    </ReactWriteWrap>
  );
};

export default ReactWrite;
