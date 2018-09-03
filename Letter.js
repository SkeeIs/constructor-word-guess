var userInput = process.argv[2];

function Letter(string) {
    this.letter = string;
    this.guessBool = false;
    this.showHide = function () {
      
      if (this.guessBool) {
        return this.letter;
      }
      
      else {
        return "_";
      }
    
    }
    
    this.checkVal = function (userChar) {
      
      if (userChar === this.letter) {
        this.guessBool = true;
      }
      
      this.showHide();

    }
}

module.exports = Letter;