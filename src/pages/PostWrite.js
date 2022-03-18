import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";

//actioncreators
import { actionCreators as designAction } from "../redux/modules/design";
import { actionCreators as postAction } from "../redux/modules/post";
import { useDispatch, useSelector } from "react-redux";

const PostWrite = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const design_id = params.designid;
  const post_id = params.postid;
  const design_img = useSelector((state) => state.design.design_detail.img);
  const post = useSelector((state) => state.post.list);

  const [title, setTitle] = useState(post_id ? post.title : "");
  const [content, setContent] = useState(post_id ? post.content : "");
  const [size, setSize] = useState(post_id ? post.size : "");
  const [shape, setShape] = useState(post_id ? post.shape : "");
  const [purpose, setPurpose] = useState(post_id ? post.purpose : "");
  const [made, setMade] = useState(post_id ? post.made : false);
  console.log(post_id);
  console.log(title, content, size, shape, purpose, made, design_id, post_id);
  const addTitle = (e) => {
    setTitle(e.target.value);
  };

  const addContent = (e) => {
    setContent(e.target.value);
  };

  const addPost = () => {
    dispatch(
      postAction.addPostDB(
        title,
        content,
        size,
        shape,
        purpose,
        made,
        design_id
      )
    );
  };

  const editPost = () => {
    dispatch(
      postAction.editPostDB(title, content, size, shape, purpose, made, post_id)
    );
  };

  useEffect(() => {
    dispatch(designAction.getDesignImageDB(design_id));
    if (post_id) dispatch(postAction.getOnePostDB(post_id));
  }, []);

  return (
    <WriteWrap>
      <div className="header">
        <FontAwesomeIcon
          icon={faAngleLeft}
          className="back-icon"
          onClick={() => {
            navigate(-1);
          }}
        />
        <h3>{post_id ? "게시글 수정하기" : "게시글 작성하기"}</h3>

        {post_id ? (
          <p onClick={() => editPost()}>수정</p>
        ) : (
          <p onClick={() => addPost()}>등록</p>
        )}
      </div>

      <hr />

      <div className="title">
        {post_id ? (
          <input
            className="title-input"
            type="text"
            defaultValue={post.title}
            onChange={addTitle}
          />
        ) : (
          <input
            className="title-input"
            type="text"
            placeholder="제목"
            onChange={addTitle}
          />
        )}
      </div>

      <div className="comment">
        {post_id ? (
          <textarea
            className="comment-box"
            defaultValue={post.content}
            onChange={addContent}
          />
        ) : (
          <textarea
            className="comment-box"
            placeholder="내용을 입력하세요"
            onChange={addContent}
          />
        )}
      </div>

      <div className="design-img">
        <img src={design_img} alt="design-img" />
      </div>

      <div className="options">
        <div className="size">
          <h3>사이즈</h3>
          {(size || post.size) !== "도시락" && (
            <button onClick={() => setSize("도시락")}>도시락</button>
          )}

          {(size || post.size) === "도시락" && (
            <button
              onClick={() => setSize("도시락")}
              style={{
                backgroundColor: "rgba(255, 103, 158, 0.1)",
                color: "#ff679e",
                fontWeight: "700",
              }}
            >
              도시락
            </button>
          )}
          {(size || post.size) !== "1호" && (
            <button onClick={() => setSize("1호")}>1호</button>
          )}

          {(size || post.size) === "1호" && (
            <button
              onClick={() => setSize("1호")}
              style={{
                backgroundColor: "rgba(255, 103, 158, 0.1)",
                color: "#ff679e",
                fontWeight: "700",
              }}
            >
              1호
            </button>
          )}
          {(size || post.size) !== "2호" && (
            <button onClick={() => setSize("2호")}>2호</button>
          )}

          {(size || post.size) === "2호" && (
            <button
              onClick={() => setSize("2호")}
              style={{
                backgroundColor: "rgba(255, 103, 158, 0.1)",
                color: "#ff679e",
                fontWeight: "700",
              }}
            >
              2호
            </button>
          )}
          {(size || post.size) !== "3호" && (
            <button onClick={() => setSize("3호")}>3호</button>
          )}

          {(size || post.size) === "3호" && (
            <button
              onClick={() => setSize("3호")}
              style={{
                backgroundColor: "rgba(255, 103, 158, 0.1)",
                color: "#ff679e",
                fontWeight: "700",
              }}
            >
              3호
            </button>
          )}
          {(size || post.size) !== "기타" && (
            <button onClick={() => setSize("기타")}>기타</button>
          )}

          {(size || post.size) === "기타" && (
            <button
              onClick={() => setSize("기타")}
              style={{
                backgroundColor: "rgba(255, 103, 158, 0.1)",
                color: "#ff679e",
                fontWeight: "700",
              }}
            >
              기타
            </button>
          )}
        </div>

        <div className="shape">
          <h3>모양</h3>
          {(shape || post.shape) !== "네모" && (
            <button onClick={() => setShape("네모")}>네모</button>
          )}

          {(shape || post.shape) === "네모" && (
            <button
              onClick={() => setShape("네모")}
              style={{
                backgroundColor: "rgba(255, 103, 158, 0.1)",
                color: "#ff679e",
                fontWeight: "700",
              }}
            >
              네모
            </button>
          )}
          {(shape || post.shape) !== "하트" && (
            <button onClick={() => setShape("하트")}>하트</button>
          )}

          {(shape || post.shape) === "하트" && (
            <button
              onClick={() => setShape("하트")}
              style={{
                backgroundColor: "rgba(255, 103, 158, 0.1)",
                color: "#ff679e",
                fontWeight: "700",
              }}
            >
              하트
            </button>
          )}
          {(shape || post.shape) !== "원형" && (
            <button onClick={() => setShape("원형")}>원형</button>
          )}

          {(shape || post.shape) === "원형" && (
            <button
              onClick={() => setShape("원형")}
              style={{
                backgroundColor: "rgba(255, 103, 158, 0.1)",
                color: "#ff679e",
                fontWeight: "700",
              }}
            >
              원형
            </button>
          )}
        </div>
        <div className="purpose">
          <h3>용도</h3>
          {(purpose || post.purpose) !== "생일" && (
            <button onClick={() => setPurpose("생일")}>생일</button>
          )}

          {(purpose || post.purpose) === "생일" && (
            <button
              onClick={() => setShape("생일")}
              style={{
                backgroundColor: "rgba(255, 103, 158, 0.1)",
                color: "#ff679e",
                fontWeight: "700",
              }}
            >
              생일
            </button>
          )}
          {(purpose || post.purpose) !== "부모님" && (
            <button onClick={() => setPurpose("부모님")}>부모님</button>
          )}

          {(purpose || post.purpose) === "부모님" && (
            <button
              onClick={() => setShape("부모님")}
              style={{
                backgroundColor: "rgba(255, 103, 158, 0.1)",
                color: "#ff679e",
                fontWeight: "700",
              }}
            >
              부모님
            </button>
          )}
          {(purpose || post.purpose) !== "친구" && (
            <button onClick={() => setPurpose("친구")}>친구</button>
          )}

          {(purpose || post.purpose) === "친구" && (
            <button
              onClick={() => setShape("친구")}
              style={{
                backgroundColor: "rgba(255, 103, 158, 0.1)",
                color: "#ff679e",
                fontWeight: "700",
              }}
            >
              친구
            </button>
          )}
          {(purpose || post.purpose) !== "연인" && (
            <button onClick={() => setPurpose("연인")}>연인</button>
          )}

          {(purpose || post.purpose) === "연인" && (
            <button
              onClick={() => setShape("연인")}
              style={{
                backgroundColor: "rgba(255, 103, 158, 0.1)",
                color: "#ff679e",
                fontWeight: "700",
              }}
            >
              연인
            </button>
          )}
          {(purpose || post.purpose) !== "축하" && (
            <button onClick={() => setPurpose("축하")}>축하</button>
          )}

          {(purpose || post.purpose) === "축하" && (
            <button
              onClick={() => setShape("축하")}
              style={{
                backgroundColor: "rgba(255, 103, 158, 0.1)",
                color: "#ff679e",
                fontWeight: "700",
              }}
            >
              축하
            </button>
          )}
        </div>
        <div className="made">
          <h3>제작 여부</h3>
          {!post_id && (
            <>
              {made === false && (
                <>
                  <button onClick={() => setMade(true)}>예</button>
                  <button
                    onClick={() => setMade(false)}
                    style={{
                      backgroundColor: "rgba(255, 103, 158, 0.1)",
                      color: "#ff679e",
                      fontWeight: "700",
                    }}
                  >
                    아니요
                  </button>
                </>
              )}
              {made === true && (
                <>
                  <button
                    onClick={() => setMade(true)}
                    style={{
                      backgroundColor: "rgba(255, 103, 158, 0.1)",
                      color: "#ff679e",
                      fontWeight: "700",
                    }}
                  >
                    예
                  </button>
                  <button onClick={() => setMade(false)}>아니요</button>
                </>
              )}
            </>
          )}
          {post_id && (
            <>
              {(made || post.made) === false && (
                <>
                  <button onClick={() => setMade(true)}>예</button>
                  <button
                    onClick={() => setMade(false)}
                    style={{
                      backgroundColor: "rgba(255, 103, 158, 0.1)",
                      color: "#ff679e",
                      fontWeight: "700",
                    }}
                  >
                    아니요
                  </button>
                </>
              )}
              {(made || post.made) === true && (
                <>
                  <button
                    onClick={() => setMade(true)}
                    style={{
                      backgroundColor: "rgba(255, 103, 158, 0.1)",
                      color: "#ff679e",
                      fontWeight: "700",
                    }}
                  >
                    예
                  </button>
                  <button onClick={() => setMade(false)}>아니요</button>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </WriteWrap>
  );
};

const WriteWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow-y: auto;
  height: 784px;
  padding-bottom: 3rem;
  .header {
    margin: 0px 0px 20px 30px;
    padding: 4rem 3rem 0 0;
    display: flex;
    align-items: center;
    .back-icon {
      color: #646464;
      margin-right: 7.7rem;
      font-size: 2.3rem;
    }
    h3 {
      margin-left: 2.2rem;
      font-weight: 700;
      font-size: 19px;
      color: #282828;
    }
    p {
      color: #ff8fa5;
      font-size: 1.8rem;
      padding-left: 6.5rem;
    }
  }

  hr {
    border: 0.7px solid #e5e5e5;
    width: 100%;
  }

  .title {
    display: flex;
    padding: 0.8rem 0.5rem 1rem 1.5rem;
    .title-input {
      display: flex;
      width: 100%;
      height: 3.5rem;
      border: none;
      font-size: 1.8rem;
      outline: none;
      &::placeholder {
        color: #e5e5e5;
        font-weight: 700;
      }
    }
  }

  .comment {
    textarea {
      width: 32.2rem;
      height: 6rem;
      overflow: scroll;
      font-size: 1.4rem;
      border: none;
      outline: none;
      margin: 0 3rem;
      &::placeholder {
        color: #777777;
      }
    }
  }

  .design-img {
    margin: 3rem 3rem;
  }
  .options {
    padding: 0 3rem;
    h3 {
      font-size: 1.9rem;
      font-weight: 700;
      color: #282828;
      /* padding-left: 1rem; */
    }
    h3 + button {
      margin-top: 1rem;
    }
    div + div {
      margin-top: 1.5rem;
    }
    button {
      color: #777777;
      /* background-color: rgba(196, 196, 196, 0.16); */
      background-color: rgba(196, 196, 196, 0.16);
      border-radius: 9rem;
      border: none;
      font-size: 1.5rem;
      padding: 0.5rem 1.2rem;
      margin-left: 1rem;
    }
  }
`;

export default PostWrite;
