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
        this.load.tilemap('map', 'assets/L1.csv');
        this.load.image('tileset', 'assets/MapTemplate.png');
        this.load.image('background', 'assets/background.jpg');

        this.load.spritesheet('player', 'assets/player1.png', 26, 26);
        // this.load.spritesheet('buttons', 'assets/buttons.png', 193, 71);
        this.load.spritesheet('bird', 'assets/bird.png', 32, 32, 4);
        this.load.spritesheet('fireball', 'assets/fireball.png', 32, 32, 4)

    },

    create: function() {
        this.state.start('Level1');
    }
};
