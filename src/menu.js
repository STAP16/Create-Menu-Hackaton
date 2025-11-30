import { Menu } from "./core/menu";

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);

    document.body.addEventListener("contextmenu", (event) => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      event.preventDefault();
      let openX = event.clientX;
      let openY = event.clientY;

      if (openX > width - 100) {
        openX -= 140;
      }
      if (openX < 0) {
        openX += 140;
      }
      if (openY > width - 240) {
        console.log(openY);
        console.log(width);
        //Вот тут разберись пж, я вообще не понимаю,
        //Нужно сделать так, что если часть меню как бы уреазается, оно должно на опрределное кол-во пиксилей вверх идти
      }

      (this.el.style.left = `${openX}px`),
        (this.el.style.top = `${openY}px`),
        this.open();
    });
  }

  open() {
    if (document.querySelector("canvas")) {
      document.querySelector("canvas").remove();
    }
    this.el.classList.add("open");
  }
  close() {
    this.el.classList.remove("open");
  }

  add(module) {
    this.el.insertAdjacentHTML("afterbegin", module.toHTML());
    const moduleElement = this.el.querySelector(`[data-type=${module.type}]`);
    moduleElement.addEventListener("click", module.trigger.bind(module));
  }
}
