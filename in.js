/*
The async and await keywords in JavaScript provide a way to work with Promises in a more synchronous-looking manner. 
They make asynchronous code easier to read, write, and maintain. Fetch API often demonstrates async/await usage effectively.

Key Concepts

async Function:
Declares a function as asynchronous.
Always returns a Promise.
The returned Promise resolves to the value returned by the function or rejects if an error is thrown.

await:
Can only be used inside an async function.
Pauses the execution of the function until the Promise is resolved.
Resumes execution once the Promise is resolved or throws an error if the Promise is rejected.

Advantages of async/await
Simplifies asynchronous code by making it look synchronous.
Easier to debug due to the linear flow of execution.
Works well with modern JavaScript features like Promise.all.

Limitations of async/await
Cannot be used outside an async function.
Still asynchronous in nature, so the execution doesn’t truly "wait."
Errors in asynchronous calls need explicit handling with try...catch.
*/