// Find the Nth Term of the Fibonacci Series

function nthFibonacci(N) {
    let a = 0, b = 1;
    for (let i = 2; i <= N; i++) {
        let nextTerm = a + b;
        a = b;
        b = nextTerm;
    }
    return N === 1 ? a : b;  // Return 0 if N=1, else return b
}

console.log(nthFibonacci(10));  // Prints the 10th Fibonacci number

/*

Here’s a detailed line-by-line breakdown of the code:

function nthFibonacci(N) {
Defines a function named nthFibonacci that takes one parameter, N, 
which represents the position in the Fibonacci sequence for which the value is to be computed.

let a = 0, b = 1;
Initializes two variables:
a is set to 0, representing the first term in the Fibonacci sequence.
b is set to 1, representing the second term in the Fibonacci sequence.

for (let i = 2; i <= N; i++) {
Starts a for loop that iterates from 2 to N (inclusive). 
The loop handles the computation of the Fibonacci terms starting from the third position (i = 2).

let nextTerm = a + b;
Calculates the next term in the Fibonacci sequence by adding the current values of a and b. The result is stored in the variable nextTerm.

a = b;
Updates a to hold the value of b, effectively shifting a to the next term in the sequence.

b = nextTerm;
Updates b to hold the value of nextTerm, effectively shifting b to the term after the next.

}
Ends the for loop after computing the Fibonacci number at the Nth position.

return N === 1 ? a : b;
Uses a ternary operator to determine the return value:
If N is 1, the function returns a, which is 0 (the first Fibonacci number).
Otherwise, it returns b, which holds the Nth Fibonacci number after the loop ends.

}
Ends the function definition.

console.log(nthFibonacci(10));
Calls the nthFibonacci function with the argument 10, meaning it will compute the 10th Fibonacci number.
The function returns 34, which is the 10th Fibonacci number in the sequence.

Explanation of the Fibonacci Sequence for N = 10
The Fibonacci sequence starts as follows: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
The 10th term is 34.

Edge Cases
nthFibonacci(1)
Returns 0 because the first Fibonacci number is 0.
nthFibonacci(2)
Returns 1 because the second Fibonacci number is 1.
*/