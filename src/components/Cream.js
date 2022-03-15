import React from "react";
import { fabric } from "fabric";
import styled from "styled-components";

//image
import roundNormal from "../images/cream/round_normal.png";
import roundFlower from "../images/cream/round_flower.png";
import roundShell from "../images/cream/round_shell.png";
import squareNormal from "../images/cream/square_normal.png";
import squareFlower from "../images/cream/square_flower.png";
import squareShell from "../images/cream/square_shell.png";
import heartNormal from "../images/cream/heart_normal.png";
import heartFlower from "../images/cream/heart_flower.png";
import heartShell from "../images/cream/heart_shell.png";
import normal from "../images/cream/normal.png";
import shell from "../images/cream/shell.png";
import flower from "../images/cream/flower.png";

const Cream = (props) => {
  const canvas = props.canvas;
  const cakeShape = props.cakeShape;
  console.log(cakeShape);
  const addCream = (shape) => {
    if (shape === "roundNormal") {
      new fabric.Image.fromURL(`${roundNormal}`, (img) => {
        img.scale(0.14);

        canvas.setActiveObject(img);
        canvas.add(img).centerObject(img).renderAll();
        console.log(canvas);
      });
    } else if (shape === "roundFlower") {
      new fabric.Image.fromURL(`${roundFlower}`, (img) => {
        img.scale(0.14);

        canvas.setActiveObject(img);
        canvas.add(img).centerObject(img).renderAll();
        console.log(canvas);
      });
    } else if (shape === "roundShell") {
      // new fabric.loadSVGFromURL(`${roundFlowerSvg}`, (objects, options) => {
      //   let obj = fabric.util.groupSVGElements(objects, options);
      //   obj.scale(0.3);

      //   canvas.setActiveObject(obj);
      //   canvas.add(obj).centerObject(obj).renderAll();
      // });
      new fabric.Image.fromURL(`${roundShell}`, (img) => {
        img.scale(0.14);
        canvas.setActiveObject(img);
        canvas.add(img).centerObject(img).renderAll();
        console.log(canvas);
      });
    } else if (shape === "squareNormal") {
      new fabric.Image.fromURL(`${squareNormal}`, (img) => {
        img.scale(0.14);
        canvas.setActiveObject(img);
        canvas.add(img).centerObject(img).renderAll();
        console.log(canvas);
      });
    } else if (shape === "squareFlower") {
      new fabric.Image.fromURL(`${squareFlower}`, (img) => {
        img.scale(0.14);
        canvas.setActiveObject(img);
        canvas.add(img).centerObject(img).renderAll();
        console.log(canvas);
      });
    } else if (shape === "squareShell") {
      new fabric.Image.fromURL(`${squareShell}`, (img) => {
        img.scale(0.14);
        canvas.setActiveObject(img);
        canvas.add(img).centerObject(img).renderAll();
        console.log(canvas);
      });
    } else if (shape === "heartNormal") {
      new fabric.Image.fromURL(`${heartNormal}`, (img) => {
        img.scale(0.14);
        canvas.setActiveObject(img);
        canvas.add(img).centerObject(img).renderAll();
        console.log(canvas);
      });
    } else if (shape === "heartFlower") {
      new fabric.Image.fromURL(`${heartFlower}`, (img) => {
        img.scale(0.14);
        canvas.setActiveObject(img);
        canvas.add(img).centerObject(img).renderAll();
        console.log(canvas);
      });
    } else if (shape === "heartShell") {
      new fabric.Image.fromURL(`${heartShell}`, (img) => {
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
              value="roundNormal"
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
              value="roundFlower"
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
              value="roundShell"
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
              value="squareNormal"
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
              value="squareFlower"
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
              value="squareShell"
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
              value="heartNormal"
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
              value="heartFlower"
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
              value="heartShell"
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

const CreamWrap = styled.div`
  .cream-wrap {
    padding: 0 2rem 0;
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    input {
      border: none;
    }
  }
`;

export default Cream;
