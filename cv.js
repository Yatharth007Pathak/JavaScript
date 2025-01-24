function sum(a, b) {
    return a + b;
}
console.log(sum(3, 4));

// Multi-line arrow function (explicit return)
const arrowSum = (c, d) => {
    return c + d;
};
console.log(arrowSum(1,4));

function mul(e, f) {
    return e * f;
}
console.log(mul(2, 3));

// Single-line arrow function (implicit return)
const arrowMul = (g, h) => g * h
console.log(arrowMul(1, 8));


// arrow functions in JS don't use return keyword with an arrow function's concise body when function body is written without curly braces