import { Menu } from "./core/menu";

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
    document.body.addEventListener("contextmenu", (event) => {
      // Временно покажем меню, для получения размеров
      this.el.style.visibility = "hidden";
      this.el.classList.add("open");

      const menuElSizeData = this.el.getBoundingClientRect();
      const menuWidth = menuElSizeData.width;
      const menuHeight = menuElSizeData.height;

      //После получения размеров скрываем меню типо ниче небыло)
      this.el.classList.remove("open");
      this.el.style.visibility = "";

      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      event.preventDefault();
      let openX = event.clientX;
      let openY = event.clientY;

      if (openX > windowWidth - menuWidth) openX = windowWidth - menuWidth;
      if (openX < 0) openX = menuWidth;
      if (openY > windowHeight - menuHeight) {
        openY = windowHeight - menuHeight;
        console.log(openY);
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
