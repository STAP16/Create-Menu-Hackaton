import {Module} from '../core/module'

export class SoundModule extends Module {
    constructor(type, text) {
    super(type, text);
    this.type = type;
    this.text = text;
  }

  trigger() {
    let sounds = ['https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg', 'https://commondatastorage.googleapis.com/codeskulptor-assets/jump.ogg', 
    'https://codeskulptor-demos.commondatastorage.googleapis.com/descent/background%20music.mp3', 'https://codeskulptor-demos.commondatastorage.googleapis.com/pang/arrow.mp3', 'https://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/theygotcha.ogg']
    const randomSound = Math.floor(Math.random()*(sounds.length))
    let audio = new Audio(sounds[randomSound]);
    audio.play();
    }
}
