// Check if a Number is Harshad (Niven) Number: A Harshad number is divisible by the sum of its digits.

function isHarshadNumber(num) {
    let sum = num.toString().split("").reduce((acc, digit) => acc + parseInt(digit), 0);
    return num % sum === 0;
}

console.log(isHarshadNumber(18)); // Output: true (18 ÷ (1 + 8) = 2)
console.log(isHarshadNumber(21)); // Output: false

/*
Here’s a breakdown of the code:

function isHarshadNumber(num) {
Defines a function isHarshadNumber that checks if the number num is a Harshad number (also known as Niven number). 
A number is considered a Harshad number if it is divisible by the sum of its digits.

let sum = num.toString().split("").reduce((acc, digit) => acc + parseInt(digit), 0);
Converts the number num to a string using .toString().
Splits the string into an array of individual characters (digits) using .split("").
Uses the reduce method to calculate the sum of the digits:
For each digit, parseInt(digit) converts it from a string to a number.
The accumulator (acc) starts at 0 and adds each digit to it.
The result is the sum of the digits of the number.

return num % sum === 0;
Checks if the number num is divisible by the sum of its digits (sum).
If num is divisible by sum, it returns true (indicating that the number is a Harshad number), otherwise it returns false.

console.log(isHarshadNumber(18));
Calls the isHarshadNumber function with 18 as the argument.
The digits of 18 are [1, 8], so the sum is 1 + 8 = 9.
18 % 9 === 0 (since 18 is divisible by 9), so the function returns true.

console.log(isHarshadNumber(21));
Calls the isHarshadNumber function with 21 as the argument.
The digits of 21 are [2, 1], so the sum is 2 + 1 = 3.
21 % 3 === 0 (since 21 is divisible by 3), so the function returns true.
*/