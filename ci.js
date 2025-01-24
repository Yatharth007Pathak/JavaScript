// Array Methods


/*
Adding and Removing Elements
push(element): Adds an element to the end.
pop(): Removes the last element.
unshift(element): Adds an element to the beginning.
shift(): Removes the first element.
*/
let fruits = ["apple", "banana"];
fruits.push("cherry");     // ["apple", "banana", "cherry"]
fruits.pop();              // ["apple", "banana"]
fruits.unshift("mango");   // ["mango", "apple", "banana"]
fruits.shift();            // ["apple", "banana"]


/*
Combining and Slicing Arrays
concat(array): Combines two or more arrays.
slice(start, end): Extracts a section of an array.
*/
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = arr1.concat(arr2);  // [1, 2, 3, 4]

let cities = ["pune", "delhi", "mumbai"];
let sliced = cities.slice(0, 2);   // ["pune", "delhi"]


/*
Modifying Arrays
splice(start index, deleteCount, ...new items): Adds/removes elements at a specific position.
*/
let heroes = ["hulk", "thor", "antman"];
fruits.splice(1, 1, "rocket", "ironman"); // ["hulk", "rocket", "ironman", "antman"]


/*
Searching in Arrays
indexOf(element): Returns the first index of the element, or -1 if not found.
lastIndexOf(element): Returns the last index of the element.
includes(element): Returns true if the element exists.
*/
let colors = ["red", "blue", "pink"];
console.log(fruits.indexOf("blue"));   // 1
console.log(fruits.includes("black"));  // false


/*
Transforming and Filtering
map(callback): Transforms each element and returns a new array.
filter(callback): Filters elements based on a condition.
*/
let numbers = [1, 2, 3, 4];
let doubled = numbers.map(x => x * 2);   // [2, 4, 6, 8]
let evens = numbers.filter(x => x % 2 === 0); // [2, 4]


/*
Sorting and Reversing
sort(callback): Sorts elements (by default, alphabetically).
reverse(): Reverses the order of elements.
*/
let fruitss = ["banana", "apple", "cherry"];
fruitss.sort();  // ["apple", "banana", "cherry"]
fruitss.reverse(); // ["cherry", "banana", "apple"]

let numberss = [3, 1, 4, 2];
numberss.sort((a, b) => a - b); // [1, 2, 3, 4]
