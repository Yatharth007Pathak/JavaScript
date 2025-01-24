/*
Map creates a new array with the results of some operation. The value its callback returns are used to form new array
arr.map(callbackFun(value, index, array))
*/

let nums = [1, 2, 3, 4, 5];

let newArr = nums.map((val) => {
    return val ** 2;
});

console.log(newArr);

/*
Here’s a breakdown of the code:

let nums = [1, 2, 3, 4, 5];
Declares an array nums containing the numbers 1, 2, 3, 4, 5.

let newArr = nums.map((val) => {
Uses the map method on the nums array. 
The map method creates a new array by applying the provided function to each element of the original array.
The arrow function takes one parameter, val, which represents the current element of the array.

return val ** 2;
The function computes the square of the current value (val) by using the exponentiation operator ** and returns the result. 
For example, if val is 2, val ** 2 will be 4.

});
Closes the map method and the arrow function. The result is stored in the newArr variable.

console.log(newArr);
Logs the new array newArr to the console.

What Happens:
The map method iterates over the nums array and applies the arrow function to each element:
1 ** 2 = 1
2 ** 2 = 4
3 ** 2 = 9
4 ** 2 = 16
5 ** 2 = 25
The map method collects these squared values into a new array newArr.

Console Output: [1, 4, 9, 16, 25]
*/