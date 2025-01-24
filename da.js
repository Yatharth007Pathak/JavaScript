// Modifying Elements Using forEach()

let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number, index, array) {
    array[index] = number * 2;  // Doubling each element in the array
});
console.log(numbers);
