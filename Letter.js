var userInput = process.argv[2];

function Letter(string) {
    this.string = string;
    this.boolVal = false;
    this.showHide = function () {
      
      if (this.boolVal) {
        return " " + this.string + " ";
      }
      
      else {
        return " _ ";
      }
    
    }
    
    this.checkVal = function (userChar) {
      
      if (userChar === this.string) {
        this.boolVal = true;
      }
      
      this.showHide();

    }
}
module.exports = Letter;