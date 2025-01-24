// Find the Sum of Digits of a Number

function sumOfDigits(num) {
    return num.toString().split("").reduce((sum, digit) => sum + parseInt(digit), 0);
}

console.log(sumOfDigits(1234)); // Output: 10 (1 + 2 + 3 + 4)
console.log(sumOfDigits(987));  // Output: 24 (9 + 8 + 7)
