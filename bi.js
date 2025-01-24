// Combining Loops with Break and Continue

for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;  // Skip 2
    }
    if (i === 4) {
        break;  // Exit the loop when i equals 4
    }
    console.log(i);  // Output: 0, 1, 3
}

/*
Here's a breakdown of this JavaScript code that uses both continue and break statements inside a for loop:

for (let i = 0; i < 5; i++) { ... }
Purpose: This for loop starts with i = 0 and continues to execute as long as i is less than 5.
Explanation:
The loop begins with i = 0 and increments i by 1 after each iteration.
The condition i < 5 ensures the loop runs until i reaches 5.

if (i === 2) { continue; }
Purpose: If i equals 2, the continue statement is executed, which skips the current iteration and proceeds to the next iteration.
Explanation: When i is 2, the console.log(i) is skipped, and the loop continues with the next value of i (i.e., 3).

if (i === 4) { break; }
Purpose: If i equals 4, the break statement is executed, which immediately exits the loop.
Explanation: When i is 4, the loop will stop running, and no further iterations will occur.

console.log(i);
Purpose: This line logs the current value of i to the console, but it is skipped when i equals 2 
(due to the continue statement) and the loop is exited when i equals 4 (due to the break statement).

Flow:

Iteration 1:
i = 0, the condition i === 2 is false, and i === 4 is also false, so it continues.
It logs: 0.

Iteration 2:
i = 1, the condition i === 2 is false, and i === 4 is also false, so it continues.
It logs: 1.

Iteration 3:
i = 2, the condition i === 2 is true, so the continue statement is executed.
The console.log(i) is skipped, and the loop moves to the next iteration (i = 3).

Iteration 4:
i = 3, the condition i === 2 is false, and i === 4 is also false, so it continues.
It logs: 3.

Iteration 5:
i = 4, the condition i === 4 is true, so the break statement is executed.
The loop exits, and no further iterations happen.
*/