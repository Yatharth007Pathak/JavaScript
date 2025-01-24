/*
Accessing HTML code in JavaScript is typically done using the Document Object Model (DOM), 
which allows JavaScript to interact with and manipulate the structure, style, and content of a web page.

Here are the common ways to access HTML code in JavaScript:

1. Accessing by id: Use document.getElementById to access an element with a specific id.

2. Accessing by class: Use document.getElementsByClassName to access all elements with a specific class.

3. Accessing by tag name: Use document.getElementsByTagName to access all elements with a specific tag name.

4. Using querySelector: Use document.querySelector to select the first matching element using a CSS selector (id/class/tag).

5. Using querySelectorAll: Use document.querySelectorAll to select all matching elements using a CSS selector.

6. Accessing Entire HTML (Outer HTML): Use document.documentElement to access the entire HTML document.


Summary:

Method                                 Use Case
getElementById                         Access a single element by id.
getElementsByClassName                 Access multiple elements by class.
getElementsByTagName                   Access multiple elements by tag name.
querySelector                          Access the first element by a CSS selector.
querySelectorAll                       Access all elements by a CSS selector.
document.documentElement               Access the entire HTML structure.
*/

console.log("\n Accessing by id");
const element = document.getElementById("myDiv");
console.log(element.textContent);
console.log(element);
console.dir(element);

console.log("\n Accessing by class");
const elements = document.getElementsByClassName("myClass");
console.log(elements[0].textContent);
console.log(elements);

console.log("\n Accessing by tag name");
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs[1].textContent);
console.log(paragraphs);

console.log("\n Using querySelector");
const element_ = document.querySelector("#mainDiv");
console.log(element_.textContent);
console.log(element_);
console.dir(element_);

console.log("\n Using querySelectorAll");
const items = document.querySelectorAll(".myClass");
items.forEach((item) => console.log(item.textContent));
items.forEach((item) => console.log(item));
items.forEach((item) => console.dir(item)); 

console.log("\n Accessing Entire HTML (Outer HTML)")
console.log(document.documentElement.outerHTML);