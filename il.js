// .catch()


const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise");
        reject("error")
    });
};

let promise = getPromise();
promise.then(() => {
    console.log("promise fulfilled")
});

promise.catch(() => {
    console.log("rejected")
});

/*
Code Explanation:

const getPromise = () => {
Defines an arrow function named getPromise. It does not take any parameters.

return new Promise((resolve, reject) => {
Inside the function, a new Promise object is created and returned.

console.log("I am a promise");
Immediately logs "I am a promise" when the Promise is created. This happens synchronously.

reject("error");
The reject function is called with the value "error". This marks the promise as rejected.

};
Ends the Promise definition and the arrow function.

let promise = getPromise();
Calls the getPromise function and assigns the returned Promise object to the variable promise.
At this point, "I am a promise" is logged to the console.

promise.then(() => {
A .then() handler is added to the promise.
The .then() method executes when the promise is fulfilled. However, since the promise is rejected in this case, this handler will not run.

console.log("promise fulfilled");
This log statement is part of the .then() handler and will not be executed because the promise is rejected.

promise.catch(() => {
A .catch() handler is added to the promise.
The .catch() method executes when the promise is rejected.

console.log("rejected");
When the .catch() handler runs, this logs "rejected" to the console.

Execution Flow:
The getPromise function is called, and "I am a promise" is logged immediately.
The reject("error") inside the Promise marks the promise as rejected.
The .then() handler is skipped because the promise is rejected.
The .catch() handler is triggered, logging "rejected" to the console.

Console Output:
I am a promise (logged when the promise is created).
rejected (logged by the .catch() handler).

Key Points:
.then() runs on fulfillment, but the promise is rejected here, so it is skipped.
.catch() runs on rejection, so it handles the error and logs "rejected".
*/