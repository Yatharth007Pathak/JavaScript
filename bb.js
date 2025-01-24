/*
The for loop is used when you know in advance how many times you want to execute a statement or a block of statements. 
It consists of three parts: initialization, condition, and iteration.

Syntax:
for (initialization; condition; iteration) {
    // Code to be executed
}
*/

for (let i = 0; i < 5; i++) {
    console.log(i);  // Outputs 0, 1, 2, 3, 4
}

/*
Here's a breakdown of this JavaScript code that uses a for loop to log numbers from 0 to 4:

for (let i = 0; i < 5; i++) { ... }
Purpose: This defines a for loop that runs a block of code repeatedly with each iteration.
Explanation:
Initialization (let i = 0): The loop starts with i set to 0.
Condition (i < 5): The loop continues as long as i is less than 5. If i becomes 5 or greater, the loop stops.
Increment (i++): After each iteration of the loop, i is incremented by 1. This is shorthand for i = i + 1.
Result: The loop will execute five times, with i taking the values 0, 1, 2, 3, 4.

console.log(i);
Purpose: This line logs the current value of i during each iteration of the loop.
Explanation: During each iteration, the current value of i is printed to the console.

Flow:
Iteration 1: i = 0, it logs 0.
Iteration 2: i = 1, it logs 1.
Iteration 3: i = 2, it logs 2.
Iteration 4: i = 3, it logs 3.
Iteration 5: i = 4, it logs 4.
*/