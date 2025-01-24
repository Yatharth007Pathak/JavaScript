/*
In JavaScript, variables are used to store data values. 
You can think of them as containers for holding information that can be used and manipulated throughout your code. 
There are three primary ways to declare variables in JavaScript:

var:
The oldest way to declare a variable.
Function-scoped, meaning it's accessible within the function it is declared in, or globally if declared outside a function.
Can be redeclared and updated.
var name = "Alice";

let:
Introduced in ES6 (ECMAScript 2015).
Block-scoped, meaning it's only accessible within the block (enclosed by {}) in which it is declared.
Can be updated but not redeclared in the same scope.
let age = 30;

const:
Also introduced in ES6.
Block-scoped like let, but the value assigned to a const variable cannot be changed (immutable).
Must be initialized at the time of declaration.
const birthYear = 1994;

Key Points
Use let and const for variable declarations in modern JavaScript to avoid issues associated with var.
const is ideal for values that should not change, while let is suitable for values that may need to be updated.

var: Variable can be re-directed and updated. A global scope variable.
let: Variable cannot be re-directed but can be updated. A block scope variable.
var: Variable cannot be re-directed or updated. A block scope variable.
*/

// Declaring variables
var city = "New York";  // Using var
let temperature = 75;   // Using let
const country = "USA";  // Using const

console.log(city);
console.log(temperature);
console.log(country);

// Updating variables
temperature = 80; // Works with let
// country = "Canada"; // Error: Assignment to constant variable

console.log(temperature);

// Using variables
console.log("The temperature in " + city + " is " + temperature + " degrees."); // Output: The temperature in New York is 80 degrees.

/*
Here's a detailed breakdown of your JavaScript code, explaining each line and its purpose:

var city = "New York";
Purpose: Declares a variable named city.
Explanation: This line uses the var keyword to create a variable called city and initializes it with the string value "New York". 
The var keyword allows the variable to be function-scoped or globally scoped.

let temperature = 75;
Purpose: Declares a block-scoped variable named temperature.
Explanation: Here, the let keyword is used to declare a variable called temperature, initializing it to the numeric value 75. 
Variables declared with let are limited in scope to the block they are defined in.

const country = "USA";
Purpose: Declares a constant variable named country.
Explanation: The const keyword creates a constant variable country and initializes it with the string value "USA". 
Constants cannot be reassigned after their initial assignment, making them immutable.

console.log(city);
Purpose: Outputs the value of the variable city to the console.
Explanation: This command displays "New York" in the console.

console.log(temperature);
Purpose: Outputs the value of the variable temperature to the console.
Explanation: This logs the current value of temperature, which is 75.

console.log(country);
Purpose: Outputs the value of the variable country to the console.
Explanation: This displays "USA" in the console.

temperature = 80;
Purpose: Updates the value of the variable temperature.
Explanation: This line changes the value of temperature from 75 to 80. Since temperature was declared with let, it can be reassigned.

// country = "Canada"; // Error: Assignment to constant variable
Purpose: This is a comment indicating that attempting to reassign the country variable would result in an error.
Explanation: Since country was declared with const, trying to assign it a new value (like "Canada") 
would produce a runtime error, as constants cannot be reassigned.

console.log(temperature);
Purpose: Outputs the updated value of temperature to the console.
Explanation: This logs the new value of temperature, which is now 80.

console.log("The temperature in " + city + " is " + temperature + " degrees.");
Purpose: Outputs a formatted string that includes the values of city and temperature.
Explanation: This line concatenates strings and variables to create the sentence: 
"The temperature in New York is 80 degrees.", which is displayed in the console.

This code snippet demonstrates variable declaration, scope, reassignment, and basic output to the console in JavaScript.
*/