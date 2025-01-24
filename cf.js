/*
For a given array with price of 5 items [250, 645, 300, 900, 50]. All items have an offer of 10% off on them. 
Change the array to store final price after applying offer.
*/

let items = [250, 645, 300, 900, 50];

let idx = 0;
for (let  val of items) {
    console.log(`value at index ${idx} = ${val}`);
    let offer = val/10;
    items[idx] = items[idx] - offer;
    console.log(`value after offer = ${items[idx]}`);
    idx++;
}

for (let i = 0; i < items.length; i++) {
    let offer = items[i] / 10;
    items[i] -= offer;
}
console.log(items);

/*
Code Breakdown

let items = [250, 645, 300, 900, 50];
Initializes an array items containing the integers [250, 645, 300, 900, 50].

let idx = 0;
Declares a variable idx and initializes it to 0. This variable is used to track the index of the current element in the array.

First for...of Loop:

for (let val of items) {
Starts a for...of loop that iterates over each value (val) in the items array. 
This loop does not give direct access to the index, so idx is used separately to track it.

console.log(\value at index ${idx} = ${val}`);`
Logs the current index (idx) and value (val) of the array element.

let offer = val / 10;
Calculates 10% of the current value (val) and stores it in the variable offer.

items[idx] = items[idx] - offer;
Updates the value of the current element in the items array by subtracting the offer.

console.log(\value after offer = ${items[idx]}`);`
Logs the updated value of the element after applying the 10% offer.

idx++;
Increments the index variable idx by 1.

Second for Loop:

for (let i = 0; i < items.length; i++) {
Starts a traditional for loop that iterates over the indices of the items array.

let offer = items[i] / 10;
Calculates 10% of the value at the current index (i) and stores it in the variable offer.

items[i] -= offer;
Updates the value of the element at index i by subtracting the offer.

console.log(items);
Logs the final state of the items array after both loops have been executed.


Key Observations
The first for...of loop updates the items array by subtracting a 10% offer once.
The second for loop applies the same logic again, further reducing each element by an additional 10% of its updated value.
*/