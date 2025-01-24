// innerHTML


function updateContent() {
    // Access the div element by its ID
    let contentDiv = document.getElementById("content");
  
    // Update the HTML content inside the div
    contentDiv.innerHTML = `
      <h2>Content Updated!</h2>
      <p>This is the new content dynamically added using innerHTML.</p>
    `;
  }

/*
Step-by-Step Explanation:

function updateContent():
Defines a function named updateContent.
Can be invoked manually or in response to an event (e.g., a button click).

Accessing the Element:
let contentDiv = document.getElementById("content");:
Fetches the HTML element with the id of "content" using the getElementById() method.
Stores the reference to this element in the variable contentDiv.

Updating the Content:
contentDiv.innerHTML:
Sets the inner HTML structure of the contentDiv element.
The new content is defined as a template literal (``) for better readability and support for multi-line strings.

New HTML Content:
<h2>Content Updated!</h2>
<p>This is the new content dynamically added using innerHTML.</p>
Adds a new heading (<h2>) and a paragraph (<p>) inside the div.

innerHTML Property:
Purpose: Allows you to get or set the HTML content inside an element.
How it works: Replaces the entire existing content with the provided HTML string.
*/