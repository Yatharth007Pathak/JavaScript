// Sum of Digits of a Number

let num = 1234;
let sumOfDigits = 0;

while (num > 0) {
    sumOfDigits += num % 10;  // Get the last digit
    num = Math.floor(num / 10);  // Remove the last digit
}

console.log("Sum of digits: " + sumOfDigits);  // Output: 10
