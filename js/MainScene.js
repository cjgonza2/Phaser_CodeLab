//variables
var cursors;
var player;
var enemy;

export default class MainScene extends Phaser.Scene{ //inherits Phaser.SCene Class.
    constructor (){//Whenever we make a class we need a constructor?
        super('MainScene');
    }

    //phaser scenes have a few handy functions
    //1. Preload - gets called before scene loads.
    preload() {
        this.load.image('hellKnight','assets/hell_knight.png');
        this.load.image('button','assets/Button.png');
        this.load.image('paladin', 'assets/paladin.png');
        this.load.bitmapFont('pressStart', 'assets/PressStart2Play.png','assets/PressStart2Play.fnt');
    }

    create(){
        //this seems to only load one image. regardless of their position 
        //angel = this.add.image(400, 400, 'angel');
        //card = this.add.image(200, 200, 'card');

        //this seems to load all images.
        //this.add.image(200, 200, 'playerCard');
        //player = this.physics.add.image(400,400, 'paladin');
        //???
        //player.setColliderWorldBounds(true);

        cursors = this.input.keyboard.createCursorKeys();
        player = this.physics.add.image(400,400,'paladin');
        player.setCollideWorldBounds(true);

        enemy = this.physics.add.sprite(600, 500, 'hellKnight');
        enemy.setCollideWorldBounds(true);
    
        //in this situation player variable is local.
        //var player = this.add.image (500, 500, 'paladin');
        //this.player = this.physics.add.image(400,400, 'paladin');
    }
    //Questions for Karina
    //lol how do i do this?
    //what ups with this importing a js file and it breaking the game
    //check over if youre understanding everything
    //update function
    //learning from scratch, good directions.
    update()
    {
        player.setVelocity(0);
        enemy.setVelocity(0);

        if(cursors.left.isDown)
        {
            player.setVelocityX(-300);
        }
        else if (cursors.right.isDown)
        {
            player.setVelocityX(300);
        }
        if (cursors.up.isDown)
        {
            player.setVelocityY(-300);
        } 
        else if(cursors.down.isDown)
        {
            player.setVelocityY(300);
        }

        

        this.enemyFollows();
    }

    enemyFollows()
    {
       enemy.x = player.body.position.x;
       enemy.y = player.body.position.y;
       //if i've already declared a variable
       //ie var enemy. I can't just say this.enemy, 
       //since in that case it's not defined!
    }
}