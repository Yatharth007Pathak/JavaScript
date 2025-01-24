/*
The alert() function in JavaScript is a built-in method that displays a modal dialog box with a specified message and an "OK" button. 
It is often used for informational purposes, such as notifying users of important messages, warnings, or errors. 
Here's a detailed overview of how it works:

Syntax:
alert(message);

Parameters
message: This is a string that will be displayed in the dialog box. 
It can be a simple string or a string constructed from variables or expressions.

Important Notes
Modal Behavior: The alert() function is modal, meaning it stops the execution of code until the user closes the dialog box. 
This can lead to a poor user experience if overused.
Browser Appearance: The appearance of alert dialog can vary across different web browsers and devices, and it cannot be styled or customized.
User Experience: It's generally recommended to use alert() sparingly, as it can interrupt the flow of the application. 
For better user experience, consider using other methods like custom modal dialogs or notifications.

Limitations
The alert() function does not return any value, and it cannot accept any parameters other than the message string.
Since it creates a blocking dialog, excessive use of alert() can frustrate users and make your application feel unresponsive.

In summary, the alert() function is a straightforward way to display simple messages to users, but for modern web applications, 
alternative methods of notification are often preferred for a smoother user experience.
*/

alert("Welcome to our website!");
/*
When the above code runs, a dialog box will appear with the message "Welcome to our website!" and an "OK" button. 
The user must click "OK" to close the dialog and continue interacting with the page.
*/

// You can also use variables to display dynamic messages:
let userName = "Alice";
alert("Hello, " + userName + "! Welcome back!");