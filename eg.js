// Find the Least Common Multiple (LCM)

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

console.log(lcm(12, 15)); // Output: 60
console.log(lcm(7, 5)); // Output: 35
