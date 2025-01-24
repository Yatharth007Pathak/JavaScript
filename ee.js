// Find the Greatest Common Divisor (GCD)

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

console.log(gcd(36, 60)); // Output: 12
console.log(gcd(10, 15)); // Output: 5
