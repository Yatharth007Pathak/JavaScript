// .then()


const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise");
        resolve("success");
    });
};

let promise = getPromise();
promise.then(() => {
    console.log("promise fulfilled");
});

/*
Code Explanation:

const getPromise = () => {
This defines a function named getPromise using an arrow function syntax. The function does not take any arguments.

return new Promise((resolve, reject) => {
Inside the function, a new Promise object is created and returned.

The Promise constructor takes a callback with two arguments:
resolve: A function to indicate the promise is successfully fulfilled.
reject: A function to indicate the promise is rejected due to some error.

console.log("I am a promise");
Immediately logs "I am a promise" to the console when the Promise is created. This happens synchronously.

resolve("success");
The promise is fulfilled with the value "success".

};
Ends the Promise definition and the arrow function.

let promise = getPromise();
Calls the getPromise function and stores the returned Promise object in the variable promise.
At this point, "I am a promise" is logged to the console.

promise.then(() => {
Adds a .then() handler to the promise.
The .then() method is executed when the promise is fulfilled, i.e., when resolve is called.

console.log("promise fulfilled");
When the promise is fulfilled, this callback logs "promise fulfilled" to the console.

Execution Flow:
The getPromise function is called, logging "I am a promise" immediately.
The resolve("success") inside the Promise fulfills the promise.
The .then() handler is triggered, logging "promise fulfilled" to the console.

Console Output:
I am a promise (logged immediately when the promise is created).
promise fulfilled (logged when the promise is fulfilled).
*/