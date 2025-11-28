import "./styles.css";
import { ContextMenu } from "./menu";
import { TestModule } from "./modules/test.module";

const contextMenu = new ContextMenu("#menu");

const testModule = new TestModule("test", "Тестовый блок");

contextMenu.add(testModule);
