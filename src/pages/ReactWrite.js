import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Logo from "../images/logo.png";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../redux/modules/mypage";
import { userActions as commentActions } from "../redux/modules/comment";
import { actionCreators as designAction } from "../redux/modules/design";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const ReactWrite = (props) => {
  const navigate = useNavigate();
  const likedesign = useSelector((state) => state.design.likeDesign);
  const [toggleState, setToggleState] = React.useState(1);
  const [content, setContent] = useState("");
  const [pageNumber, setPageNumber] = React.useState(0);
  const [ref, inView] = useInView();

  const dispatch = useDispatch();

  const commentList = useSelector((state) => state.mypage.list);
  console.log(commentList);

  const deleteComment = (commentId) => {
    dispatch(commentActions.deleteCommentDB(commentId));
  };

  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    dispatch(userActions.getCommentDB(pageNumber));
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

const ReactWriteWrap = styled.div`
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
    padding: 20px;
    width: 100%;
    height: 100%;
  }

  .review_wrap {
    display: flex;
    justify-content: space-between;
  }

  .comment_wrap {
    display: flex;
    flex-direction: column;
    width: 342px;
    /* border-bottom: 1px solid #E5E5E5; */
  }

  .title_wrap {
    display: flex;
  }

  .content_wrap {
    margin: 10px 0px;
  }

  .p_wrap {
    color: #282828;
    font-size: 14px;
    word-break: break-all;
    display: -webkit-box;
    word-wrap: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .profile {
    width: 45px;
    height: 45px;
    border-radius: 45px;
    background-color: #ddd;
    background-image: url(${Logo});
    background-position: center;
    background-size: 50px;
  }

  .info {
    margin: 5px 0px 0px 10px;
  }

  .insert_dt {
    margin: 10px 0px 5px 0px;
    font-size: 12px;
    color: #777;
  }

  .nicknameAndDelete {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
  }

  .nickname {
    margin-top: 6px;
    font-size: 18px;
    color: #777777;
    font-weight: 500px;
  }

  .heart {
    font-size: 30px;
    color: #ff679e;
    margin-top: 10px;
  }

  .img_wrap {
    position: relative;
    width: 100%;

    border-radius: 5px;
    background-position: center;
    background-size: 100%;
    object-fit: cover;
  }

  .hr_wrap {
    border: 0.7px solid #e5e5e5;
    width: 100%;
    margin: 25px 0px;
  }

  .title_wrap2 {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .btn {
    display: flex;
    justify-content: end;
    margin-top: 20px;
  }

  .modify {
    width: 80px;
    height: 35px;
    font-size: 13px;
    color: #777;
    border: 1px solid #777;
    border-radius: 20px;
    margin-right: 10px;
  }

  .delete {
    width: 64px;
    height: 33px;
    font-size: 12px;
    color: #e10000;
    border: 1px solid #e10000;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    font-family: "Noto Sans";
  }
`;

export default ReactWrite;
