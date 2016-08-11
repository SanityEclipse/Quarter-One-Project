Game.Preloader = function(game) {

    this.preloadBar = null
};

Game.Preloader.prototype = {
    preload: function() {
        this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
        this.preloadBar.anchor.setTo(0.5, 0.5);
        this.time.advancedTiming = true;
        this.load.setPreloadSprite(this.preloadBar);


        //Loads all assets
        this.load.tilemap('map', 'assets/maps/L1.csv');
        this.load.tilemap('map2', 'assets/maps/L2.csv');
        this.load.tilemap('map3', 'assets/maps/L3.csv');
        this.load.image('tileset', 'assets/maps/MapTemplate.png');

        this.load.image('background1', 'assets/background.jpg');
        this.load.image('background2', 'assets/background_image_Menu.jpg');
        this.load.image('button', 'assets/Hero-front.png');


        this.load.spritesheet('player', 'assets/player1.png', 26, 26);
        // this.load.spritesheet('buttons', 'assets/buttons.png', 193, 71);
        this.load.spritesheet('bat', 'assets/bat.png', 32, 32, 4);
        this.load.spritesheet('fireball', 'assets/fireball.png', 32, 32, 4);
        this.load.spritesheet('zombie', 'assets/Fire Zombie Paladin.png', 26, 26, 4);
        this.load.spritesheet('flamewheel', 'assets/Flame Wheel.png', 32, 32, 3);
        this.load.spritesheet('wheel', 'assets/Flame Wheel1.png', 32, 32, 3);

        this.load.audio('ignite', 'assets/sounds/FireIgnite.mp3');
        this.load.audio('fire', 'assets/sounds/FireLoop2.mp3');
        this.load.audio('scream', 'assets/sounds/Scream+3.mp3');
        this.load.audio('gold', 'assets/sounds/Pickup_Gold_00.mp3');
        this.load.audio('Menu', 'assets/bgmusic/Menu.mp3')
        this.load.audio('L1', 'assets/bgmusic/L1.mp3');
        this.load.audio('L2', 'assets/bgmusic/L2.mp3');
        this.load.audio('L3', 'assets/bgmusic/L3.mp3');

    },

    create: function() {
        this.state.start('MainMenu', true, false);
    }
};
