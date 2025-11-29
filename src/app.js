import "./styles.css";
import { ContextMenu } from "./menu";
import { TestModule } from "./modules/test.module";
import { SoundModule } from "./modules/sound.module";

const contextMenu = new ContextMenu("#menu");

const testModule = new TestModule("test", "Тестовый блок");

contextMenu.add(testModule);
