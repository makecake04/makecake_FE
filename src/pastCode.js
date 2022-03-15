const undo = () => {
  // if (canvas.historyUndo.length === 2) {
  //   clearCanvas(canvas);
  //   if (cakeShape === "square") {
  //     new fabric.Image.fromURL(`${square}`, (square) => {
  //       square.left = 54;
  //       square.top = 60;
  //       square.scale(0.8);
  //       square.hasControls = false;
  //       square.lockMovementX = true;
  //       square.lockMovementY = true;
  //       canvas.setActiveObject(square);
  //       canvas.add(square).renderAll();
  //       canvas.historyUndo = [canvas.historyUndo[0]]; //clear historyUndo array (its length gets bigger than 2 when cream's added) and restart
  //     });
  //   } else if (cakeShape === "circle") {
  //     new fabric.Image.fromURL(`${circle}`, (circle) => {
  //       circle.left = 54;
  //       circle.top = 60;
  //       circle.scale(0.8);
  //       circle.hasControls = false;
  //       circle.lockMovementX = true;
  //       circle.lockMovementY = true;
  //       canvas.setActiveObject(circle);
  //       canvas.add(circle).renderAll();
  //       canvas.historyUndo = [canvas.historyUndo[0]];
  //     });
  //   } else if (cakeShape === "heart") {
  //     new fabric.Image.fromURL(`${heart}`, (heart) => {
  //       heart.left = 54;
  //       heart.top = 60;
  //       heart.scale(0.8);
  //       heart.hasControls = false;
  //       heart.lockMovementX = true;
  //       heart.lockMovementY = true;
  //       canvas.setActiveObject(heart);
  //       canvas.add(heart).renderAll();
  //       canvas.historyUndo = [canvas.historyUndo[0]];
  //     });
  //   }
  // } else if (canvas.historyUndo.length > 2) canvas.undo();
  // else {
  //   return;
  // }
  // console.log(canvas.historyUndo);

  console.log(originLength);
  let newLength = canvas._objects.length;
  console.log(newLength);

  if (newLength <= originLength) return;
  let popData = canvas._objects.pop();
  // let newLength = canvas._objects.length;
  redoData.push(popData);
  canvas.renderAll();
  console.log(canvas);
};

//clear
const clearCanvas = (canvas) => {
  canvas.getObjects().forEach((o) => {
    canvas.remove(o);
  });
};

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
  // const rect = new fabric.Rect({
  //   height: 200,
  //   width: 200,
  //   fill: "#ffffff",
  //   left: 95,
  //   top: 100,
  //   shadow: new fabric.Shadow({
  //     color: "#000000",
  //     blur: 10,
  //   }),
  //   hasControls: false, //크기 조절 불가
  //   lockMovementX: true,
  //   lockMovementY: true,
  // });
  // canvas.setActiveObject(rect);
  // canvas.add(rect).renderAll();
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

  // const circle = new fabric.Circle({
  //   radius: 100,
  //   fill: "#ffffff",
  // });
  // canvas.setActiveObject(circle);
  // canvas.add(circle).centerObject(circle).renderAll();
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

  // const heart = new fabric.Path(
  //   "M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z"
  // );
  // heart.set({
  //   top: 280,
  //   left: 190,
  //   scaleX: 0.5,
  //   scaleY: 0.5,
  //   fill: "#ffffff",
  //   angle: 225,
  // });
  // canvas.setActiveObject(heart);
  // canvas.add(heart).renderAll();
};

const colorSave = () => {
  if (!colorPicker) return;
  else if (colorPicker) {
    const state = JSON.stringify(canvas);
    canvas.historyUndo.push(state);
    setColorPicker(false);
    console.log(state);
  }
};
