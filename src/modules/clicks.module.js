import { Module } from "../core/module";

export class ClicksModule extends Module {
  constructor(type, text) {
    super(type, text);
    this.counterStatus = false;
  }

  trigger() {
    this.counterStatus = true;
    this.counterClicks = 0;
    console.log(this.counterClicks);

    const element = document.querySelector(".containerForCounter");

    const handleClick = (event) => {
      if (event.target === document.body) {
        this.counterClicks += 1;
        console.log(this.counterClicks);
      }
    };

    if (element) {
      element.remove(); // Если елеменет уже на странице и произошел клик, то удаляем его @stap17
    }

    setTimeout(() => {
      this.counterStatus = false;
      this.renderCounterClicks(this.counterClicks);
      document.body.removeEventListener("click", handleClick, false);
    }, 3000);

    if (this.counterStatus) {
      document.body.addEventListener("click", handleClick);
    }
  }

  renderCounterClicks(counterClick) {
    const containerForCounter = document.createElement("div");
    containerForCounter.classList.add("containerForCounter");
    containerForCounter.style.backgroundColor = "skyblue";
    containerForCounter.style.display = "inline-block";
    containerForCounter.textContent = `Количество кликов за 3 секунды: ${counterClick}`;
    document.body.append(containerForCounter);
  }
}
