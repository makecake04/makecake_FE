import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import Swal from "sweetalert2";

import { actionCreators as cakeAction } from "../../../redux/modules/cake";

//css
import {
  CakeWrap,
  SubWrap,
  CakesWrap,
  TitleWrap,
  PlusWrap,
  Pwrap,
  RightSvg,
  ImageWrap,
  ImagesWrap,
  Images,
  ImgBox,
  ModalWrap,
  ModalImg,
  StoreWrap,
  StoreName,
  StoreBody,
  EmptyHeartIcon,
  FullHeartIcon,
  LikeCnt,
  StyleSlider,
  HrWrap,
} from "./style";

const BestCake = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cake_list = useSelector((state) => state.store.list);
  const cake_img = useSelector((state) => state.cake.lists);
  const cake_id = useSelector((state) => state.cake.lists);
  const login = useSelector((state) => state.user.is_login);
  const my_like = useSelector((state) => state.cake.lists);
  const store_id = useSelector((state) => state.cake.lists);

  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

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
    <CakeWrap>
      <SubWrap>
        <CakesWrap>
          <TitleWrap>베스트 메잌케잌 🍰</TitleWrap>
          <PlusWrap>
            <Pwrap
              onClick={() => {
                navigate(`/cake`);
              }}
            >
              더보기
            </Pwrap>
            <RightSvg />
          </PlusWrap>
        </CakesWrap>
        <ImageWrap>
          <StyleSlider {...settings}>
            {cake_list.homeCakeDtoList &&
              cake_list.homeCakeDtoList.map((v, idx) => {
                return (
                  <ImagesWrap key={idx}>
                    <Images>
                      <ImgBox
                        src={v.mainImg}
                        onClick={() => {
                          setModalIsOpen(true);
                          dispatch(cakeAction.getCakeImageDB(v.cakeId));
                        }}
                      />
                    </Images>
                  </ImagesWrap>
                );
              })}
          </StyleSlider>
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
        <HrWrap />
      </SubWrap>
    </CakeWrap>
  );
};

export default BestCake;
