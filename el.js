// Check if a Number is a Neon Number: A neon number is a number where the sum of the digits of its square equals the number itself.

function isNeonNumber(num) {
    let square = num * num;
    let sum = square.toString().split("").reduce((acc, digit) => acc + parseInt(digit), 0);
    return sum === num;
}

console.log(isNeonNumber(9));  // Output: true (9² = 81 → 8 + 1 = 9)
console.log(isNeonNumber(12)); // Output: false

/*
Here’s a breakdown of the code:

function isNeonNumber(num) {
Defines a function isNeonNumber that takes a single argument num. The function checks if the number is a neon number.

let square = num * num;
Calculates the square of num and stores it in the square variable.

let sum = square.toString().split("").reduce((acc, digit) => acc + parseInt(digit), 0);
Converts the square to a string using .toString() to easily access each digit.
Splits the string into an array of individual digits using .split("").
Uses the reduce method to sum the digits:
The reduce method iterates over each digit (as a string), converts it to an integer using parseInt(digit), 
and adds it to the accumulator acc.
The initial value of the accumulator is 0. The result is the sum of the digits of the square.

return sum === num;
Checks if the sum of the digits of the square is equal to the original number num. 
If true, the number is a neon number, and the function returns true; otherwise, it returns false.

console.log(isNeonNumber(9));
Calls the isNeonNumber function with 9 as the argument.
The square of 9 is 81, and the sum of its digits is 8 + 1 = 9, which equals the original number 9. Therefore, the output is true.

console.log(isNeonNumber(12));
Calls the isNeonNumber function with 12 as the argument.
The square of 12 is 144, and the sum of its digits is 1 + 4 + 4 = 9, which does not equal 12. Therefore, the output is false.
*/