/*
An infinite loop in JavaScript is a loop that continues to execute indefinitely because its termination condition is never met. 
Infinite loops are generally considered a programming error unless explicitly desired (e.g., in event listeners or server loops). 
Such loops can cause your browser or program to freeze or crash.


Examples of Infinite Loops

1. Using for Loop: A for loop can become infinite if the termination condition is omitted or always evaluates to true.
for (let i = 0; i >= 0; i++) {  // The condition i >= 0 is always true
    console.log(i);  // Will keep printing numbers indefinitely
}

2. Using while Loop: A while loop can become infinite if the condition never becomes false.
let count = 1;
while (true) {  // Condition is always true
    console.log(count);
    count++;  // This will keep running indefinitely
}

3. Using do...while Loop: A do...while loop can also become infinite if the condition is always true.
let num = 0;
do {
    console.log(num);
} while (num >= 0);  // Condition is always true


4. Logical Errors Leading to Infinite Loops: A loop may become infinite because of a logical error in the condition or update statement.
let x = 0;
while (x < 5) {
    console.log(x);
    // Missing x++ causes this loop to run infinitely
}


How to Avoid Infinite Loops

Ensure Proper Exit Conditions: Always include a condition that will eventually become false.
For while and do...while loops, ensure the variable affecting the condition is updated within the loop.

Debugging: Use console.log statements to trace the values of loop variables and ensure they are changing as expected.

Set a Maximum Iteration Limit: When unsure if the condition will eventually be met, add a counter as a fallback.


Sometimes, infinite loops are intentional, such as in servers, game engines, or event-driven programs. 
These loops usually include mechanisms to stop or break the loop based on external conditions
*/

let counter = 0;
while (true) {
    console.log("Running...");
    counter++;
    if (counter > 100) {  // Safety mechanism
        break;
    }
}

/*
This JavaScript code demonstrates an infinite loop using a while (true) statement, 
with a safety mechanism to terminate the loop after 100 iterations.

Code Breakdown

let counter = 0;
Purpose: Initializes a variable counter to track the number of iterations the loop executes.

while (true) { ... }
Purpose: Creates an infinite loop because the condition true will always evaluate to true.

console.log("Running...");
Purpose: Prints the string "Running..." to the console during each iteration of the loop.

counter++;
Purpose: Increments the counter by 1 after each iteration.

if (counter > 100) { break; }
Purpose: This safety mechanism ensures the loop does not run indefinitely.

Explanation:
When the counter exceeds 1000, the break statement is executed, which terminates the loop.

Flow of Execution

Initialization: counter is set to 0.

Infinite Loop:
Iteration 1: counter = 0, "Running..." is logged, counter++ makes counter = 1.
Iteration 2: counter = 1, "Running..." is logged, counter++ makes counter = 2.
...
...

Iteration 101: counter = 101, the condition counter > 100 becomes true. The break statement is executed, and the loop terminates.

Output
The string "Running..." will be printed 101 times, one for each iteration from counter = 0 to counter = 100. 
Once counter exceeds 100, the loop exits.
*/