/*
The console.log() function in JavaScript is a built-in method used to output messages to the web console, 
which is a part of the developer tools in web browsers.It is commonly used for debugging purposes, 
allowing developers to inspect values, track the flow of code execution, and display error messages. 
Here's a detailed overview of how it works:

Syntax
console.log(message);

Parameters
message: This can be a string, number, object, array, or any other data type. 
You can also pass multiple arguments, and they will be concatenated in the output.

Console Methods: Besides console.log(), the console object has several other useful methods:
console.error(): Outputs an error message.
console.warn(): Outputs a warning message.
console.info(): Outputs an informational message.
console.table(): Displays data in a table format for better readability.

Practical Use Cases
Debugging: Track variable values and application flow.
Testing: Check outputs during development.
Monitoring: Log messages for monitoring application behavior.

Limitations
Performance: Excessive use of console.log() can lead to performance issues, especially in production environments. 
It's often good practice to remove or comment out debugging statements before deploying code.
Console Availability: console.log() outputs messages to the web console, 
which is only available in browser environments or certain JavaScript runtime environments like Node.js.

The console.log() function is a powerful tool for developers, providing a simple and effective way to output messages to the console 
for debugging and monitoring purposes. Its versatility and ease of use make it an essential part of JavaScript development.
*/


// Basic Output
console.log("Hello, World!");

// Logging Variables
let x = 10;
let y = 20;
console.log("The value of x is:", x);
console.log("The sum of x and y is:", x + y);

// Logging Objects and Arrays
let person = { name_: "Alice", age: 25 };
console.log(person);
let fruits = ["apple", "banana", "cherry"];
console.log(fruits);

// Using Multiple Arguments
let Name = "Bob";
let score = 95;
console.log("Name:", Name, "Score:", score);