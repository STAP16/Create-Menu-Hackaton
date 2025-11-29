import {Module} from '../core/module';
import '../style.astro.css';


export class AstroModule extends Module {
constructor (type, text){
    super (type, text); 
    this.type = type;
    this.text = text;
    this.signUser = '';
}
trigger(){

    const modalWindow = document.createElement('div');
    modalWindow.className = 'astrology-modal';
    document.body.append(modalWindow);

    const divAstrologyChoose = document.createElement('div'); 
    divAstrologyChoose.className = 'astrology-modal-content';
    modalWindow.append(divAstrologyChoose);

    const h2 = document.createElement('h2');
    h2.textContent = 'Астрологический прогноз';
    divAstrologyChoose.append(h2);

    const p = document.createElement('p');
    p.textContent = 'Выберите ваш знак зодиака:';
    divAstrologyChoose.append(p);

    const astroSign = [
        {value: 'aries', name: 'Овен', period: '21 марта – 20 апреля'},
        {value: 'taurus', name: 'Телец', period: '21 апреля – 20 мая'},
        {value: 'gemini', name: 'Близнецы', period: '21 мая - 20 июня'},
        {value: 'cancer', name: 'Рак', period: '21 июня — 22 июля'},
        {value: 'leo', name: 'Лев', period: '23 июля – 22 августа'},
        {value: 'virgo', name: 'Дева', period: '23 августа – 22 сентября'},
        {value: 'libra', name: 'Весы', period: '23 сентября – 23 октября'},
        {value: 'scorpio', name: 'Скорпион', period: '24 октября – 21 ноября'},
        {value: 'sagittarius', name: 'Стрелец', period: '22 ноября – 21 декабря'},
        {value: 'capricorn', name: 'Козерог', period: '22 декабря – 20 января'},
        {value: 'aquarius', name: 'Водолей', period: '21 января – 19 февраля'},
        {value: 'pisces', name: 'Рыбы', period: '20 февраля – 20 марта'}
    ];
    const buttonsAstro = document.createElement('div');
    buttonsAstro.className = 'sing-buttons-container';
    divAstrologyChoose.append(buttonsAstro);

    astroSign.forEach((sign)=>{
        const button = document.createElement('button');
        button.className = 'astro-btn';
        button.dataset.sign = `${sign.value}`;
        button.textContent = `${sign.name} ${sign.period}`;
        buttonsAstro.append(button);
    });

    const divForButtons = document.createElement('div');
    divForButtons.className = 'end-btn';
    modalWindow.append(divForButtons);

    const buttonClose = document.createElement('button');
    buttonClose.className = 'close-btn';
    buttonClose.textContent = 'Закрыть';

    const buttonPrediction = document.createElement('button');
    buttonPrediction.className = 'prediction-btn';
    buttonPrediction.textContent = 'Получить прогноз';
    buttonPrediction.disabled = true;

    divForButtons.append(buttonClose);
    divForButtons.append(buttonPrediction);

    const resultContainer = document.createElement('div');
    resultContainer.className = 'result-container';
    resultContainer.style.display = 'none';
    document.body.append(resultContainer);

    

    buttonsAstro.addEventListener('click', (event)=>{
        if(event.target.classList.contains('astro-btn')){
            const allButtonsAstro = buttonsAstro.querySelectorAll('.astro-btn');
            allButtonsAstro.forEach((but)=>{
                but.classList.remove('active');
            });
            event.target.classList.add('active');
            this.signUser = event.target.dataset.sign;
            buttonPrediction.disabled = false;
            resultContainer.style.display = 'none';
        }
    });

    buttonPrediction.addEventListener('click', (event)=>{
        if(this.signUser){
            this.madePrediction(this.signUser, resultContainer);
        }
    });

    buttonClose.addEventListener('click', ()=>{
       modalWindow.remove();
       resultContainer.remove();
    });
}
    madePrediction(sign, divElement){
        divElement.innerHTML = '';
        const predictions = {
            aries:{
            header:'♈ Овен',
            text:'Марс дарит вам энергию для смелых начинаний! Сегодня звезды поддерживают вашу инициативу.',
            love:'Проявите инициативу - романтическое предложение будет встречено с восторгом',
            work:'Смелые проекты принесут успех, не бойтесь брать на себя ответственность',
            frendship:'Старые друзья появятся в неожиданный момент, новые знакомства обогатят ваш круг',
            },
            taurus:{
            header:'♉ Телец',
            text:'Венера создает атмосферу гармонии и стабильности. Идеальный день для наслаждения жизнью.',
            love:'Романтический ужин или спокойный вечер вдвоем укрепит отношения',
            work:'Медленный, но уверенный прогресс в долгосрочных проектах',
            frendship:'Помощь другу в сложной ситуации укрепит вашу связь',
            },
            gemini:{
            header:'♊ Близнецы',
            text:'Меркурий активизирует общение и интеллектуальную деятельность. День информации и связей.',
            love:'Интересная беседа может перерасти в нечто большее, будьте открыты',
            work:'Переговоры и совещания пройдут успешно, важные контракты будут подписаны',
            frendship:'Социальные сети принесут неожиданные приятные знакомства',
            },
            cancer:{
            header:'♋ Рак',
            text:'Луна усиливает интуицию и эмоциональную чувствительность. День домашнего уюта и семьи.',
            love:'Проявление заботы о партнере будет особенно ценно сегодня',
            work:'Работа в команде принесет лучшие результаты, чем в одиночку',
            frendship:'Друг нуждается в вашей поддержке - не оставайтесь в стороне',
            },
            leo:{
            header:'♌ Лев',
            text:'Солнце освещает ваш путь к успеху! День для того, чтобы быть в центре внимания.',
            love:'Ваша харизма привлекает восхищенные взгляды, не стесняйтесь флиртовать',
            work:'Публичные выступления и презентации пройдут с оглушительным успехом',
            frendship:'Организуйте вечеринку - вы будете душой компании',
            },
            virgo:{
            header:'♍ Дева',
            text:'Меркурий помогает в анализе и планировании. День для наведения порядка во всех сферах.',
            love:'Практичный подход к отношениям окупится - составьте планы на будущее',
            work:'Внимание к деталям предотвратит серьезные ошибки',
            frendship:'Помощь другу в организации его дел будет высоко оценена',
            },
            libra:{
            header:'♎ Весы',
            text:'Венера создает гармонию и красоту вокруг. День искусства, дипломатии и романтики.',
            love:'Романтическое свидание может изменить вашу личную жизнь',
            work:'Творческий подход решит давние проблемы',
            frendship:'Посредничество в конфликте друзей восстановит мир',
            },
            scorpio:{
            header:'♏ Скорпион',
            text:'Плутон открывает тайны и усиливает проницательность. День глубоких преобразований.',
            love:'Глубокий разговор укрепит доверие в отношениях',
            work:'Скрытые возможности становятся явными - действуйте решительно',
            frendship:'Друг откроет вам важный секрет - храните его',
            },
            sagittarius:{
            header:'♐ Стрелец',
            text:'Юпитер зовет к приключениям и расширению горизонтов! День путешествий и новых знаний.',
            love:'Неожиданная встреча во время путешествия изменит всё',
            work:'Международные контакты или обучение принесут пользу',
            frendship:'Знакомство с иностранцем обогатит ваш круг общения',
            },
            capricorn:{
            header:'♑ Козерог',
            text:'Сатурн поддерживает вашу целеустремленность. День карьеры и долгосрочного планирования.',
            love:'Серьезный разговор о будущем отношений укрепит связь',
            work:'Карьерный рост становится реальным - просите повышения',
            frendship:'Деловой партнер может стать близким другом',
            },
            aquarius:{
            header:'♒ Водолей',
            text:'Уран вдохновляет на инновации и нестандартные решения. День технологий и дружеских связей.',
            love:'Дружба может перерасти в любовь - присмотритесь к старым друзьям',
            work:'Технологические решения помогут в решении сложных задач',
            frendship:'Социальные проекты объединят вас с единомышленниками',
            },
            pisces:{
            header:'♓ Рыбы',
            text:'Нептун усиливает творчество и духовность. День мечтаний, искусства и сострадания.',
            love:'Романтическое настроение подарит чудесные моменты с партнером',
            work:'Творческие проекты будут особенно успешны',
            frendship:'Помощь другу в эмоциональной поддержке будет бесценна',
            }
        };
        const userPrediction = predictions[sign];
        const resultModal = document.createElement('div');
        resultModal.className = 'prediction-result-modal';
        divElement.append(resultModal);

        const h3 = document.createElement('h3');
        h3.textContent = userPrediction.header;
        resultModal.append(h3);
        
        const mainText = document.createElement('p');
        mainText.className = 'prediction-main-text';
        mainText.textContent = userPrediction.text;
        resultModal.appendChild(mainText);

        const detailsDiv = document.createElement('div');
        detailsDiv.className = 'prediction-info';
        divElement.append(detailsDiv);

        const pLove = document.createElement('p');
        const pWork = document.createElement('p');
        const pFrendship = document.createElement('p');

        pLove.textContent = `Любовь: ${userPrediction.love}`;
        pWork.textContent = `Работа: ${userPrediction.work}`;
        pFrendship.textContent = `Дружба: ${userPrediction.frendship}`;
        detailsDiv.append(pLove, pWork, pFrendship);

        const buttonCloseResult = document.createElement('button');
        buttonCloseResult.className = 'close-result-btn';
        buttonCloseResult.textContent = 'Закрыть прогноз';
        resultModal.append(buttonCloseResult);

        buttonCloseResult.addEventListener('click', ()=>{
            divElement.style.display = 'none';
            this.signUser = '';
        });

        divElement.style.display = 'flex';
    }

}