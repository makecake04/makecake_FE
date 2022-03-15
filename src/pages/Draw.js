import React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as WritingSvg } from "../svg/writing.svg";
import { ReactComponent as DrawingSvg } from "../svg/drawing.svg";
import { actionCreators as designAction } from "../redux/modules/design";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";

const Draw = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [toggle, setToggle] = React.useState(false);

  const [pageNumber, setPageNumber] = React.useState(0);

  const [ref, inView] = useInView();

  const design_list = useSelector((state) => state.design.list);
  const designs = useSelector((state) => state.design);

  React.useEffect(() => {
    dispatch(designAction.getDesignListDB(pageNumber));
  }, [pageNumber]);

  const getMoreDesign = async () => {
    setPageNumber(pageNumber + 1);
  };

  React.useEffect(() => {
    if (inView) {
      getMoreDesign();
    }
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
                onClick={() => {
                  setModalIsOpen(true);
                  // dispatch(cakeAction.getCakeImageDB(v.cakeId));
                }}
              />
            </div>
          );
        })}
      </ImageWrap>
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
        <ModalWrap>
          {/* <img src={cake_img.img} onClick={() => setModalIsOpen(false)} /> */}
        </ModalWrap>
      </Modal>

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
          <DrawingSvg className="draw" onClick={() => navigate("/design")} />
          <WritingSvg className="write" />
        </div>
      )}
    </DrawWrap>
  );
};

const DrawWrap = styled.div`
  overflow-y: auto;
  height: 800px;
  h3 {
    margin: 40px 0px 20px 0px;
    text-align: center;
    font-weight: 700;
    font-size: 19px;
    color: #282828;
  }

  hr {
    border: 0.7px solid #e5e5e5;
    width: 100%;
  }

  .more_off {
    display: flex;
    position: absolute;
    right: 20px;
    bottom: 70px;
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background-color: #ff679e;
    justify-content: center;
    align-items: center;
  }

  .ellipsis {
    color: #fff;
    font-size: 20px;
  }

  .more_on {
    display: flex;
    position: absolute;
    right: 20px;
    bottom: 70px;
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background-color: #fff;
    justify-content: center;
    align-items: center;
  }

  .xmark {
    color: #777;
    font-size: 20px;
  }

  .draw {
    display: flex;
    position: absolute;
    right: -10px;
    bottom: 100px;
    width: 60px;
    height: 60px;
    border-radius: 60px;
    justify-content: center;
    align-items: center;
  }

  .write {
    display: flex;
    position: absolute;
    right: -10px;
    bottom: 40px;
    width: 60px;
    height: 60px;
    border-radius: 60px;
    justify-content: center;
    align-items: center;
  }
`;

const ImageWrap = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 20px;
  gap: 20px;
  margin-top: 10px;

  .img_wrap {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
  }

  img {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    object-fit: cover;
  }
`;

const ModalWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

export default Draw;
