import {Module} from '../core/module'

export class SoundModule extends Module {
    constructor(type, text) {
    super(type, text);
    this.type = type;
    this.text = text;
  }

  trigger(event) {
   
 }
}
document.body.addEventListener('click', ()=>{
    let sounds = ['https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg', 'https://commondatastorage.googleapis.com/codeskulptor-assets/jump.ogg', 
    'https://codeskulptor-demos.commondatastorage.googleapis.com/descent/background%20music.mp3', 'https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3',
    'https://codeskulptor-demos.commondatastorage.googleapis.com/pang/arrow.mp3', 'https://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/theygotcha.ogg'
   ]
const randomSound = Math.floor(Math.random()*(sounds.length-1))
console.log(randomSound)
var audio = new Audio('https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg');
audio.play();
})
