//Declaring 'var' or 'let' in front of enemy prototype objects causes errors. Those declarations have therefore been omitted.
Enemybat = function(index, game, x, y) {
        this.bat = game.add.sprite(x, y, 'bat');
        this.bat.anchor.setTo(0.5, 0.5);
        this.bat.name = index.toString();
        game.physics.enable(this.bat, Phaser.Physics.ARCADE);
        this.bat.body.immovable = true;
        this.bat.body.collideWorldBounds = true;
        this.bat.body.allowGravity = false;
        this.batTween = game.add.tween(this.bat).to({
            y: this.bat.y + 100
        }, 1000, 'Linear', true, 0, 100, true);
        this.bat.animations.add('fly', [0, 1, 2, 3], 5, true);
        this.bat.animations.play('fly', 20, true);


    },
    //Vertical Movement
    Enemyflamewheel = function(index, game, x, y) {
        this.flamewheel = game.add.sprite(x, y, 'flamewheel');
        this.flamewheel.anchor.setTo(0.5, 0.5);
        this.flamewheel.name = index.toString();
        game.physics.enable(this.flamewheel, Phaser.Physics.ARCADE);
        this.flamewheel.body.immovable = true;
        this.flamewheel.body.collideWorldBounds = false;
        this.flamewheel.body.allowGravity = false;
        this.flamewheelTween = game.add.tween(this.flamewheel).to({
            x: this.flamewheel.x + 100
        }, 1500, 'Linear', true, 0, 100, true);
        this.flamewheel.animations.add('walk', [0, 1, 2], 5, true);
        this.flamewheel.animations.play('walk', 10, true);

    },

    //Horizontal Movement
    Enemywheel = function(index, game, x, y) {
        this.wheel = game.add.sprite(x, y, 'wheel');
        this.wheel.anchor.setTo(0.5, 0.5);
        this.wheel.name = index.toString();
        game.physics.enable(this.wheel, Phaser.Physics.ARCADE);
        this.wheel.body.immovable = true;
        this.wheel.body.collideWorldBounds = false;
        this.wheel.body.allowGravity = false;
        this.wheelTween = game.add.tween(this.wheel).to({
            y: this.wheel.y + 100
        }, 1500, 'Linear', true, 0, 100, true);
        this.wheel.animations.add('walk', [0, 1, 2], 5, true);
        this.wheel.animations.play('walk', 10, true);
    }
var enemy1;
var enemy2;
var enemy3;
var enemy4;
var enemy5;
var enemy6;
var enemy7;
var enemy8;
var enemy9;
var enemy10;
var enemy11;
var enemy12;
var enemy13;


Game.Level3 = function(game) {};
var background;
var map;
var layer;
var player;
var controls = {};
var playerSpeed = 150;
var jumpTimer = 0;
// var button;
var shootTime = 0;
var fireballs;
var facing;
var ignite;
var fire;
var scream;
var backgroundMusic;
var text;
var count = 0;
// var text1;
// var lives = 3;




