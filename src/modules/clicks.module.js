import { Module } from "../core/module";

export class ClicksModule extends Module {

    constructor(type, text) {
        super(type, text);
        this.counterClicks = 0;
        this.counterStatus = true;

    }

    trigger() {
        setTimeout(() => {            
            this.counterStatus = false;            
            this.renderCounterClicks(this.counterClicks)
            this.counterClicks = 0;
        }, 3000);


        document.body.addEventListener('click', (event) => {
            if (event && this.counterStatus) {
                this.counterClicks += 1;                
            }
        });

    }

    renderCounterClicks(counterClick) {
        const containerForCounter = document.createElement('div');
        containerForCounter.classList.add('containerForCounter');
        containerForCounter.style.backgroundColor = 'skyblue';
        containerForCounter.style.display = 'inline-block';
        containerForCounter.style.padding = '10px';
        containerForCounter.style.borderRadius = "3px"
        containerForCounter.textContent = `Количество кликов за 3 секунды ${counterClick}`;
        document.body.append(containerForCounter);
    };
}
