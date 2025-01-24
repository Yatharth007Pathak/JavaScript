// textContent


function changeContent() {
    // Access the div element by its ID
    let messageDiv = document.getElementById("message");
  
    // Change the text content using textContent
    messageDiv.textContent = "The content has been changed using textContent!";
  }
  
/*
Breakdown of the Code:

Accessing the div element:
The function changeContent() first accesses a div element with the ID message using document.getElementById("message").
This grabs the entire element with the ID "message" from the HTML document.

Changing the Text Content:
The textContent property is used to modify the text inside the selected element.
messageDiv.textContent = "The content has been changed using textContent!" 
replaces the current content inside the div with the string "The content has been changed using textContent!".
*/