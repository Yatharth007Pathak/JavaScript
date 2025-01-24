/*
The forEach() loop in JavaScript is a method available for arrays that allows you to iterate over the elements 
of an array and perform a specific action for each element. It is a more functional and concise way to loop 
through an array when compared to traditional for loops.

Syntax:
array.forEach(function(element, index, array) {
    Code to execute for each element
});

element: The current element being processed in the array.
index (optional): The index of the current element being processed.
array (optional): The array that forEach() is called on.


Important Notes:
forEach() is not chainable: Unlike other array methods like map(), filter(), reduce(), you cannot chain forEach() with other methods.
It doesn't support break or continue: If you need to exit the loop early or skip an iteration, you would need to use a for loop instead.
Does not return a value: forEach() always returns undefined.
*/


// Basic Usage of forEach()
let fruits = ["apple", "banana", "cherry"];
fruits.forEach(function(fruit) {
    console.log(fruit);
});


// Using Index in forEach()
let fruits_ = ["apple", "banana", "cherry"];
fruits_.forEach(function(fruit, index) {
    console.log(index + ": " + fruit);
});