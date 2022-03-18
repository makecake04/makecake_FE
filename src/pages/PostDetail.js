import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";

import { actionCreators as postAction } from "../redux/modules/post";
import { userActions } from "../redux/modules/comment";

//component
import { CommentList } from "../components/component";

const PostDetail = (onInsert) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const post_id = useParams().id;
  const [content, setContent] = useState("");
  const [pageNumber, setPageNumber] = React.useState(0);
  const [ref, inView] = useInView();
  const post = useSelector((state) => state.post.list);
  const nickname = useSelector((state) => state.user.user?.nickname);

  const [value, setValue] = useState({
    content: "",
  });

  const getMoreComment = async () => {
    setPageNumber(pageNumber + 1);
  };

  React.useEffect(() => {
    if (inView) {
      getMoreComment();
    }
  }, [inView]);

  const changeComment = (e) => {
    setContent(e.target.value);
    console.log(e.target.value);
  };

  const clickComment = () => {
    if (!content) {
      window.alert("댓글을 작성해주세요!");
      return;
    }
    dispatch(userActions.addCommentDB(post_id, content));
    setContent("");
  };

  console.log(content);
  const onChange = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    [value]
  );

  useEffect(() => {
    dispatch(postAction.getOnePostDB(post_id));
  }, []);

  useEffect(() => {
    dispatch(userActions.getCommentDB(post_id, pageNumber));
  }, [pageNumber]);

  return (
    <Container>
      <div className="header" image={post.profileimg}>
        <svg
          className="backButton"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => navigate(-1)}
        >
          <path
            d="M25 30L15 20L25 10"
            stroke="#282828"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h3 className="headerText">게시글</h3>
      </div>
      <div className="body">
        <div className="headerInBody">
          <div className="profileImage">
            <img src={post.profileImg} alt="profile-img" />
          </div>
          <p className="date">{post.createdDate?.split(" ")[0]}</p>
          <h4 className="nickname">{post.nickname}</h4>
          {post.nickname === nickname && (
            <div className="edit-delete-buttons">
              <button
                className="edit-button"
                onClick={() =>
                  navigate(`/post/write/${post.designId}/${post.postId}`)
                }
              >
                수정하기
              </button>
              <button
                className="delete-button"
                onClick={() => {
                  dispatch(postAction.deletePostDB(post_id));
                }}
              >
                삭제하기
              </button>
            </div>
          )}
        </div>

        <div className="imgContainer">
          <img className="img" src={post.img} alt="post-img" />
        </div>
        <div className="img-bottom-line">
          <div className="likeAndEyeContainer">
            <svg
              className="heart"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.7084 4.80203C21.1763 4.26974 20.5446 3.8475 19.8494 3.55941C19.1541 3.27133 18.4089 3.12305 17.6563 3.12305C16.9037 3.12305 16.1585 3.27133 15.4632 3.55941C14.7679 3.8475 14.1362 4.26974 13.6042 4.80203L12.5 5.9062L11.3959 4.80203C10.3212 3.72735 8.86362 3.1236 7.34379 3.1236C5.82397 3.1236 4.36639 3.72735 3.29171 4.80203C2.21703 5.87671 1.61328 7.33429 1.61328 8.85412C1.61328 10.3739 2.21703 11.8315 3.29171 12.9062L4.39588 14.0104L12.5 22.1145L20.6042 14.0104L21.7084 12.9062C22.2407 12.3742 22.6629 11.7425 22.951 11.0472C23.2391 10.3519 23.3874 9.60671 23.3874 8.85412C23.3874 8.10152 23.2391 7.35631 22.951 6.66104C22.6629 5.96577 22.2407 5.33407 21.7084 4.80203Z"
                fill="#FF679E"
              />
            </svg>
            <p className="likeCnt">{post.likeCnt}</p>
            <svg
              className="eye"
              width="25"
              height="17"
              viewBox="0 0 25 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.4287 0C17.0753 0 21.6385 2.66232 24.2078 7.80094C24.3753 8.13609 24.3753 8.53058 24.2078 8.86573C21.6385 14.0043 17.0753 16.6667 12.4287 16.6667C7.78211 16.6667 3.21892 14.0043 0.649608 8.86573C0.482032 8.53058 0.482032 8.13609 0.649608 7.80094C3.21892 2.66232 7.78211 0 12.4287 0ZM3.05923 8.33333C5.28352 12.3562 8.89442 14.2857 12.4287 14.2857C15.963 14.2857 19.5739 12.3562 21.7981 8.33333C19.5739 4.31045 15.963 2.38095 12.4287 2.38095C8.89442 2.38095 5.28352 4.31045 3.05923 8.33333ZM12.4287 12.797C14.8943 12.797 16.893 10.7983 16.893 8.33269C16.893 5.86714 14.8943 3.86841 12.4287 3.86841C9.96315 3.86841 7.96442 5.86714 7.96442 8.33269C7.96442 10.7983 9.96315 12.797 12.4287 12.797Z"
                fill="#777777"
              />
            </svg>
            <p className="seeCnt">{post.viewCnt}</p>
          </div>
          <div className="options">
            <button>{post.size}</button>
            <button>{post.shape}</button>
            <button>{post.purpose}</button>
          </div>
        </div>
        <h3 className="titleText">{post.title}</h3>
        <p className="content">{post.content}</p>
      </div>
      <form className="commentContainer">
        <p className="commentText">
          댓글 <span className="commentCnt">{post.commentCnt}</span>
        </p>
        <input
          type="text"
          className="inputComment"
          placeholder="댓글을 입력해주세요"
          value={content}
          onChange={changeComment}
        />

        <button onClick={clickComment} className="submit" type="submit">
          <svg
            className="commentEmoji"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3334 1.66699L9.16675 10.8337"
              stroke="#FFB6CE"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.3334 1.66699L12.5001 18.3337L9.16675 10.8337L1.66675 7.50033L18.3334 1.66699Z"
              stroke="#FFB6CE"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <CommentList />
      </form>
    </Container>
  );
};

