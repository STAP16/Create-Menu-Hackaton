import './styles.css'
import {BackgroundModule} from './modules/background.module'

import "./styles.css";
import { ContextMenu } from "./menu";
import { TestModule } from "./modules/test.module";
import { SoundModule } from "./modules/sound.module";
import { CallMessageModule } from './modules/call-message.module';

const contextMenu = new ContextMenu("#menu");

const testModule = new TestModule("test", "Тестовый блок");
const backgroundColorModule = new BackgroundModule("color", "Поменять цвет");
const soundModule = new SoundModule("sound", "Рандомный звук");
const callMessageModule = new CallMessageModule("message", "Рандомное сообщение");


contextMenu.add(testModule);
contextMenu.add(soundModule);
contextMenu.add(backgroundColorModule);
contextMenu.add(callMessageModule);

