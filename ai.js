/*
In JavaScript, data types define the kind of values that variables can hold. 
They are categorized into two main groups: Primitive and Non-Primitive (Reference) types.

1. Primitive Data Types
Primitive data types are the most basic data types. They are immutable (their values cannot be changed after creation), 
although variables holding them can be reassigned. JavaScript has seven primitive data types:

Number: Represents both integers and floating-point numbers.
String: Represents text, enclosed in single ('), double ("), or backticks (` for template literals).
Boolean: Represents logical values, either true or false.
Undefined: A variable that has been declared but not assigned a value has the type undefined.
Null: Represents the intentional absence of any object value. Often used to indicate an 'empty' or 'unknown' or 'nothing' value.
Symbol (introduced in ES6): Used to create unique identifiers for objects, ensuring unique property keys.
BigInt (introduced in ES2020): Used to represent integers with arbitrary precision. Useful for very large integers beyond the Number type limit.

2. Non-Primitive (Reference) Data Types
Non-primitive types, also called reference types, are data structures that are mutable, meaning their values can be changed after creation, 
and can hold collections of data or more complex entities. Non-primitive types include:

Object: A collection of key-value pairs. Objects can store complex data structures and include other objects, arrays, and functions as values.
Array: A special type of object used to store ordered lists of values. Each item in an array has an index.
Function: Functions are objects that contain executable code. They are block of code designed to perform a task, 
which can be assigned to variables, passed as arguments, or returned from other functions.
*/

let age = 25;
let price = 19.99;
console.log(age);
console.log(typeof age);
console.log(price);
console.log(typeof price);

let Name = "Alice";
let greeting = `Hello, ${Name}!`; // Template literal
console.log(Name);
console.log(typeof Name);
console.log(greeting);
console.log(typeof greeting);

let isLoggedIn = true;
console.log(isLoggedIn);
console.log(typeof isLoggedIn);

let score;
console.log(score); // Output: undefined
console.log(typeof score);

let selectedProduct = null; // null is the abscence of an object
console.log(selectedProduct);
console.log(typeof selectedProduct);

let id = Symbol("id");
console.log(id);
console.log(typeof id);

let bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber);
console.log(typeof bigNumber);

let user = { 
    name: "Alice", 
    age: 25, 
    cgpa: 9.3, 
    isPass: true, 
 };
console.log(user);
console.log(typeof user);
console.log(user.age);
console.log(user["age"]);

let colors = ["red", "green", "blue"];
console.log(colors);
console.log(typeof colors);

let sayHello = function(name) {
    return `Hello, ${name}!`;
};
console.log(sayHello);
console.log(typeof sayHello);

/*
Here's a detailed breakdown of each line in your JavaScript code, explaining the usage of different data types, 
template literals, objects, and functions:

Numbers

let age = 25;
Purpose: Declares a variable age with a numeric value.
Explanation: age is assigned the value 25, a whole number (integer).

let price = 19.99;
Purpose: Declares a variable price with a numeric value.
Explanation: price is assigned the value 19.99, a floating-point number.

console.log(age);
Purpose: Logs the value of age to the console.
Output: 25

console.log(typeof age);
Purpose: Logs the type of age to the console.
Output: "number"

console.log(price);
Purpose: Logs the value of price to the console.
Output: 19.99

console.log(typeof price);
Purpose: Logs the type of price to the console.
Output: "number"

Strings and Template Literals

let Name = "Alice";
Purpose: Declares a variable Name with a string value.
Explanation: Name is assigned the string "Alice".

let greeting = \Hello, ${Name}!`;`
Purpose: Declares a variable greeting using a template literal.
Explanation: The template literal allows embedding variables (${Name}), creating the string "Hello, Alice!".

console.log(Name);
Purpose: Logs the value of Name.
Output: "Alice"

console.log(typeof Name);
Purpose: Logs the type of Name.
Output: "string"

console.log(greeting);
Purpose: Logs the value of greeting.
Output: "Hello, Alice!"

console.log(typeof greeting);
Purpose: Logs the type of greeting.
Output: "string"

Boolean

let isLoggedIn = true;
Purpose: Declares a boolean variable isLoggedIn.
Explanation: isLoggedIn is assigned the boolean value true.

console.log(isLoggedIn);
Purpose: Logs the value of isLoggedIn.
Output: true

console.log(typeof isLoggedIn);
Purpose: Logs the type of isLoggedIn.
Output: "boolean"

Undefined

let score;
Purpose: Declares a variable score without initializing it.
Explanation: score is undefined by default.

console.log(score);
Purpose: Logs the value of score.
Output: undefined

console.log(typeof score);
Purpose: Logs the type of score.
Output: "undefined"

Null

let selectedProduct = null;
Purpose: Declares a variable selectedProduct and assigns null.
Explanation: null represents the absence of a value, and is often used to intentionally clear a variable.

console.log(selectedProduct);
Purpose: Logs the value of selectedProduct.
Output: null

console.log(typeof selectedProduct);
Purpose: Logs the type of selectedProduct.
Output: "object" (this is a known quirk in JavaScript where null is classified as an object).

Symbol

let id = Symbol("id");
Purpose: Declares a unique symbol id.
Explanation: Symbols are unique identifiers used primarily for object properties.

console.log(id);
Purpose: Logs the value of id.
Output: Symbol(id)

console.log(typeof id);
Purpose: Logs the type of id.
Output: "symbol"

BigInt

let bigNumber = 1234567890123456789012345678901234567890n;
Purpose: Declares a BigInt variable bigNumber.
Explanation: BigInt (n at the end) is used for handling large integers.

console.log(bigNumber);
Purpose: Logs the value of bigNumber.
Output: 1234567890123456789012345678901234567890n

console.log(typeof bigNumber);
Purpose: Logs the type of bigNumber.
Output: "bigint"

Object

let user = { name: "Alice", age: 25, cgpa: 9.3, isPass: true };
Purpose: Declares an object user with multiple properties.
Explanation: Objects in JavaScript are collections of properties, each with a key-value pair.

console.log(user);
Purpose: Logs the object user.
Output: { name: "Alice", age: 25, cgpa: 9.3, isPass: true }

console.log(typeof user);
Purpose: Logs the type of user.
Output: "object"

console.log(user.age);
Purpose: Accesses and logs the age property of user.
Output: 25

console.log(user["age"]);
Purpose: Accesses and logs the age property using bracket notation.
Output: 25

Array

let colors = ["red", "green", "blue"];
Purpose: Declares an array colors.
Explanation: Arrays are special types of objects in JavaScript used to store ordered collections.

console.log(colors);
Purpose: Logs the array colors.
Output: ["red", "green", "blue"]

console.log(typeof colors);
Purpose: Logs the type of colors.
Output: "object" (arrays are technically objects in JavaScript).

Function

let sayHello = function(name) { return \Hello, ${name}!`; };`
Purpose: Declares a function sayHello.
Explanation: The function takes a parameter name and returns a greeting string.

console.log(sayHello);
Purpose: Logs the function sayHello.
Output: The function code is displayed in the console.

console.log(typeof sayHello);
Purpose: Logs the type of sayHello.
Output: "function"

This code snippet demonstrates JavaScript’s flexibility with different data types and structures, 
including primitive types (like number, string, boolean, null, undefined, symbol, bigint), complex types (like object), arrays, and functions.
*/