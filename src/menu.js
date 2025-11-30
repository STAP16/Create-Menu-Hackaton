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
        openX -= 150;
      }
      if (openX < 0) {
        openX += 150;
      }
      if (openY > height - 40 * 6) {
        openY -= 150;
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
