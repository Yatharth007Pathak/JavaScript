/*
The while loop is used when you want to execute a block of code as long as a condition is true. 
It checks the condition before executing the code.

Syntax:
while (condition) {
    // Code to be executed
}
*/

let i = 0;
while (i < 5) {
    console.log(i);  // Outputs 0, 1, 2, 3, 4
    i++;
}

/*
Here's a breakdown of this JavaScript code that uses a while loop to log numbers from 0 to 4:

let i = 0;
Purpose: Declares a variable i and initializes it with the value 0.
Explanation: This sets up the starting point for the loop.

while (i < 5) { ... }
Purpose: This defines the while loop, which will execute the code inside the block as long as the condition i < 5 is true.
Explanation:
The condition i < 5 is checked before each iteration of the loop. 
If i is less than 5, the loop continues; if i reaches 5 or higher, the loop stops.
The loop will run as long as i is less than 5.

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