/*
Error Handling in JavaScript (try-catch)
Error handling in JavaScript is essential to ensure that your code can handle unexpected situations and 
continue executing smoothly without crashing. The try...catch statement is used to handle errors in JavaScript.

Basic Syntax of try...catch:
try {
    // Code that might throw an error
} catch (error) {
    // Code that handles the error
} finally {
    // Code that runs regardless of an error occurring (optional)
}

Explanation:
try block: Contains the code that might throw an error.
catch block: Contains the code that runs if an error occurs in the try block. The catch block receives the error object.
finally block (optional): Contains code that will run regardless of whether an error occurs or not. It is used for cleanup tasks.
*/

let a = 5;
let b = 4;

console.log("a = ", a);
console.log("b = ", b);
console.log("a + b = ", a + b);

try {
    console.log("a + b = ", a + c);
} catch(err) {
    console.log(err);
} finally {
    console.log('This will always run, no matter what happens.');
}

console.log("a + b = ", a + b);
console.log("a + b = ", a + b);
console.log("a + b = ", a + b);
console.log("a + b = ", a + b);
console.log("a + b = ", a + b);

/*
Explanation of the Code:

Variable Initialization:
The variables a and b are initialized with values 5 and 4, respectively.
The code logs the values of a, b, and their sum (a + b).

Try-Catch Block:
The first console.log inside the try block attempts to log the sum of a and c, but c is not defined. This will throw an error.
The catch block catches the error and logs it.
The finally block runs regardless of whether an error occurred, logging the message 'This will always run, no matter what happens.'.

Subsequent Logs:
After the try-catch-finally block, the code continues to log the sum of a + b multiple times.
*/