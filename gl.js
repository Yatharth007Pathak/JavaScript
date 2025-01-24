// node.after


function addElement() {
    // Create a new paragraph element
    let newElement = document.createElement("p");
  
    // Set the text content of the new element
    newElement.textContent = "This is a newly added paragraph after the div!";
  
    // Access the parent div element by its ID
    let parentDiv = document.getElementById("parentDiv");
  
    // Insert the new element after the parent div itself
    parentDiv.after(newElement);
  
    // Optionally, log the addition to the console
    console.log("New element added after the parent div!");
  }
  
/*
Line-by-Line Breakdown of the addElement() Function:

1. function addElement() {
Defines the addElement() function. This function will add a new paragraph element after the parent <div> element specified by its ID.

2. let newElement = document.createElement("p");
Creates a new <p> (paragraph) element using document.createElement().
The newly created paragraph is stored in the newElement variable.

3. newElement.textContent = "This is a newly added paragraph after the div!";
Sets the text content of the newly created paragraph element (newElement).
The text "This is a newly added paragraph after the div!" will be displayed inside the new <p> element when added to the DOM.

4. let parentDiv = document.getElementById("parentDiv");
Uses document.getElementById("parentDiv") to access the existing <div> element with the ID parentDiv.
This element will be the reference point where the new paragraph will be inserted.

5. parentDiv.after(newElement);
The after() method is called on parentDiv, which inserts the new paragraph (newElement) after the parentDiv element in the DOM.
This ensures that the new paragraph appears below the parentDiv in the document.

6. console.log("New element added after the parent div!");
Logs the message "New element added after the parent div!" to the console.
This gives feedback to the console that the new element was successfully added after the parentDiv.

7. }
Closes the addElement() function.

How It Works:
Element Creation: A new <p> (paragraph) element is created and filled with the text "This is a newly added paragraph after the div!".
Parent Selection: The function identifies the parentDiv element in the DOM using its ID (parentDiv).
Element Insertion: The new paragraph is inserted after the parentDiv element using the after() method,
placing it below the parentDiv in the DOM structure.
Feedback: A message is logged to the console indicating the successful addition of the new element after the parent <div>.

Expected Behavior:
When the button is clicked, the addElement() function will be triggered.
A new paragraph (<p>) with the text "This is a newly added paragraph after the div!" will be inserted after the parentDiv.
As a result, the new paragraph will appear below the parentDiv in the DOM.
*/