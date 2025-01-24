/*
Create an array to store companies: Bloomberg, Microsoft, Uber, Google, IBM, Netflix.
 Remove Uber and add Ola in its place. Remove the first company from array. Add Amazon at the end
*/

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

companies.splice(2, 1, "Ola");

companies.shift();

companies.push("Amazon");

console.log(companies);