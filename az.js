/*
The prompt() function in JavaScript is a built-in method used to display a dialog box that prompts the user for input. 
This function can be useful for collecting information from users, such as names, passwords, or any other text data. 
Here’s a detailed overview of how it works:

Syntax
let userInput = prompt(message, default);

Parameters
message (optional): A string that is displayed as a message in the dialog box. This informs the user about what information is being requested.
default (optional): A string that sets the default value in the input field of the dialog box. If not provided, the input field will be empty.

Return Value
The prompt() function returns the text entered by the user. If the user clicks "Cancel" or closes the dialog box, it returns null.

Important Notes
The prompt() function is modal, meaning it will block the interaction with the rest of the page until 
the user has entered some input or canceled the dialog.
Its usage is often discouraged in modern web development in favor of more user-friendly interfaces (like forms or custom dialog boxes), 
especially since it can be intrusive and doesn't offer much customization.
The appearance of the prompt() dialog may vary across different browsers and devices, 
and it may not be supported in some environments (like Node.js).

Limitations
Since it creates a blocking dialog, it can lead to a poor user experience if overused.
The input is always returned as a string, so you may need to convert it to another type (like a number) if necessary.

Using the prompt() function can be helpful for simple applications or for debugging purposes, 
but for production applications, consider using HTML forms or custom modal dialogs for better user experience.
*/

let userName = prompt("Please enter your name:", "John Doe");

if (userName !== null) {
    console.log("Hello, " + userName + "!");
} else {
    console.log("User cancelled the prompt.");
}

/*
Here's a breakdown of this JavaScript code that prompts the user to enter their name and 
responds based on whether they provide a name or cancel the prompt:

let userName = prompt("Please enter your name:", "John Doe");
Purpose: Declares a variable userName and assigns it the value returned by the prompt() function.
Explanation: The prompt() function displays a dialog box that asks the user to enter their name. 
The second argument, "John Doe", is the default value that will be shown in the input field. 
If the user enters a name and clicks "OK," that name will be stored in userName. If the user clicks "Cancel," userName will be assigned null.

if (userName !== null) { ... }
Purpose: Checks if the user did not cancel the prompt.
Explanation: This condition evaluates whether userName is not null. 
If the user provided a name (i.e., they clicked "OK"), the condition will be true, and the code inside this block will execute.

console.log("Hello, " + userName + "!");
Purpose: Logs a greeting message that includes the user's name.
Explanation: If the condition is true (the user entered a name), this line will concatenate "Hello, " 
with the value of userName and log the greeting to the console. For example, if the user entered "Alice", it would output "Hello, Alice!".

else { console.log("User cancelled the prompt."); }
Purpose: Executes if the user cancels the prompt.
Explanation: If the user clicked "Cancel," the condition in the if statement will be false, and this block will execute. 
It logs "User cancelled the prompt." to the console.

This code prompts the user to enter their name. If the user provides a name, 
it greets them with that name; if the user cancels the prompt, it informs them that the prompt was canceled.

Example Outputs:
If the user enters "Alice": "Hello, Alice!"
If the user clicks "Cancel": "User cancelled the prompt."
*/