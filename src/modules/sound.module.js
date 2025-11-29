import {Module} from '../core/module'

export class SoundModule extends Module {
    constructor(type, text) {
    super(type, text);
    this.type = type;
    this.text = text;
  }

  trigger(event) {
   let sounds = ['https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg']
 }
}

var audio = new Audio('https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg');
audio.play();