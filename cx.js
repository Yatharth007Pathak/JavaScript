// Examples of Arrow Function Syntax


//  No Parameters: Parentheses are required even when there are no parameters.
const greet = () => console.log("Hello!");
greet(); // Output: Hello!


// Single Parameter: Parentheses can be omitted if there is exactly one parameter.
const square = x => x * x;
console.log(square(4)); // Output: 16


// Multiple Parameters: Parentheses are required for two or more parameters.
const add = (a, b) => a + b;
console.log(add(3, 5)); // Output: 8


// Multi-line Function Body: Use curly braces {} for multi-line bodies. Explicitly use return to return a value.
const multiply = (a, b) => {
    const product = a * b;
    return product;
};
console.log(multiply(2, 3)); // Output: 6


// Returning an Object: Wrap the object in parentheses to avoid syntax conflicts.
const createUser = (name, age) => ({ name, age });
console.log(createUser("Alice", 25)); // Output: { name: "Alice", age: 25 }
