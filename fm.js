// innertext


function changeText() {
    // Accessing the heading and paragraph by their IDs
    let heading = document.getElementById("heading");
    let paragraph = document.getElementById("paragraph");
  
    // Changing the text content using innerText
    heading.innerText = "Hello, JavaScript!";
    paragraph.innerText = "You have successfully changed the text!";
  }
  
/*
Step-by-Step Explanation:

function changeText():
This defines a function named changeText.
It can be invoked when needed, such as on a button click in an HTML document.

Accessing the Elements:
let heading = document.getElementById("heading");:
Retrieves the HTML element with the id of "heading" using the getElementById() method.
Stores the reference to this element in the variable heading.
let paragraph = document.getElementById("paragraph");:
Retrieves the HTML element with the id of "paragraph".
Stores the reference in the variable paragraph.

Changing the Text:
heading.innerText = "Hello, JavaScript!";:
Updates the text content of the heading element to "Hello, JavaScript!".
paragraph.innerText = "You have successfully changed the text!";:
Updates the text content of the paragraph element to "You have successfully changed the text!".

innerText Property:
Purpose: Updates the visible text content of an HTML element.
How it works: Replaces the existing text within the element while preserving its structure (e.g., ignoring any HTML inside the text).
*/


/*
Use innerText:
When you need only the displayed text, ignoring any formatting or tags.
Example: Extracting text for plain text analysis.

Use innerHTML:
When you need the full HTML structure for further processing or rendering.
Example: Duplicating elements with formatting intact.
*/