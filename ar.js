/*
The ternary operator (? :) is a shorthand for if...else statements and is often used for simple conditional assignments or returns.
The conditional (ternary) operator is the only JavaScript operator that takes three operands: 
a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), 
and finally the expression to execute if the condition is falsy.
*/

let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";  // condition ? true output : false output

console.log(canVote); // Output: "Yes"

/*
Here's a breakdown of this JavaScript code that uses the ternary operator to determine if a person can vote based on their age:

let age = 18;
Purpose: Declares a variable age with an initial value of 18.
Explanation: This sets the value of age to 18, representing the person's age.

let canVote = (age >= 18) ? "Yes" : "No";
Purpose: Uses the ternary operator to evaluate whether the person is eligible to vote based on their age.
Explanation:
The condition (age >= 18) checks if age is greater than or equal to 18.
If the condition is true, the value of canVote will be set to "Yes".
If the condition is false, canVote will be set to "No".
In this case, since age is 18, the condition evaluates to true, so canVote is assigned the value "Yes".

console.log(canVote);
Purpose: Logs the value of canVote to the console.
Output: "Yes"
Explanation: Since the condition for voting eligibility is met, the output is "Yes".
*/