// Create a game where you start with any random number. Ask the user to keep guessing the game number until the user enters correct value

let gameNum = 77;

let userNum = prompt("Guess the game number: ")

while (userNum != gameNum) {  // game
    userNum = prompt("you entered wrong number. Guess again: ")

}

console.log("Congratulations, you entered the correct number")

/*
This JavaScript code implements a simple number guessing game where the user must guess the correct number.

Code Breakdown

let gameNum = 77;
Purpose: Initializes the variable gameNum with the value 77. This is the target number the user needs to guess.

let userNum = prompt("Guess the game number: ");
Purpose: Prompts the user to enter a guess for the game number.
Note: The value returned from prompt() is a string, so it's important to handle type conversion when comparing numbers.

while (userNum != gameNum) { ... }
Purpose: Starts a while loop that runs as long as the user has not guessed the correct number.
Condition: The loop continues executing if the userNum is not equal to gameNum. The comparison uses the != (not equal) operator.
Behavior: If the guess is incorrect, the user is prompted again to enter a new guess. 
The loop keeps repeating until the user enters the correct number.

userNum = prompt("you entered wrong number. Guess again: ");
Purpose: If the user’s guess is incorrect, the prompt asks them to try again.
Behavior: The user is repeatedly prompted to input a new guess until it matches the correct number.

console.log("Congratulations, you entered the correct number");
Purpose: Once the user guesses the correct number, the loop exits, and the message is printed to the console.

Flow of Execution

Initialization: The target number gameNum is set to 77.
The program prompts the user to guess a number with the message "Guess the game number:".

Loop Iteration:
First Guess: If the user guesses incorrectly, the program will prompt them again with the message "you entered wrong number. Guess again:".
The loop continues prompting the user until the guess matches 77.

Correct Guess: Once the user guesses 77, the loop terminates, and "Congratulations, you entered the correct number" is logged to the console.
*/