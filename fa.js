// <style> tag connects HTLM with CSS and <script> tag connects HTML with JS


/*
In the context of programming, especially when using GUI libraries like Tkinter or web development with JavaScript, 
the "window object" typically refers to an object representing the browser window or the graphical interface of an application.

In Tkinter (Python):
The window object is the main container or frame where all widgets (buttons, labels, etc.) are placed. 
It's created using Tk() and can be referred to as the main window of the application.

In JavaScript (Web Development):
In JavaScript, the window object represents the global context in a browser environment. 
It is the top-level object that provides access to the browser's window, 
and it contains various properties and methods that help interact with the browser. This includes things like:

Browser properties and methods:
window.innerWidth, window.innerHeight: These provide the width and height of the browser's viewport.
window.location: Allows manipulation of the URL of the current page.
window.alert(): Displays an alert box.
window.setTimeout(), window.setInterval(): Used for delayed or repeated actions.

Global scope: All global variables and functions declared in JavaScript are part of the window object. For example:
window.document: Refers to the document object, which represents the HTML document displayed in the browser.
window.console: Provides access to the browser's developer tools console.

Event handling: The window object is used to listen for events like resizing the window, scrolling, or loading:
window.addEventListener(): Adds event listeners for various events on the window.
In short, the window object is essential for interacting with the web browser's environment and controlling various aspects of the webpage.

In both cases, the window object is a central element in managing the display and interaction of the application or webpage.

The window object represents an open window in a browser. It is browser's object and is automatically created by the browser.
It is a global object with lots of properties and methods
*/


/*
Steps to Access the window Object in the Browser Console:

Open DevTools:
On Chrome: Right-click on the page and select Inspect or press Ctrl + Shift + I (Windows/Linux) or Cmd + Option + I (Mac).
On Firefox: Right-click and select Inspect or press Ctrl + Shift + I (Windows/Linux) or Cmd + Option + I (Mac).

Go to the Console Tab: Once DevTools is open, navigate to the Console tab, where you can write and execute JavaScript.

Type window in the Console: Simply type window and press Enter.
*/