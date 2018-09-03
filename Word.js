var Letter = require("./Letter.js");

function Word(wordInput) {
    this.wordArr = wordInput.split();
    this.letterObjArray = [];
    this.blankOrLetterArray = [];
    this.display = function () {
        
        for (var i = 0; i < wordInput.length; i++) {
          var tempLetter = new Letter(wordInput[i]);
          this.letterObjArray.push(tempLetter);
          this.blankOrLetterArray.push(tempLetter.showHide());
          //console.log(tempLetter.showHide());
        }
        console.log(this.blankOrLetterArray.join(" "));
    }

    this.compare = function (userChar) {
        
        for (var i = 0; i < this.letterObjArray.length; i++) {
             this.letterObjArray[i].checkVal(userChar);   
             this.blankOrLetterArray[i] = this.letterObjArray[i].showHide();
            }
        }
}   

module.exports = Word;
//var word = new Word("hello");
//word.display();