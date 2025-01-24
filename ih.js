/*
Promises is for "eventual" completion of task. It is an object is JS. It is a solution to callback hell

let promise = new Promise((resolve, reject) => {...})

resolve and reject are callbacks provided by JS

A Promise in JavaScript represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
It is a cleaner way to handle asynchronous tasks compared to traditional callbacks, improving readability and maintainability of code.

States of a Promise
A Promise can be in one of three states:
Pending: The initial state, neither fulfilled nor rejected.
Fulfilled: The operation was completed successfuly. resolve(result)
Rejected: The operation failed. reject(error)
*/

let promise = new Promise((resolve, reject) => {
    console.log("I am a promise");
    resolve("success");
});

let promise_ = new Promise((resolve, reject) => {
    console.log("I am a new promise");
    reject("some error occured 123");
});

// Type promise and promise_ in console

/*
Here's a breakdown of the code and what happens when you type promise in the console:

let promise = new Promise((resolve, reject) => {
A new Promise object is created and assigned to the variable promise. 
The constructor function takes a callback with two parameters: resolve and reject.

console.log("I am a promise");
Logs the string "I am a promise" immediately when the promise is created. This happens synchronously.

resolve("success");
The resolve function is called with the value "success", which fulfills the promise.

});
Ends the definition of the first Promise.

let promise_ = new Promise((resolve, reject) => {
A second Promise object is created and assigned to the variable promise_.

console.log("I am a new promise");
Logs the string "I am a new promise" immediately.

reject("some error occured 123");
The reject function is called with the value "some error occured 123", which rejects the promise.

});
Ends the definition of the second Promise.


When You Type promise in the Console:
promise will be in the fulfilled state because it was resolved with the value "success".
The console output for promise will look like this: Promise {<fulfilled>: "success"}

When You Type promise_ in the Console:
promise_ will be in the rejected state because it was rejected with the value "some error occured 123".
The console output for promise_ will look like this: Promise {<rejected>: "some error occured 123"}


Important Notes:
Promises execute the provided callback immediately upon creation, so both "I am a promise" and "I am a new promise" 
will be logged right away, even before interacting with the promises in the console.
*/