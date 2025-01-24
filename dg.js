// Filter creates a new array of elements that give true for a condition/filter

let nums = [1, 2, 3, 4, 5];

let newArr = nums.filter((val) => {
    return val % 2 === 0;
});

console.log(newArr);

/*
Here’s a breakdown of the code:

let nums = [1, 2, 3, 4, 5];
Declares an array nums containing the numbers 1, 2, 3, 4, 5.

let newArr = nums.filter((val) => {
Uses the filter method on the nums array. The filter method creates a new array by including 
only those elements of the original array that satisfy a given condition.
The arrow function takes one parameter, val, representing the current element of the array.

return val % 2 === 0;
Checks if the current value (val) is even by using the modulus operator %. If val % 2 equals 0, the value is included in the new array.
For example, if val is 4, the condition 4 % 2 === 0 is true, so 4 is included.

});
Closes the filter method and the arrow function. The resulting array is stored in newArr.

console.log(newArr);
Logs the new array newArr to the console.

What Happens:
The filter method iterates over the nums array and applies the condition to each element:
For 1: 1 % 2 === 0 → false (not included)
For 2: 2 % 2 === 0 → true (included)
For 3: 3 % 2 === 0 → false (not included)
For 4: 4 % 2 === 0 → true (included)
For 5: 5 % 2 === 0 → false (not included)
The filter method returns a new array containing only the elements that satisfy the condition.

Console Output: [2, 4]
*/