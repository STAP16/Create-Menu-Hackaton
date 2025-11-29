export class Button {
  constructor(text, xPosition, yPosition) {
    if (!text) {
      throw new Error('Please specify "text" param');
    }
    this.text = text;
    this.xPosition = xPosition;
    this.yPosition = yPosition;
  }

  trigger() {
    throw new Error(
      `Метод trigger() должен быть переопределен в дочернем классе`
    );
  }
}

