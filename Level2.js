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
    }, 2000, 'Linear', true, 0, 100, true);
    this.bat.animations.add('fly', [0, 1, 2, 3], 5, true);
    this.bat.animations.play('fly', 20, true);


}

var enemy1;
var enemy2;

Game.Level2 = function(game) {};
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
var text1;
var lives = 3;





Game.Level2.prototype = {
    create: function(game) {
        this.camera.flash('#000000');


        backgroundMusic = game.add.audio('L2');
        backgroundMusic.loop = true;
        backgroundMusic.play();

        this.ignite = game.add.audio('ignite');
        this.fire = game.add.audio('fire');
        this.scream = game.add.audio('scream');
        this.gold = game.add.audio('gold');

        background = this.add.tileSprite(0, 0, 7000, 5000, 'background');
        background.fixedToCamera = true;

        this.physics.arcade.gravity.y = 1400;

        map = this.add.tilemap('map2', 32, 32);
        map.addTilesetImage('tileset');
        layer = map.createLayer(0);
        layer.resizeWorld();
        map.setCollision(647);
        map.setCollision(649);
        map.setCollisionBetween(706, 708);
        map.setCollisionBetween(710, 711);
        map.setCollision(713);


        map.setTileIndexCallback(197, this.resetPlayer, this);
        map.setTileIndexCallback(148, this.getItem, this);
        map.setTileIndexCallback(150, this.getItem, this);
        map.setTileIndexCallback(181, this.getItem, this);
        map.setTileIndexCallback(213, this.getItem, this);

        map.setTileIndexCallback(192, this.nextLevel, this);



        player = this.add.sprite(0, 250, 'player');
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


        enemy1 = new Enemybat(0, game, player.x + 300, player.y - 75);
        enemy2 = new Enemybat(0, game, player.x + 450, player.y - 150);


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



    },

    update: function() {





        this.physics.arcade.collide(player, layer);
        this.physics.arcade.collide(player, enemy1.bat, this.resetPlayer);
        this.physics.arcade.collide(player, enemy2.bat, this.resetPlayer);
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

        if (checkOverlap(fireballs, enemy1.bat)) {
            enemy1.bat.kill();
            text.setText("Score:" + (count += 50));
            this.ignite.play();


        }
        if (checkOverlap(fireballs, enemy2.bat)) {

            enemy2.bat.kill();
            text.setText("Score:" + (count += 50));
            this.ignite.play();

        }

    },

    resetPlayer: function() {
        text.setText("Score:" + (count -= 500));
        player.reset(0, 0);
    },
    nextLevel: function() {
        backgroundMusic.mute = true;
        this.state.start('Level3', true, false);
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
