import React from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as cakeAction } from "../../redux/modules/cake";
import { useInView } from "react-intersection-observer";
import { actionCreators as storeAction } from "../../redux/modules/store";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

//import css
import {
  CakeContainer,
  HrWrap,
  ImageWrap,
  ImgWrap,
  ImgBox,
  ModalWrap,
  ModalImg,
  StoreIcon,
  EmptyHeartIcon,
  FullHeartIcon,
  LikeCnt,
} from "./style";

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
  const cake_id = useSelector((state) => state.cake.lists);
  const login = useSelector((state) => state.user.is_login);
  const my_like = useSelector((state) => state.cake.lists);

  const getMoreCake = async () => {
    setPageNumber(pageNumber + 1);
  };

  React.useEffect(() => {
    if (inView) {
      getMoreCake();
    }
  }, [inView]);

  const likeToggle = () => {
    if (!login) {
      Swal.fire({
        title: "로그인이 필요한 서비스입니다!",
        showCancelButton: true,
        confirmButtonText: '<a href="/">로그인 할래요!</a>',
        confirmButtonColor: "#ff679e",
        cancelButtonColor: "#777",
        cancelButtonText: "그냥 둘러볼래요.",
      });
    } else {
      dispatch(cakeAction.addLikeCakeDB(cake_id.cakeId, !my_like.myLike));
    }
  };

  return (
    <CakeContainer>
      <h3>케이크 모아보기</h3>
      <HrWrap />
      <ImageWrap>
        {cake_lists &&
          cake_lists.map((v, idx) => {
            return (
              <ImgWrap key={idx} ref={ref}>
                <ImgBox
                  src={v.img}
                  onClick={() => {
                    setModalIsOpen(true);
                    dispatch(cakeAction.getCakeImageDB(v.cakeId));
                  }}
                  alt="cakeImage"
                />
              </ImgWrap>
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
          <ModalImg
            src={cake_img.img}
            onClick={() => setModalIsOpen(false)}
            alt="cakeDetailImage"
          />
          <StoreIcon
            onClick={() => {
              dispatch(storeAction.getStoreDetailDB(store_id.storeId));
              navigate(`/storedetail/${store_id.storeId}`);
            }}
          />
          {my_like.myLike ? (
            <FullHeartIcon onClick={likeToggle} />
          ) : (
            <EmptyHeartIcon onClick={likeToggle} />
          )}
          <LikeCnt>{cake_img.likeCnt}</LikeCnt>
        </ModalWrap>
      </Modal>
    </CakeContainer>
  );
};

export default CakeList;
