// node.removeChild


const list = document.getElementById("item-list");
const itemToRemove = document.getElementById("remove-me");

// Remove the node and store it
const removedNode = list.removeChild(itemToRemove);

console.log(removedNode.textContent); // Outputs: "Item 2 (Remove Me)"

/*

Line-by-Line Breakdown of the Code:

1. const list = document.getElementById("item-list");
Retrieves the parent list element by its ID, "item-list".
Stores the reference to the list in the variable list.

2. const itemToRemove = document.getElementById("remove-me");
Retrieves the child element to be removed by its ID, "remove-me".
Stores the reference to the child element in the variable itemToRemove.

3. const removedNode = list.removeChild(itemToRemove);
Removes the itemToRemove from the list using the removeChild() method.
The removed element is stored in the variable removedNode. 
This allows you to access the removed element even after it is no longer in the DOM.

4. console.log(removedNode.textContent);
Logs the text content of the removed node (removedNode) to the console.
This verifies that the removal was successful and allows you to see the content of the removed element.

*/