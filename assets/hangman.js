//GLOBAL VARIABLES

// Used to record how many times a letter can be pressed
var doubleWord = ['a','b','c',
				  'd','e','f',
				  'g','h','i',
				  'j','k','l',
				  'm','n','o',
				  'p','q','r',
				  's','t','u',
				  'v','w','x',
				  'y','z'];
//Holds the all the words
var wordBank =['mocha','cappuccino','caramel macchiato', 'espresso','coffee','latte'];
//Holds choosenWord
var choosenWord = "";
//Holds letters in word
var lettersInWord = [];
//Holds number of blanks in word
var numBlanks = 0;
//Holds Blanks and successful guesses
var correctLetters =[];
//Holds Wrong guesses
var wrongLetters = [];
//Counters
var winCount = 0;
var score = 0;
var guessesLeft = 9;
var rightGuessCounter = 0;
console.log("wordBank");
//FUNCTIONS

function reset()
{

	choosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	
	lettersInWord = choosenWord.split('');
	
	numBlanks = lettersInWord.length;
	
	//RESET
	
	score = 0;
	rightGuessCounter = 0;
	guessesLeft = 9;
	wrongLetters =[];
	correctLetters =[];
	doubleWord = ['a','b','c',
					  'd','e','f',
					  'g','h','i',
					  'j','k','l',
					  'm','n','o',
					  'p','q','r',
					  's','t','u',
					  'v','w','x',
					  'y','z'];
	test=false;
}

{
	
	choosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	
	lettersInWord = choosenWord.split('');
	
	numBlanks = lettersInWord.length;
	
	//RESET
	
	rightGuessCounter = 0;
	guessesLeft = 9;
	wrongLetters =[];
	correctLetters =[];
	doubleWord = ['a','b','c',
					  'd','e','f',
					  'g','h','i',
					  'j','k','l',
					  'm','n','o',
					  'p','q','r',
					  's','t','u',
					  'v','w','x',
					  'y','z'];

	//Populate blanks
	for(var i = 0; i< numBlanks; i++)
	{
		correctLetters.push('_');
		document.getElementById('wordToGuess').innerHTML = correctLetters;
	}
	

	//Changes HTML 
	document.getElementById('wordToGuess').innerHTML = correctLetters.join(' ');
	document.getElementById('numGuesses').innerHTML = guessesLeft;
	document.getElementById('numWins').innerHTML = winCount;
	document.getElementById('wrongGuess').innerHTML = wrongLetters;
	
}

document.onkeyup = function(event){
	

{
	// When number blanks if filled with right words then you win
	if(rightGuessCounter === numBlanks)
	{
		//Counts Wins 
		winCount++;
		//Changes HTML
		document.getElementById('numWins').innerHTML = winCount;
		alert('YOU WIN!');
		reset();
	}
	// When number of Guesses reaches 0 then You lose
	else if(guessesLeft === 0)
	{
		//Counts losses
		loseCount++;
	}
}

}


// Could not get my hangman.js file to work with my all of my hangman.html file.