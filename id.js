/*
The setTimeout() function in JavaScript is used to execute a function or code block after a specified delay (in milliseconds). 
It allows you to schedule a function to be executed once after the delay time has passed.

Syntax: setTimeout(function, delay);
function: The function or code to be executed after the delay.
delay: The time in milliseconds (1 second = 1000 milliseconds) to wait before executing the function.

Canceling a Timeout with clearTimeout()
If you want to cancel a scheduled setTimeout() before it runs, you can use clearTimeout().


Use Cases for setTimeout()
Delaying execution: You can use it to delay function execution, 
like creating a delay in animations or showing messages after a certain period.
Deferred tasks: It is often used to execute code after a specific delay, such as showing a popup or notification after some time.


Important Notes:
Non-blocking behavior: setTimeout() is asynchronous, meaning it doesn't block the execution of 
the rest of the code while waiting for the timeout to finish.
Only one execution: setTimeout() executes the function only once after the delay. 
If you need to repeatedly execute a function, you can use setInterval() instead.
*/


function hello() {
    console.log("hello");  // In this line, hello is a callback function
}
setTimeout(hello, 6000);


setTimeout(() => {
    console.log("hi");
}, 6000);


setTimeout(function() {
    console.log("This message is shown after 7 seconds!");
  }, 7000);


function greetPerson(name) {
    console.log("Hello, " + name + "!");
  }
setTimeout(greetPerson, 8000, "Alice");
  

let timeoutId = setTimeout(function() {
    console.log("This message won't show because it is canceled!");
}, 9000);
clearTimeout(timeoutId);