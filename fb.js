/*
The document object is a property of the window object in JavaScript and represents the Document Object Model (DOM) 
of the web page currently loaded in the browser.

Here’s a detailed explanation:

1. Relationship Between window and document
The window object is the global object that represents the browser window.
The document object is a property of the window object and represents the content of the web page.

2. Purpose of the document Object
The document object provides access to and control over the HTML and XML content of the page. 
It is the starting point for all DOM manipulations, such as:
Accessing elements.
Changing content, attributes, and styles.
Handling events.
Creating new elements.

3. Hierarchy
The document object is part of the window hierarchy:
window
 └── document
       ├── html (root element)
       │    ├── head (metadata)
       │    └── body (content)
       └── other properties and methods

4. Key Features of the document Object
Here are some common properties and methods available on the document object:

Properties:
document.documentElement: The <html> element.
document.head: The <head> element.
document.body: The <body> element.
document.title: The title of the document.
document.URL: The current page's URL.
document.cookie: The cookies associated with the page.

Methods:

Element Selection:
getElementById(): Select an element by ID.
getElementsByClassName(): Select elements by class.
querySelector(): Select the first element matching a CSS selector.
querySelectorAll(): Select all elements matching a CSS selector.

Content Manipulation:
document.write(): Write content directly to the page (used sparingly).
createElement(): Create a new element.
appendChild(): Append an element to the DOM.

Event Handling:
addEventListener(): Attach event listeners to elements.

6. Summary of window vs. document
Aspect	             window                                                                 document
Represents           The browser's window or global context                                 The content of the web page (DOM)
Scope      	         Global object (includes everything)                                    Subset of window, focused on the DOM
Access               window.document or simply document                                     Directly via document
Primary Use          Managing browser-level properties (e.g., size, location)               Managing and manipulating the web page content

By understanding the document as part of the window, you can effectively manipulate your HTML structure 
and integrate dynamic behaviors into your web pages.
*/

console.log(window.document); // Outputs the entire DOM structure
console.log(document === window.document); // true