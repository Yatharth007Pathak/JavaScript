// break: Exits from the loop immediately.

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;  // Exits the loop when i is 3
    }
    console.log(i);  // Outputs 0, 1, 2
}

/*

Here's a breakdown of this JavaScript code that uses a for loop with a break statement:

for (let i = 0; i < 5; i++) { ... }
Purpose: This for loop starts with i = 0 and continues to execute as long as i is less than 5.
Explanation:
The loop begins with i = 0 and increments i by 1 after each iteration.
The condition i < 5 ensures the loop runs until i reaches 5.

if (i === 3) { break; }
Purpose: This if statement checks if i is equal to 3. If it is, the break statement is executed, which immediately exits the loop.
Explanation:
When i is 3, the loop will stop executing any further iterations, even though the condition i < 5 would normally allow more iterations.

console.log(i);
Purpose: Logs the current value of i to the console.
Explanation: This line prints the value of i during each iteration of the loop, 
but it will not print when i reaches 3 because the loop is exited.

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
i = 3, the condition i === 3 is true, so the break statement is executed, and the loop exits.
The loop stops, and nothing is logged for i = 3 or beyond.
*/