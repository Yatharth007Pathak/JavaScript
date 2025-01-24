// node.before


function addElement() {
    // Create a new paragraph element
    let newElement = document.createElement("p");
  
    // Set the text content of the new element
    newElement.textContent = "This is a newly added paragraph before the div!";
  
    // Access the parent div element by its ID
    let parentDiv = document.getElementById("parentDiv");
  
    // Insert the new element before the parent div itself
    parentDiv.before(newElement);
  
    // Optionally, log the addition to the console
    console.log("New element added before the parent div!");
  }
  
/*
Line-by-Line Breakdown of the addElement() Function:

1. function addElement() {
Defines the addElement() function. This function will add a new paragraph element before the parent <div> element specified by its ID.

2. let newElement = document.createElement("p");
Creates a new paragraph (<p>) element using document.createElement().
The new paragraph is stored in the newElement variable.

3. newElement.textContent = "This is a newly added paragraph before the div!";
Sets the text content of the newly created paragraph element (newElement).
The text "This is a newly added paragraph before the div!" will appear inside the new <p> element when added to the DOM.

4. let parentDiv = document.getElementById("parentDiv");
Uses document.getElementById("parentDiv") to access the existing <div> element with the ID parentDiv.
This element will be used as the reference point for where the new paragraph will be inserted.

5. parentDiv.before(newElement);
The before() method is called on parentDiv, which inserts the new paragraph (newElement) before the parentDiv itself in the DOM.
This ensures that the new paragraph appears above the parentDiv.

6. console.log("New element added before the parent div!");
Logs the message "New element added before the parent div!" to the console.
This provides feedback to indicate that the new element was successfully added before the parent <div>.

7. }
Closes the addElement() function.

How It Works:
Element Creation: A new <p> (paragraph) element is created and populated with text "This is a newly added paragraph before the div!".
Parent Selection: The function identifies the parentDiv element in the DOM using its ID (parentDiv).
Element Insertion: The new paragraph is inserted before the parentDiv element using the before() method, 
placing it before the parent <div> itself in the DOM structure.
Feedback: A message is logged to the console indicating that the new element was successfully added before the parent <div>.

Expected Behavior:
When the button is clicked, the addElement() function will run.
A new paragraph (<p>) with the text "This is a newly added paragraph before the div!" will be inserted before the parentDiv.
As a result, the new paragraph will appear above the entire parentDiv in the DOM.
*/