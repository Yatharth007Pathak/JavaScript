function sum(x, y) {
    s = x + y;
    console.log("before return");
    return s;
    console.log("after return");
}

let val = sum(3, 4);
console.log(val);

/*
Explanation of the Code

Function Declaration: sum(x, y)
The function takes two arguments, x and y.
It calculates their sum (x + y) and assigns it to a variable s.
Logs "before return" to the console.
Returns the value of s.
The line console.log("after return"); is never executed because the return statement ends the function execution.

Function Call: sum(3, 4)
Calls the function sum with arguments 3 and 4.
Execution flow:
Calculates s = 3 + 4 = 7.
Logs "before return".
Returns 7 and stops execution of the function.
Assigns the returned value (7) to the variable val.

Output Statements:
Logs the value of val (7) to the console.
*/