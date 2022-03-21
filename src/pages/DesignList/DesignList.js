import React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";

import { actionCreators as designAction } from "../../redux/modules/design";

//import css
import { DrawWrap, ImageWrap, ModalWrap, PaintIcon, WriteIcon } from "./style";

const DesignList = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [toggle, setToggle] = React.useState(false);

  const [pageNumber, setPageNumber] = React.useState(0);

  const [ref, inView] = useInView();

  const design_list = useSelector((state) => state.design.list);
  const designs = useSelector((state) => state.design);

  const getMoreDesign = async () => {
    setPageNumber(pageNumber + 1);
  };

  React.useEffect(() => {
    dispatch(designAction.getDesignListDB(pageNumber));
  }, [pageNumber]);

  React.useEffect(() => {
    if (inView) {
      getMoreDesign();
    }
    console.log("ss");
  }, [inView]);

  return (
    <DrawWrap>
      <div>
        <h3>도안</h3>
        <hr />
      </div>
      <ImageWrap>
        {design_list.map((v, idx) => {
          return (
            <div className="img_wrap" key={idx} ref={ref}>
              <img
                src={v.img}
                alt="post-img"
                onClick={() => {
                  // setModalIsOpen(true);
                  navigate(`/post/${v.postId}`);
                }}
              />
            </div>
          );
        })}
      </ImageWrap>
      {/* <Modal
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
            top: "45%",
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
        <ModalWrap> */}
      {/* <img src={cake_img.img} onClick={() => setModalIsOpen(false)} /> */}
      {/* </ModalWrap>
      </Modal> */}

      {toggle === false ? (
        <div
          className="more_off"
          onClick={() => {
            setToggle(true);
          }}
        >
          <FontAwesomeIcon icon={faPlus} className="ellipsis" />
        </div>
      ) : (
        <div
          className="more_on"
          onClick={() => {
            setToggle(false);
          }}
        >
          <FontAwesomeIcon icon={faXmark} className="xmark" />
          <PaintIcon className="draw" onClick={() => navigate("/drawing")} />
          <WriteIcon className="write" onClick={() => navigate("/design")} />
        </div>
      )}
    </DrawWrap>
  );
};

export default DesignList;
