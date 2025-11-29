import { Module } from '../core/module';

export class CallMessageModule extends Module {
  constructor(type, text) {
    super(type, text);
    this.type = type;
    this.text = text;
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
    this.isInitialized = false;
  }

  initContainer() {
    if (this.container) return;

    this.container = document.createElement('div');
    this.container.className = 'call-message-container';
    document.body.append(this.container);
    this.isInitialized = true;
  }

  getRandomMessage() {
    return this.messages[Math.floor(Math.random() * this.messages.length)];
  }

  showMessage() {
    this.initContainer();

    const messageEl = document.createElement('div');
    messageEl.className = 'call-message';
    messageEl.textContent = this.getRandomMessage();

    this.container.append(messageEl);

    setTimeout(() => {
      if (messageEl.parentNode) {
        messageEl.remove();
      }
    }, 5000);
  }

  trigger() {
    document.addEventListener('click', () => {
      this.showMessage();
    });
  }
}
