/*
document.createElement() is a JavaScript method that allows you to create a new HTML element dynamically. 
It is part of the DOM (Document Object Model) and is used to generate new elements that can be added to the document.

Syntax: let element = document.createElement(tagName);

tagName: A string specifying the type of element to be created (e.g., 'div', 'p', 'span', 'button', etc.).
*/

function createNewElement() {
    // Create a new <div> element
    let newDiv = document.createElement('div');
    
    // Set some properties or content for the new element
    newDiv.textContent = "This is a dynamically created div!";
    newDiv.style.backgroundColor = "lightblue";
    newDiv.style.padding = "20px";
    newDiv.style.margin = "10px";

    // Append the new <div> element to the body
    document.body.appendChild(newDiv);
}

/*
Line-by-Line Breakdown of the createNewElement() Function:

1. function createNewElement() {
Defines a function named createNewElement(), which is responsible for dynamically creating and adding a new HTML element to the page.

2. let newDiv = document.createElement('div');
Uses document.createElement('div') to create a new <div> element.
The newly created element is stored in the variable newDiv.

3. newDiv.textContent = "This is a dynamically created div!";
Sets the textContent property of the newDiv to the string "This is a dynamically created div!".
This will be the text displayed inside the newly created <div> element.

4. newDiv.style.backgroundColor = "lightblue";
Sets the backgroundColor style of the newDiv to lightblue.
This changes the background color of the dynamically created div.

5. newDiv.style.padding = "20px";
Sets the padding style of the newDiv to 20px.
This will add padding inside the div, creating space around its content.

6. newDiv.style.margin = "10px";
Sets the margin style of the newDiv to 10px.
This adds space around the div, separating it from other elements.

7. document.body.appendChild(newDiv);
Appends the newly created newDiv as a child of the <body> element.
This adds the div to the page, making it visible.

8. }
Closes the createNewElement() function.

How It Works:
The function createNewElement() creates a new <div> element, applies some styles to it 
(background color, padding, and margin), and sets its content to a string message.
The new div is then added to the body of the document, making it visible on the web page.
*/