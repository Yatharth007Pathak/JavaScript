// node.prepend


function addElement() {
    // Create a new paragraph element
    let newElement = document.createElement("p");
  
    // Set the text content of the new element
    newElement.textContent = "This is a newly added paragraph!";
  
    // Access the parent div element by its ID
    let parentDiv = document.getElementById("parentDiv");
  
    // Prepend the new element to the parent div (insert at the beginning)
    parentDiv.prepend(newElement);
  
    // Optionally, log the addition to the console
    console.log("New element added at the beginning!");
  }
  
/*
Line-by-Line Breakdown of the addElement() Function:

1. function addElement() {
Defines the addElement() function, which is responsible for adding a new <p> (paragraph) element to the 
DOM at the beginning of a specified parent element.

2. let newElement = document.createElement("p");
Creates a new <p> element using the document.createElement() method.
The newly created <p> element is assigned to the variable newElement.

3. newElement.textContent = "This is a newly added paragraph!";
Sets the text content of the newly created paragraph element (newElement).
The paragraph will display the text "This is a newly added paragraph!" when added to the page.

4. let parentDiv = document.getElementById("parentDiv");
Uses document.getElementById("parentDiv") to select the existing HTML element with the ID parentDiv.
The parentDiv element will serve as the container to which the new paragraph will be added.

5. parentDiv.prepend(newElement);
Uses the prepend() method to insert the new paragraph (newElement) at the beginning of the parentDiv element.
This ensures that the new paragraph appears before any other existing child elements of parentDiv.

6. console.log("New element added at the beginning!");
Logs the message "New element added at the beginning!" to the console.
This step is optional but provides feedback that the new element was successfully added.

7. }
Closes the addElement() function.

How It Works:
Element Creation: A new <p> (paragraph) element is created and populated with the text "This is a newly added paragraph!".
Parent Selection: The function identifies the parentDiv element in the DOM (which must already exist) using its ID.
Element Insertion: The new paragraph is inserted at the beginning of parentDiv using the prepend() method, 
meaning it will appear as the first child inside parentDiv.
Feedback: A message is logged to the console indicating that the new element was added at the beginning.

Expected Behavior:
When the button is clicked, the addElement() function will run.
The new paragraph (<p>) with text "This is a newly added paragraph!" will be added as the first child of the <div> with ID parentDiv.
As a result, the new paragraph will appear before the existing paragraph inside parentDiv.
*/