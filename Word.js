var letterFile = require("./Letter");

var holderArray = [];

function Word(wordInput) {
    this.wordArr = wordInput.split();
    this.display = function (arr) {
        for (var i = 0; i < arr.length; i++) {
            var tempLetter = new Letter(arr[i]);
            
            holderArray.push(tempLetter.showHide());
        }
       return holderArray.join(" ");
    }
}    