/*
The console.log and console.dir methods are both part of the browser's console API in JavaScript, 
but they serve slightly different purposes when it comes to displaying objects and debugging. Here's the difference:

1. console.log
Purpose: Prints the object or message as a string representation.
Behavior: If you pass an object to console.log, it displays the object in its entirety, 
but often it’s formatted in a concise, user-friendly way.

2. console.dir
Purpose: Displays an interactive list of the properties of an object.
Behavior: Specifically designed for inspecting the properties of objects. 
It displays the object in a tree-like structure, showing all its properties, methods, and their values.


When to Use:
Use console.log for general debugging, printing messages, or seeing values at a glance.
Use console.dir when you need to explore the structure of an object, especially for DOM elements.
*/

console.log(window.document);
console.dir(window.document);

/*
1. console.log(window.document);
What it does:
Logs the document object, which represents the current HTML document loaded in the browser, to the console.
Behavior in the console:
Displays the document as an interactive HTML tree.
You can expand and inspect the HTML structure (DOM tree) and see entire page's structure, including elements, attributes, and their values.
This is primarily used to view the current state of the DOM visually.

2. console.dir(window.document);
What it does:
Logs the document object in a detailed, programmatic format, showing all its properties and methods.
Behavior in the console:
Displays the document as a JavaScript object.
Shows all the properties, methods, and the internal structure of the document object (e.g., head, body, URL, title, getElementById, etc.).
Useful for developers to explore the document object programmatically, beyond its visual representation.

Key Difference:
console.log: Displays the DOM as a collapsible HTML tree, focusing on the structure and elements.
console.dir: Displays the DOM as a JavaScript object with all its properties and methods for a more in-depth view.
*/