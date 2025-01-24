/*
Key Features of Arrow Functions:

Concise Syntax: Shorter than traditional function declarations.

Single-line arrow function (implicit return)
const functionName = (parameter1, parameter2) => `expression`;

Multi-line arrow function (explicit return)
const functionName = (parameter1, parameter2) => {
    // Function body
    return someValue;
};

Lexical this: Arrow functions do not have their own this. Instead, they inherit this from the surrounding context.

Use Case: Ideal for simple functions or callbacks.
*/

const printHello = () => {
    console.log("hello");
};

printHello()


/*
Explanation of the Code

Arrow Function Declaration:
const printHello = () => {
    console.log("hello");
};
Arrow Function: An ES6 feature that provides a concise syntax for defining functions.
No Parameters: The function printHello does not take any arguments.
Function Body:
Contains a single statement, console.log("hello"), which prints "hello" to the console.

Function Invocation:
printHello();
The function printHello is called.
This executes the code inside the function, logging "hello" to the console.
*/