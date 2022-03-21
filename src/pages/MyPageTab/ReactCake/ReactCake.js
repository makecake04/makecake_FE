import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import { actionCreators as cakeAction } from "../../../redux/modules/cake";

//import css
import { ReactCakeWrap, ImageWrap } from "./style";

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
      <div>
        <div className="title">
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="left"
            onClick={() => {
              navigate(`/mypage`);
            }}
          />
          <h3>내가 반응한 케이크</h3>
        </div>
        <hr />
        <ImageWrap>
          {likeCake &&
            likeCake.map((v, idx) => {
              return (
                <div key={idx}>
                  <div className="img_wrap">
                    <img src={v.img} alt="img" />
                  </div>
                  <p className="store">{v.storeName}</p>
                </div>
              );
            })}
        </ImageWrap>
      </div>
    </ReactCakeWrap>
  );
};

export default ReactCake;
