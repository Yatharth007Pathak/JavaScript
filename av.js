let number = prompt("Enter a number: ")

console.log(number);

if(number % 5 === 0) {
    console.log(number, "is a multiple of 5");
} else {
    console.log(number, "is not a multiple of 5");

}

/*
Here's a breakdown of this JavaScript code that prompts the user to enter a number and checks if that number is a multiple of 5:

let number = prompt("Enter a number: ");
Purpose: Declares a variable number and assigns it the value returned by the prompt() function.
Explanation: The prompt() function displays a dialog box asking the user to enter a number. The input value is captured as a string.

console.log(number);
Purpose: Logs the value of number to the console.
Explanation: This line outputs the number entered by the user. If the user enters 10, the output will be "10".

if (number % 5 === 0) { ... }
Purpose: Checks if the number is a multiple of 5.
Explanation:
The expression number % 5 calculates the remainder when number is divided by 5.
If the remainder is 0, it means number is a multiple of 5. However, since the value returned from prompt() is a string, 
it should be converted to a number using Number(number) or parseInt(number) before performing the modulus operation. 
Without conversion, the check may not work as expected if the input is a string.

console.log(number, "is a multiple of 5");
Purpose: Logs a message indicating that the number is a multiple of 5.
Explanation: This line executes if the condition in the if statement is true. 
For example, if the user enters 10, it will log "10 is a multiple of 5".

else { console.log(number, "is not a multiple of 5"); }
Purpose: Executes if the number is not a multiple of 5.
Explanation: This block will run if the condition in the if statement is false. 
For example, if the user enters 7, it will log "7 is not a multiple of 5".
*/