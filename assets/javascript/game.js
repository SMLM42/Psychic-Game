var letterList = "abcdefghijklmnopqrstuvwxyz";
var computerGuess = letterList[Math.floor(Math.random() * letterList.length)]
var wins = 0;
var losses = 0;
var guessesLeft = 15;
var guessesList = []

function generateLetter() {
    var computerGuess = letterList[Math.floor(Math.random() * letterList.length)];
}
console.log(computerGuess)
document.onkeyup = function (event) {

    var userGuess = event.key;
    // if (userGuess !== 
    if (userGuess === computerGuess) {
        wins++;
        guessesLeft = 15;
        guessesList = [];
        generateLetter();
        alert("Player Wins!");
    }
    if (userGuess !== computerGuess) {
        guessesLeft--;
        guessesList.push(userGuess);
    }

    document.getElementById("guessleft").textContent = guessesLeft;

    if (guessesLeft === 0) {

        alert("You lose! I was thinking of: " + computerGuess);
        losses++;
        guessesList = [];
        generateLetter();
        guessesLeft = 15;
    }




    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;
    document.getElementById("guessleft").textContent = guessesLeft;
    document.getElementById("guesses").textContent = guessesList;
}