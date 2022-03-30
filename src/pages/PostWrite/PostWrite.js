import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";

//actioncreators
import { actionCreators as designAction } from "../../redux/modules/design";
import { actionCreators as postAction } from "../../redux/modules/post";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

//css
import {
  Wrapper,
  Header,
  Title,
  Content,
  DesignImage,
  Options,
  Size,
  Shape,
  Purpose,
  MiniSize,
  OneSize,
  TwoSize,
  ThreeSize,
  OtherSize,
  Square,
  Heart,
  Circle,
  Birthday,
  Parents,
  Friends,
  Lovers,
  // Celebration,
  Others,
} from "./style";

//image
import { black_back_button } from "../../assets/images/image";

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

  const addTitle = (e) => {
    setTitle(e.target.value);
  };

  const addContent = (e) => {
    setContent(e.target.value);
  };

  const addPost = () => {
    if (!title || !content || !size || !shape || !purpose) {
      Swal.fire({
        title: "모든 입력값을 입력해주세요!",
        showCancelButton: false,
        confirmButtonText: "확인",
        confirmButtonColor: "#ff679e",
      });
      return;
    }
    dispatch(
      postAction.addPostDB(title, content, size, shape, purpose, design_id)
    );
  };

  const editPost = () => {
    dispatch(
      postAction.editPostDB(title, content, size, shape, purpose, post_id)
    );
  };

  useEffect(() => {
    dispatch(designAction.getDesignImageDB(design_id));
    if (post_id) dispatch(postAction.getOnePostDB(post_id));
  }, []);

  return (
    <Wrapper>
      <Header>
        <img
          src={black_back_button}
          alt="back-button"
          onClick={() => navigate(-1)}
        />
        <h3>{post_id ? "게시글 수정하기" : "게시글 작성하기"}</h3>
        {post_id ? (
          <span onClick={() => editPost()}>수정</span>
        ) : (
          <span onClick={() => addPost()}>등록</span>
        )}
      </Header>

      <Title>
        {post_id ? (
          <input type="text" defaultValue={post.title} onChange={addTitle} />
        ) : (
          <input
            type="text"
            maxLength={20}
            placeholder="제목 (20자 이내)"
            onChange={addTitle}
          />
        )}
      </Title>

      <Content>
        {post_id ? (
          <textarea defaultValue={post.content} onChange={addContent} />
        ) : (
          <textarea
            maxLength={250}
            placeholder="내용을 입력하세요 (250자 이내)"
            onChange={addContent}
          />
        )}
      </Content>

      <DesignImage>
        <img src={design_img} alt="design-img" />
      </DesignImage>

      <Options>
        <Size>
          <h3>사이즈</h3>
          <MiniSize
            size={size}
            postSize={post.size}
            onClick={() => setSize("도시락")}
          >
            도시락
          </MiniSize>
          <OneSize
            size={size}
            postSize={post.size}
            onClick={() => setSize("1호")}
          >
            1호
          </OneSize>
          <TwoSize
            size={size}
            postSize={post.size}
            onClick={() => setSize("2호")}
          >
            2호
          </TwoSize>
          <ThreeSize
            size={size}
            postSize={post.size}
            onClick={() => setSize("3호")}
          >
            3호
          </ThreeSize>
          <OtherSize
            size={size}
            postSize={post.size}
            onClick={() => setSize("기타")}
          >
            기타
          </OtherSize>
        </Size>

        <Shape>
          <h3>모양</h3>
          <Square
            shape={shape}
            postShape={post.shape}
            onClick={() => setShape("네모")}
          >
            네모
          </Square>
          <Heart
            shape={shape}
            postShape={post.shape}
            onClick={() => setShape("하트")}
          >
            하트
          </Heart>
          <Circle
            shape={shape}
            postShape={post.shape}
            onClick={() => setShape("원형")}
          >
            원형
          </Circle>
        </Shape>

        <Purpose>
          <h3>용도</h3>

          <Birthday
            purpose={purpose}
            postPurpose={post.purpose}
            onClick={() => setPurpose("생일")}
          >
            생일
          </Birthday>
          <Parents
            purpose={purpose}
            postPurpose={post.purpose}
            onClick={() => setPurpose("부모님")}
          >
            부모님
          </Parents>
          <Friends
            purpose={purpose}
            postPurpose={post.purpose}
            onClick={() => setPurpose("친구")}
          >
            친구
          </Friends>
          <Lovers
            purpose={purpose}
            postPurpose={post.purpose}
            onClick={() => setPurpose("연인")}
          >
            연인
          </Lovers>
          {/* <Celebration
            purpose={purpose}
            postPurpose={post.purpose}
            onClick={() => setPurpose("축하")}
          >
            축하
          </Celebration> */}
          <Others
            purpose={purpose}
            postPurpose={post.purpose}
            onClick={() => setPurpose("기타")}
          >
            기타
          </Others>
        </Purpose>
      </Options>
    </Wrapper>
  );
};

export default PostWrite;
