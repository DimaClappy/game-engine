import Canvas from "./Canvas";

class Engine {
  constructor(w = 1200, h = 600, color, settings = { render, start, update }) {
    this.maxX = w;
    this.maxY = h;
    this.color = color;

    this.handlerSettings(settings);
  }

  handlerSettings(settings) {
    if (settings.render === "canvas") {
      this.canvas = new Canvas(this.maxX, this.maxY, this.color);
      this.setEvents();
    }

    this.start(settings.start);
    this.update(settings.update);
  }

  setEvents() {
    window.onload = () => {
      const canvas = document.getElementsByTagName("canvas")[0];
      this.canvas.canvasNode.addEventListener("mousemove", () => {
        this.mouseX = event.offsetX;
        this.mouseY = event.offsetY;
      });
    };
  }

  start(cb) {
    cb();
  }

  update(cb) {
    const timer = setInterval(cb, 50);
  }
}

export default Engine;
