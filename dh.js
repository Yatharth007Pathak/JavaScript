// Reduce performs some operations and reduces the array to a single value. It returns that single value

let arr = [1, 2, 3, 4];

const output = arr.reduce((res, curr) => {
    return res + curr;
});

console.log(output);

/*
Here’s a breakdown of the code:

let arr = [1, 2, 3, 4];
Declares an array arr containing the elements 1, 2, 3, 4.

const output = arr.reduce((res, curr) => {
Calls the reduce method on the array arr. 
The reduce method takes a callback function and applies it to each element of the array, accumulating a single result.
The callback function has two parameters:
res (short for "result"): This is the accumulator that holds the running total of the computation.
curr (short for "current"): This represents the current element of the array being processed.

return res + curr;
Adds the value of the current element (curr) to the accumulator (res) and returns the updated value.

});
Closes the reduce method and the callback function.
By default, reduce starts with the first element of the array (1) as the initial value of the accumulator (res).

console.log(output);
Logs the final result of the reduce method to the console.

What Happens:
The reduce method iterates over the array arr, performing the addition step-by-step:
Start: res = 1 (first element), curr = 2 → res = 1 + 2 = 3
Next: res = 3, curr = 3 → res = 3 + 3 = 6
Next: res = 6, curr = 4 → res = 6 + 4 = 10
The final result of the reduction is 10.

Console Output: 10
*/