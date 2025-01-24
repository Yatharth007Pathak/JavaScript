// Find Factorial of a Number

function factorial(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
}

console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
