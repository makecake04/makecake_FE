import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import { actionCreators as cakeAction } from "../redux/modules/cake";

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

const ReactCakeWrap = styled.div`
  .title {
    margin: 40px 0px 20px 30px;
    display: flex;
    align-items: center;
  }
  .left {
    color: #646464;
    margin: 0px 80px 0px 0px;
  }

  h3 {
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
  grid-template-columns: repeat(2, 1fr);
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

  .heart {
    font-size: 30px;
    color: #ff679e;
    margin-top: 10px;
    position: absolute;
    right: 10px;
  }

  .store {
    margin: 10px 0px;
    color: #282828;
  }

  .name {
    margin-bottom: 10px;
    color: #777;
    font-size: 15px;
  }
`;

export default ReactCake;