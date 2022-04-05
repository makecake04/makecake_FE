import React from "react";
import { fabric } from "fabric";

//image
import {
  flower,
  heart_flower,
  heart_normal,
  heart_shell,
  normal,
  round_flower,
  round_normal,
  round_shell,
  shell,
  square_flower,
  square_normal,
  square_shell,
} from "../../../assets/images/image";

//css
import { Wrapper } from "./style";

const Cream = (props) => {
  const canvas = props.canvas;
  const cakeShape = props.cakeShape;

  const addCream = (shape) => {
    if (shape === "round_normal") {
      new fabric.Image.fromURL(`${round_normal}`, (img) => {
        img.scale(0.14);
        canvas.setActiveObject(img);
        canvas.add(img).centerObject(img).renderAll();
      });
    } else if (shape === "round_flower") {
      new fabric.Image.fromURL(`${round_flower}`, (img) => {
        img.scale(0.14);
        canvas.setActiveObject(img);
        canvas.add(img).centerObject(img).renderAll();
      });
    } else if (shape === "round_shell") {
      new fabric.Image.fromURL(`${round_shell}`, (img) => {
        img.scale(0.14);
        canvas.setActiveObject(img);
        canvas.add(img).centerObject(img).renderAll();
      });
    } else if (shape === "square_normal") {
      new fabric.Image.fromURL(`${square_normal}`, (img) => {
        img.scale(0.14);
        canvas.setActiveObject(img);
        canvas.add(img).centerObject(img).renderAll();
      });
    } else if (shape === "square_flower") {
      new fabric.Image.fromURL(`${square_flower}`, (img) => {
        img.scale(0.14);
        canvas.setActiveObject(img);
        canvas.add(img).centerObject(img).renderAll();
      });
    } else if (shape === "square_shell") {
      new fabric.Image.fromURL(`${square_shell}`, (img) => {
        img.scale(0.14);
        canvas.setActiveObject(img);
        canvas.add(img).centerObject(img).renderAll();
      });
    } else if (shape === "heart_normal") {
      new fabric.Image.fromURL(`${heart_normal}`, (img) => {
        img.scale(0.14);
        canvas.setActiveObject(img);
        canvas.add(img).centerObject(img).renderAll();
      });
    } else if (shape === "heart_flower") {
      new fabric.Image.fromURL(`${heart_flower}`, (img) => {
        img.scale(0.14);
        canvas.setActiveObject(img);
        canvas.add(img).centerObject(img).renderAll();
      });
    } else if (shape === "heart_shell") {
      new fabric.Image.fromURL(`${heart_shell}`, (img) => {
        img.scale(0.14);
        canvas.setActiveObject(img);
        canvas.add(img).centerObject(img).renderAll();
      });
    }
  };

  return (
    <Wrapper>
      {cakeShape === "circle" && (
        <>
          <input
            type="image"
            src={normal}
            alt="normal"
            name="shape"
            value="round_normal"
            onClick={(e) => {
              addCream(e.target.value);
            }}
          />
          <input
            type="image"
            src={flower}
            alt="flower"
            name="shape"
            value="round_flower"
            onClick={(e) => {
              addCream(e.target.value);
            }}
          />
          <input
            type="image"
            src={shell}
            alt="shell"
            name="shape"
            value="round_shell"
            onClick={(e) => {
              addCream(e.target.value);
            }}
          />
        </>
      )}
      {cakeShape === "square" && (
        <>
          <input
            type="image"
            src={normal}
            alt="normal"
            name="shape"
            value="square_normal"
            onClick={(e) => {
              addCream(e.target.value);
            }}
          />
          <input
            type="image"
            src={flower}
            alt="flower"
            name="shape"
            value="square_flower"
            onClick={(e) => {
              addCream(e.target.value);
            }}
          />
          <input
            type="image"
            src={shell}
            alt="shell"
            name="shape"
            value="square_shell"
            onClick={(e) => {
              addCream(e.target.value);
            }}
          />
        </>
      )}
      {cakeShape === "heart" && (
        <>
          <input
            type="image"
            src={normal}
            alt="normal"
            name="shape"
            value="heart_normal"
            onClick={(e) => {
              addCream(e.target.value);
            }}
          />
          <input
            type="image"
            src={flower}
            alt="flower"
            name="shape"
            value="heart_flower"
            onClick={(e) => {
              addCream(e.target.value);
            }}
          />
          <input
            type="image"
            src={shell}
            alt="shell"
            name="shape"
            value="heart_shell"
            onClick={(e) => {
              addCream(e.target.value);
            }}
          />
        </>
      )}
    </Wrapper>
  );
};

export default Cream;
