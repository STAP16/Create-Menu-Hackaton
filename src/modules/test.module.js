import { Module } from "../core/module";

export class TestModule extends Module {
  constructor(type, text) {
    super(type, text);
    this.type = type;
    this.text = text;
  }

  trigger(event) {
    console.log("Тестовый модуль - работает!");
  }
}
