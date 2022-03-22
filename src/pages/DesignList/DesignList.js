import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";

import { actionCreators as designAction } from "../../redux/modules/design";

//import css
import {
  DrawWrap,
  HrWrap,
  ImageWrap,
  ImgWrap,
  ImgBox,
  PlusOff,
  PlusOn,
  PlusIcon,
  XIcon,
  PaintIcon,
  WriteIcon,
} from "./style";

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
      <h3>도안</h3>
      <HrWrap />
      <ImageWrap>
        {design_list.map((v, idx) => {
          return (
            <ImgWrap key={idx} ref={ref}>
              <ImgBox
                src={v.img}
                alt="post-img"
                onClick={() => {
                  // setModalIsOpen(true);
                  navigate(`/post/${v.postId}`);
                }}
              />
            </ImgWrap>
          );
        })}
      </ImageWrap>

      {toggle === false ? (
        <PlusOff
          onClick={() => {
            setToggle(true);
          }}
        >
          <PlusIcon />
        </PlusOff>
      ) : (
        <PlusOn
          onClick={() => {
            setToggle(false);
          }}
        >
          <XIcon />
          <PaintIcon onClick={() => navigate("/drawing")} />
          <WriteIcon onClick={() => navigate("/mydesign")} />
        </PlusOn>
      )}
    </DrawWrap>
  );
};

export default DesignList;
