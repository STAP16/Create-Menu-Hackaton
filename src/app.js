import "./styles.css";
import { BackgroundModule } from "./modules/background.module";

import "./styles.css";
import { ContextMenu } from "./menu";
import { TestModule } from "./modules/test.module";
import { SoundModule } from "./modules/sound.module";
<<<<<<< HEAD
import {ClicksModule} from './modules/clicks.module';
=======
import { AstroModule } from "./modules/astro.module";
>>>>>>> 024d339ff240a962beedfc9da90dd8566de19b1a

const contextMenu = new ContextMenu("#menu");

const testModule = new TestModule("test", "Тестовый блок");
const backgroundColorModule = new BackgroundModule("color", "Поменять цвет");
const soundModule = new SoundModule("sound", "Рандомный звук");
<<<<<<< HEAD
const clicksModule = new ClicksModule("clicks", "test click");

contextMenu.add(testModule);
contextMenu.add(soundModule);
=======
const astroModule = new AstroModule("astroSign", "Астрологический прогноз");

contextMenu.add(testModule);
contextMenu.add(backgroundColorModule);
contextMenu.add(soundModule);
contextMenu.add(astroModule);
>>>>>>> 024d339ff240a962beedfc9da90dd8566de19b1a
