// node.append


function addElement() {
    // Create a new paragraph element
    let newElement = document.createElement("p");
  
    // Set the text content of the new element
    newElement.textContent = "This is a newly added paragraph!";
  
    // Access the parent div element by its ID
    let parentDiv = document.getElementById("parentDiv");
  
    // Append the new element to the parent div
    parentDiv.append(newElement);
  
    // Optionally, log the addition to the console
    console.log("New element added!");
  }
  
/*
Line-by-Line Breakdown of the addElement() Function:

1. function addElement() {
Defines the function addElement() which is responsible for dynamically adding a new <p> (paragraph) element to the DOM.

2. let newElement = document.createElement("p");
Creates a new paragraph (<p>) element using document.createElement("p").
This new element is stored in the newElement variable.

3. newElement.textContent = "This is a newly added paragraph!";
Sets the text content of the newly created <p> element.
The text content is "This is a newly added paragraph!", so the new paragraph will display this text when added to the page.

4. let parentDiv = document.getElementById("parentDiv");
Uses document.getElementById("parentDiv") to access an existing element with the ID parentDiv in the DOM.
This element will serve as the container (or parent) to which the new paragraph will be added.

5. parentDiv.append(newElement);
Uses the append() method on the parentDiv element to add the newly created paragraph (newElement) as a child element of the parentDiv.
This makes the paragraph visible inside the parentDiv on the web page.

6. console.log("New element added!");
Logs the message "New element added!" to the console.
This step is optional, but it provides feedback in the developer console that the new element was successfully added.

7. }
Closes the addElement() function.

How It Works:
Element Creation: A new <p> (paragraph) element is created and populated with the text "This is a newly added paragraph!".
Parent Selection: The function identifies the parentDiv element in the DOM (which must already exist) using its ID.
Element Insertion: The newly created paragraph is then appended as a child of parentDiv.
Feedback: A message is logged to the console indicating that the new element has been added.

Expected Behavior:
When the button is clicked, the addElement() function is triggered.
A new paragraph (<p>) with the text "This is a newly added paragraph!" will be added inside the <div> element with the ID parentDiv.
The new paragraph will appear below the <h2> inside parentDiv.
*/