Game.Level3.prototype = {
    create: function(game) {
        this.camera.flash('#000000');
        game.stage.backgroundColor = "#B7E3D2";

        backgroundMusic = game.add.audio('L3');
        backgroundMusic.loop = true;
        backgroundMusic.play();

        this.ignite = game.add.audio('ignite');
        this.fire = game.add.audio('fire');
        this.scream = game.add.audio('scream');
        this.gold = game.add.audio('gold');



        this.physics.arcade.gravity.y = 1400;

        map = this.add.tilemap('map3', 32, 32);
        map.addTilesetImage('tileset');
        layer = map.createLayer(0);
        layer.resizeWorld();
        map.setCollisionBetween(309, 311);
        map.setCollisionBetween(448, 463);
        map.setCollisionBetween(344, 345);
        map.setCollision(257);
        map.setCollision(313);


        map.setTileIndexCallback(622, this.resetPlayer, this);

        map.setTileIndexCallback(148, this.getItem, this);
        map.setTileIndexCallback(150, this.getItem, this);
        map.setTileIndexCallback(181, this.getItem, this);
        map.setTileIndexCallback(213, this.getItem, this);

        map.setTileIndexCallback(192, this.nextLevel, this);




        player = this.add.sprite(0, 0, 'player');
        player.anchor.setTo(0.5, 0.5);
        player.animations.add('idle', [0, 1], 1, true);
        player.animations.add('jump', [2], 1, true);
        player.animations.add('run', [3, 4, 5, 6, 7, 8], 7, true);
        this.physics.arcade.enable(player);
        this.camera.follow(player);
        player.body.collideWorldBounds = true;

        controls = {
                right: this.input.keyboard.addKey(Phaser.Keyboard.D),
                left: this.input.keyboard.addKey(Phaser.Keyboard.A),
                up: this.input.keyboard.addKey(Phaser.Keyboard.W),
                shoot: this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
            }
            // button = this.add.button(this.world.centerX - 95, this.world.centerY + 200, 'buttons', function() {
            //     console.log("pressed");
            // }, this, 2, 1, 0);

        enemy1 = new Enemywheel(0, game, player.x + 905, player.y + 550);
        enemy2 = new Enemywheel(0, game, player.x + 1285, player.y + 550);
        enemy3 = new Enemybat(0, game, player.x + 600, player.y + 600);
        enemy4 = new Enemyflamewheel(0, game, player.x + 400, player.y + 690);
        enemy5 = new Enemyflamewheel(0, game, player.x + 600, player.y + 690);
        enemy6 = new Enemyflamewheel(0, game, player.x + 1450, player.y + 400);
        enemy7 = new Enemywheel(0, game, player.x + 775, player.y + 600);
        enemy8 = new Enemybat(0, game, player.x + 1600, player.y + 300);
        enemy9 = new Enemybat(0, game, player.x + 1700, player.y + 300);
        enemy10 = new Enemyflamewheel(0, game, player.x + 2000, player.y + 450);
        enemy11 = new Enemyflamewheel(0, game, player.x + 2200, player.y + 450);
        enemy12 = new Enemyflamewheel(0, game, player.x + 2400, player.y + 450);
        enemy13 = new Enemyflamewheel(0, game, player.x + 2600, player.y + 450);
        enemy14 = new Enemyflamewheel(0, game, player.x + 2800, player.y + 450);
        enemy15 = new Enemyflamewheel(0, game, player.x + 3000, player.y + 450);
        enemy16 = new Enemyflamewheel(0, game, player.x + 3200, player.y + 450);
        enemy17 = new Enemyflamewheel(0, game, player.x + 3400, player.y + 450);



        fireballs = game.add.group();
        fireballs.enableBody = true;

        fireballs.physicsBodyType = Phaser.Physics.ARCADE;
        fireballs.createMultiple(5, 'fireball');
        fireballs.setAll('anchor.x', 0.5);
        fireballs.setAll('anchor.y', 0.5);
        fireballs.setAll('scale.x', 0.75);
        fireballs.setAll('scale.y', 0.75);
        fireballs.setAll('outOfBoundsKill', true);
        fireballs.setAll('checkWorldBounds', true);
        fireballs.callAll('animations.add', 'animations', 'fireballs', [0, 1, 2, 3], 5, true);
        fireballs.callAll('play', null, 'fireballs');

        text = game.add.text(game.camera.x + 50, game.camera.y + 350, 'Score:' + count, {
            font: '18px Arial',
            fill: '#0095DD',
            align: 'center'



        });
        text.fixedToCamera = true;
        // text1 = game.add.text(game.camera.x + 175, game.camera.y + 350, 'Lives: ' + lives, {
        //     font: '18px Arial',
        //     fill: '#0095DD',
        //     align: 'center'
        // });
        // text1.fixedToCamera = true;


    },
    update: function() {

        this.physics.arcade.collide(player, layer);

        this.physics.arcade.collide(player, enemy1.wheel, this.resetPlayer);
        this.physics.arcade.collide(player, enemy2.wheel, this.resetPlayer);
        this.physics.arcade.collide(player, enemy3.bat, this.resetPlayer);
        this.physics.arcade.collide(player, enemy4.flamewheel, this.resetPlayer);
        this.physics.arcade.collide(player, enemy5.flamewheel, this.resetPlayer);
        this.physics.arcade.collide(player, enemy6.flamewheel, this.resetPlayer);
        this.physics.arcade.collide(player, enemy7.wheel, this.resetPlayer);
        this.physics.arcade.collide(player, enemy8.bat, this.resetPlayer);
        this.physics.arcade.collide(player, enemy9.bat, this.resetPlayer);
        this.physics.arcade.collide(player, enemy10.flamewheel, this.resetPlayer);
        this.physics.arcade.collide(player, enemy11.flamewheel, this.resetPlayer);
        this.physics.arcade.collide(player, enemy12.flamewheel, this.resetPlayer);
        this.physics.arcade.collide(player, enemy13.flamewheel, this.resetPlayer);
        this.physics.arcade.collide(player, enemy14.flamewheel, this.resetPlayer);
        this.physics.arcade.collide(player, enemy15.flamewheel, this.resetPlayer);
        this.physics.arcade.collide(player, enemy16.flamewheel, this.resetPlayer);
        this.physics.arcade.collide(player, enemy17.flamewheel, this.resetPlayer);



        player.body.velocity.x = 0;


        if (controls.right.isDown) {
            player.animations.play('run');
            player.scale.setTo(1, 1);
            player.body.velocity.x += playerSpeed;
            facing = 'right';


        }

        if (controls.left.isDown) {
            player.animations.play('run');
            player.scale.setTo(-1, 1);
            player.body.velocity.x -= playerSpeed;
            facing = 'left';


        }

        if (controls.up.isDown && (player.body.onFloor() || player.body.touching.down) && this.time.now > jumpTimer) {
            player.body.velocity.y = -600;
            jumpTimer = this.time.now + 750;
            player.animations.play('jump');
        }

        if (player.body.velocity.x == 0 && player.body.velocity.y == 0) {
            player.animations.play('idle');
        }

        if (controls.shoot.isDown) {

            this.shootFireball();
        }

        //FIREBALL COLLISIONS WITH ENEMIES


        if (checkOverlap(fireballs, enemy3.bat)) {

            enemy3.bat.kill();
            text.setText("Score:" + (count += 50));
            this.ignite.play();

        }
        if (checkOverlap(fireballs, enemy8.bat)) {

            enemy8.bat.kill();
            text.setText("Score:" + (count += 50));
            this.ignite.play();

        }
        if (checkOverlap(fireballs, enemy9.bat)) {

            enemy9.bat.kill();
            text.setText("Score:" + (count += 50));
            this.ignite.play();

        }

    },

    resetPlayer: function() {

        text.setText("Score:" + (count -= 500));
        // text1.setText("Lives:" + (lives -= 1));
        // if (lives === 0) {
        //     console.log("Loud and Clear!");
        // } else {

        player.reset(0, 0);
        // }
    },
    nextLevel: function() {
        backgroundMusic.mute = true;
        this.state.start('GameOver', true, false);
    },

    getItem: function() {
        map.putTile(-1, layer.getTileX(player.x), layer.getTileY(player.y));
        this.gold.play();
        text.setText("Score:" + (count += 10));
    },
    shootFireball: function() {
        if (this.time.now > shootTime) {
            shootTime = this.time.now + 800;
            fireball = fireballs.getFirstExists(false);
            if (fireball) {
                this.fire.play();
                fireball.reset(player.x, player.y);

                if (facing == 'right') {
                    fireball.body.velocity.y = -200;

                    fireball.body.velocity.x = 200;

                } else {
                    fireball.body.velocity.y = -200;
                    fireball.body.velocity.x = -200;
                }
            }
        }
    }

}

function checkOverlap(spriteA, spriteB) {
    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();
    return Phaser.Rectangle.intersects(boundsA, boundsB);
}
