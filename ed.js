// Check if a Number is Strong: A strong number is a number where the sum of the factorials of its digits equals the number itself.

function isStrongNumber(num) {
    let sum = num.toString().split("").reduce((acc, digit) => acc + factorial(parseInt(digit)), 0);
    return sum === num;
}

console.log(isStrongNumber(145)); // Output: true (1! + 4! + 5! = 145)
console.log(isStrongNumber(123)); // Output: false
