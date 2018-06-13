// make a var for all the alphabet. put in an [array]
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
// make var for wins, losses, guesses left
var wins = 0;
var losses = 0;
var guessesLeft =9;
//guessesSoFar is an [array] that will have what letters you have guessed
var guessesSoFar = [];
// userGuess is a variable for what the user picks by pressing a key
var userGuess = null;
// Have computer pick a letter and store it in letterToBeGuessed
var letterToBeGuessed = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);

document.onkeyup = function(event) {
    //this is where the code goes that 
    //will be called when the keys are pressed
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    // Add the user's guess to guessesSoFar array

    if (guessesSoFar.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess) >= 0) {
		guessesSoFar[guessesSoFar.length]=userGuess;
		// if it is a new letter then decrease remaining guesses by 1
		guessesLeft--;
    }
    
    // if letterToBeGuessed is same as userGuess then record it as a win
	// reset guessesLeft to 9, and empty the guessesSoFar array
    // make computer do random pick
    if (letterToBeGuessed == userGuess) {
		wins++;
		console.log("You won!");
		guessesLeft = 9;
		guessesSoFar = [];
		letterToBeGuessed = alphabet[Math.floor(Math.random() * alphabet.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
    }
    
    // if guessesLeft gets to 0 then record it as a loss
	// and then reset guessesLeft to 9, and empty the guessesSoFar array
	// have computer make a new random pick
	if (guessesLeft == 0) {
		losses++;
		console.log("You lost!");
		guessesLeft = 9;
		guessesSoFar = [];
		letterToBeGuessed = alphabet[Math.floor(Math.random() * alphabet.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
	}

	// Displaying progress to HTML
	var html = "<p><h1>The Psychic Game</h1></p>" + "<p><h4>Guess what letter I'm thinking of</h4></p>" + "<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Losses: " + losses + "</h4></p>" + "<p><h4>Guesses Left: " + guessesLeft + "</h4></p>" + "<p><h4>Your guesses so far: " + guessesSoFar + "</h4></p>";
	// place html into the game ID
	document.querySelector("#game").innerHTML = html;







}