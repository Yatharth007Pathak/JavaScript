/*
Synchronous means the code runs in a particular sequence of instuctions given inthe program.
Each instruction waits for the previous instruction to complete its execution.

Due to synchronous programming, sometimes important instructuins get blocked due to some previous instructions, 
which causs a delay in the UI. Asynchronouscode execution allows to execute next instructions immediately and doeesn't block the flow.
*/

// Synchronous program
console.log("one");
console.log("two");
console.log("three");
console.log("four \n ");

// Asynchronous program
console.log("ek");
console.log("do");
setTimeout(() => {
    console.log("Namaste");
}, 6000);
console.log("teen");
console.log("chaar");