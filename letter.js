var Letter = function (letter) {
    this.letter = letter,
    this.guessed = false
}

Letter.prototype.displayLetter = function (){  
    if (!this.guessed){
        return "_"
    }

    return this.letter
}

module.exports = Letter;