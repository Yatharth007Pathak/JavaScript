// removeAttribute

function changeColor() {
    // Access the box element by its ID
    let box = document.getElementById("box");
  
    // Set an initial border color
    box.style.border = "5px solid red";
  
    // Remove the border color using removeAttribute
    box.removeAttribute("style");
  
    // Optionally, provide feedback to the user
    alert("The border style has been removed!");
  }


/*
Line-by-Line Breakdown of Code:

1. function changeColor() {
Defines a function named changeColor() which will be used to change the border color of a box and then remove it.

2. let box = document.getElementById("box");
Uses document.getElementById() to retrieve the HTML element with the ID "box".
The selected element (likely a <div> or another HTML element) is stored in the variable box.
Assumption: The HTML has an element with the ID "box".

3. box.style.border = "5px solid red";
This line applies an inline CSS style to the box element.
It sets the border property to "5px solid red", which gives the element a 5px wide solid red border.

4. box.removeAttribute("style");
This line removes the entire style attribute from the box element.
As a result, the border and any other inline styles applied directly to the element will be removed.

5. alert("The border style has been removed!");
This displays an alert to the user, notifying them that the border style has been removed from the box.
*/