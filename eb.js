// Check if a Number is Perfect

function isPerfectNumber(num) {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) sum += i;
    }
    return sum === num;
}

console.log(isPerfectNumber(6)); // Output: true (1 + 2 + 3 = 6)
console.log(isPerfectNumber(28)); // Output: true
console.log(isPerfectNumber(12)); // Output: false
