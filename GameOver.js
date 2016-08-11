Game.GameOver = function(game) {};
var background;
var text5;
var text6;
var text7;
var score = 0;
Game.GameOver.prototype = {
    create: function(game) {
        this.camera.flash('#000000');

        backgroundMusic = game.add.audio('Menu');
        backgroundMusic.loop = true;
        backgroundMusic.play();



        text5 = game.add.text(game.world.centerX - 115, game.world.centerY - 75, "CONGRATULATIONS!", {
            font: "25px Arial",
            fill: "#ff0044",
            align: "center"
        });
        text6 = game.add.text(game.world.centerX - 100, game.world.centerY, "You have survived!", {
            font: "25px Arial",
            fill: "#ff0044",
            align: "center"
        });
        text7 = game.add.text(game.world.centerX - 100, game.world.centerY + 50, "Score: " + score, {
            font: "25px Arial",
            fill: "#ff0044",
            align: "center"
        });
        game.stage.backgroundColor = "#FFFFFF";

    },
    update: function(game) {


    },


};
