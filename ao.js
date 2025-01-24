// The if...else if...else statement allows you to test multiple conditions sequentially.

let score = 75;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: D");
}

/*
Here's a breakdown of this JavaScript code that uses if-else if-else statements to assign a grade based on score:

let score = 75;
Purpose: Declares a variable score with an initial value of 75.
Explanation: score is set to 75, representing a student's score.

if (score >= 90) { ... }
Purpose: Checks if score is 90 or higher.
Explanation: This is the highest condition, evaluating if score qualifies for an "A" grade. 
Since score is 75, this condition is false, so the block is skipped.

else if (score >= 80) { ... }
Purpose: Checks if score is 80 or higher but less than 90.
Explanation: This condition evaluates if score qualifies for a "B" grade. 
Since score is 75, this condition is also false, so the block is skipped.

else if (score >= 70) { ... }
Purpose: Checks if score is 70 or higher but less than 80.
Explanation: This condition evaluates if score qualifies for a "C" grade. 
Since score is 75, this condition is true, so the following block runs.

console.log("Grade: C");
Purpose: Logs the grade "C" to the console.
Output: "Grade: C"
Explanation: Since the condition for a "C" grade is met, this message is printed.

else { console.log("Grade: D"); }
Purpose: Executes if none of the previous conditions are met.
Explanation: This would log "Grade: D" if score were below 70, but since score is 75, this block is not reached.
*/