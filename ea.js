// Find All Prime Numbers in a Range

function findPrimesInRange(start, end) {
    let primes = [];
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) primes.push(i);
    }
    return primes;
}

console.log(findPrimesInRange(10, 50)); 
// Output: [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]
