import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { fabric } from "fabric";
import "fabric-history";
import { saveAs } from "file-saver";
import disableScroll from "disable-scroll";

//mui
import { Box } from "@mui/material";
import { Slider } from "@mui/material";

//component
import { Cream, Icons } from "../components/component";

//image
import deleteIcon from "../images/header/fi_trash-2.png";
import download from "../images/header/fi_download.png";
import logo from "../images/header/Component 8.png";
import square from "../images/cakesheet/Rectangle 5881 (1).png";
import circle from "../images/cakesheet/Ellipse 59 (1).png";
import heart from "../images/cakesheet/Vector (5).png";
import undoIcon from "../svg/Component 9.svg";
import redoIcon from "../svg/Component 10.svg";
import plusIcon from "../svg/Component 11.svg";
import minusIcon from "../svg/Component 12.svg";
import bringFrontIcon from "../svg/Component 13.svg";
import sendBackIcon from "../svg/Component 14.svg";

const Design = () => {
  disableScroll.on();
  const [canvas, setCanvas] = useState("");
  const [cakeShape, setCakeShape] = useState("");
  const [isDrawing, setIsDrawing] = useState(false);
  const [originLength, setOriginLength] = useState(0);
  const [option, setOption] = useState("cream");
  const [icon, setIcon] = useState("");
  const [fileName, setFileName] = useState("선택한 파일이 없습니다");
  const undoRef = useRef(null);
  const redoRef = useRef(null);
  const fileInput = React.useRef();

  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  const selectFile = (e) => {
    const reader = new FileReader();
    const currentFile = fileInput.current.files[0];
    setFileName(currentFile.name);
    reader.readAsDataURL(currentFile);
    reader.onloadend = () => {
      if (currentFile.size > 5000000) {
        alert("파일 사이즈가 너무 큽니다!");
        return;
      }
      fabric.Image.fromURL(reader.result, (img) => {
        img.scale(0.1);
        canvas.add(img);
        canvas.renderAll();
      });
    };
  };

  const colorChange = (e) => {
    let obj = canvas.getActiveObject();
    if (icon === "backgroundColor" || (obj && icon === "backgroundColor")) {
      canvas.backgroundColor = e.target.value;
    } else if (obj) {
      if (!obj.filters && obj.fill !== null && !obj._objects) {
        obj.set({ fill: e.target.value });
      } else if (obj._objects) {
        for (let i = 0; i < obj._objects.length; i++) {
          obj._objects[i].set({
            fill: e.target.value,
          });
        }
      } else if (obj.filters) {
        let tint = new fabric.Image.filters.BlendColor({
          color: e.target.value,
          mode: "multiply",
        });
        obj.filters.push(tint);
        obj.applyFilters();
        obj.filters.pop(); //reset the filter so the obj's color can be changed responsively
      } else {
        obj.set({ stroke: e.target.value });
      }
    }
    canvas.renderAll();
  };

  const enableScroll = () => {
    disableScroll.off();
  };

  const _disableScroll = () => {
    disableScroll.on();
  };

  //New Canvas
  const initCanvas = () =>
    new fabric.Canvas("canvas", {
      height: 390,
      width: 390,
      backgroundColor: "#eeeeee",
      preserveObjectStacking: true,
    });

  //Rect
  const addRect = (canvas) => {
    new fabric.Image.fromURL(`${square}`, (square) => {
      square.scale(0.85);
      square.hasControls = false;
      square.lockMovementX = true;
      square.lockMovementY = true;
      canvas.setActiveObject(square);
      canvas.add(square).centerObject(square).renderAll();
    });
  };

  //Circle
  const addCircle = (canvas) => {
    new fabric.Image.fromURL(`${circle}`, (circle) => {
      circle.scale(0.85);
      circle.hasControls = false;
      circle.lockMovementX = true;
      circle.lockMovementY = true;
      canvas.setActiveObject(circle);
      canvas.add(circle).centerObject(circle).renderAll();
    });
  };

  //Heart
  const addHeart = (canvas) => {
    new fabric.Image.fromURL(`${heart}`, (heart) => {
      heart.scale(0.85);
      heart.hasControls = false;
      heart.lockMovementX = true;
      heart.lockMovementY = true;
      canvas.setActiveObject(heart);
      canvas.add(heart).centerObject(heart).renderAll();
    });
  };

  //Text
  const addText = (canvas) => {
    const text = new fabric.IText("Tap & Edit", {
      fontFamily: "noto sans",
      fill: "#00000",
      fontSize: 40,
    });
    canvas.setActiveObject(text);
    canvas.add(text).centerObject(text).renderAll();
  };

  //delete
  const remove = (canvas) => {
    if (canvas.getActiveObject().lockMovementX) {
      //exclude the cake sheet objects
      return;
    } else {
      canvas.remove(canvas.getActiveObject());
    }
  };

  let redoData = [];
  let undoData = [];
  //Start Free Drawing
  const drawing = (canvas) => {
    let originData = canvas._objects.length;
    setOriginLength(originData);
    console.log(originLength);
    console.log(canvas.historyUndo);
    setIsDrawing(true);
    canvas.isDrawingMode = true;
    canvas.historyUndo = [];
    // canvas.freeDrawingCursor = "none";
    canvas.renderAll();
  };

  //undo
  const undo = () => {
    let newLength = canvas._objects.length;
    if (newLength <= originLength) return;
    let popData = canvas._objects.pop();
    redoData.push(popData);
    canvas.renderAll();
  };

  //redo
  const redo = () => {
    if (redoData.length === 0) return;
    let popData = redoData.pop();
    undoData.push(popData);
    canvas._objects.push(popData);
    canvas.renderAll();
  };

  //Brush Width
  const brushWidth = (e) => {
    canvas.freeDrawingBrush.width = parseInt(e.target.value, 10);
    canvas.renderAll();
    console.log(e.target.value);
  };

  //Brush Color
  const brushColor = (e) => {
    canvas.freeDrawingBrush.color = e.target.value;
    canvas.renderAll();
  };

  //Stop Free Drawing
  const stopDrawing = (canvas) => {
    setIsDrawing(false);
    canvas.isDrawingMode = false;
    console.log(canvas.isDrawingMode);
    canvas.renderAll();
  };

  //save Canvas as image (png)
  const complete = (canvas) => {
    const canvasImage = canvas.toDataURL({
      format: "png",
      multiplier: 1.5,
    });
    saveAs(canvasImage, "my cake");
  };

  //bring to front
  const bringFront = (canvas) => {
    let obj = canvas.getActiveObject();
    canvas.bringToFront(obj);
    canvas.renderAll();
  };

  //send back
  const sendBack = (canvas) => {
    let obj = canvas.getActiveObject();
    canvas.sendBackwards(obj);
    canvas.renderAll();
  };

  return (
    <Wrap>
      <div className="canvas-wrap">
        <div className="header">
          <div className="header-btns">
            <div className="header-btns-left">
              {isDrawing && (
                <input
                  id="drawing-line-color"
                  type="color"
                  defaultValue={"#000000"}
                  onChange={brushColor}
                />
              )}
              {!isDrawing && (
                <input
                  id="object-color"
                  type="color"
                  defaultValue="#ffadcb"
                  onChange={colorChange}
                />
              )}
            </div>

            <img
              src={logo}
              alt=""
              style={{ width: "30%", height: "30%", marginLeft: "3.5rem" }}
            />
            <div className="header-btns-right">
              <button onClick={() => remove(canvas)}>
                <img src={deleteIcon} alt="delete" />
              </button>
              <button onClick={() => complete(canvas)}>
                <img src={download} alt="download" />
              </button>
            </div>
          </div>
        </div>

        <canvas id="canvas" />

        <div className="options-wrap">
          {isDrawing && (
            <div className="drawing-buttons">
              <button ref={undoRef} onClick={undo}>
                <img src={undoIcon} alt="undo" />
              </button>

              <div className="drawing-buttons-zoom">
                <button
                  onClick={() => {
                    if (canvas.viewportTransform[0] > 1)
                      canvas.zoomToPoint(
                        new fabric.Point(canvas.width / 2, canvas.height / 2),
                        canvas.viewportTransform[0] * 0.8
                      );
                  }}
                >
                  <img src={minusIcon} alt="minusIcon" />
                </button>

                <button
                  onClick={() => {
                    canvas.zoomToPoint(
                      new fabric.Point(canvas.width / 2, canvas.height / 2),
                      canvas.viewportTransform[0] / 0.8
                    );
                  }}
                >
                  <img src={plusIcon} alt="plusIcon" />
                </button>
              </div>

              <button ref={redoRef} onClick={redo}>
                <img src={redoIcon} alt="redo" />
              </button>
            </div>
          )}
          {!isDrawing && (
            <div className="default-buttons">
              <button onClick={() => sendBack(canvas)}>
                <img src={sendBackIcon} alt="뒤로!" />
              </button>
              {cakeShape && (
                <>
                  {option === "cream" && (
                    <button
                      onClick={() => {
                        setOption("cream");
                        stopDrawing(canvas);
                      }}
                      style={{ color: "#ff679e" }}
                    >
                      크림 모양
                    </button>
                  )}
                  {option !== "cream" && (
                    <button
                      onClick={() => {
                        setOption("cream");
                        stopDrawing(canvas);
                      }}
                    >
                      크림 모양
                    </button>
                  )}
                  {option === "icons" && (
                    <button
                      onClick={() => {
                        setOption("icons");
                        stopDrawing(canvas);
                      }}
                      style={{ color: "#ff679e" }}
                    >
                      꾸미기
                    </button>
                  )}
                  {option !== "icons" && (
                    <button
                      onClick={() => {
                        setOption("icons");
                        stopDrawing(canvas);
                      }}
                    >
                      꾸미기
                    </button>
                  )}

                  {option === "drawing" && (
                    <button
                      onClick={() => {
                        setOption("drawing");
                        drawing(canvas);
                      }}
                      style={{ color: "#ff679e" }}
                    >
                      데코펜
                    </button>
                  )}
                  {option !== "drawing" && (
                    <button
                      onClick={() => {
                        setOption("drawing");
                        drawing(canvas);
                      }}
                    >
                      데코펜
                    </button>
                  )}
                </>
              )}
              {!cakeShape && (
                <>
                  <button>크림 모양</button>
                  <button>꾸미기</button>
                  <button>데코펜</button>
                </>
              )}
              <button onClick={() => bringFront(canvas)}>
                <img src={bringFrontIcon} alt="위로!" />
              </button>
            </div>
          )}

          {!cakeShape && (
            <div className="select-cake-shape">
              <h3>케이크 시트를 먼저 골라주세요!</h3>

              <div className="select-cake-shape-caution">
                *시트는 한 번 고르시면, 바꾸실 수 없어요*
              </div>

              <div className="cake-shape">
                <button
                  onClick={() => {
                    addRect(canvas);
                    setCakeShape("square");
                  }}
                >
                  <img src={square} alt="Square" />
                </button>
                <button
                  onClick={() => {
                    addCircle(canvas);
                    setCakeShape("circle");
                  }}
                >
                  <img src={circle} alt="Circle" />
                </button>
                <button
                  onClick={() => {
                    addHeart(canvas);
                    setCakeShape("heart");
                  }}
                >
                  <img className="heart" src={heart} alt="Heart" />
                </button>
              </div>
            </div>
          )}

          {cakeShape && (
            <div className="options">
              {/* <div className="options-default">
                {option === "cream" && (
                  <button
                    onClick={() => {
                      setOption("cream");
                      stopDrawing(canvas);
                    }}
                    style={{ color: "#ff679e" }}
                  >
                    크림 모양
                  </button>
                )}
                {option !== "cream" && (
                  <button
                    onClick={() => {
                      setOption("cream");
                      stopDrawing(canvas);
                    }}
                  >
                    크림 모양
                  </button>
                )}
                {option === "icons" && (
                  <button
                    onClick={() => {
                      setOption("icons");
                      stopDrawing(canvas);
                    }}
                    style={{ color: "#ff679e" }}
                  >
                    꾸미기
                  </button>
                )}
                {option !== "icons" && (
                  <button
                    onClick={() => {
                      setOption("icons");
                      stopDrawing(canvas);
                    }}
                  >
                    꾸미기
                  </button>
                )}

                {option === "drawing" && (
                  <button
                    onClick={() => {
                      setOption("drawing");
                      drawing(canvas);
                    }}
                    style={{ color: "#ff679e" }}
                  >
                    데코펜
                  </button>
                )}
                {option !== "drawing" && (
                  <button
                    onClick={() => {
                      setOption("drawing");
                      drawing(canvas);
                    }}
                  >
                    데코펜
                  </button>
                )}
              </div> */}

              {option === "cream" && (
                <Cream canvas={canvas} cakeShape={cakeShape} />
              )}

              {option === "icons" && (
                <>
                  <div className="icons-header">
                    {icon === "icons" && (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                      >
                        <hr
                          style={{
                            border: "1px solid #ff679e",
                            width: "2rem",
                            borderRadius: "0.5rem",
                          }}
                        />
                        <button
                          onClick={() => setIcon("icons")}
                          style={{
                            color: "#ff679e",
                            marginTop: "0.4rem",
                          }}
                        >
                          아이콘
                        </button>
                      </div>
                    )}
                    {icon !== "icons" && (
                      <button onClick={() => setIcon("icons")}>아이콘</button>
                    )}

                    {icon === "text" && (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                      >
                        <hr
                          style={{
                            border: "1px solid #ff679e",
                            width: "2rem",
                            borderRadius: "0.5rem",
                          }}
                        />
                        <button
                          onClick={() => {
                            setIcon("text");
                            addText(canvas);
                          }}
                          style={{
                            color: "#ff679e",
                            marginTop: "0.4rem",
                          }}
                        >
                          텍스트
                        </button>
                      </div>
                    )}
                    {icon !== "text" && (
                      <button
                        onClick={() => {
                          setIcon("text");
                          addText(canvas);
                        }}
                      >
                        텍스트
                      </button>
                    )}

                    {icon === "image" && (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                      >
                        <hr
                          style={{
                            border: "1px solid #ff679e",
                            width: "2rem",
                            borderRadius: "0.5rem",
                          }}
                        />
                        <button
                          onClick={() => setIcon("image")}
                          style={{
                            color: "#ff679e",
                            marginTop: "0.1rem",
                          }}
                        >
                          <label>
                            이미지
                            <input
                              style={{ border: "none" }}
                              type="file"
                              accept=".jpg, .jpeg, .png"
                              onClick={() => setIcon("image")}
                              onChange={selectFile}
                              ref={fileInput}
                            />
                          </label>
                        </button>
                      </div>
                    )}
                    {icon !== "image" && (
                      <button onClick={() => setIcon("image")}>
                        <label>
                          이미지
                          <input
                            style={{ border: "none" }}
                            type="file"
                            accept=".jpg, .jpeg, .png"
                            onClick={() => setIcon("image")}
                            onChange={selectFile}
                            ref={fileInput}
                          />
                        </label>
                      </button>
                    )}

                    {icon === "backgroundColor" && (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                      >
                        <hr
                          style={{
                            border: "1px solid #ff679e",
                            width: "2rem",
                            borderRadius: "0.5rem",
                          }}
                        />
                        <button
                          onClick={() => setIcon("backgroundColor")}
                          style={{
                            color: "#ff679e",
                            marginTop: "0.4rem",
                          }}
                        >
                          배경색
                        </button>
                      </div>
                    )}
                    {icon !== "backgroundColor" && (
                      <button onClick={() => setIcon("backgroundColor")}>
                        배경색
                      </button>
                    )}
                  </div>
                  {icon === "icons" && <Icons canvas={canvas} />}
                  {icon === "backgroundColor" && (
                    <div className="background-change-text">
                      <p>배경 색상을 변경해보세요!</p>
                      <p>*좌측 상단의 컬러 피커를 활용하세요*</p>
                    </div>
                  )}
                </>
              )}

              {option === "drawing" && (
                <div className="drawing-options">
                  <label>크기: </label>
                  {/* <input
                    id="drawing-line-width"
                    type="range"
                    min="1"
                    max="30"
                    step="1"
                    defaultValue="1"
                    onChange={brushWidth}
                    onTouchStart={enableScroll}
                    onTouchEnd={_disableScroll}
                  /> */}
                  <Box>
                    <Slider
                      min={1}
                      max={30}
                      sx={{
                        width: 130,
                        height: 8,
                        color: "#ff679e",
                      }}
                      defaultValue={1}
                      onChange={brushWidth}
                      // valueLabelDisplay="auto"
                      // getAriaValueText={valuetext}
                    />
                  </Box>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
  max-height: 844px;
  text-align: center;
  font-family: Roboto;
  button {
    font-family: Roboto;
    border: none;
  }
  .canvas-wrap {
    display: flex;
    flex-direction: column;
    min-height: 844px;
    .lower-canvas,
    .upper-canvas {
      height: 41rem !important;
      padding-bottom: 1.2rem;
    }
    .header {
      padding: 5px 5px 5px 0px;
      button {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
      button + button {
        margin-left: 7px;
      }
      input[type="color"] {
        padding: 0px 2.5px;
        width: 48px;
        height: 48px;
        background-color: transparent;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border: none;
        cursor: pointer;
        &::-webkit-color-swatch {
          border-radius: 50%;
          border: 1px solid #e2e2e2;
        }
      }
      .header-btns {
        display: flex;
        justify-content: space-between;
        .header-btns-left {
          display: flex;
          .header-btns-left-zoom {
            margin-top: 4px;
          }
        }
        .header-btns-right {
          margin-top: 4px;
        }
      }
    }
  }

  .options-wrap {
    position: relative;
    border-radius: 0.8rem 0.8rem 0 0;
    flex: 2;
    background-color: #fee9ee;
    .default-buttons {
      height: 62px;
      padding: 1rem 1.5rem 0.8rem;
      display: flex;
      justify-content: space-between;
    }
    .drawing-buttons {
      padding: 1rem 1.5rem 0.8rem;
      display: flex;
      justify-content: space-between;
    }

    .select-cake-shape {
      padding: 0 1rem;
      h3 {
        margin-bottom: 0.5rem;
      }
      .select-cake-shape-caution {
        font-size: 1.2rem;
        margin-bottom: 3rem;
        color: #ff679e;
      }
      button + button {
        padding-left: 2rem;
      }
      img {
        width: 10rem;
      }
      .heart {
        height: 10rem;
      }
    }
    .options {
      .options-default {
        padding: 0rem 4rem 1rem;
        margin-bottom: 0.3rem;
        display: flex;
        justify-content: space-between;
        button {
          color: #777777;
          font-weight: 600;
        }
      }
      .icons-header {
        display: flex;
        justify-content: space-between;
      }
      .drawing-options {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 2.5rem;

        .MuiBox-root {
          margin-left: 1.5rem;
          padding-top: 0.4rem;
        }
        .MuiSlider-thumb {
          width: 1.5rem;
          height: 1.5rem;
        }
        .MuiSlider-rail {
          background-color: #ffffff;
          opacity: 1;
        }

        .MuiSlider-valueLabel {
          display: none;
          .MuiSlider-valueLabelOpen {
            display: none;
          }
        }

        /* input[type="range"] {
          -webkit-appearance: none;
          width: 12rem;
          height: 1.1rem; */
        /* background: rgba(255, 255, 255, 0.6); */
        /* border-radius: 0.5rem;
          background-image: linear-gradient(#ff679e, #ff679e);
          background-size: 100%;
          background-repeat: no-repeat;

          &::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 1.5rem;
            width: 1.5rem;
            border-radius: 50%;
            background: #ff679e;
            &:hover {
              background: #ff679e;
            }
          } */

        /* &::-moz-range-thumb {
          -webkit-appearance: none;
          height: 1.5rem;
          width: 1.5rem;
          border-radius: 50%;
          background: #ff679e;
          &:hover{
            background: #ff679e;
          }
        }

        &::-ms-thumb {
          -webkit-appearance: none;
          height: 1.5rem;
          width: 1.5rem;
          border-radius: 50%;
          background: #ff679e;
          &:hover{
            background: #ff679e;
          }
        } */
        /* &::-webkit-slider-runnable-track {
            -webkit-appearance: none;
            box-shadow: none;
            border: none;
            background: transparent;
          } 
        } */
      }
      .background-change-text {
        margin-top: 2rem;
        p + p {
          margin-top: 1rem;
        }
      }
    }

    input[type="file"] {
      width: 0;
    }
    input[type="radio"] {
      vertical-align: top;
      margin-bottom: 7px;
    }
  }
`;
export default Design;
