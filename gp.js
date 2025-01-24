/*
node.appendChild() is a JavaScript method used to add a new child node (element or text) 
to a specified parent node in the DOM (Document Object Model). The new child node is added as the last child of the parent node.

Syntax: parentNode.appendChild(newChildNode);
parentNode: The parent element to which you want to append the child.
newChildNode: The element or node to be added.
*/

function addItem() {
    // Get the parent node (the list)
    const list = document.getElementById("item-list");

    // Create a new <li> element
    const newItem = document.createElement("li");

    // Add text to the new <li> element
    newItem.textContent = "New Item";

    // Append the new <li> element as a child of the list
    list.appendChild(newItem);
}

/*
Line-by-Line Breakdown of the addItem() Function

1. function addItem() {
Declares the addItem() function. This function is used to add a new item to a list dynamically.

2. const list = document.getElementById("item-list");
Uses document.getElementById("item-list") to find the parent list element (<ul> or <ol>) by its ID, item-list.
The parent node is stored in the list variable.

3. const newItem = document.createElement("li");
Creates a new <li> (list item) element using document.createElement().
This element is stored in the newItem variable.

4. newItem.textContent = "New Item";
Assigns the text "New Item" to the textContent property of the new <li> element.
This text will appear as the content of the new list item.

5. list.appendChild(newItem);
Appends the newItem as the last child of the list.
This dynamically adds the new <li> to the end of the existing list.

6. }
Ends the addItem() function definition.

How It Works:
Parent Node Selection: The function identifies the list element with the ID item-list.
Child Node Creation: A new list item (<li>) is created and given the text "New Item".
Node Insertion: The new list item is added as the last child of the parent list using appendChild().

Expected Behavior:
When the button is clicked, the addItem() function is executed.
A new <li> element with the text "New Item" is added at the end of the existing list.
*/