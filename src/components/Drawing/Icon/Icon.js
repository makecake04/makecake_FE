import React from "react";
import { fabric } from "fabric";

//image
import {
  balloon,
  carrot,
  cherry,
  cloud,
  flower_icon,
  heart_icon,
  pearl,
  sprinkle,
} from "../../../assets/images/image";

//css
import { IconWrap } from "./style";

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
    } else if (shape === "heart_icon") {
      new fabric.Image.fromURL(`${heart_icon}`, (img) => {
        img.scale(0.05);
        canvas.setActiveObject(img);
        canvas.add(img).centerObject(img).renderAll();
        console.log(canvas);
      });
    } else if (shape === "flower_icon") {
      new fabric.Image.fromURL(`${flower_icon}`, (img) => {
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
            src={heart_icon}
            alt="heart_icon"
            style={{ width: "6rem" }}
            name="shape"
            value="heart_icon"
            onClick={(e) => {
              addIcon(e.target.value);
            }}
          />
        </div>
        <div className="icons-wrap-second">
          <input
            type="image"
            src={flower_icon}
            alt="flower_icon"
            style={{ width: "6rem" }}
            name="shape"
            value="flower_icon"
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

export default Icons;
