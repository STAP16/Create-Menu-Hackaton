import { Module } from "../core/module";
import { random } from "../utils";

export class ShapeModule extends Module {
  #resizeWindowEvent;
  constructor(type, text) {
    super(type, text);
    this.getRandom = random;
    this.#resizeWindowEvent = null;
  }

  trigger() {
    if (this.#resizeWindowEvent) {
      window.removeEventListener("resize", this.#resizeWindowEvent);
      this.#resizeWindowEvent = null;
    }
    const randoShape = this.getRandom(0, 2);
    if (document.querySelector("canvas")) {
      document.querySelector("canvas").remove();
    }
    const canvasPlace = this.#createCanvas();
    document.body.appendChild(canvasPlace);
    const context = canvasPlace.getContext("2d");
    if (randoShape === 0) {
      this.#createRandomCircle(context);
    }

    if (randoShape === 1) {
      this.#createRundomRectangle(context, canvasPlace);
    }
    if (randoShape === 2) {
      this.#createRundomTriangle(context, canvasPlace);
    }
    this.#resizeWindowEvent = () => {
      canvasPlace.width = window.innerWidth;
      canvasPlace.height = window.innerHeight;
      canvasPlace.style.width = `${window.innerWidth}px`;
      canvasPlace.style.height = `${window.innerHeight}px`;
    };
    window.addEventListener("resize", this.#resizeWindowEvent);
  }
  getRandomSize() {
    return `${this.getRandom(10, 250)}px`;
  }
  getRandomRGB() {
    return `RGB(${this.getRandom(0, 255)}, ${this.getRandom(
      0,
      255
    )}, ${this.getRandom(0, 255)})`;
  }
  #createCanvas() {
    const canvasPlaceEl = document.createElement("canvas");
    canvasPlaceEl.id = "canvas-place";
    canvasPlaceEl.width = window.innerWidth;
    canvasPlaceEl.height = window.innerHeight;
    canvasPlaceEl.style.position = "fixed";
    canvasPlaceEl.style.width = `${window.innerWidth}px`;
    canvasPlaceEl.style.height = `${window.innerHeight}px`;
    canvasPlaceEl.style.top = "0";
    canvasPlaceEl.style.left = "0";
    canvasPlaceEl.style.display = "block";
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    return canvasPlaceEl;
  }
  #createRundomRectangle(canvasContext, canvas) {
    const widthRectangle = this.getRandom(10, 200);
    const heightRectangle = this.getRandom(10, 200);
    const positionX = this.getRandom(0, canvas.width - widthRectangle);
    const positionY = this.getRandom(0, canvas.height - heightRectangle);

    canvasContext.fillStyle = this.getRandomRGB();
    return canvasContext.fillRect(
      positionX,
      positionY,
      widthRectangle,
      heightRectangle
    );
  }
  #createRundomTriangle(canvasContext) {
    canvasContext.fillStyle = this.getRandomRGB();
    canvasContext.beginPath();
    canvasContext.moveTo(this.getRandom(0, 400), this.getRandom(0, 400));
    canvasContext.lineTo(this.getRandom(0, 400), this.getRandom(0, 400));
    canvasContext.lineTo(this.getRandom(0, 400), this.getRandom(0, 400));
    canvasContext.closePath();
    canvasContext.fill();
    canvasContext.strokeStyle = this.getRandomRGB();
    canvasContext.lineWidth = this.getRandom(2, 6);
    canvasContext.stroke();
  }
  #createRandomCircle(canvasContext) {
    const x = this.getRandom(100, 300);
    const y = this.getRandom(100, 300);
    canvasContext.beginPath();
    canvasContext.arc(x, y, this.getRandom(10, 100), 0, 2 * Math.PI);
    canvasContext.fillStyle = this.getRandomRGB();
    canvasContext.fill();
    canvasContext.lineWidth = this.getRandom(0, 10);
    canvasContext.strokeStyle = this.getRandomRGB();
    canvasContext.stroke();
  }
}
