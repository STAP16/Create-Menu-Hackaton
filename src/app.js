import "./styles.css";
import { ContextMenu } from "./menu";
import { TestModule } from "./modules/test.module";
import { SoundModule } from "./modules/sound.module";

const contextMenu = new ContextMenu("#menu");

const testModule = new TestModule("test", "Тестовый блок");
const soundModule = new SoundModule("sound", "Рандомный звук");


contextMenu.add(testModule);
contextMenu.add(soundModule);
