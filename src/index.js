import Engine from "./Engine";
import heroImg from "../public/img/pic.png";
import "./styles/style.scss";
import "./styles/style2.scss";

const engine = new Engine(800, 600, "CadetBlue", {
  render: "canvas",
  start: start,
  update: update
});
console.log(engine);
let stepCount = 0;
let direction = 1;
let objects = [
  { id: 1, x: 100, y: 100, d: 1, s: 5 },
  { id: 2, x: 220, y: 220, d: 2, s: 10 },
  { id: 2, x: 320, y: 220, d: 2, s: 10 }
];

function start() {}

// function updateObjectPos(o, x, y) {
//   o.x = x;
//   o.y = y;
//   return o;
// }

function renderObject() {
  objects = objects.map(o => {
    const newObj = drawDot(o.id, o.x, o.y, o.d, o.s);
    return newObj;
  });
}

function update() {
  engine.canvas.begin();
  renderObject();
}

function drawDot(id, x, y, d, s) {
  // clear canvas
  engine.canvas.clearRect(0, 0, engine.canvas.WIDTH, engine.canvas.HEIGHT);

  // get start coordinates

  const n = 1;

  // set direction
  if (s == 0) {
    s = Math.floor(15 * Math.random());
    d = Math.floor(8 * Math.random());
    //console.log(id, Math.random());
  } else {
    s--;
  }

  // get new coordinates
  switch (d) {
    case 0:
      // up
      y = y - 1 * n;
      break;
    case 1:
      // rigth
      x = x + 1 * n;
      break;
    case 2:
      // down
      y = y + 1 * n;
      break;
    case 3:
      // left
      x = x - 1 * n;
      break;
    case 4:
      // right-up
      x = x + 1 * n;
      y = y - 1 * n;
      break;
    case 5:
      // right-down
      x = x + 1 * n;
      y = y + 1 * n;
      break;
    case 6:
      // left-down
      x = x - 1 * n;
      y = y + 1 * n;
      break;
    case 7:
      // left-up
      x = x - 1 * n;
      y = y - 1 * n;
      break;
  }
  // check max coordinates
  if (x < 0 || x > engine.maxX || y < 0 || y > engine.maxY) s = 0;

  // create object
  //this.createRect(x - 3, y - 3, 6, 6, "tomato");
  engine.canvas.createImage(heroImg, x, y);

  //console.log(engine);
  engine.canvas.createLine(x, y, engine.mouseX, engine.mouseY);
  //console.log({ id, x, y, d, s });
  return { id, x, y, d, s };
}
// set new coordinates
// this.x = x;
// this.y = y;

// create loop
//const timer = setTimeout(this.drawDot.bind(this), 100);

// canvas.createImage("pic.png", 10, 10);

// const test = new Test();
// const canvas = new Canvas();

// canvas.createRect(250, 50, 200, 100, "red", "green", 5, 20);
// canvas.begin();
//canvas.createRect(200, 200, 200, 100, "red", "green", 5, 30);
// //canvas.createRect(50, 50, 200, 100, "red", "green", 5);
// canvas.begin();
// canvas.createRect(80, 80, 200, 100, "Sienna", "green");
// canvas.changeFill("red", "snow");
// canvas.begin();
// canvas.createRect(110, 110, 200, 100, "green", "yellow", 5);

// canvas.begin();
// canvas.createLine(100, 50, 250, 250);
// canvas.createLine(50, 50, 250, 50, "blue", 10, "round");
// canvas.createLine(50, 50, 250, 50, "blue", 10, "round", 45);

//canvas.createLine(200, 50, 300, 200);
//canvas.createLine(null, null, 100, 200, "white");
//canvas.createLine(100, 200, 300, 200, "blue", 10, "round");
//canvas.begin();
//canvas.createTriangle(200, 50, 300, 200, 100, 200, null, "red", 5);
//canvas.createTriangle(100, 100, 300, 100, 200, 250, "green", "red");

// Star
// canvas.begin();
//canvas.createTriangle(300, 50, 400, 200, 200, 200, "red", "orange", 10);
// canvas.createTriangle(200, 100, 400, 100, 300, 250, "black", "orange", 10);
// canvas.paint();

//canvas.createCircle(195, 150, 100, 0, 2 * Math.PI, false, "red", "green", 10);
