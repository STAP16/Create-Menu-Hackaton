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

  addButton (){
    const btn = document.createElement('button')
    btn.textContent = this.text
    btn.style.width = '50px'
    btn.style.position = 'absolute'
    btn.style.top = this.yPosition
    btn.style.left = this.xPosition
    document.body.append(btn)
    console.log(typeof this.xPosition)
  }

}

