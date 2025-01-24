/*
node.removeChild() is a JavaScript method used to remove a specified child node from a parent node in the DOM (Document Object Model). 
It requires specifying both the parent node and the child node to be removed.

Syntax:parentNode.removeChild(childNode);
parentNode: The parent element containing the child to be removed.
childNode: The specific child element to remove.
*/

function removeItem() {
    // Get the parent node (the list)
    const list = document.getElementById("item-list");

    // Get the child node to be removed
    const itemToRemove = document.getElementById("remove-me");

    // Remove the child node from the parent
    list.removeChild(itemToRemove);
}

/*
Line-by-Line Breakdown of the Code:

1. function removeItem() {
Declares a function named removeItem. This function will handle the removal of a specific child element from a parent list.

2. const list = document.getElementById("item-list");
Retrieves the parent element, which is a list with the ID "item-list".
Stores the reference to this element in the variable list.

3. const itemToRemove = document.getElementById("remove-me");
Retrieves the child element to be removed, identified by its ID "remove-me".
Stores the reference to this child element in the variable itemToRemove.

4. list.removeChild(itemToRemove);
Removes the child element (itemToRemove) from the parent element (list) using the removeChild() method.
This effectively deletes the specified child element from the DOM.

How It Works:
The function removeItem is executed.
It identifies the parent list and the specific child to be removed.
The child element is removed from the parent using removeChild().

Key Notes:
removeChild(): Removes a child node from its parent node.
The removed node is still available in memory but is no longer part of the DOM.

Error Handling:
If the child element (itemToRemove) does not exist or is not a child of the specified parent (list), a DOMException will occur.
To prevent this, ensure the element IDs are correct and the child exists within the parent.
*/