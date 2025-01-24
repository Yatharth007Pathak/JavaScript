/*
The do...while loop is similar to the while loop, except it checks the condition after executing the code. 
This ensures that the code is executed at least once, even if the condition is false initially.

Syntax:
do {
    // Code to be executed
} while (condition);
*/

let i = 0;
do {
    console.log(i);  // Outputs 0, 1, 2, 3, 4
    i++;
} while (i < 5);


/*
Here's a breakdown of this JavaScript code that uses a do...while loop to log numbers from 0 to 4:

let i = 0;
Purpose: Declares a variable i and initializes it with the value 0.
Explanation: This sets the starting point for the loop.

do { ... } while (i < 5);
Purpose: This defines a do...while loop, which will execute the code inside the block at least once, 
and then continue executing as long as the condition i < 5 remains true.
Explanation:
do block: The code inside the do block will execute before the condition is checked, 
meaning the loop will run at least once, even if the condition is initially false.
Condition (i < 5): After each iteration, the condition is checked. If i is less than 5, the loop continues; otherwise, it stops.

console.log(i);
Purpose: Logs the current value of i to the console during each iteration of the loop.
Explanation: This line prints the value of i each time the loop runs.

i++;
Purpose: Increments the value of i by 1 after each iteration.
Explanation: This is shorthand for i = i + 1. The loop will keep increasing i until it becomes 5, at which point the loop stops.

Flow:
Iteration 1: i = 0, it logs 0, and i is incremented to 1.
Iteration 2: i = 1, it logs 1, and i is incremented to 2.
Iteration 3: i = 2, it logs 2, and i is incremented to 3.
Iteration 4: i = 3, it logs 3, and i is incremented to 4.
Iteration 5: i = 4, it logs 4, and i is incremented to 5. The loop stops because the condition i < 5 is no longer true.
*/