/*
node.remove() is a method in JavaScript that removes a specified element (node) from the DOM (Document Object Model). 
When you call this method on a DOM element, it removes that element from its parent in the document tree.

Syntax: node.remove();
node: The DOM element (node) you want to remove.
*/

function removeElement() {
    // Get the element by its ID
    const box = document.getElementById("box");

    // Remove the element from the DOM
    box.remove();
}

/*
Line-by-Line Breakdown of the removeElement() Function:

1. function removeElement() {
Defines the removeElement() function. This function will remove an HTML element from the DOM.

2. const box = document.getElementById("box");
Uses document.getElementById("box") to find the element with the ID box in the DOM.
This element is stored in the box variable.

3. box.remove();
The remove() method is called on the box element, which removes it from the DOM.
This permanently removes the element from the page.

4. }
Closes the removeElement() function.

How It Works:
Element Selection: The function identifies the element with the ID box using document.getElementById("box").
Element Removal: The .remove() method is called on the box element, which removes it entirely from the DOM, 
causing it to disappear from the webpage.

Expected Behavior:
When the button is clicked, the removeElement() function will be triggered.
The element with the ID box (along with its contents) will be removed from the page.
After clicking the button, the box element will disappear from the DOM.
*/