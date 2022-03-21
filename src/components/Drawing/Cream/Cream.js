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
import { CreamWrap } from "./style";

const Cream = (props) => {
  const canvas = props.canvas;
  const cakeShape = props.cakeShape;
  console.log(cakeShape);
  const addCream = (shape) => {
    if (shape === "round_normal") {
      new fabric.Image.fromURL(`${round_normal}`, (img) => {
        img.scale(0.14);

        canvas.setActiveObject(img);
        canvas.add(img).centerObject(img).renderAll();
        console.log(canvas);
      });
    } else if (shape === "round_flower") {
      new fabric.Image.fromURL(`${round_flower}`, (img) => {
        img.scale(0.14);

        canvas.setActiveObject(img);
        canvas.add(img).centerObject(img).renderAll();
        console.log(canvas);
      });
    } else if (shape === "round_shell") {
      // new fabric.loadSVGFromURL(`${round_flowerSvg}`, (objects, options) => {
      //   let obj = fabric.util.groupSVGElements(objects, options);
      //   obj.scale(0.3);

      //   canvas.setActiveObject(obj);
      //   canvas.add(obj).centerObject(obj).renderAll();
      // });
      new fabric.Image.fromURL(`${round_shell}`, (img) => {
        img.scale(0.14);
        canvas.setActiveObject(img);
        canvas.add(img).centerObject(img).renderAll();
        console.log(canvas);
      });
    } else if (shape === "square_normal") {
      new fabric.Image.fromURL(`${square_normal}`, (img) => {
        img.scale(0.14);
        canvas.setActiveObject(img);
        canvas.add(img).centerObject(img).renderAll();
        console.log(canvas);
      });
    } else if (shape === "square_flower") {
      new fabric.Image.fromURL(`${square_flower}`, (img) => {
        img.scale(0.14);
        canvas.setActiveObject(img);
        canvas.add(img).centerObject(img).renderAll();
        console.log(canvas);
      });
    } else if (shape === "square_shell") {
      new fabric.Image.fromURL(`${square_shell}`, (img) => {
        img.scale(0.14);
        canvas.setActiveObject(img);
        canvas.add(img).centerObject(img).renderAll();
        console.log(canvas);
      });
    } else if (shape === "heart_normal") {
      new fabric.Image.fromURL(`${heart_normal}`, (img) => {
        img.scale(0.14);
        canvas.setActiveObject(img);
        canvas.add(img).centerObject(img).renderAll();
        console.log(canvas);
      });
    } else if (shape === "heart_flower") {
      new fabric.Image.fromURL(`${heart_flower}`, (img) => {
        img.scale(0.14);
        canvas.setActiveObject(img);
        canvas.add(img).centerObject(img).renderAll();
        console.log(canvas);
      });
    } else if (shape === "heart_shell") {
      new fabric.Image.fromURL(`${heart_shell}`, (img) => {
        img.scale(0.14);
        canvas.setActiveObject(img);
        canvas.add(img).centerObject(img).renderAll();
        console.log(canvas);
      });
    }
  };

  return (
    <CreamWrap>
      <div className="cream-wrap">
        {cakeShape === "circle" && (
          <>
            <input
              type="image"
              src={normal}
              alt="normal"
              style={{ width: "8.5rem" }}
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
              style={{ width: "8.5rem" }}
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
              style={{ width: "8.5rem" }}
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
              style={{ width: "8.5rem" }}
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
              style={{ width: "8.5rem" }}
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
              style={{ width: "8.5rem" }}
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
              style={{ width: "8.5rem" }}
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
              style={{ width: "8.5rem" }}
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
              style={{ width: "8.5rem" }}
              name="shape"
              value="heart_shell"
              onClick={(e) => {
                addCream(e.target.value);
              }}
            />
          </>
        )}
      </div>
    </CreamWrap>
  );
};

export default Cream;
