import "./styles.css";
import { BackgroundModule } from "./modules/background.module";

import "./styles.css";
import { ContextMenu } from "./menu";
import { TestModule } from "./modules/test.module";
import { SoundModule } from "./modules/sound.module";
import { ClicksModule } from "./modules/clicks.module";
import { TestButton } from "./buttons/test_button";
import { AstroModule } from "./modules/astro.module";

const contextMenu = new ContextMenu("#menu");

const testModule = new TestModule("test", "Тестовый блок");
const backgroundColorModule = new BackgroundModule("color", "Поменять цвет");
const soundModule = new SoundModule("sound", "Рандомный звук");
const clicksModule = new ClicksModule("clicks", "test click");

const astroModule = new AstroModule("astroSign", "Астрологический прогноз");
const callMessageModule = new CallMessageModule(
  "message",
  "Рандомное сообщение"
);

const testBtn = new TestButton("Test", 0, 0);
testBtn.addButton();

contextMenu.add(testModule);
contextMenu.add(backgroundColorModule);
contextMenu.add(soundModule);
contextMenu.add(astroModule);
contextMenu.add(clicksModule);
contextMenu.add(callMessageModule);
