// Calculate sum of 1 to n

let n = prompt("Enter a number:");

let sum = 0;
for (i=1; i<=n; i++) {
    sum = sum + i;
}

console.log("sum = ", sum);

/*
Code Breakdown

let n = prompt("Enter a number:");
Purpose: Displays a prompt dialog asking the user to input a number.
Behavior: The input is received as a string, but JavaScript will implicitly convert it to a number in the subsequent loop.

let sum = 0;
Purpose: Initializes the variable sum to 0. This will hold the cumulative total of the numbers.

for (i = 1; i <= n; i++) { ... }
Purpose: A for loop that iterates from 1 to n.
Initialization (i = 1): The loop starts with i = 1.
Condition (i <= n): The loop runs as long as i is less than or equal to n.
Increment (i++): After each iteration, i is increased by 1.

sum = sum + i;
Purpose: Adds the current value of i to sum in each iteration.

Example:
If n = 3, the iterations will be:
i = 1: sum = 0 + 1 = 1
i = 2: sum = 1 + 2 = 3
i = 3: sum = 3 + 3 = 6

console.log("sum = ", sum);
Purpose: Logs the final value of sum to the console after the loop finishes.
*/