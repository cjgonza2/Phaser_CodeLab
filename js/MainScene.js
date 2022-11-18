//variables
var cursors;
var player;
var enemy;
var enemy2;
let score = 0
var scoreTxt;
let dead = false;
let keySpace;
//seems like theres three ways to declare a variable in 3 ways
//1. let x...
//2. var x...
//3. const x...


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

        //sets a constant variable "stats"
        //I can't just set constant, it needs to have something assigned to it
        //i might be able to try to set it to a value but im not sure how I would 
        //minipulate the data. 
        //const stats = this.add.image(810, 0, 'Button');
        //stats.setDataEnabled();

        //stats.data.set('score', 0);
        //this.physics.add.collider(player, enemy2);

        scoreTxt = this.add.text(350, 270, 'Score: 0', {font: '32px pressStart', fill: '#00ff00'});





        cursors = this.input.keyboard.createCursorKeys();
        player = this.physics.add.image(400,400,'paladin');
        player.setCollideWorldBounds(true);

        enemy = this.physics.add.sprite(600, 500, 'hellKnight');
        enemy.setCollideWorldBounds(true);

        enemy2 = this.physics.add.sprite(100, 100, 'hellKnight'); 
        enemy2.setCollideWorldBounds(true);

        this.physics.add.collider(
            player,
            enemy,
            function(player, enemy){
                if(player.body.touching && enemy.body.touching){
                    dead = true;
                    //player.destroy();
                    scoreTxt.setText('You Are Dead! Score: ' + score);
                }
            }
        );

        this.physics.add.collider(
            player,
            enemy2,
            function(player, enemy2){
                if(player.body.touching && enemy2.body.touching){
                    dead = true;
                    scoreTxt.setText('You Are Dead! Score: ' + score);
                }
            }
        );

        keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    
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
        enemy2.setVelocity(0);

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

        if(dead == false){
            score += 1;
            scoreTxt.setText('Score: ' + score);
        }

        if(dead == true && keySpace.isDown){
            this.registry.destroy();
            this.events.off();
            this.scene.restart();
        }

        this.enemyFollows();
    }

    enemyFollows()
    {

        //.moveToObject is a handy function to move an object to another
        //seems good for having an enemy 
        this.physics.moveToObject(enemy, player, 150);
        this.physics.moveToObject(enemy2, player, 50)
       //if i've already declared a variable
       //ie var enemy. I can't just say this.enemy, 
       //since in that case it's not defined!
    }
}