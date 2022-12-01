var Knight;

const RoomOne =  class RoomOne extends Phaser.Scene{



    constructor(){
        super('RoomOne');
    }

    init(){

    }

    preload (){

        this.scene.start('MainScene');
    }

    create(){
        //Knight = this.physics.add.image(400,400, 'hellKnight');
    }
    
    update(){
        //this.scene.start('MainScene');
    }


}

export default RoomOne;