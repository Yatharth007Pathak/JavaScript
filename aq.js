/*
The switch statement is used to test a variable against multiple values. It’s an alternative to using multiple if...else if statements, 
particularly when you want to compare the same variable with many different values.

Note: Each case must end with break to prevent "fall-through" behavior, where all cases after the matching one are also executed. 
Use default to handle any cases not covered by case statements.
*/

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Weekend");
}

/*
Here's a breakdown of this JavaScript code that uses a switch statement to determine the name of the day based on the value of day:

let day = 3;
Purpose: Declares a variable day and assigns it a value of 3.
Explanation: This sets the value of day to 3, which will be used in the switch statement to determine which case to execute.

switch (day) { ... }
Purpose: Begins a switch statement that evaluates the value of day.
Explanation: The switch statement will compare the value of day against the specified cases.

case 1:
Purpose: Defines the first case for when day is equal to 1.
Explanation: If day were 1, the following line would execute.

console.log("Monday");
Purpose: Logs "Monday" to the console if day equals 1.
Explanation: This line would execute if the value of day is 1.

break;
Purpose: Exits the switch statement.
Explanation: This prevents the execution from falling through to the next case.

case 2:
Purpose: Defines the second case for when day is equal to 2.
Explanation: If day were 2, the next line would execute.

console.log("Tuesday");
Purpose: Logs "Tuesday" to the console if day equals 2.
Explanation: This line would execute if the value of day is 2.

case 3:
Purpose: Defines the third case for when day is equal to 3.
Explanation: If day equals 3, the following line will execute.

console.log("Wednesday");
Purpose: Logs "Wednesday" to the console if day equals 3.
Output: "Wednesday"
Explanation: Since day is 3, this line is executed, printing "Wednesday" to the console.

break;
Purpose: Exits the switch statement after logging.
Explanation: This prevents any further case evaluation.

case 4:
Purpose: Defines the fourth case for when day is equal to 4.
Explanation: If day were 4, the following line would execute.

console.log("Thursday");
Purpose: Logs "Thursday" to the console if day equals 4.
Explanation: This line would execute if the value of day is 4.

case 5:
Purpose: Defines the fifth case for when day is equal to 5.
Explanation: If day were 5, the following line would execute.

console.log("Friday");
Purpose: Logs "Friday" to the console if day equals 5.
Explanation: This line would execute if the value of day is 5.

default:
Purpose: Specifies the default case if none of the above cases match.
Explanation: This block will execute if day is not 1, 2, 3, 4, or 5.

console.log("Weekend");
Purpose: Logs "Weekend" to the console if day does not match any specified cases.
Explanation: This line would execute if day were any value other than 1, 2, 3, 4, or 5.
*/