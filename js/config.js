import MainScene from './MainScene.js';
import EndScene from './EndScene.js';
import RoomOne from './RoomOne.js';


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
    scene: [
        RoomOne,
        MainScene, 
        EndScene
        ]
}

export { config }