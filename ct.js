// Higher-Order Functions: Functions that take other functions as arguments or return functions.

function applyOperation(a, b, operation) {
    return operation(a, b);
}
let result = applyOperation(5, 3, (x, y) => x * y);
console.log(result); // Output: 15

// Nested Functions: A function defined inside another function.
function outer() {
    let outerVar = "I am outer";
    function inner() {
        console.log(outerVar); // Accessing outer scope
    }
    inner();
}
outer();


/*
Here’s an explanation of the provided code with detailed breakdowns:

1. Higher-Order Functions

Definition: A higher-order function is a function that either: 
Takes another function as an argument or Returns another function as its output.

Explanation:
applyOperation(a, b, operation) takes three arguments: 
a and b are numbers.
operation is a function that performs some operation on a and b.
The operation function is invoked with a and b and its result is returned.
Here, the operation function is passed as an arrow function (x, y) => x * y that multiplies its two arguments.

Flow:
applyOperation(5, 3, (x, y) => x * y) evaluates to (5 * 3).
15 is returned and stored in the variable result.


2. Nested Functions

Definition: Nested functions are functions defined inside other functions. 
They can access variables and parameters of the outer function's scope (lexical scoping).

Explanation:
The outer function defines a variable outerVar and a nested function inner.
The inner function logs the value of outerVar to the console.
The outer function calls inner, which executes the console.log statement.
Key Concept: Lexical Scoping
The inner function has access to outerVar because it is defined in the same lexical scope (inside the outer function).

Flow:
outer() is called.
Inside outer, inner() is invoked, logging the value of outerVar.
*/