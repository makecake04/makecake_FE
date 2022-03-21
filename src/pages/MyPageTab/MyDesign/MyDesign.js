import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as designAction } from "../../../redux/modules/design";
import { useInView } from "react-intersection-observer";
import Modal from "react-modal";

//import css
import { MyDrawWrap, ModalWrap, DeleteIcon, WriteIcon } from "./style";

const MyDraw = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [toggleState, setToggleState] = React.useState(1);
  const [post, setPost] = useState("nonpost");
  const [pageNumber, setPageNumber] = useState(0);

  const design_list = useSelector((state) => state.design.design_list);
  const post_list = useSelector((state) => state.design.post_list);

  const design_detail = useSelector((state) => state.design.design_detail);
  const post_detail = useSelector((state) => state.design.post_detail);
  console.log(pageNumber, post);
  const [ref, inView] = useInView();

  // const getMoreDesign = async () => {
  //   setPageNumber(pageNumber + 1);
  // };

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
  //page number should be added into dependency array as well

  useEffect(() => {
    if (inView) {
      // getMoreDesign();
      setPageNumber(pageNumber + 1);
    }
  }, []);

  return (
    <MyDrawWrap>
      <div className="title">
        <FontAwesomeIcon
          icon={faAngleLeft}
          className="left"
          onClick={() => {
            navigate(-1);
          }}
        />
        <h3>내가 그린 도안</h3>
      </div>
      <hr />
      <div className="container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            작성되지 않은 도안
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            작성된 도안
          </button>
        </div>
        <div className="content-tabs">
          <div className={toggleState === 1 ? "active-content" : "content"}>
            {design_list &&
              design_list.map((a, i) => {
                return (
                  <div key={i} ref={ref} className="img_wrap">
                    <img
                      src={a.img}
                      alt="nopost design"
                      onClick={() => {
                        setModalIsOpen(true);
                        dispatch(designAction.getDesignImageDB(a.designId));
                      }}
                    />
                  </div>
                );
              })}
          </div>
          <div className={toggleState === 2 ? "active-content" : "content"}>
            {post_list &&
              post_list.map((a, i) => {
                return (
                  <div key={i} ref={ref} className="img_wrap">
                    <img
                      src={a.img}
                      alt="post design"
                      onClick={() => {
                        navigate(`/post/${a.postId}`);
                      }}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>

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
            border: "solid 1px #eee",
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
              className="modal-img"
              src={design_detail.img}
              onClick={() => setModalIsOpen(false)}
            />
            <WriteIcon
              className="write-icon"
              onClick={() => navigate(`/post/write/${design_detail.designId}`)}
            />
            <DeleteIcon
              className="delete-icon"
              onClick={() =>
                dispatch(designAction.deleteDesignDB(design_detail.designId))
              }
            />
          </ModalWrap>
        )}
        {/* {toggleState === 2 && (
          <ModalWrap>
            <img
              alt="modal-img"
              className="modal-img"
              // src={post_detail.img}
              onClick={() => setModalIsOpen(false)}
            />
            <WriteIcon
              className="write-icon"
              onClick={() => navigate(`/post/edit/${post_detail.designId}`)}
            />
          </ModalWrap>
        )} */}
        {/* <ModalWrap>
          <img
            alt="modal-img"
            className="modal-img"
            src={design_detail.img}
            onClick={() => setModalIsOpen(false)}
          />
          <WriteIcon
            className="write-icon"
            onClick={() => navigate(`/post/write/${design_detail.designId}`)}
          />
        </ModalWrap> */}
      </Modal>
    </MyDrawWrap>
  );
};

export default MyDraw;
