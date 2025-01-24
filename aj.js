const product = {
    title: "Ball Pen",
    rating: 4,
    offer: 5,
    price: 270,
};

console.log(product);

/*
Here's a breakdown of your code, explaining the object structure and usage of const in JavaScript:

const product = { title: "Ball Pen", rating: 4, offer: 5, price: 270 };
Purpose: Declares a constant product and assigns it an object with properties.
Explanation: The const keyword declares product as a constant, meaning the variable itself cannot be reassigned to a new object. 
However, the properties inside the object can still be modified.
Object Structure: The object product contains four properties:
title: "Ball Pen" — a string representing the product's name.
rating: 4 — a number indicating the product rating.
offer: 5 — a number representing the discount percentage or offer.
price: 270 — a number representing the product's price.

console.log(product);
Purpose: Logs the entire product object to the console.
Output: { title: "Ball Pen", rating: 4, offer: 5, price: 270 }
Explanation: This outputs the product object, displaying each property and its associated value.
*/