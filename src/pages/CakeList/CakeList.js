import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { actionCreators as cakeAction } from "../../redux/modules/cake";

//css
import {
  CakeContainer,
  HrWrap,
  ButtonWrap,
  AllButton,
  LikeButton,
  ImageWrap,
  ImgWrap,
  ImgBox,
  ModalWrap,
  ModalImg,
  StoreWrap,
  StoreName,
  StoreBody,
  EmptyHeartIcon,
  FullHeartIcon,
  LikeCnt,
} from "./style";

Modal.setAppElement("#root");
const CakeList = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [sortType, setSortType] = useState("likeCnt");

  const [ref, inView] = useInView();

  const cake_list = useSelector((state) => state.cake.list);
  const cake_img = useSelector((state) => state.cake.lists);
  const store_id = useSelector((state) => state.cake.lists);
  const cake_id = useSelector((state) => state.cake.lists);
  const login = useSelector((state) => state.user.is_login);
  const my_like = useSelector((state) => state.cake.lists);
  const sort = useSelector((state) => state.cake.cake_sort_type);
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

  useEffect(() => {
    dispatch(cakeAction.getCakeListDB(pageNumber, sortType));
  }, [sortType, pageNumber]);

  useEffect(() => {
    if (inView) {
      setPageNumber(pageNumber + 1);
    }
  }, [inView]);

  useEffect(() => {
    setSortType(sort);
  }, [sort]);

  return (
    <CakeContainer>
      <h3>케이크 모아보기</h3>
      <HrWrap />
      <ButtonWrap>
        <LikeButton
          onClick={() => {
            setPageNumber(0);
            setSortType("likeCnt");
            dispatch(cakeAction.changeSortDB("likeCnt"));
            dispatch(cakeAction.setCakeSortType("likeCnt"));
          }}
          sortType={sortType}
        >
          좋아요순
        </LikeButton>
        <AllButton
          onClick={() => {
            setPageNumber(0);
            setSortType("random");
            dispatch(cakeAction.changeSortDB("random"));
            dispatch(cakeAction.setCakeSortType("random"));
          }}
          sortType={sortType}
        >
          랜덤순
        </AllButton>
      </ButtonWrap>
      <ImageWrap>
        {cake_list &&
          cake_list.map((v, idx) => {
            return (
              <ImgWrap
                key={idx}
                ref={cake_list.length === idx + 1 ? ref : null}
              >
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
        onRequestClose={() => {
          setModalIsOpen(false);
          dispatch(cakeAction.cakeImage({}));
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
            background: "none",
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
          <StoreWrap>
            <StoreBody>
              <StoreName
                onClick={() => {
                  navigate(`/storedetail/${store_id.storeId}`);
                }}
              >
                매장 보러 가기
              </StoreName>
            </StoreBody>
            <div>
              {my_like.myLike ? (
                <FullHeartIcon onClick={likeToggle} />
              ) : (
                <EmptyHeartIcon onClick={likeToggle} />
              )}
              <LikeCnt>{cake_img.likeCnt}</LikeCnt>
            </div>
          </StoreWrap>
        </ModalWrap>
      </Modal>
    </CakeContainer>
  );
};

export default CakeList;
