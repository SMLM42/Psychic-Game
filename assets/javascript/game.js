var letterList = "abcdefghijklmnopqrstuvwxyz";
var computerGuess = letterList[Math.floor(Math.random() * letterList.length)]
var wins = 0;
var losses = 0;
var guessesLeft = 15;
var guessesList = []

function generateLetter() {
    computerGuess = letterList[Math.floor(Math.random() * letterList.length)];
}
console.log(computerGuess)
document.onkeydown = function (event) {

    var userGuess = event.key;
    // This first conditional checks if the key pressed is allowed
    if (letterList.includes(userGuess)) {
        // I placed the wrong guess before the correct guess because the correct code block changes the letter
        // and then checks again right after making the formerly correct key press into a wrong keypress and thus 
        // costing the player a moved before they even started the new round.
        if (userGuess !== computerGuess) {
            // Checks if the letter has been used before
            if (guessesList.includes(userGuess)) {
                alert("You already tried that letter")
            }
            // if it hasnt, removes an attempt and adds the letter to the list of used letters. 
            else {
                guessesLeft--;
                guessesList.push(userGuess);
                document.getElementById("guessleft").textContent = guessesLeft;
            }
        }
        // Simple check to see if they got it right. 
        if (userGuess === computerGuess) {
            wins++;
            guessesLeft = 15;
            guessesList = [];

            alert("Correct! " + "I was thinking of: " + computerGuess); generateLetter();
        }


        document.getElementById("wins").textContent = wins;
        document.getElementById("losses").textContent = losses;
        document.getElementById("guessleft").textContent = guessesLeft;
        document.getElementById("guesses").textContent = guessesList;
    }
    else { alert("Invalid Key") }
    console.log(computerGuess)
}
// I put the lose condition on the key up because the guesses left 
// counter always read as 1 when you lost and i wanted it to say 0 like it was supposed to

document.onkeyup = function () {
    if (guessesLeft === 0) {
        alert("You lose! I was thinking of: " + computerGuess);
        losses++;
        guessesList = [];
        generateLetter();
        guessesLeft = 15;
        document.getElementById("wins").textContent = wins;
        document.getElementById("losses").textContent = losses;
        document.getElementById("guessleft").textContent = guessesLeft;
        document.getElementById("guesses").textContent = guessesList;
    }
}