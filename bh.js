// continue: Skips the current iteration and proceeds to the next one.

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue;  // Skips the iteration when i is 3
    }
    console.log(i);  // Outputs 0, 1, 2, 4
}

/*
Here's a breakdown of this JavaScript code that uses a for loop with a continue statement:

for (let i = 0; i < 5; i++) { ... }
Purpose: This for loop starts with i = 0 and continues to execute as long as i is less than 5.
Explanation:
The loop begins with i = 0 and increments i by 1 after each iteration.
The condition i < 5 ensures the loop runs until i reaches 5.

if (i === 3) { continue; }
Purpose: This if statement checks if i is equal to 3. 
If it is, the continue statement is executed, which skips the current iteration and moves to the next one.
Explanation:
When i is 3, the continue statement skips the console.log(i) for that iteration, so it will not print 3.

console.log(i);
Purpose: Logs the current value of i to the console, but only if the continue statement was not triggered.
Explanation: This line prints the value of i for all iterations except when i is 3.

Flow:

Iteration 1:
i = 0, the condition i === 3 is false, so the loop continues.
It logs: 0.

Iteration 2:
i = 1, the condition i === 3 is false, so the loop continues.
It logs: 1.

Iteration 3:
i = 2, the condition i === 3 is false, so the loop continues.
It logs: 2.

Iteration 4:
i = 3, the condition i === 3 is true, so the continue statement is executed, skipping the console.log(i) for this iteration.
No output for i = 3.

Iteration 5:
i = 4, the condition i === 3 is false, so the loop continues.
It logs: 4.
*/