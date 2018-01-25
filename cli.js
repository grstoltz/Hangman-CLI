var init = function () {

    var App = require("./app.js");
    var inquirer = require("inquirer");

    var game = new App();

    game.displayBoard();

    var playGame = function () {

        if (game.state === "active") {

            inquirer.prompt([
                {
                    type: "input",
                    message: "What is your guess?",
                    name: "guess"
                }
            ]).then(function (response) {
                var guess = response.guess
                game.userGuess(guess);
                game.displayBoard();

                playGame();
            })
        }
        else if (game.state === "won" || game.state === "lost") {
            inquirer.prompt([
                {
                    type: "confirm",
                    message: "Would you like to play again?",
                    name: "response"
                }
            ]).then(function (user) {

                if (user.response) {

                    main();
                }
                else {
                    game.endGame()
                }

            })
        }
    }

    playGame();

}

init();