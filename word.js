var Letter = require("./letter")

var Word = function (word) {
    this.wordArray = [];

    for (var i = 0; i < word.length; i++) {
        this.wordArray.push(new Letter(word[i]))
    }
}

module.exports = Word;