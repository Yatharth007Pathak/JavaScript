// Print Fibonacci Series (up to N terms)

function printFibonacci(N) {
    let a = 0, b = 1;
    let series = [];
    for (let i = 0; i < N; i++) {
        series.push(a);
        let nextTerm = a + b;
        a = b;
        b = nextTerm;
    }
    console.log(series.join(", "));
}

printFibonacci(10);  // Prints the first 10 Fibonacci numbers

/*
Here’s a detailed line-by-line breakdown of the provided code:

function printFibonacci(N) {
Defines a function named printFibonacci that takes one parameter, N, 
which represents the number of terms in the Fibonacci sequence to generate.

let a = 0, b = 1;
Initializes two variables:
a is set to 0, representing the first term in the Fibonacci sequence.
b is set to 1, representing the second term in the Fibonacci sequence.

let series = [];
Initializes an empty array series to store the Fibonacci sequence as it is generated.

for (let i = 0; i < N; i++) {
Starts a for loop that iterates N times, where i serves as the loop counter.

series.push(a);
Adds the current value of a (the current term in the sequence) to the series array.

let nextTerm = a + b;
Calculates the next term in the Fibonacci sequence by adding the current term a and the next term b. 
The result is stored in the variable nextTerm.

a = b;
Updates a to hold the value of b, effectively shifting a to the next term in the sequence.

b = nextTerm;
Updates b to hold the value of nextTerm, effectively shifting b to the term after the next.

}
Ends the for loop after generating and storing all N terms in the series array.

console.log(series.join(", "));
Converts the series array into a comma-separated string using the join method and logs it to the console.

}
Ends the printFibonacci function definition.

printFibonacci(10);
Calls the printFibonacci function with the argument 10, meaning it will generate the first 10 terms of the Fibonacci sequence.
The output will be: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34. This sequence is the Fibonacci series starting from 0.

Explanation of the Fibonacci Sequence
The Fibonacci sequence starts with 0 and 1.
Each subsequent term is the sum of the previous two terms. For example:
0 + 1 = 1
1 + 1 = 2
1 + 2 = 3
2 + 3 = 5, and so on.
*/