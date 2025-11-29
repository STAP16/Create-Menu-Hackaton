import './styles.css'
import {BackgroundModule} from './modules/background.module'

import "./styles.css";
import { ContextMenu } from "./menu";
import { TestModule } from "./modules/test.module";
import { SoundModule } from "./modules/sound.module";
import { ShapeModule } from "./modules/shape.module";

const contextMenu = new ContextMenu("#menu");

const testModule = new TestModule("test", "Тестовый блок");
const backgroundColorModule = new BackgroundModule("color", "Поменять цвет");
const soundModule = new SoundModule("sound", "Рандомный звук");
const shapeModule = new ShapeModule('random-shape', 'Создать фигуру')



contextMenu.add(testModule);
contextMenu.add(shapeModule)
contextMenu.add(soundModule);
contextMenu.add(backgroundColorModule);
