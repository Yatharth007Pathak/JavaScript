/*
Parameters and Arguments
Parameters: Variables listed in the function definition.
Arguments: Values passed to the function when it is called.
*/

function add(a, b) { // Parameters: a, b
    return a + b;
}
console.log(add(3, 5)); // Arguments: 3, 5 → Output: 8


// Default Parameters: You can set default values for parameters.
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greet()); // Output: Hello, Guest!
console.log(greet("John")); // Output: Hello, John!


// Return Statement: The return statement specifies the value to be returned by the function.
function square(num) {
    return num * num;
}
console.log(square(4)); // Output: 16


// Rest Parameters: Allows passing an indefinite number of arguments.
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10


/*
Function Scope, Functions have access to variables in their:
Own scope.
Outer (parent) scopes.
Global scope.
*/
let globalVar = "I am global";
function testScope() {
    let localVar = "I am local";
    console.log(globalVar); // Accessible
    console.log(localVar);  // Accessible
}
testScope();
console.log(localVar); // Error: localVar is not defined