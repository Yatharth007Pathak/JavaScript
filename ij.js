/*
The .then() and .catch() methods are used with Promises in JavaScript to handle asynchronous operations.

1. .then()
The .then() method is used to define what happens when a Promise is successfully resolved. 
It takes a callback function as its argument, which receives the resolved value of the Promise.
Syntax: promise.then(onFulfilled, onRejected);
onFulfilled: A callback function executed if the promise is resolved.
onRejected (optional): A callback function executed if promise is rejected. However, .catch() is the preferred way to handle rejections.

2. .catch()
The .catch() method is used to handle errors or rejections from a Promise. 
It takes a single callback function that runs when the Promise is rejected.
Syntax: promise.catch(onRejected);
onRejected: A callback function that receives the error or rejection reason.

Chaining .then() and .catch()
You can chain multiple .then() calls for sequential asynchronous operations and use .catch() to handle any errors that occur in the chain.

Error Propagation with .then() and .catch()
If an error occurs in any .then() block, it skips the subsequent .then() blocks and is handled by the nearest .catch().

Best Practices for .then() and .catch()
Use .catch() for Error Handling: Use .catch() instead of the second argument in .then() for consistency and readability.
Handle Errors Gracefully: Always add a .catch() to handle rejections or errors in Promises.
Chain Promises for Sequential Tasks: Use .then() to chain operations that depend on previous results.

Summary
.then() is used to handle resolved Promises and chain operations.
.catch() is used to handle rejected Promises or errors.
Promises make asynchronous code cleaner and more manageable compared to callbacks.
*/