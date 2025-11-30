import "./styles.css";

import { BackgroundModule } from "./modules/background.module";
import { ContextMenu } from "./menu";
import { SoundModule } from "./modules/sound.module";
import { ShapeModule } from "./modules/shape.module";
import { ClicksModule } from "./modules/clicks.module";
import { TestButton } from "./buttons/test_button";
import { AstroModule } from "./modules/astro.module";
import { CallMessageModule } from "./modules/call-message.module";
{
}

const contextMenu = new ContextMenu("#menu");

const backgroundColorModule = new BackgroundModule("color", "Поменять цвет");
const soundModule = new SoundModule("sound", "Рандомный звук");
const clicksModule = new ClicksModule("clicks", "Считать клики");
const astroModule = new AstroModule("astroSign", "Астрологический прогноз");
const callMessageModule = new CallMessageModule(
  "message",
  "Рандомное сообщение"
);

// const testBtn = new TestButton("Test", 0, 0);
const shapeModule = new ShapeModule("random-shape", "Создать фигуру");

contextMenu.add(shapeModule);
contextMenu.add(backgroundColorModule);
contextMenu.add(soundModule);
contextMenu.add(astroModule);
contextMenu.add(clicksModule);
contextMenu.add(callMessageModule);
// testBtn.addButton();
