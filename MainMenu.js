Game.MainMenu = function(game) {};

var titlescreen;
var text;
var button;

Game.MainMenu.prototype = {

    create: function(game) {
        text = game.add.text(game.world.centerX - 115, game.world.centerY - 75, "PLAY", {
            font: "25px Arial",
            fill: "#ff0044",
            align: "center"
        });


        text = game.add.text(game.world.centerX, game.world.centerY - 125, "The Last Flame Templar", {
            font: "25px Arial",
            fill: "#ff0044",
            align: "center"
        });
        text.anchor.setTo(0.5, 0.5);
        text = game.add.text(game.world.centerX, game.world.centerY + 175, "By Thomas Rizzo", {
            font: "15px Arial",
            fill: "#ff0044",
            align: "center"
        });
        text.anchor.setTo(0.5, 0.5);
        text = game.add.text(game.world.centerX, game.world.centerY + 75, "A,W,D = Move", {
            font: "25px Arial",
            fill: "#ff0044",
            align: "center"
        });
        text.anchor.setTo(0.5, 0.5);
        text = game.add.text(game.world.centerX, game.world.centerY + 110, "Space Bar = Pyromancy", {
            font: "25px Arial",
            fill: "#ff0044",
            align: "center"
        });
        text.anchor.setTo(0.5, 0.5);


        backgroundMusic = game.add.audio('Menu');
        backgroundMusic.loop = true;
        backgroundMusic.play();

        button = game.add.button(game.world.centerX - 50, 125, 'button', actionOnClick, this, 2, 1, 0);
        game.add.sprite(200, 175, 'fireball');
        game.add.sprite(310, 175, 'fireball');
        game.add.sprite(255, 95, 'fireball');
        game.add.sprite(255, 225, 'fireball');




        function actionOnClick() {

            backgroundMusic.mute = true;
            this.state.start('Level1');
        }



    },

    update: function(game) {


    },


};
