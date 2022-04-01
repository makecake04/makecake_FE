import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import { actionCreators as cakeAction } from "../../../redux/modules/cake";

//import css
import {
  ReactCakeWrap,
  Container,
  BlackBackButton,
  HeaderText,
  HeaderWrap,
  Line,
  ImageWrap,
  PostWrap,
  ImgWrap,
  SelectCakeBox,
  CakeIcon,
  SelectCakeText,
  GoToSeeCakeText,
  Img,
  StoreName,
} from "./style";

const ReactCake = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [pageNumber, setPageNumber] = React.useState(0);

  const [ref, inView] = useInView();

  const likeCake = useSelector((state) => state.cake.likeCake);

  useEffect(() => {
    dispatch(cakeAction.getLikeCakeDB(pageNumber));
  }, [pageNumber]);

  useEffect(() => {
    if (inView) {
      setPageNumber(pageNumber + 1);
    }
  }, [inView]);

  return (
    <ReactCakeWrap>
      <Container>
        <HeaderWrap>
          <BlackBackButton
            onClick={() => {
              navigate(`/mypage`);
            }}
          />
          <HeaderText>내가 반응한 케이크</HeaderText>
        </HeaderWrap>
        <Line />
        <ImageWrap>
          {likeCake.length === 0 ? (
            <SelectCakeBox>
              <CakeIcon />
              <SelectCakeText>맘에드는 케이크를 골라보세요</SelectCakeText>
              <GoToSeeCakeText
                onClick={() => {
                  navigate("/cake");
                }}
              >
                케이크 구경하러 가기
              </GoToSeeCakeText>
            </SelectCakeBox>
          ) : (
            likeCake.map((v, idx) => {
              return (
                <PostWrap
                  key={idx}
                  ref={ref}
                  onClick={() => {
                    navigate(`/storedetail/${v.storeId}`);
                  }}
                >
                  <ImgWrap>
                    <Img src={v.img} alt="img" />
                  </ImgWrap>
                  <StoreName>{v.storeName}</StoreName>
                </PostWrap>
              );
            })
          )}
        </ImageWrap>
      </Container>
    </ReactCakeWrap>
  );
};

export default ReactCake;
