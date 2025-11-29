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

  addButton (){
    const btn = document.createElement('button')
    btn.textContent = this.text
    btn.style.position.top = this.yPosition
    btn.style.position.left = this.xPosition
    document.body.append(btn)
  }
}

