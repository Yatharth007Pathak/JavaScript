// You can nest if statements within each other for more complex conditions.

let age = 20;
let hasID = true;

if (age >= 18) {
    if (hasID) {
        console.log("You can enter.");
    } else {
        console.log("Please show your ID.");
    }
} else {
    console.log("You are too young to enter.");
}

/*
Here's a breakdown of this JavaScript code that uses nested if statements to determine entry eligibility based 
on age and whether the person has an ID:

let age = 20;
Purpose: Declares a variable age with an initial value of 20.
Explanation: This sets the value of age to 20, representing a person's age.

let hasID = true;
Purpose: Declares a variable hasID and assigns it a value of true.
Explanation: This indicates that the person has an ID.

if (age >= 18) { ... }
Purpose: Checks if the person is 18 or older.
Explanation: This condition evaluates if the person is eligible to enter based on their age. 
Since age is 20, this condition is true, so the code inside this block will execute.

if (hasID) { ... }
Purpose: Checks if the person has an ID.
Explanation: This is a nested if statement that checks the value of hasID. 
Since hasID is true, this condition is also true, and the following line executes.

console.log("You can enter.");
Purpose: Logs a message indicating that the person can enter.
Output: "You can enter."
Explanation: This message is printed because both conditions (age and ID) are satisfied.

else { console.log("Please show your ID."); }
Purpose: This line would execute if the hasID condition were false.
Explanation: Since hasID is true, this block is not reached, so it does not log anything.

else { console.log("You are too young to enter."); }
Purpose: This outer else block would execute if the age condition were false (meaning the person is younger than 18).
Explanation: Since age is 20, this block is also not reached, so it does not log anything.
*/