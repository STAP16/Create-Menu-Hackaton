import './styles.css'
import {BackgroundModule} from './modules/background.module'

import "./styles.css";
import { ContextMenu } from "./menu";
import { TestModule } from "./modules/test.module";

const contextMenu = new ContextMenu("#menu");

const testModule = new TestModule("test", "Тестовый блок");
const backgroundColorModule = new BackgroundModule("color", "Поменять цвет");

contextMenu.add(testModule);
contextMenu.add(backgroundColorModule);
