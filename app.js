var Word = require("./word.js")

var randomwords = require("random-words")

var App = function(){
    this.state = "active"
    this.word = new Word (randomwords())
    this.guessedLetters = []
    this.counter = 10
    this.userGuess = function(guess){
        
        if (this.guessedLetters.includes(guess)){
            this.guessedAnswer();
        }
        else if (this.word.wordArray.some(function(e){
            return e.letter === guess
        })){
            this.word.wordArray.forEach(function(element){
                if (element.letter === guess){
                    element.guessed = true
                }
            });
        }
        else { 
            this.incorrectAnswer()
        }
        this.guessedLetters.push(guess)
        if (!this.word.wordArray.some(function(e){
            return e.guessed === false
        })){
            this.winGame();
        }

    }
    this.displayBoard = function (){
        var board = '';
        this.word.wordArray.forEach(function(element){
            board += ' ' + element.displayLetter();
        })
        console.log(board)
    }
    this.correctAnswer = function (){
        console.log("Correct answer")
    }
    this.incorrectAnswer = function (){
        this.counter --
        console.log("Incorrect answer! You have " + this.counter + " guesses remaining")
        if (this.counter >= 0){
            this.loseGame
        }
    }
    this.guessedAnswer = function(){
        console.log("You've already guessed that")
    }
    this.loseGame = function (){
        console.log("You Lose")
        this.state = "lost"
    }
    this.winGame = function(){
        console.log("Congrats you've won!")
        this.state = "won"
    }
}

// var game = new App();

// game.userGuess("t")

// game.userGuess("t")

// //console.log(word.wordArray)

// //console.log(word.wordArray[1].displayLetter())

// game.displayBoard();

// game.incorrectAnswer();

module.exports = App;