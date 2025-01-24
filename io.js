async function hello() {
    console.log("hello");
}

// Type hello(); in console

/*
Code Breakdown:

async function hello() {
Defines an async function named hello.
Functions declared with the async keyword always return a Promise, even if no await or explicit return is used.

console.log("hello");
Logs "hello" to the console when the function is invoked.

}
Ends the function definition.

When You Type hello(); in the Console:
The function hello() is called.
"hello" is logged to the console immediately.
The hello() function implicitly returns a Promise. Since there’s no explicit return value, the promise resolves with undefined.

Console Output:
hello (logged by the console.log inside the function).
The return value of hello() is shown as a resolved promise:
Promise {<fulfilled>: undefined}

Key Points:
The async keyword ensures that the function returns a Promise.
In this case, there’s no asynchronous behavior inside the function, so it resolves immediately with the value undefined.
*/