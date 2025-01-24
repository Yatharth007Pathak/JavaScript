// Check if a Number is a Spy Number: A spy number is a number where the sum of its digits equals the product of its digits.

function isSpyNumber(num) {
    let digits = num.toString().split("").map(Number);
    let sum = digits.reduce((acc, digit) => acc + digit, 0);
    let product = digits.reduce((acc, digit) => acc * digit, 1);
    return sum === product;
}

console.log(isSpyNumber(1124)); // Output: false
console.log(isSpyNumber(123));  // Output: true (1 + 2 + 3 = 1 * 2 * 3 = 6)

/*
Here’s a breakdown of the code:

function isSpyNumber(num) {
Defines a function isSpyNumber that takes a single argument num. 
The function checks if the number is a "Spy Number", which means the sum and product of its digits are equal.

let digits = num.toString().split("").map(Number);
Converts the number num to a string using .toString().
Splits the string into an array of individual characters (digits) using .split("").
Converts each character (digit) back to a number using .map(Number).

let sum = digits.reduce((acc, digit) => acc + digit, 0);
Uses the reduce method to calculate the sum of the digits in the array digits.
The accumulator (acc) starts at 0, and for each digit, it adds the value of the digit to the accumulator.
This results in the sum of the digits.

let product = digits.reduce((acc, digit) => acc * digit, 1);
Uses the reduce method to calculate the product of the digits in the array digits.
The accumulator (acc) starts at 1, and for each digit, it multiplies the current value of the accumulator by the digit.
This results in the product of the digits.

return sum === product;
Checks if the sum of the digits is equal to the product of the digits.
If they are equal, the function returns true (indicating that the number is a Spy Number); otherwise, it returns false.

console.log(isSpyNumber(1124));
Calls the isSpyNumber function with 1124 as the argument.
The digits are [1, 1, 2, 4].
Sum: 1 + 1 + 2 + 4 = 8
Product: 1 * 1 * 2 * 4 = 8
Since the sum equals the product, the output is true.

console.log(isSpyNumber(123));
Calls the isSpyNumber function with 123 as the argument.
The digits are [1, 2, 3].
Sum: 1 + 2 + 3 = 6
Product: 1 * 2 * 3 = 6
Since the sum equals the product, the output is true.
*/