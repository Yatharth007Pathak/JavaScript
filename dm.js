/*
Take a number n as input from user. Create an array of numbers from 1 to n. 
Use the reduce method to calculate sum of all numbers n the array. Use the reduce method to calculate product of all numbers in the array
*/

let n = prompt("enter a number: ")

let arr = [];

for(let i = 1; i <= n; i++) {
    arr[i - 1] = i;
}

console.log(arr);

let sum = arr.reduce((res, curr) => {
    return res + curr;
});
console.log("summation =", sum);

let pro = arr.reduce((res, curr) => {
    return res * curr;
});
console.log("product =", pro);