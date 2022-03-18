import React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as cakeAction } from "../redux/modules/cake";
import { useInView } from "react-intersection-observer";
import { actionCreators as storeAction } from "../redux/modules/store";
import { ReactComponent as StoreSvg } from "../svg/store.svg";
import { useNavigate } from "react-router-dom";

Modal.setAppElement("#root");
const CakeList = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [pageNumber, setPageNumber] = React.useState(0);

  const [ref, inView] = useInView();

  React.useEffect(() => {
    dispatch(cakeAction.getCakeListDB(pageNumber));
  }, [pageNumber]);

  const cake_lists = useSelector((state) => state.cake.list);
  const cake_img = useSelector((state) => state.cake.lists);
  const store_id = useSelector((state) => state.cake.lists);

  const getMoreCake = async () => {
    setPageNumber(pageNumber + 1);
  };

  // const scrollToEnd = () => {
  //   setPageNumber(pageNumber + 1);
  // };

  // React.useEffect(() => {
  //   window.onscroll = function () {
  //     if (
  //       window.innerHeight + document.documentElement.scrollTop ===
  //       document.documentElement.offsetHeight
  //     ) {
  //       scrollToEnd();
  //     }
  //   };
  // }, []);

  React.useEffect(() => {
    if (inView) {
      getMoreCake();
    }
  }, [inView]);

  return (
    <CakeContainer>
      <h3>케이크 모아보기</h3>
      <hr />
      <ImageWrap>
        {cake_lists &&
          cake_lists.map((v, idx) => {
            return (
              <div className="img_wrap" key={idx} ref={ref}>
                <img
                  src={v.img}
                  onClick={() => {
                    setModalIsOpen(true);
                    dispatch(cakeAction.getCakeImageDB(v.cakeId));
                  }}
                  alt="cakeImage"
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
        <ModalWrap>
          <img
            src={cake_img.img}
            onClick={() => setModalIsOpen(false)}
            className="src"
            alt="cakeDetailImage"
          />
          <StoreSvg
            className="store"
            onClick={() => {
              dispatch(storeAction.getStoreDetailDB(store_id.storeId));
              navigate(`/storedetail/${store_id.storeId}`);
            }}
          />
        </ModalWrap>
      </Modal>
    </CakeContainer>
  );
};

const CakeContainer = styled.div`
  text-align: center;
  overflow-y: auto;
  height: 800px;

  h3 {
    padding: 40px 0px 20px 20px;
    box-sizing: border-box;
    font-weight: 700;
    font-size: 19px;
    color: #282828;
  }

  hr {
    border: 0.7px solid #e5e5e5;
    width: 100%;
  }
`;

const ImageWrap = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 20px;
  gap: 20px;
  margin-top: 10px;
  overflow: hidden;

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

  .src {
    width: 300px;
    height: 300px;
    background: url(${(props) => props.src}) no-repeat center / cover;
    object-fit: cover;
  }

  .store {
    position: absolute;
    top: 10px;
    left: 10px;
  }
`;

export default CakeList;
