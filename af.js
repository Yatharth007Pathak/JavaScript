/*
JavaScript is a dynamically typed language, meaning that variable types are determined at runtime rather than at compile-time. 
In JavaScript, you don’t need to specify the type of a variable when you declare it, 
and a variable can hold any type of data at different points in time. This flexibility allows variables to change their type as needed.

Pros and Cons of Dynamic Typing

Pros:
Flexibility: Easy to change the type of data stored in a variable.
Simplified Syntax: No need to declare variable types explicitly.

Cons:
Error-Prone: Type-related bugs are harder to catch and can appear at runtime.
Code Maintainability: Can make the code harder to read and understand, especially in large codebases.
*/


// No Type Declaration: You don’t need to declare the data type when you create a variable. For example:
let myVar = 42;       // myVar is a number
console.log(myVar);
myVar = true;         // Now myVar is a boolean
console.log(myVar);
myVar = "Hello";      // Now myVar is a string
console.log(myVar);



// Automatic Type Conversion (Type Coercion): JS automatically converts types in certain situations, like when adding a number to a string:
let result = 5 + "5";  // result is "55" (5 is converted to "5" and concatenated)
console.log(result);

// Type Checking at Runtime: Since JavaScript is dynamically typed, the type of a variable is only known at runtime. 
let value = 100;       // value is a number
console.log(typeof value); // Output: "number"

value = "JavaScript";  // value is now a string
console.log(typeof value); // Output: "string"

value = true;          // value is now a boolean
console.log(typeof value); // Output: "boolean"


/*
Here's a detailed breakdown of your JavaScript code, explaining each line and its purpose related to type declaration, 
automatic type conversion, and type checking:

// No Type Declaration: You don’t need to declare the data type when you create a variable. For example:
Purpose: This is a comment explaining that JavaScript does not require explicit type declarations when creating variables.

let myVar = 42;
Purpose: Declares a variable myVar and initializes it.
Explanation: The variable myVar is declared using the let keyword and assigned the numeric value 42. 
In JavaScript, you don't need to specify the data type; it's inferred from the assigned value.

console.log(myVar);
Purpose: Outputs the value of myVar to the console.
Explanation: This logs the current value of myVar, which is 42.

myVar = true;
Purpose: Reassigns a new value to the variable myVar.
Explanation: Here, myVar is changed from a number to a boolean by assigning it the value true. 
JavaScript allows variables to change types dynamically.

myVar = "Hello";
Purpose: Reassigns a new value to the variable myVar.
Explanation: Here, myVar is changed from a boolean to a string by assigning it the value "Hello". 
JavaScript allows variables to change types dynamically.

console.log(myVar);
Purpose: Outputs the updated value of myVar to the console.
Explanation: This logs the new value of myVar, which is now "Hello".

// Automatic Type Conversion (Type Coercion): JS automatically converts types in certain situations, like when adding a number to a string:
Purpose: This comment explains the concept of automatic type conversion (also known as type coercion) in JavaScript.

let result = 5 + "5";
Purpose: Performs an addition operation that demonstrates type coercion.
Explanation: Here, the number 5 is added to the string "5". 
JavaScript converts the number to a string and concatenates them, resulting in "55". The variable result now holds the string value "55".

console.log(result);
Purpose: Outputs the value of result to the console.
Explanation: This logs the value of result, which is "55".

// Type Checking at Runtime: Since JavaScript is dynamically typed, the type of a variable is only known at runtime.
Purpose: This comment explains that JavaScript is dynamically typed and that variable types are determined during execution.

let value = 100;
Purpose: Declares a variable value and initializes it.
Explanation: The variable value is declared and assigned the numeric value 100.

console.log(typeof value);
Purpose: Outputs the type of the variable value to the console.
Explanation: This uses the typeof operator to check the type of value, which is a number, and logs it. The output will be "number".

value = "JavaScript";
Purpose: Reassigns a new value to the variable value.
Explanation: The variable value is now assigned the string "JavaScript", changing its type from a number to a string.

console.log(typeof value);
Purpose: Outputs the type of the updated variable value to the console.
Explanation: This checks the new type of value using typeof, which will now log "string".

value = true;
Purpose: Reassigns a new value to the variable value.
Explanation: The variable value is changed again, this time to the boolean true, demonstrating JavaScript's dynamic typing.

console.log(typeof value);
Purpose: Outputs the type of the variable value to the console.
Explanation: This checks the type of value, which is now a boolean, and logs it. The output will be "boolean".
*/