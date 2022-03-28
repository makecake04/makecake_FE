import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import Modal from "react-modal";

import { actionCreators as designAction } from "../../../redux/modules/design";

//css
import {
  Wrapper,
  Header,
  Tab,
  Post,
  NotPost,
  Body,
  DesignList,
  PostList,
  ImageList,
  ModalWrap,
  DeleteIcon,
  WriteIcon,
  ModalWrap2,
  ModalChoice,
  VerticalLine,
} from "./style";

//image
import { black_back_button } from "../../../assets/images/image";

const MyDraw = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ref, inView] = useInView();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modal2IsOpen, setModal2IsOpen] = useState(false);
  const [toggleState, setToggleState] = useState(1);
  const [post, setPost] = useState("nonpost");
  const [pageNumber, setPageNumber] = useState(0);

  const design_list = useSelector((state) => state.design.design_list);
  const post_list = useSelector((state) => state.design.post_list);
  const design_detail = useSelector((state) => state.design.design_detail);

  const toggleTab = (index) => {
    setToggleState(index);
    if (index === 1) {
      setPost("nonpost");
    } else {
      setPost("post");
    }
  };

  useEffect(() => {
    setPageNumber(0);
    if (design_list.length === 0 || post_list.length === 0) {
      dispatch(designAction.getMyDesignListDB(pageNumber, post));
    }
  }, [toggleState]);

  useEffect(() => {
    dispatch(designAction.getMyDesignListDB(pageNumber, post));
  }, [pageNumber]);

  useEffect(() => {
    if (inView) {
      setPageNumber(pageNumber + 1);
    }
  }, [inView]);

  return (
    <Wrapper>
      <Header>
        <img
          src={black_back_button}
          alt="back-button"
          onClick={() => navigate(-1)}
        />
        <h3>내가 그린 도안</h3>
      </Header>

      <hr />

      <Tab>
        <NotPost toggleState={toggleState} onClick={() => toggleTab(1)}>
          작성되지 않은 도안
        </NotPost>
        <Post toggleState={toggleState} onClick={() => toggleTab(2)}>
          작성된 도안
        </Post>
      </Tab>
      <Body>
        <DesignList toggleState={toggleState}>
          {design_list &&
            design_list.map((a, i) => {
              return (
                <ImageList key={i} ref={ref}>
                  <img
                    src={a.img}
                    alt="nopost design"
                    onClick={() => {
                      setModalIsOpen(true);
                      dispatch(designAction.getDesignImageDB(a.designId));
                    }}
                  />
                </ImageList>
              );
            })}
        </DesignList>
        <PostList toggleState={toggleState}>
          {post_list &&
            post_list.map((a, i) => {
              return (
                <ImageList key={i} ref={ref} className="img_wrap">
                  <img
                    src={a.img}
                    alt="post design"
                    onClick={() => {
                      navigate(`/post/${a.postId}`);
                    }}
                  />
                </ImageList>
              );
            })}
        </PostList>
      </Body>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(76, 76, 76, 0.7)",
            zIndex: "20",
          },
          content: {
            position: "absolute",
            top: "50%",
            left: "50%",
            bottom: "auto",
            width: "300px",
            height: "auto",
            padding: "0",
            // border: "solid 1px #eee",
            border: "none",
            overflow: "auto",
            borderRadius: "5px",
            transform: "translate(-50%,-50%)",
            WebkitOverflowScrolling: "touch",
          },
        }}
      >
        {toggleState === 1 && (
          <ModalWrap>
            <img
              alt="modal-img"
              src={design_detail.img}
              onClick={() => setModalIsOpen(false)}
            />
            <WriteIcon
              onClick={() => navigate(`/post/write/${design_detail.designId}`)}
            />
            <DeleteIcon
              onClick={() => {
                if (design_detail.orders) {
                  setModal2IsOpen(true);
                } else {
                  dispatch(designAction.deleteDesignDB(design_detail.designId));
                }
              }}
            />
          </ModalWrap>
        )}
      </Modal>

      <Modal
        isOpen={modal2IsOpen}
        onRequestClose={() => setModal2IsOpen(false)}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(76, 76, 76, 0.7)",
            zIndex: "20",
          },
          content: {
            position: "absolute",
            top: "35%",
            left: "50%",
            bottom: "auto",
            width: "302px",
            height: "150px",
            padding: "0",
            border: "solid 1px #eee",
            overflow: "auto",
            borderRadius: "5px",
            transform: "translate(-50%,-50%)",
            WebkitOverflowScrolling: "touch",
          },
        }}
      >
        <ModalWrap2>
          <p>삭제하시겠어요?</p>
          <p>작성하신 주문서도 함께 삭제돼요.</p>
          <hr />
          <ModalChoice>
            <button
              onClick={() =>
                dispatch(designAction.deleteDesignDB(design_detail.designId))
              }
            >
              삭제하기
            </button>
            <VerticalLine />
            <button onClick={() => setModal2IsOpen(false)}>취소하기</button>
          </ModalChoice>
        </ModalWrap2>
      </Modal>
    </Wrapper>
  );
};

export default MyDraw;
