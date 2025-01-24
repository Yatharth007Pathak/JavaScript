// The if...else statement provides an alternative block of code if the condition is false.

let age = 16;

if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

/*
Here's a breakdown of this JavaScript code with an if-else statement:

let age = 16;
Purpose: Declares a variable age with an initial value of 16.
Explanation: This sets the value of age to 16, representing a person's age.

if (age >= 18) { ... }
Purpose: Checks if the value of age is 18 or higher.
Explanation: The condition (age >= 18) checks if age is greater than or equal to 18. Since age is 16, the condition evaluates to false.

console.log("You are eligible to vote.");
Purpose: This line would log a message to the console if the if condition were true.
Explanation: Since age is 16, this line does not execute.

else { console.log("You are not eligible to vote."); }
Purpose: Executes if the if condition is false.
Explanation: Since the if condition is false, the code inside the else block runs.

console.log("You are not eligible to vote.");
Purpose: Logs a message to the console indicating the person is not eligible to vote.
Output: "You are not eligible to vote."
*/