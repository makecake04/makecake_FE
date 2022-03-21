import React, { useCallback, useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";

import { actionCreators as postAction } from "../../redux/modules/post";
import { actionCreators as commentAction } from "../../redux/modules/comment";

//component
import { CommentList } from "../../components/component";

//css
import { Container } from "./style";

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
    dispatch(commentAction.addCommentDB(post_id, content));
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
    dispatch(commentAction.getCommentDB(post_id, pageNumber));
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
      <div className="commentContainer">
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

        <button onClick={() => clickComment()} className="submit">
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
      </div>
    </Container>
  );
};

export default PostDetail;
