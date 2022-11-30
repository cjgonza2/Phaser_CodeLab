import MainScene from './MainScene.js';
import EndScene from './EndScene.js';

const config = {
    width: 800,
    height: 640,
    backgroundColor: '#333453',
    type: Phaser.AUTO,
    parent: 'phaser-game',
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
            //gravity: {y: 200}
        }
    },
    scene: [MainScene, EndScene]
}
//this is how you comment in .js
var game = new Phaser.Game(config);
