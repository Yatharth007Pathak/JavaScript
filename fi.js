// Adding a New Element to the DOM

let list = document.getElementById("myList");
let button = document.getElementById("addItemBtn");
console.log(list);
console.dir(list);
console.log(button);
console.dir(button);


button.addEventListener("click", function() {
    let newItem = document.createElement("li");
    newItem.textContent = "Item " + (list.children.length + 1);
    list.appendChild(newItem);
});

/*
JavaScript Code Analysis:

let list = document.getElementById("myList");
Retrieves the <ul> element with the id of "myList" and stores a reference to it in the list variable.
This element represents the list where new items will be added.

let button = document.getElementById("addItemBtn");
Retrieves the <button> element with the id of "addItemBtn" and stores a reference to it in the button variable.
This button will trigger the addition of new items to the list when clicked.

console.log(list);
Displays the list element as an interactive HTML structure.

console.dir(list);
Displays the list element as a JavaScript object, showing its properties and methods.

console.log(button); console.dir(button);
Logs the button element similarly to list, allowing inspection of its HTML structure and JavaScript properties.

Event Listener:
button.addEventListener("click", function() { ... });
Attaches a click event listener to the button element.
When the button is clicked, the following code inside the function is executed:

Code Inside the Event Listener:

let newItem = document.createElement("li");
Creates a new <li> element using document.createElement.

newItem.textContent = "Item " + (list.children.length + 1);
Sets the textContent of the new <li> element.
The text is dynamically generated based on the current number of child elements in the list (list.children.length) plus 1. For example:
If there are 2 items in the list, the next item's text will be "Item 3".

list.appendChild(newItem);
Adds the newly created <li> element (newItem) as the last child of the list element.
This effectively appends the new item to the list.
*/