/*
The for...in loop is used to iterate over the properties of an object or the elements of an array 
(though it's not typically recommended for arrays due to potential issues with array indices).

Syntax:
for (let key in object) {
    // Code to be executed
}
*/


// Iterating over object properties
let person = { name: "Alice", age: 25 };
for (let key in person) {
    console.log(key + ": " + person[key]);  // Output: name: Alice, age: 25
}

/*
Here's a breakdown of this JavaScript code that uses a for...in loop to iterate over the properties of an object (person) 
and log each key and its associated value:

let person = { name: "Alice", age: 25 };
Purpose: Declares an object person with two properties: name and age.
Explanation: The object person contains:
A property name with the value "Alice".
A property age with the value 25.

for (let key in person) { ... }
Purpose: This is a for...in loop, which is used to iterate over the keys (property names) of an object.
Explanation:
The loop iterates over each key in the person object.
The variable key will hold each property name ("name", then "age") during each iteration.

console.log(key + ": " + person[key]);
Purpose: Logs the property name (key) and its corresponding value (person[key]) to the console.
Explanation: In each iteration, this line constructs a string that combines the key and its corresponding value from object (person[key]).
In the first iteration, key is "name", and person[key] is "Alice", so it logs "name: Alice".
In the second iteration, key is "age", and person[key] is 25, so it logs "age: 25".

Flow:

Iteration 1:
key = "name", person[key] = "Alice".
It logs: "name: Alice".

Iteration 2:
key = "age", person[key] = 25.
It logs: "age: 25".
*/


// Iterating over array indexes
let colors = ["red", "green", "blue"];
for (let index in colors) {
    console.log(index + ": " + colors[index]);  // Output: 0: red, 1: green, 2: blue
}

/*
Here's a breakdown of this JavaScript code that uses a for...in loop to iterate over the elements of an array (colors) 
and log each index and its corresponding value:

let colors = ["red", "green", "blue"];
Purpose: Declares an array colors containing three elements: "red", "green", and "blue".
Explanation: The array colors holds a list of color names.

for (let index in colors) { ... }
Purpose: This is a for...in loop, which is used to iterate over the indices (key-value pairs) of an array or object.
Explanation:
The loop iterates over each index in the colors array.
The variable index will hold each index ("0", then "1", and "2") during each iteration.

console.log(index + ": " + colors[index]);
Purpose: Logs the index and its corresponding value from the colors array to the console.
Explanation: In each iteration, this line constructs a string that combines the index and the value at that index in the array (colors[index]).
In the first iteration, index is "0", and colors[index] is "red", so it logs "0: red".
In the second iteration, index is "1", and colors[index] is "green", so it logs "1: green".
In the third iteration, index is "2", and colors[index] is "blue", so it logs "2: blue".

Flow:

Iteration 1:
index = "0", colors[index] = "red".
It logs: "0: red".

Iteration 2:
index = "1", colors[index] = "green".
It logs: "1: green".

Iteration 3:
index = "2", colors[index] = "blue".
It logs: "2: blue".
*/