const Container = styled.div`
  height: 784px;
  position: relative;
  overflow-y: auto;
  .header {
    padding: 2rem 0;
    display: flex;

    align-items: center;
    border-bottom: 1px solid #e5e5e5;
  }

  .backButton {
  }

  .headerText {
    margin-left: 135px;
    vertical-align: middle;
  }

  .body {
    /* width: 390px;
    height: 626px; */
    /* background: orange; */
  }

  .headerInBody {
    display: flex;
  }

  .profileImage {
    width: 40px;
    height: 40px;
    margin-top: 15px;
    margin-left: 24px;
    img {
      border-radius: 50%;
    }
  }

  .edit-delete-buttons {
    .edit-button {
      color: #777777;
      border: 1px solid #777777;
      border-radius: 5rem;
      width: 6.4rem;
      font-size: 1.2rem;
      padding: 1rem 1rem;
      margin: 1.8rem 0 0 8rem;
    }
    .delete-button {
      color: #e10000;
      border: 1px solid #e10000;
      border-radius: 5rem;
      width: 6.4rem;
      font-size: 1.2rem;
      padding: 1rem 1rem;
    }
    button + button {
      margin-left: 1.2rem;
    }
  }

  .date {
    /* height: 17px; */
    color: #777777;
    font-size: 12px;
    margin-top: 16px;
    margin-left: 5px;
  }

  .nickname {
    width: 80px;
    height: 20px;
    color: #282828;
    font-size: 14px;
    margin-top: 32px;
    margin-left: -60px;
  }

  .imgContainer {
    padding: 1.7rem;
    .img {
      border-radius: 0.4rem;
    }
  }
  .img-bottom-line {
    display: flex;
    justify-content: space-between;
    .likeAndEyeContainer {
      /* display: flex; */
      p + svg {
        margin-left: 1rem;
      }
    }
    .options {
      button {
        color: #ff679e;
        background-color: rgba(255, 103, 158, 0.1);
        border-radius: 9rem;
        border: none;
        font-size: 1.2rem;
        padding: 0.3rem 1.1rem;
        margin-top: 0.2rem;
      }
    }
  }
  .likeAndEyeContainer {
    display: flex;
    p + svg {
      margin-left: 1rem;
    }
  }
  .options {
    padding-right: 1.6rem;
    display: flex;
    justify-content: flex-end;
    button {
      color: #ff679e;
      background-color: rgba(255, 103, 158, 0.1);
      border-radius: 9rem;
      border: none;
      font-size: 1.2rem;
      padding: 0.3rem 1.1rem;
      margin-left: 1rem;
    }
  }
  .heart {
    margin-left: 24px;
  }

  .likeCnt {
    margin-left: 5px;
    margin-top: 5px;
  }

  .eye {
    margin-top: 4px;
    margin-left: 5px;
  }

  .seeCnt {
    margin-top: 5px;
    margin-left: 5px;
  }

  .titleText {
    color: #000000;
    font-size: 18px;
    padding: 1.5rem 2.5rem 0.5rem;
  }

  .content {
    padding: 1rem 3rem;
    color: #777777;
    font-size: 14px;
    /* height: 100%; */
    line-height: 2rem;
    /* /* overflow-y: hidden; */
    overflow: auto;
  }

  .commentContainer {
    padding: 0.7rem 3rem;
  }

  .commentText {
    font-size: 18px;
    color: #000000;
    padding-bottom: 1rem;
  }

  .commentCnt {
    color: #ff679e;
  }

  .inputComment {
    width: 100%;
    height: 39px;
    background: rgba(249, 201, 201, 0.2);
    outline: none;
    font-size: 12px;
    padding: 1rem;
    border: none;
  }

  .inputComment::placeholder {
    color: rgba(255, 103, 158, 0.44);
  }

  .submit {
    border: none;
    position: absolute;
    right: 4rem;
    padding-top: 1rem;
  }
`;

export default PostDetail;
