// forEach() with an Array of Objects

let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

users.forEach(function(user) {
    console.log(`${user.name} is ${user.age} years old`);
});
