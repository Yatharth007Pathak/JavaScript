/*
In JavaScript, Strings Are Immutable
Immutability means that once a string is created, its contents cannot be changed directly. Any operation 
that modifies a string (like replacing, slicing, or concatenating) creates a new string and leaves the original string unchanged.
*/

let str = "hello";
console.log(str); // Output: "hello"

str[0] = "H"; // This won't change the string because strings are immutable
console.log(str); // Output: "hello"

let newStr = str.toUpperCase(); // Creates a new string
console.log(newStr); // Output: "HELLO"
console.log(str); // Output: "hello" (original string remains unchanged)


/*
In JavaScript, Arrays Are Mutable
Mutability means that arrays can be modified after they are created. 
You can change the elements, add new elements, or remove elements from an array without creating a new array.
*/

let arr = [1, 2, 3];
console.log(arr); // Output: [1, 2, 3]

arr[0] = 10; // Changing an element in the array
console.log(arr); // Output: [10, 2, 3]

arr.push(7); // Adding an element to the end of the array
console.log(arr); // Output: [10, 2, 3, 7]

arr.pop(); // Removing the last element of the array
console.log(arr); // Output: [10, 2, 3]
