import {Module} from '../core/module'

export class CallMessageModule extends Module {
  constructor() {
    super();
    this.messages = [
      'Вера в себя создает героев!',
      'Никогда не поздно стать тем, кем всегда мечтал!',
      'Идеального времени не будет, ведь ты уже на сцене!',
      'Ты на верном пути!',
      'Мы рождены, чтобы побеждать!',
      'Победа дается тем, кто готов идти до конца!',
      'Каждый шаг имеет значение!',
      'Ты сильнее, чем думаешь!',
      'Маленькие шаги ведут к большим результатам!',
      'Верь в себя — у тебя всё получится!'
    ];
    this.container = null;
  }

  init() {
    this.container = document.createElement('div');
    this.container.className = 'call-message-container';
    document.body.append(this.container);
  }

  getCallMessage() {
    return this.messages[Math.floor(Math.random() * this.messages.length)];
  }

  showMessage() {
    if (!this.container) this.init();

    const messageElement = document.createElement('div');
    messageElement.className = 'call-message';
    messageElement.textContent = this.getCallMessage();

    this.container.append(messageElement);

    setTimeout(() => messageElement.remove(), 5000);
  }
}