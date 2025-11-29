import "./styles.css";
import { ContextMenu } from "./menu";
import { TestModule } from "./modules/test.module";
import { SoundModule } from "./modules/sound.module";
import { TestButton } from "./buttons/test_button";

const contextMenu = new ContextMenu("#menu");

const testModule = new TestModule("test", "Тестовый блок");
const soundModule = new SoundModule("sound", "Рандомный звук");


contextMenu.add(testModule);
contextMenu.add(soundModule);


const testBtn = new TestButton ('Test', 0, 0)
testBtn.addButton()


