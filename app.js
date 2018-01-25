var Word = require("./word.js")

var randomwords = require("random-words")

var App = function () {
    this.state = "active"
    this.word = new Word(randomwords())
    this.guessedLetters = []
    this.counter = 10
    this.userGuess = function (guess) {
        //Looks at the array of guessed letters to see if it has been guessed, if it has it tells the user to try another guess
        if (this.guessedLetters.includes(guess)) {
            this.guessedAnswer();
        }
        //If the letter has not been guessed it checks the over the letters in the word to see if it is in the word
        //If the letter is in the word it sets the value of guessed to true
        else if (this.word.wordArray.some(function (e) {
            return e.letter === guess
        })) {
            this.correctAnswer();
            this.word.wordArray.forEach(function (element) {
                if (element.letter === guess) {
                    element.guessed = true
                }
            });
        }
        //If the letter has not been guessed or if it is not in the word, it informs the user their answer is inorrect and decrements counter by 1
        else {
            this.incorrectAnswer()
        }
        //Takes the guessed letter and puts it into the array
        this.guessedLetters.push(guess)

        //Checks over the status of each letter in the word array, if each letter has a guessed value of true, the user has won the game
        if (!this.word.wordArray.some(function (e) {
            return e.guessed === false
        })) {
            this.winGame();
        }

    }
    this.displayBoard = function () {
        var board = '';
        this.word.wordArray.forEach(function (element) {
            board += ' ' + element.displayLetter();
        })
        console.log("\n" + board + "\n")
    }
    this.correctAnswer = function () {
        console.log("\n Correct answer")
    }
    this.incorrectAnswer = function () {
        this.counter--
        if (this.counter == 0) {
            this.loseGame();
        }
        else {
            console.log("\n Incorrect answer! You have " + this.counter + " guesses remaining.")
        }
    }
    this.guessedAnswer = function () {
        console.log("\n You've already guessed that")
    }
    this.loseGame = function () {
        console.log("\n You Lose!")
        this.state = "lost"
    }
    this.winGame = function () {
        console.log("\n Congrats you've won!")
        this.state = "won"
    }
    this.endGame = function () {
        console.log("\n Goodbye!")
        process.exit(0)
    }
}

module.exports = App;