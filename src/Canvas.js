class Canvas {
  constructor(w = 800, h = 600, color) {
    // this.initDefault();
    this.COLOR = "white";
    this.WIDTH = w;
    this.HEIGHT = h;
    this.createCanvas(w, h, color);
    this.ctx = this.canvasNode.getContext("2d");
  }

  initDefault() {
    this.COLOR = "white";
    this.WIDTH = 800;
    this.HEIGHT = 600;
  }

  createCanvas(w = this.WIDTH, h = this.HEIGHT, color) {
    this.canvasNode = document.createElement("canvas");
    const canvas = this.canvasNode;
    canvas.width = w;
    canvas.height = h;
    canvas.style.backgroundColor = color;
    document.body.appendChild(canvas);
  }

  createRect(x, y, w, h, fillColor = this.COLOR, borderColor, lineW, rotate) {
    const ctx = this.ctx;
    ctx.save();
    const halfW = w / 2;
    const halfH = h / 2;
    const cX = x + halfW;
    const cY = y + halfH;

    ctx.translate(cX, cY);
    ctx.rotate((rotate * Math.PI) / 180);
    if (fillColor) {
      ctx.fillStyle = fillColor;
      ctx.fillRect(-halfW, -halfH, w, h);
    }
    if (borderColor) {
      ctx.strokeStyle = borderColor;
      ctx.lineWidth = lineW;
      ctx.rect(-halfW, -halfH, w, h);
      ctx.stroke();
    }
    ctx.restore();
  }

  clearRect(x, y, w, h) {
    this.ctx.clearRect(x, y, w, h);
  }

  changeFill(fillColor, borderColor) {
    const ctx = this.ctx;
    ctx.fillStyle = fillColor;
    ctx.strokeStyle = borderColor;
    ctx.fill();
    ctx.stroke();
  }

  // lineCap: default "butt", "square", "round"
  createLine(x1, y1, x2, y2, borderColor = this.COLOR, lineW, lineCap, rotate) {
    const ctx = this.ctx;
    ctx.save();
    const halfW = (x2 - x1) / 2;
    const halfH = (y2 - y1) / 2;
    const cX = x1 + halfW;
    const cY = y1 + halfH;

    ctx.translate(cX, cY);
    ctx.rotate((rotate * Math.PI) / 180);

    ctx.strokeStyle = borderColor;
    ctx.lineWidth = lineW;
    ctx.lineCap = lineCap;
    if (x1 !== null && y1 !== null) ctx.moveTo(-halfW, -halfH);
    if (x2 && y2) ctx.lineTo(halfW, halfH);
    ctx.stroke();
    ctx.restore();
    //this.createRect(cX, cY, 10, 10);
  }

  createTriangle(
    x1,
    y1,
    x2,
    y2,
    x3,
    y3,
    fillColor = this.COLOR,
    borderColor,
    lineW
  ) {
    const ctx = this.ctx;
    const createLine = this.createLine.bind(this);
    createLine(x1, y1, x2, y2, null);
    createLine(null, null, x3, y3, null);
    createLine(null, null, x1, y1, null);
    createLine(null, null, x2, y2, borderColor, lineW); // fix corner
    if (fillColor) {
      ctx.fillStyle = fillColor;
      ctx.fill();
      // fix lineW
      ctx.lineWidth = lineW;
      ctx.stroke();
    }
  }

  createCircle(
    x,
    y,
    radius,
    startAngle,
    endAngle,
    anticlockwise,
    fillColor = this.COLOR,
    borderColor,
    lineW
  ) {
    const ctx = this.ctx;
    ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = lineW;
    ctx.stroke();
  }

  begin() {
    this.ctx.beginPath();
  }

  close() {
    this.ctx.closePath();
  }

  paint() {
    const colorNode = document.getElementById("color");
    let color = "green";
    if (colorNode) {
      colorNode.oninput = function() {
        color = this.value;
      };
    }

    this.canvas.onmousedown = event => {
      this.canvas.onmousemove = event => {
        const x = event.offsetX;
        const y = event.offsetY;
        canvas.createRect(x, y, 5, 5, color);
      };
      this.canvas.onmouseup = () => {
        this.canvas.onmousemove = null;
      };
    };
  }

  createImage(url, x, y) {
    const ctx = this.ctx;
    const image = new Image();
    image.src = url;
    image.onload = () => {
      ctx.drawImage(image, x, y);
    };
  }
}

export default Canvas;
