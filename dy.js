// Check if a Number is an Armstrong Number

function isArmstrongNumber(num) {
    let digits = num.toString().split("");
    let power = digits.length;
    let sum = digits.reduce((acc, digit) => acc + Math.pow(parseInt(digit), power), 0);
    return sum === num;
}

console.log(isArmstrongNumber(153)); // Output: true (1³ + 5³ + 3³ = 153)
console.log(isArmstrongNumber(123)); // Output: false
