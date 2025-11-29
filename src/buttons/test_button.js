import { Button } from "../core/button";

export class TestButton extends Button {
    constructor(text, xPosition, yPosition) {
    super(text, xPosition, yPosition);
    this.text = text;
    this.xPosition = xPosition;
    this.yPosition = yPosition;
  }

  trigger() {
    console.log('test button clicked')
  }
}

