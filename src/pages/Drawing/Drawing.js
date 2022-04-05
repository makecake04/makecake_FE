import React, { useState, useEffect } from "react";
import { fabric } from "fabric";
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
  tutorial,
  close_white,
} from "../../assets/images/image";

//css
import {
  Wrapper,
  CanvasWrapper,
  Header,
  ButtonWrapper,
  LeftButtons,
  RightButton,
  Logo,
  Tutorial,
  LogoBtn,
  BodyWrapper,
  DefaultButtons,
  CreamButton,
  DecoButton,
  DecoPenButton,
  DrawingButtons,
  CakeShapeWrapper,
  CakeShape,
  DecoHeader,
  DecoActivate,
  DrawingOptions,
  DrawingBrush,
  ZoomButtons,
  ModalWrap,
  VerticalLine,
  ModalChoice,
  ModalWrap2,
} from "./style";

const Design = () => {
  // disableScroll.on();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [canvas, setCanvas] = useState("");
  const [pickerColor, setPickerColor] = useState("#ffadcb");
  const [cakeShape, setCakeShape] = useState("");
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawBrushWidth, setDrawBrushWidth] = useState(1);
  const [originLength, setOriginLength] = useState(0);
  const [option, setOption] = useState("cream");
  const [icon, setIcon] = useState("icons");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modal2IsOpen, setModal2IsOpen] = useState(true);

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
    setPickerColor(e.target.value);
    canvas.renderAll();
  };

  //change color when clicked
  const colorClickChange = (e) => {
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
    setPickerColor(e.target.value);
    canvas.renderAll();
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
    canvas.freeDrawingBrush.color = pickerColor;
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
    setDrawBrushWidth(canvas.freeDrawingBrush.width);
    canvas.renderAll();
  };

  //Brush Color
  const brushColor = (e) => {
    canvas.freeDrawingBrush.color = e.target.value;
    setPickerColor(e.target.value);
    canvas.renderAll();
  };

  //Stop Free Drawing
  const stopDrawing = (canvas) => {
    setIsDrawing(false);
    canvas.isDrawingMode = false;
    canvas.renderAll();
  };

  //save Canvas as image (png)
  const complete = () => {
    const canvasImage = canvas.toDataURL({
      format: "png",
      multiplier: 1.5,
    });
    dispatch(designAction.addDesignDB(canvasImage));
    // saveAs(canvasImage, "my cake");
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
    <Wrapper>
      <CanvasWrapper>
        <Header>
          <LogoBtn>
            <Logo onClick={() => navigate("/")} />
            <Tutorial onClick={() => setModal2IsOpen(true)} />
          </LogoBtn>
          <ButtonWrapper>
            <LeftButtons>
              {cakeShape && isDrawing && (
                <input
                  id="drawing-line-color"
                  type="color"
                  value={pickerColor}
                  onChange={brushColor}
                />
              )}
              {cakeShape && !isDrawing && (
                <input
                  id="object-color"
                  type="color"
                  value={pickerColor}
                  onChange={colorChange}
                  onClick={colorClickChange}
                />
              )}
              {cakeShape && !isDrawing && (
                <button onClick={() => remove(canvas)}>
                  <img src={remove_item} alt="delete" />
                </button>
              )}
            </LeftButtons>

            {cakeShape && (
              <RightButton onClick={() => setModalIsOpen(true)}>
                완료
              </RightButton>
            )}
          </ButtonWrapper>
        </Header>

        <canvas id="canvas" />

        <BodyWrapper>
          {!isDrawing && (
            <DefaultButtons>
              <button onClick={() => sendBack(canvas)}>
                <img src={send_back} alt="send-back" />
              </button>
              {cakeShape && (
                <>
                  <CreamButton
                    option={option}
                    onClick={() => {
                      setOption("cream");
                      stopDrawing(canvas);
                      if (icon === "backgroundColor") setIcon("icons");
                    }}
                  >
                    크림 모양
                  </CreamButton>

                  <DecoButton
                    option={option}
                    onClick={() => {
                      setOption("icons");
                      stopDrawing(canvas);
                    }}
                  >
                    꾸미기
                  </DecoButton>

                  <DecoPenButton
                    option={option}
                    onClick={() => {
                      setOption("drawing");
                      drawing(canvas);
                    }}
                  >
                    데코펜
                  </DecoPenButton>
                </>
              )}
              {!cakeShape && (
                <>
                  <span>크림 모양</span>
                  <span>꾸미기</span>
                  <span>데코펜</span>
                </>
              )}
              <button onClick={() => bringFront(canvas)}>
                <img src={bring_front} alt="bring-front" />
              </button>
            </DefaultButtons>
          )}

          {isDrawing && (
            <DrawingButtons>
              <button onClick={undo}>
                <img src={undo_icon} alt="undo" />
              </button>

              <CreamButton
                onClick={() => {
                  setOption("cream");
                  stopDrawing(canvas);
                }}
              >
                크림 모양
              </CreamButton>

              <DecoButton
                onClick={() => {
                  setOption("icons");
                  stopDrawing(canvas);
                }}
              >
                꾸미기
              </DecoButton>

              <DecoPenButton
                option={option}
                onClick={() => {
                  setOption("drawing");
                  drawing(canvas);
                }}
              >
                데코펜
              </DecoPenButton>

              <button onClick={redo}>
                <img src={redo_icon} alt="redo" />
              </button>
            </DrawingButtons>
          )}

          {!cakeShape && (
            <CakeShapeWrapper>
              <h3>케이크 시트를 먼저 골라주세요!</h3>
              <p>*시트는 한 번 고르시면, 바꾸실 수 없어요*</p>

              <CakeShape>
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
                  <img src={heart} alt="Heart" />
                </button>
              </CakeShape>
            </CakeShapeWrapper>
          )}

          {cakeShape && (
            <>
              {option === "cream" && (
                <Cream canvas={canvas} cakeShape={cakeShape} />
              )}

              {option === "icons" && (
                <>
                  <DecoHeader>
                    {icon === "icons" && (
                      <DecoActivate>
                        <hr />
                        <button onClick={() => setIcon("icons")}>아이콘</button>
                      </DecoActivate>
                    )}
                    {icon !== "icons" && (
                      <button onClick={() => setIcon("icons")}>아이콘</button>
                    )}

                    {icon === "text" && (
                      <DecoActivate>
                        <hr />
                        <button
                          onClick={() => {
                            setIcon("text");
                          }}
                        >
                          텍스트
                        </button>
                      </DecoActivate>
                    )}
                    {icon !== "text" && (
                      <button
                        onClick={() => {
                          setIcon("text");
                        }}
                      >
                        텍스트
                      </button>
                    )}

                    {icon === "image" && (
                      <DecoActivate>
                        <hr />
                        <button
                          onClick={() => {
                            setIcon("image");
                          }}
                        >
                          이미지
                        </button>
                      </DecoActivate>
                    )}
                    {icon !== "image" && (
                      <button
                        onClick={() => {
                          setIcon("image");
                        }}
                      >
                        이미지
                      </button>
                    )}

                    {icon === "backgroundColor" && (
                      <DecoActivate>
                        <hr />
                        <button
                          onClick={() => {
                            setIcon("backgroundColor");
                          }}
                        >
                          배경색
                        </button>
                      </DecoActivate>
                    )}
                    {icon !== "backgroundColor" && (
                      <button onClick={() => setIcon("backgroundColor")}>
                        배경색
                      </button>
                    )}
                  </DecoHeader>
                  {icon === "icons" && <Icon canvas={canvas} />}
                  {icon === "text" && <Text canvas={canvas} />}
                  {icon === "image" && <Image canvas={canvas} />}
                  {icon === "backgroundColor" && <BgColor />}
                </>
              )}

              {option === "drawing" && (
                <DrawingOptions>
                  <DrawingBrush>
                    <label>크기: </label>
                    <Box>
                      <Slider
                        min={1}
                        max={30}
                        sx={{
                          width: 130,
                          height: 8,
                          color: "#ff679e",
                        }}
                        value={drawBrushWidth}
                        onChange={brushWidth}
                      />
                    </Box>
                  </DrawingBrush>

                  <ZoomButtons>
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
                  </ZoomButtons>
                </DrawingOptions>
              )}
            </>
          )}
        </BodyWrapper>
      </CanvasWrapper>

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
            width: "302px",
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
          <p>저장하시겠어요?</p>
          <p>완료를 누르시면 도안을 저장할 수 있어요.</p>
          <hr />
          <ModalChoice>
            <button onClick={() => complete()}>완료</button>
            <VerticalLine />
            <button onClick={() => setModalIsOpen(false)}>취소</button>
          </ModalChoice>
        </ModalWrap>
      </Modal>

      <Modal
        isOpen={modal2IsOpen}
        onRequestClose={() => {
          setModal2IsOpen(false);
        }}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            zIndex: "20",
          },
          content: {
            position: "absolute",
            top: "50%",
            left: "50%",
            bottom: "auto",
            width: "100vw",
            height: "auto",
            padding: "0",
            border: "none",
            overflow: "auto",
            borderRadius: "5px",
            backgroundColor: "transparent",
            transform: "translate(-50%,-50%)",
            WebkitOverflowScrolling: "touch",
          },
        }}
      >
        <ModalWrap2>
          <img
            src={close_white}
            alt="close"
            onClick={() => setModal2IsOpen(false)}
          />
          <img src={tutorial} alt="tutorial" />
        </ModalWrap2>
      </Modal>
    </Wrapper>
  );
};

export default Design;
