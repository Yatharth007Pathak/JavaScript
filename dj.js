// The map() method creates a new array by applying a function to each element of the original array.

// Doubling numbers
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(num => num * 2);
console.log(doubled);  // Output: [2, 4, 6, 8, 10]

// Extracting names from objects
let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

let names = users.map(user => user.name);
console.log(names);  // Output: ["Alice", "Bob", "Charlie"]


// The filter() method creates a new array containing elements that pass a specified condition.

// Filtering odd numbers
let numbers_ = [1, 2, 3, 4, 5];
let odds = numbers_.filter(num => num % 2 != 0);
console.log(odds);  // Output: [1, 3, 5]

// Filtering adults
let users_ = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 35 }
];

let adults = users_.filter(user => user.age >= 18);
console.log(adults);  // Output: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 35 }]


// The reduce() method applies a function to accumulate array elements into a single value.

// Product of numbers
let numbrs = [1, 2, 3, 4, 5];
let product = numbrs.reduce((acc, num) => acc * num, 1);
console.log(product);  // Output: 120

// Grouping by age
let usrs = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 30 }
];

let ageGroups = usrs.reduce((groups, user) => {
    if (!groups[user.age]) {
        groups[user.age] = [];
    }
    groups[user.age].push(user.name);
    return groups;
}, {});

console.log(ageGroups); // Output: { 25: ["Alice", "Bob"], 30: ["Charlie"] }
