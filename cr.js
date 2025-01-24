// There are several ways to define functions in JavaScript:


// Function Declaration: A function declared with the function keyword and can be called before or after its definition due to hoisting.
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Output: Hello, Alice!


// Function Expression: A function assigned to a variable. These are not hoisted.
const greet_ = function(name) {
    return `Hello, ${name}!`;
};
console.log(greet_("Bob")); // Output: Hello, Bob!


// Arrow Functions: A concise syntax introduced in ES6.
const greets = (name) => `Hello, ${name}!`;
console.log(greets("Charlie")); // Output: Hello, Charlie!


// Immediately Invoked Function Expression (IIFE): A function that runs immediately after being defined.
(function() {
    console.log("This runs immediately!");
})();


// Anonymous Functions: Functions without a name, often used as arguments in other functions.
setTimeout(function() {
    console.log("This runs after 9 seconds");
}, 9000);