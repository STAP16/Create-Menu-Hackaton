import { Menu } from "./core/menu";

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
    document.body.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      const openX = event.clientX;
      const openY = event.clientY;

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
