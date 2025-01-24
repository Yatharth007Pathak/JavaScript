// Check if a Number is Automorphic: An automorphic number is a number whose square ends with the number itself.

function isAutomorphic(num) {
    let square = num * num;
    return square.toString().endsWith(num.toString());
}

console.log(isAutomorphic(5));  // Output: true (5² = 25)
console.log(isAutomorphic(6));  // Output: true (6² = 36)
console.log(isAutomorphic(7));  // Output: false

/*
Here’s a breakdown of the code:

function isAutomorphic(num) {
Defines a function isAutomorphic that checks if the number num is an automorphic number. 
An automorphic number is a number whose square ends with the number itself.

let square = num * num;
Calculates the square of num and stores it in the square variable.

return square.toString().endsWith(num.toString());
Converts the square to a string using .toString().
Uses the .endsWith() method to check if the string representation of square ends with the string representation of num.
If the square ends with the number itself, it returns true (indicating that the number is automorphic); otherwise, it returns false.

console.log(isAutomorphic(5));
Calls the isAutomorphic function with 5 as the argument.
The square of 5 is 25, and the last digit of 25 is 5, so it returns true.

console.log(isAutomorphic(6));
Calls the isAutomorphic function with 6 as the argument.
The square of 6 is 36, and the last digit of 36 is 6, so it returns true.

console.log(isAutomorphic(7));
Calls the isAutomorphic function with 7 as the argument.
The square of 7 is 49, and the last digit of 49 is 9, which does not match 7, so it returns false.
*/