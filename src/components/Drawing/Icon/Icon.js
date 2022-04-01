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
  white_circle,
  white_star,
  white_square,
  note,
} from "../../../assets/images/image";

//css
import { Wrapper, IconRow } from "./style";

const Icons = (props) => {
  const { canvas } = props;
  const addIcon = (shape) => {
    if (shape === "cloud") {
      new fabric.Image.fromURL(`${cloud}`, (img) => {
        img.scale(0.1);
        canvas.setActiveObject(img);
        canvas.add(img).centerObject(img).renderAll();
        console.log(canvas);
      });
    } else if (shape === "sprinkle") {
      new fabric.Image.fromURL(`${sprinkle}`, (img) => {
        img.scale(0.1);
        canvas.setActiveObject(img);
        canvas.add(img).centerObject(img).renderAll();
        console.log(canvas);
      });
    } else if (shape === "cherry") {
      new fabric.Image.fromURL(`${cherry}`, (img) => {
        img.scale(0.1);
        canvas.setActiveObject(img);
        canvas.add(img).centerObject(img).renderAll();
        console.log(canvas);
      });
    } else if (shape === "heart_icon") {
      new fabric.Image.fromURL(`${heart_icon}`, (img) => {
        img.scale(0.1);
        canvas.setActiveObject(img);
        canvas.add(img).centerObject(img).renderAll();
        console.log(canvas);
      });
    } else if (shape === "flower_icon") {
      new fabric.Image.fromURL(`${flower_icon}`, (img) => {
        img.scale(0.1);
        canvas.setActiveObject(img);
        canvas.add(img).centerObject(img).renderAll();
        console.log(canvas);
      });
    } else if (shape === "carrot") {
      new fabric.Image.fromURL(`${carrot}`, (img) => {
        img.scale(0.1);
        canvas.setActiveObject(img);
        canvas.add(img).centerObject(img).renderAll();
        console.log(canvas);
      });
    } else if (shape === "balloon") {
      new fabric.Image.fromURL(`${balloon}`, (img) => {
        img.scale(0.1);
        canvas.setActiveObject(img);
        canvas.add(img).centerObject(img).renderAll();
        console.log(canvas);
      });
    } else if (shape === "pearl") {
      new fabric.Image.fromURL(`${pearl}`, (img) => {
        img.scale(0.1);
        canvas.setActiveObject(img);
        canvas.add(img).centerObject(img).renderAll();
        console.log(canvas);
      });
    } else if (shape === "white_circle") {
      new fabric.Image.fromURL(`${white_circle}`, (img) => {
        img.scale(0.1);
        canvas.setActiveObject(img);
        canvas.add(img).centerObject(img).renderAll();
        console.log(canvas);
      });
    } else if (shape === "white_square") {
      new fabric.Image.fromURL(`${white_square}`, (img) => {
        img.scale(0.1);
        canvas.setActiveObject(img);
        canvas.add(img).centerObject(img).renderAll();
        console.log(canvas);
      });
    } else if (shape === "white_star") {
      new fabric.Image.fromURL(`${white_star}`, (img) => {
        img.scale(0.1);
        canvas.setActiveObject(img);
        canvas.add(img).centerObject(img).renderAll();
        console.log(canvas);
      });
    } else if (shape === "note") {
      new fabric.Image.fromURL(`${note}`, (img) => {
        img.scale(0.1);
        canvas.setActiveObject(img);
        canvas.add(img).centerObject(img).renderAll();
        console.log(canvas);
      });
    }
  };
  return (
    <Wrapper>
      <IconRow>
        <input
          type="image"
          src={cloud}
          alt="cloud"
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
          name="shape"
          value="cherry"
          onClick={(e) => {
            addIcon(e.target.value);
          }}
        />
        <input
          type="image"
          src={white_circle}
          alt="white_circle"
          name="shape"
          value="white_circle"
          onClick={(e) => {
            addIcon(e.target.value);
          }}
        />
      </IconRow>
      <IconRow>
        <input
          type="image"
          src={flower_icon}
          alt="flower_icon"
          name="shape"
          value="flower_icon"
          onClick={(e) => {
            addIcon(e.target.value);
          }}
        />
        <input
          type="image"
          src={white_square}
          alt="white_square"
          name="shape"
          value="white_square"
          onClick={(e) => {
            addIcon(e.target.value);
          }}
        />
        <input
          type="image"
          src={balloon}
          alt="balloon"
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
          name="shape"
          value="pearl"
          onClick={(e) => {
            addIcon(e.target.value);
          }}
        />
      </IconRow>
      <IconRow>
        <input
          type="image"
          src={heart_icon}
          alt="heart_icon"
          name="shape"
          value="heart_icon"
          onClick={(e) => {
            addIcon(e.target.value);
          }}
        />
        <input
          type="image"
          src={carrot}
          alt="carrot"
          name="shape"
          value="carrot"
          onClick={(e) => {
            addIcon(e.target.value);
          }}
        />

        <input
          type="image"
          src={white_star}
          alt="white_star"
          name="shape"
          value="white_star"
          onClick={(e) => {
            addIcon(e.target.value);
          }}
        />
        <input
          type="image"
          src={note}
          alt="note"
          name="shape"
          value="note"
          onClick={(e) => {
            addIcon(e.target.value);
          }}
        />
      </IconRow>
    </Wrapper>
  );
};

export default Icons;
