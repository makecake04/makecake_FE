import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import Modal from "react-modal";

import { actionCreators as designAction } from "../../../redux/modules/design";

//css
import {
  Wrapper,
  Header,
  BlackBackButton,
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
  NeedDrawingBox,
  NeedDrawingText,
  GoToDrawingText,
  DrawingIcon,
  NeedPostingBox,
  PostIcon,
  NeedPostingText,
} from "./style";

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
  const sort = useSelector((state) => state.design.mydesign_sort_type);

  const toggleTab = (index) => {
    setToggleState(index);
    if (index === 1) {
      setPost("nonpost");
    } else {
      setPost("post");
    }
  };

  useEffect(() => {
    dispatch(designAction.getMyDesignListDB(pageNumber, post));
  }, [pageNumber, toggleState]);

  useEffect(() => {
    if (inView) {
      setPageNumber(pageNumber + 1);
    }
  }, [inView]);

  useEffect(() => {
    setToggleState(sort);
  }, [sort]);

  return (
    <Wrapper>
      <Header>
        <BlackBackButton
          onClick={() => {
            navigate(-1);
          }}
        />
        <h3>내가 그린 도안</h3>
      </Header>
      <hr />
      <Tab>
        <NotPost
          toggleState={toggleState}
          onClick={() => {
            setPageNumber(0);
            toggleTab(1);
            dispatch(designAction.setMyDesignSortType(1));
          }}
        >
          게시되지 않은 도안
        </NotPost>
        <Post
          toggleState={toggleState}
          onClick={() => {
            setPageNumber(0);
            toggleTab(2);
            dispatch(designAction.setMyDesignSortType(2));
          }}
        >
          게시된 도안
        </Post>
      </Tab>
      <Body>
        <DesignList toggleState={toggleState}>
          {design_list.length === 0 ? (
            <NeedDrawingBox>
              <DrawingIcon />
              <NeedDrawingText>도안을 그리러 가볼까요?</NeedDrawingText>
              <GoToDrawingText
                onClick={() => {
                  navigate("/drawing");
                }}
              >
                도안 그리러 가기
              </GoToDrawingText>
            </NeedDrawingBox>
          ) : (
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
            })
          )}
        </DesignList>
        <PostList toggleState={toggleState}>
          {post_list.length === 0 ? (
            <NeedPostingBox>
              <PostIcon />
              <NeedPostingText>
                그려주신 도안으로 게시글을 작성해주세요!
              </NeedPostingText>
            </NeedPostingBox>
          ) : (
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
            })
          )}
        </PostList>
      </Body>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setModalIsOpen(false);
          dispatch(designAction.designDetail({}));
        }}
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
