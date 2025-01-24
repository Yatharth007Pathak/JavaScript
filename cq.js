/*
Functions in JavaScript are reusable blocks of code that perform a specific task. 
They allow you to encapsulate logic, making your code more modular, maintainable, and readable.
They can take input, process it, and return an output.
*/

function myFunction() {
    console.log("I am learing JS");
}
myFunction();


function MyFunction() {
    return "Web Dev is fun";
}
console.log(MyFunction());

/*
Code Analysis:

myFunction
Purpose: Logs a message directly to the console.
Return Value: This function does not return anything explicitly. By default, it returns undefined because there is no return statement.
Function Declaration: myFunction
Defines a function named myFunction that logs the message "I am learning JS" to the console when called.
Function Call: myFunction();
Calls the myFunction function.
The message "I am learning JS" is logged to the console.

MyFunction
Purpose: Returns a string "Web Dev is fun" without logging anything by itself.
Return Value: The function explicitly uses a return statement to provide a value. This value can be stored, logged, or manipulated.
Function Declaration: MyFunction
Defines a function named MyFunction which returns the string "Web Dev is fun" when called.
Function Call with console.log:
Calls the MyFunction function.
The string returned by MyFunction ("Web Dev is fun") is logged to the console.
*/