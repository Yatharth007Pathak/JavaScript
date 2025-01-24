// Sum of First N Fibonacci Numbers

let N = 6;
let a = 0, b = 1;
let sumFibonacci = a + b;  // Initial sum of first two Fibonacci numbers

for (let i = 3; i <= N; i++) {
    let next = a + b;
    sumFibonacci += next;
    a = b;
    b = next;
}

console.log("Sum of first " + N + " Fibonacci numbers: " + sumFibonacci);  // Output: 12
