let arr = [5, 6, 2, 1, 3];

const output = arr.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
});

console.log(output);

/*
Here’s a breakdown of the code:

let arr = [5, 6, 2, 1, 3];
Declares an array arr containing the elements 5, 6, 2, 1, 3.

const output = arr.reduce((prev, curr) => {
Calls the reduce method on the array arr. The reduce method takes a callback function and applies it to each element of the array, 
ultimately reducing it to a single value.
The callback function has two parameters:
prev (short for "previous"): Holds the accumulated result so far 
(initially the first element of the array unless an initial value is specified).
curr (short for "current"): Represents the current element of the array being processed.

return prev > curr ? prev : curr;
Compares the prev and curr values:
If prev is greater than curr, it returns prev.
Otherwise, it returns curr.
This effectively tracks the maximum value in the array as the reduce method iterates through it.

});
Closes the reduce method and the callback function.

console.log(output);
Logs the maximum value found in the array to the console.

What Happens:
The reduce method iterates over the array arr and compares each element to the accumulated maximum value:
Start: prev = 5 (first element), curr = 6 → 6 > 5 → prev = 6
Next: prev = 6, curr = 2 → 6 > 2 → prev = 6
Next: prev = 6, curr = 1 → 6 > 1 → prev = 6
Next: prev = 6, curr = 3 → 6 > 3 → prev = 6
The final result is the largest value in the array: 6.

Console Output: 6
*/