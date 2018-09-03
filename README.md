# Constructor Word Guess

A node.js primate-themed hangman game! Try to guess the primate within your allotted guesses.

## How to Play

Clone this repository and download [*node.js*](https://nodejs.org/en/) to get started!
You will also have to install node package "inquirer" by entering the following into Terminal/Command Prompt:
```
npm install inquirer
``` 

### Preview 
<!-- take a picture of the image and add it into the readme  -->
![Primate-themed Hangman Game](https://i.imgur.com/VKfOoIb.png)

## Technology Used
* **Javascript** - the main language used
* [**node.js**](https://nodejs.org/en/) - Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.
* [**Inquirer**](https://www.npmjs.com/package/inquirer) - A Node.js package that allows us to pose questions to users through terminal.

# Code Snippets
<!-- put snippets of code inside ``` ``` so it will look like code -->
<!-- if you want to put blockquotes use a > -->

The purpose of this project was to build using constructor functions. Below are my letter & word constructor functions.

```
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
```
```
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
```

# Learning Points
<!-- Learning points where you would write what you thought was helpful -->
* Constructors allow you to create a template for creating objects with pre-defined characteristics or methods.
* When working with constructors & callbacks sometimes it is easier to start at the end of the logic & work backwards. It can be challenging to track the order things will occur in.

## Authors
* Taylor Skeels
