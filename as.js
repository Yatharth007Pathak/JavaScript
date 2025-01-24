// Practical Example Using Multiple Conditional Statements

let age = 17;
let hasPermission = true;

if (age >= 18) {
    console.log("You are eligible to vote.");
} else if (age >= 16 && hasPermission) {
    console.log("You can apply for a provisional license.");
} else {
    console.log("You are too young.");
}

/*
Here's a breakdown of this JavaScript code that uses if-else if-else statements to determine voting eligibility 
and the possibility of applying for a provisional license based on age and hasPermission:

let age = 17;
Purpose: Declares a variable age with an initial value of 17.
Explanation: This sets the value of age to 17, representing a person's age.

let hasPermission = true;
Purpose: Declares a variable hasPermission and assigns it a value of true.
Explanation: This indicates that the person has permission, potentially relevant for applying for a provisional license.

if (age >= 18) { ... }
Purpose: Checks if the person is 18 years old or older.
Explanation: This condition evaluates if the person is eligible to vote. 
Since age is 17, this condition is false, so the code inside this block will not execute.

else if (age >= 16 && hasPermission) { ... }
Purpose: Checks if the person is 16 years old or older and has permission.
Explanation: The condition evaluates if age is 16 or higher and if hasPermission is true. 
Since age is 17 and hasPermission is true, this condition evaluates to true, so the following line executes.

console.log("You can apply for a provisional license.");
Purpose: Logs a message indicating that the person can apply for a provisional license.
Output: "You can apply for a provisional license."
Explanation: This message is printed because the conditions in the previous else if statement are met.

else { console.log("You are too young."); }
Purpose: This block would execute if none of the previous conditions are met.
Explanation: Since the else if condition was true, this block is not reached, and the message "You are too young." is not logged.
*/