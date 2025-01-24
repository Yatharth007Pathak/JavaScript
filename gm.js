/*
Insert Elements:
node.append(element): adds at the end of node (inside)
node.prepend(element): adds at the start of node (inside)
node.before(element): adds before the node (outside)
node.after(element): adds after the node (outside)
*/

// Function to add a new element using append() inside parentDiv
function addElementAppend() {
    let newElement = document.createElement("p");
    newElement.textContent = "This paragraph was added using append()!";
    let parentDiv = document.getElementById("parentDiv");
    parentDiv.append(newElement);  // Adds as the last child of parentDiv
    console.log("Element added using append()");
  }
  
  // Function to add a new element using prepend() inside parentDiv
  function addElementPrepend() {
    let newElement = document.createElement("p");
    newElement.textContent = "This paragraph was added using prepend()!";
    let parentDiv = document.getElementById("parentDiv");
    parentDiv.prepend(newElement);  // Adds as the first child of parentDiv
    console.log("Element added using prepend()");
  }
  
  // Function to add a new element using before() before extraDiv
  function addElementBefore() {
    let newElement = document.createElement("p");
    newElement.textContent = "This paragraph was added using before()!";
    let extraDiv = document.getElementById("extraDiv");
    extraDiv.before(newElement);  // Adds before the extraDiv
    console.log("Element added using before()");
  }
  
  // Function to add a new element using after() after extraDiv
  function addElementAfter() {
    let newElement = document.createElement("p");
    newElement.textContent = "This paragraph was added using after()!";
    let extraDiv = document.getElementById("extraDiv");
    extraDiv.after(newElement);  // Adds after the extraDiv
    console.log("Element added using after()");
  }
  
/*
Here's an explanation of the code provided, which contains four functions to add new elements to the DOM using various methods:

1. addElementAppend()
Purpose: Adds a new <p> element as the last child of an existing element (parentDiv).
Steps:
Creates a new <p> element using document.createElement("p").
Sets the textContent of the new <p> element to "This paragraph was added using append()!".
Retrieves the parent element (parentDiv) using document.getElementById("parentDiv").
Uses parentDiv.append(newElement) to append the new <p> element to the end of parentDiv as its last child.
Logs a message "Element added using append()" to the console.
Effect: The new paragraph is added as the last child of parentDiv.

2. addElementPrepend()
Purpose: Adds a new <p> element as the first child of an existing element (parentDiv).
Steps:
Creates a new <p> element.
Sets its textContent to "This paragraph was added using prepend()!".
Retrieves the parentDiv using document.getElementById("parentDiv").
Uses parentDiv.prepend(newElement) to prepend the new <p> element, making it the first child of parentDiv.
Logs "Element added using prepend()" to the console.
Effect: The new paragraph is added as the first child of parentDiv, pushing existing children down.

3. addElementBefore()
Purpose: Adds a new <p> element before an existing element (extraDiv).
Steps:
Creates a new <p> element.
Sets its textContent to "This paragraph was added using before()!".
Retrieves the extraDiv element using document.getElementById("extraDiv").
Uses extraDiv.before(newElement) to insert the new <p> element before extraDiv.
Logs "Element added using before()" to the console.
Effect: The new paragraph is inserted directly before the extraDiv element in the DOM.

4. addElementAfter()
Purpose: Adds a new <p> element after an existing element (extraDiv).
Steps:
Creates a new <p> element.
Sets its textContent to "This paragraph was added using after()!".
Retrieves the extraDiv element using document.getElementById("extraDiv").
Uses extraDiv.after(newElement) to insert the new <p> element after extraDiv.
Logs "Element added using after()" to the console.
Effect: The new paragraph is inserted directly after the extraDiv element in the DOM.


Key DOM Methods Used:
append(): Adds a new element as the last child of the target element.
prepend(): Adds a new element as the first child of the target element.
before(): Adds a new element before the target element.
after(): Adds a new element after the target element.
*/