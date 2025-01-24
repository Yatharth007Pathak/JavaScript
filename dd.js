let arr = ["pune", "delhi", "mumbai"];

arr.forEach((val, idx, arr) => {
    console.log(val.toUpperCase(), idx, arr);
});

/*
Here’s a breakdown of the provided code:

let arr = ["pune", "delhi", "mumbai"];
Declares an array arr containing the strings "pune", "delhi", and "mumbai".

arr.forEach((val, idx, arr) => {
Calls the forEach method on the array arr. The forEach method executes the provided arrow function once for each element in the array.
The arrow function has three parameters:
val: The current element being processed.
idx: The index of the current element.
arr: The entire array.

console.log(val.toUpperCase(), idx, arr);
Logs three pieces of information for each iteration:
val.toUpperCase(): Converts the current element (val) to uppercase and logs it.
idx: Logs the index of the current element.
arr: Logs the entire array.

});
Closes the forEach method and the arrow function.
*/