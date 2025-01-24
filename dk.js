/*
map(): Transforms each element and returns a new array.
filter(): Selects elements based on a condition and returns a new array.
reduce(): Aggregates array elements into a single value.
*/


// Combined Example: Using map(), filter(), and reduce().    Problem: Find the total age of all users who are 30 years or older.

let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 },
    { name: "Charlie", age: 30 },
    { name: "David", age: 28 }
];

let totalAge = users
    .filter(user => user.age >= 30)      // Filter users who are 30 or older
    .map(user => user.age)              // Extract the ages of filtered users
    .reduce((sum, age) => sum + age, 0); // Sum up the ages

console.log(totalAge);  // Output: 65


/*
Here’s a detailed breakdown of the code:

let users = [...]
Declares an array users containing objects. Each object represents a user with two properties:
name: The user's name.
age: The user's age.

.filter(user => user.age >= 30)
The filter method creates a new array containing only users who are 30 years or older.
For the given array:
Alice (25 years old) is excluded.
Bob (35 years old) is included.
Charlie (30 years old) is included.
David (28 years old) is excluded.

Result after filtering:
[
    { name: "Bob", age: 35 },
    { name: "Charlie", age: 30 }
]

.map(user => user.age)
The map method transforms the filtered array by extracting only the age property of each user.

Result after mapping:
[35, 30]

.reduce((sum, age) => sum + age, 0)
The reduce method calculates the total sum of the ages in the array [35, 30].
It starts with an initial value of 0 (the second argument to reduce).
Step-by-step:
Start: sum = 0
Add 35: sum = 0 + 35 = 35
Add 30: sum = 35 + 30 = 65

console.log(totalAge);
Logs the result of the reduce method, which is the total age of users who are 30 or older.

Final Output: 65
*/