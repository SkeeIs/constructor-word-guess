var inquirer = require("inquirer");
var Word = require("./Word.js");

var alreadyGuessedLetters;
var wordBank = ["chimpanzee", "gorilla", "orangutan", "gibbon", "monkey", "lemur", "tarsier", "capuchin", "titi", "sakis", "uakari", "grivet", "malbrouck", "guenon", "lesula", "macaque", "mangabey", "kipunji", "baboon", "mandrill", "langur"];
var wins = 0;
var guesses;
var randomIndex;
var chosenWord;

function game() {

  if (guesses > 0) {
    console.log("You have " + guesses + " remaining");

    console.log(chosenWord.blankOrLetterArray.join(" "))
    inquirer
    .prompt([
        {
        type: "input",
        name: "userGuess",
        message: "Guess a letter"  
        }  
    ])
    .then(function(response) {
      
        if(alreadyGuessedLetters.includes(response.userGuess)){
        console.log("You already guessed that letter!");
        game(); 
      }
      
      else {   
        alreadyGuessedLetters.push(response.userGuess);
        chosenWord.compare(response.userGuess);
        guesses --;
        //console.log("blankOrArray" + chosenWord.blankOrLetterArray.join(""));
        //console.log("wordArr" + chosenWord.wordArr.join(""));
        if (chosenWord.blankOrLetterArray.join("") === chosenWord.wordArr.join("")) {
          console.log("Nice guesses! You win!");
          wins++;
          console.log("Wins: " + wins);
          replay();  
        }
        else {
          game();
        }    
      }  
    })
  }
  else {
    console.log("Oh no! You ran out of guesses! The primate was " + chosenWord.wordArr.join("") + ".");
    replay();  
  }  
}

function replay() {
  inquirer
  .prompt ([
    {
      type: "confirm",
      name: "newGame",
      message: "New game?" 
    }  
  ])  
  .then(function(response) {
    if (response.newGame) {
      guesses = 12;
      alreadyGuessedLetters = [];
      randomIndex = Math.floor(Math.random() * wordBank.length);
      chosenWord = new Word(wordBank[randomIndex]);
      chosenWord.display();
      game();  
    }
    else {
      console.log("Thanks for playing!");
    }  
  })
}

console.log("Welcome to primate hang man! You have 10 guesses to guess the type of primate!")
replay();