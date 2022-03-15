import React from "react";
import styled from "styled-components";
import { fabric } from "fabric";

//image
import cloud from "../images/icons/데코_구름1.png";
import sprinkle from "../images/icons/image 290.png";
import cherry from "../images/icons/image 272.png";
import heart from "../images/icons/image 274.png";
import flower from "../images/icons/image 275.png";
import carrot from "../images/icons/image 299.png";
import balloon from "../images/icons/image 292.png";
import pearl from "../images/icons/데코_진주.png";

const Icons = (props) => {
  const { canvas } = props;
  const addIcon = (shape) => {
    if (shape === "cloud") {
      new fabric.Image.fromURL(`${cloud}`, (img) => {
        img.scale(0.05);
        canvas.setActiveObject(img);
        canvas.add(img).centerObject(img).renderAll();
        console.log(canvas);
      });
    } else if (shape === "sprinkle") {
      new fabric.Image.fromURL(`${sprinkle}`, (img) => {
        img.scale(0.05);
        canvas.setActiveObject(img);
        canvas.add(img).centerObject(img).renderAll();
        console.log(canvas);
      });
    } else if (shape === "cherry") {
      new fabric.Image.fromURL(`${cherry}`, (img) => {
        img.scale(0.05);
        canvas.setActiveObject(img);
        canvas.add(img).centerObject(img).renderAll();
        console.log(canvas);
      });
    } else if (shape === "heart") {
      new fabric.Image.fromURL(`${heart}`, (img) => {
        img.scale(0.05);
        canvas.setActiveObject(img);
        canvas.add(img).centerObject(img).renderAll();
        console.log(canvas);
      });
    } else if (shape === "flower") {
      new fabric.Image.fromURL(`${flower}`, (img) => {
        img.scale(0.05);
        canvas.setActiveObject(img);
        canvas.add(img).centerObject(img).renderAll();
        console.log(canvas);
      });
    } else if (shape === "carrot") {
      new fabric.Image.fromURL(`${carrot}`, (img) => {
        img.scale(0.05);
        canvas.setActiveObject(img);
        canvas.add(img).centerObject(img).renderAll();
        console.log(canvas);
      });
    } else if (shape === "balloon") {
      new fabric.Image.fromURL(`${balloon}`, (img) => {
        img.scale(0.05);
        canvas.setActiveObject(img);
        canvas.add(img).centerObject(img).renderAll();
        console.log(canvas);
      });
    } else if (shape === "pearl") {
      new fabric.Image.fromURL(`${pearl}`, (img) => {
        img.scale(0.05);
        canvas.setActiveObject(img);
        canvas.add(img).centerObject(img).renderAll();
        console.log(canvas);
      });
    }
  };
  return (
    <IconWrap>
      <div className="icons-wrap">
        <div className="icons-wrap-first">
          <input
            type="image"
            src={cloud}
            alt="cloud"
            style={{ width: "6rem" }}
            name="shape"
            value="cloud"
            onClick={(e) => {
              addIcon(e.target.value);
            }}
          />
          <input
            type="image"
            src={sprinkle}
            alt="sprinkle"
            style={{ width: "6rem" }}
            name="shape"
            value="sprinkle"
            onClick={(e) => {
              addIcon(e.target.value);
            }}
          />
          <input
            type="image"
            src={cherry}
            alt="cherry"
            style={{ width: "6rem" }}
            name="shape"
            value="cherry"
            onClick={(e) => {
              addIcon(e.target.value);
            }}
          />
          <input
            type="image"
            src={heart}
            alt="heart"
            style={{ width: "6rem" }}
            name="shape"
            value="heart"
            onClick={(e) => {
              addIcon(e.target.value);
            }}
          />
        </div>
        <div className="icons-wrap-second">
          <input
            type="image"
            src={flower}
            alt="flower"
            style={{ width: "6rem" }}
            name="shape"
            value="flower"
            onClick={(e) => {
              addIcon(e.target.value);
            }}
          />
          <input
            type="image"
            src={carrot}
            alt="carrot"
            style={{ width: "6rem" }}
            name="shape"
            value="carrot"
            onClick={(e) => {
              addIcon(e.target.value);
            }}
          />
          <input
            type="image"
            src={balloon}
            alt="balloon"
            style={{ width: "6rem" }}
            name="shape"
            value="balloon"
            onClick={(e) => {
              addIcon(e.target.value);
            }}
          />
          <input
            type="image"
            src={pearl}
            alt="pearl"
            style={{ width: "6rem" }}
            name="shape"
            value="pearl"
            onClick={(e) => {
              addIcon(e.target.value);
            }}
          />
        </div>
      </div>
    </IconWrap>
  );
};

const IconWrap = styled.div`
  .icons-wrap {
    margin-top: 1.5rem;
    padding: 0 2rem 0;
    .icons-wrap-first,
    .icons-wrap-second {
      display: flex;
      justify-content: space-between;
    }
    input {
      border: none;
    }
    div + div {
      margin-top: 1.5rem;
    }
  }
`;

export default Icons;
