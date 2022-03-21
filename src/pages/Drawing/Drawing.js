import React, { useState, useEffect } from "react";
import { fabric } from "fabric";
import "fabric-history";
import { saveAs } from "file-saver";
import disableScroll from "disable-scroll";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { useDispatch } from "react-redux";

//reducer
import { actionCreators as designAction } from "../../redux/modules/design";

//mui
import { Box } from "@mui/material";
import { Slider } from "@mui/material";

//component
import { Cream, Icon, Text, Image, BgColor } from "../../components/component";

//image
import {
  bring_front,
  redo_icon,
  send_back,
  undo_icon,
  zoom_in,
  zoom_out,
  circle,
  heart,
  square,
  remove_item,
  logo,
} from "../../assets/images/image";

//css
import { Wrap, ModalWrap } from "./style";

const Design = () => {
  disableScroll.on();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [canvas, setCanvas] = useState("");
  const [cakeShape, setCakeShape] = useState("");
  const [isDrawing, setIsDrawing] = useState(false);
  const [originLength, setOriginLength] = useState(0);
  const [option, setOption] = useState("cream");
  const [icon, setIcon] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  //color change
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
        obj.filters.pop(); //reset the filter so the obj's color can be changed in response to the color picker
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
      selection: false, //disable group selection
    });

  //Rect
  const addRect = (canvas) => {
    new fabric.Image.fromURL(`${square}`, (square) => {
      square.scale(0.85);
      square.hasControls = false;
      square.lockMovementX = true;
      square.lockMovementY = true;
      // canvas.selection = false;

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
    setIsDrawing(true);
    canvas.isDrawingMode = true;
    // canvas.historyUndo = [];
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
  const complete = () => {
    const canvasImage = canvas.toDataURL({
      format: "png",
      multiplier: 1.5,
    });
    dispatch(designAction.addDesignDB(canvasImage));
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
              {cakeShape && isDrawing && (
                <input
                  id="drawing-line-color"
                  type="color"
                  defaultValue={"#000000"}
                  onChange={brushColor}
                />
              )}
              {cakeShape && !isDrawing && (
                <input
                  id="object-color"
                  type="color"
                  defaultValue="#ffadcb"
                  onChange={colorChange}
                />
              )}
              {cakeShape && (
                <button onClick={() => remove(canvas)}>
                  <img src={remove_item} alt="delete" />
                </button>
              )}

              {/* {isDrawing && (
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
              <button onClick={() => remove(canvas)}>
                <img src={remove_item} alt="delete" />
              </button> */}
            </div>

            {cakeShape && (
              <img
                src={logo}
                alt="Logo"
                className="logo"
                style={{
                  width: "30%",
                  height: "30%",
                  marginRight: "2.7rem",
                }}
                onClick={() => navigate("/")}
              />
            )}
            {!cakeShape && (
              <img
                src={logo}
                alt="Logo"
                className="logo"
                style={{
                  width: "30%",
                  height: "30%",
                  marginLeft: "2.2rem",
                }}
                onClick={() => navigate("/")}
              />
            )}

            <div className="header-btns-right">
              {cakeShape && (
                <button
                  onClick={() => setModalIsOpen(true)}
                  style={{ color: "#ff679e" }}
                >
                  완료
                </button>
              )}
              {/* {!cakeShape && <button style={{ color: "#ff679e" }}>완료</button>} */}
            </div>
          </div>
        </div>

        <canvas id="canvas" />

        <div className="options-wrap">
          {!isDrawing && (
            <div className="default-buttons">
              <button onClick={() => sendBack(canvas)}>
                <img src={send_back} alt="뒤로!" />
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
                <img src={bring_front} alt="위로!" />
              </button>
            </div>
          )}

          {isDrawing && (
            <div className="drawing-buttons">
              <button onClick={undo}>
                <img src={undo_icon} alt="undo" />
              </button>

              <button
                onClick={() => {
                  setOption("cream");
                  stopDrawing(canvas);
                }}
              >
                크림 모양
              </button>

              <button
                onClick={() => {
                  setOption("icons");
                  stopDrawing(canvas);
                }}
              >
                꾸미기
              </button>

              <button
                onClick={() => {
                  setOption("drawing");
                  drawing(canvas);
                }}
                style={{ color: "#ff679e" }}
              >
                데코펜
              </button>

              <button onClick={redo}>
                <img src={redo_icon} alt="redo" />
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
                            fontSize: "1.4rem",
                          }}
                        >
                          아이콘
                        </button>
                      </div>
                    )}
                    {icon !== "icons" && (
                      <button
                        onClick={() => setIcon("icons")}
                        style={{ fontSize: "1.5rem" }}
                      >
                        아이콘
                      </button>
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
                          }}
                          style={{
                            color: "#ff679e",
                            marginTop: "0.4rem",
                            fontSize: "1.5rem",
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
                        }}
                        style={{ fontSize: "1.5rem" }}
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
                          onClick={() => {
                            setIcon("icon");
                          }}
                          style={{
                            color: "#ff679e",
                            marginTop: "0.4rem",
                            fontSize: "1.5rem",
                          }}
                        >
                          이미지
                        </button>
                      </div>
                    )}
                    {icon !== "image" && (
                      <button
                        onClick={() => {
                          setIcon("image");
                        }}
                        style={{ fontSize: "1.5rem" }}
                      >
                        이미지
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
                            fontSize: "1.5rem",
                          }}
                        >
                          배경색
                        </button>
                      </div>
                    )}
                    {icon !== "backgroundColor" && (
                      <button
                        onClick={() => setIcon("backgroundColor")}
                        style={{ fontSize: "1.5rem" }}
                      >
                        배경색
                      </button>
                    )}
                  </div>
                  {icon === "icons" && <Icon canvas={canvas} />}
                  {icon === "text" && <Text canvas={canvas} />}
                  {icon === "image" && <Image canvas={canvas} />}
                  {icon === "backgroundColor" && <BgColor />}
                </>
              )}

              {option === "drawing" && (
                <div className="drawing-options">
                  <div className="drawing-options-brush">
                    {" "}
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
                      />
                    </Box>
                  </div>

                  <div className="drawing-buttons-zoom">
                    캔버스 크기:
                    <button
                      onClick={() => {
                        if (canvas.viewportTransform[0] > 1)
                          canvas.zoomToPoint(
                            new fabric.Point(
                              canvas.width / 2,
                              canvas.height / 2
                            ),
                            canvas.viewportTransform[0] * 0.8
                          );
                      }}
                    >
                      <img src={zoom_out} alt="minusIcon" />
                    </button>
                    <button
                      onClick={() => {
                        canvas.zoomToPoint(
                          new fabric.Point(canvas.width / 2, canvas.height / 2),
                          canvas.viewportTransform[0] / 0.8
                        );
                      }}
                    >
                      <img src={zoom_in} alt="plusIcon" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(76, 76, 76, 0.7)",
            zIndex: "20",
          },
          content: {
            position: "absolute",
            top: "35%",
            left: "50%",
            bottom: "auto",
            width: "300px",
            height: "150px",
            padding: "0",
            border: "solid 1px #eee",
            overflow: "auto",
            borderRadius: "5px",
            transform: "translate(-50%,-50%)",
            WebkitOverflowScrolling: "touch",
          },
        }}
      >
        <ModalWrap>
          <p className="title">저장하시겠어요?</p>
          <p className="description">
            완료를 누르시면 도안을 저장할 수 있어요.
          </p>
          <hr className="modal_hr" />
          <div className="footer_wrap">
            <button className="footer_one" onClick={() => complete()}>
              완료
            </button>
            <div className="vl" />
            <button
              className="footer_two"
              onClick={() => setModalIsOpen(false)}
            >
              취소
            </button>
          </div>
        </ModalWrap>
      </Modal>
    </Wrap>
  );
};

export default Design;
