import {Module} from '../core/module'

export class BackgroundModule extends Module {
    constructor(type, text) {
    super(type, text);
    this.type = type;
    this.text = text;
  }
    
    trigger (){
        console.log('t');
        const rowCode = '0123456789ABCDEF';
        let color = '#';
        for (let i=0; i<6; i+=1){
            const idRow = Math.random() * rowCode.length;
            const floorIdRow = Math.floor(idRow);
            color = color + rowCode[floorIdRow];
        }
    document.body.style.backgroundColor = color;
}
}
