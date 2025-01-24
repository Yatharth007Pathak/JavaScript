function asynFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1")            ;
            resolve("success");
        }, 7000);
    });
}

function asynFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2")            ;
            resolve("success");
        }, 7000);
    });
}

console.log("fetching data1 ....");
let p1 = asynFunc1();
p1.then((res) => {
    console.log(res);
    console.log("fetching data2 ....");
    let p2 = asynFunc2();
    p2.then((res) => {
       console.log(res);
    });
});


/*
Code Explanation:

function asynFunc1()
Defines a function asynFunc1 that returns a Promise.

Inside the Promise:
A setTimeout is used to simulate an asynchronous operation with a 7-second delay.
After 7 seconds, "data1" is logged to the console.
The promise is resolved with the value "success".

function asynFunc2()
Similarly, defines a function asynFunc2 that returns a Promise.

Inside the Promise:
A setTimeout is used to simulate a 7-second asynchronous operation.
After 7 seconds, "data2" is logged to the console.
The promise is resolved with the value "success".

console.log("fetching data1 ....");
Logs "fetching data1 ...." to the console immediately.

let p1 = asynFunc1();
Calls asynFunc1 and assigns the returned promise to the variable p1.
The asynchronous operation begins, and the code moves on without waiting for it to complete.

p1.then((res) => { ... });
Adds a .then() handler to p1.

Once asynFunc1 resolves (after 7 seconds):
Logs "success" (the resolved value of p1).
Logs "fetching data2 ....".
Calls asynFunc2 and assigns the returned promise to the variable p2.

p2.then((res) => { ... });
Adds a .then() handler to p2.
Once asynFunc2 resolves (after another 7 seconds):
Logs "success" (the resolved value of p2).

Execution Flow:
Immediately logs "fetching data1 ....".
After 7 seconds (from asynFunc1):
Logs "data1".
Logs "success".
Logs "fetching data2 ....".
After another 7 seconds (from asynFunc2):
Logs "data2".
Logs "success".
*/