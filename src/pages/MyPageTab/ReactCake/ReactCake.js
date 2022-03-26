import React from "react";
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
  Img,
  StoreName,
} from "./style";

const ReactCake = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [pageNumber, setPageNumber] = React.useState(0);

  const [ref, inView] = useInView();

  const likeCake = useSelector((state) => state.cake.likeCake);

  React.useEffect(() => {
    dispatch(cakeAction.getLikeCakeDB(pageNumber));
  }, [pageNumber]);

  const getMoreCake = async () => {
    setPageNumber(pageNumber + 1);
  };

  React.useEffect(() => {
    if (inView) {
      getMoreCake();
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
          {likeCake &&
            likeCake.map((v, idx) => {
              return (
                <PostWrap
                  key={idx}
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
            })}
        </ImageWrap>
      </Container>
    </ReactCakeWrap>
  );
};

export default ReactCake;
