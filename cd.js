// Iterating Over Arrays

// for loop:
let fruits = ["apple", "banana", "cherry", "orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// for...of loop:
let cities = ["pune", "delhi", "mumbai", "kanpur"];
for (let city of cities) {
    console.log(city);
}

let heroes = ["hulk", "thor", "superman", "antman", "ironman"];
for (let hero of heroes) {
    console.log(hero.toUpperCase());
}