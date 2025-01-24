/*
The for...of loop is used to iterate over the values of iterable objects like arrays, strings, and maps. 
It gives you direct access to the values instead of the index or key.

Syntax:
for (let value of iterable) {
    // Code to be executed
}
*/

// Iterating over array values
let colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(color);  // Output: red, green, blue
}

/*
Here's a breakdown of this JavaScript code that uses a for...of loop to iterate over the elements of an array (colors) and log each element:

let colors = ["red", "green", "blue"];
Purpose: Declares an array colors containing three elements: "red", "green", and "blue".
Explanation: The colors array holds the color names.

for (let color of colors) { ... }
Purpose: This is a for...of loop, which is used to iterate over the values (elements) of an iterable object like an array.
Explanation:
The loop iterates over each element in the colors array.
The variable color will hold each value ("red", then "green", then "blue") during each iteration.

console.log(color);
Purpose: Logs the value of the color variable (the current element of the colors array) to the console.
Explanation: This line will print each color in the array one by one.

Flow:

Iteration 1:
color = "red".
It logs: "red".

Iteration 2:
color = "green".
It logs: "green".

Iteration 3:
color = "blue".
It logs: "blue".
*/


// Iterating over string values
let str = "Yatharth Pathak";
for (let i of str) {
    console.log("i =", i);  // Output: Y, a, t, h, a, r, t, h,  , P, a, t, h, a, k
}

/*
Code Breakdown

let str = "Yatharth Pathak";
Purpose: Initializes a string variable str with the value "Yatharth Pathak".

for (let i of str) { ... }
Purpose: Iterates over each character in the string str.
Behavior: The for...of loop works by retrieving each character of the string one at a time and assigns it to the variable i for each iteration.

console.log("i =", i);
Purpose: Logs each character (i) of the string to the console.

Flow of Execution

Initialization: The variable str is assigned the value "Yatharth Pathak".

Loop Iteration: The for...of loop begins and iterates through each character of the string str.
First iteration: i = "Y"
Second iteration: i = "a"
Third iteration: i = "t"
...
Last iteration: i = "k"

Output: Each character of the string is printed to the console on a new line.
i = Y
i = a
i = t
i = h
i = a
i = r
i = t
i =  
i = P
i = a
i = t
i = h
i = a
i = k
*/