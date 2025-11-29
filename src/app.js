import './styles.css'
import {BackgroundModule} from './modules/background.module'

import "./styles.css";
import { ContextMenu } from "./menu";
import { TestModule } from "./modules/test.module";
import { SoundModule } from "./modules/sound.module";
import {ClicksModule} from './modules/clicks.module';

const contextMenu = new ContextMenu("#menu");

const testModule = new TestModule("test", "Тестовый блок");
const backgroundColorModule = new BackgroundModule("color", "Поменять цвет");
const soundModule = new SoundModule("sound", "Рандомный звук");
const clicksModule = new ClicksModule("clicks", "test click");

contextMenu.add(testModule);
contextMenu.add(soundModule);
