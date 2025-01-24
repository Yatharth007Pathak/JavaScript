/*
Loops in JavaScript are used to repeatedly execute a block of code as long as a specified condition is true. 
JavaScript provides several types of loops, each useful in different scenarios. Loops are used to execute a piece of code agin and again.
Here's a breakdown of the main types of loops in JavaScript:

For Loop
The for loop is the most commonly used loop, and it repeats a block of code a set number of times, 
based on an initialization, a condition, and an iteration expression.
Syntax: for (initialization; condition; increment/decrement) { statement(s) }

While Loop
The while loop runs as long as the specified condition evaluates to true. It checks the condition before executing the code block.
Syntax: while (condition) { statement(s) }

Do...while Loop
The do...while loop is similar to the while loop, except that it always runs at least once 
because it checks the condition after the code block has been executed.
Syntax: do { statement(s) } while (condition);

For...in Loop
The for...in loop is used to iterate over the properties of an object or indexes of an array.

For...of Loop
The for...of loop is used to iterate over the values of an iterable object (such as arrays, strings, etc.).

Break Statement
The break statement is used to exit the loop prematurely, regardless of the loop's condition.

Continue Statement
The continue statement skips the current iteration of the loop and moves to the next iteration.


Summary:
for loop: Best for when you know the number of iterations in advance.
while loop: Runs as long as a condition is true (condition checked before each iteration).
do...while loop: Ensures at least one iteration, checking the condition after the first execution.
for...in loop: Used to iterate over the properties of an object or array indices.
for...of loop: Used to iterate over the values of iterable objects like arrays and strings.
break: Exits the loop entirely.
continue: Skips to the next iteration of the loop.
These loops provide flexibility for handling various repetitive tasks in JavaScript, depending on the scenario.
*/