// node.style


function changeStyle() {
    // Access the div element by its ID
    let box = document.getElementById("box");
  
    // Use node.style to change the background color, size, and border
    box.style.backgroundColor = "lightcoral";  // Change background color
    box.style.width = "300px";  // Change width
    box.style.height = "300px";  // Change height
    box.style.border = "5px solid black";  // Add a border
  
    // Optionally, log the changes to the console
    console.log("Box style has been changed!");
  }

/*
Line-by-Line Breakdown of the changeStyle() Function:

1. function changeStyle() {
Defines a function named changeStyle(). This function will modify the inline CSS styles of a div element with a specific ID.

2. let box = document.getElementById("box");
Uses document.getElementById("box") to select the HTML element with the ID "box".
The element is stored in the variable box.

3. box.style.backgroundColor = "lightcoral";
Modifies the style property of the box element.
Specifically changes the background color of the element to lightcoral.

4. box.style.width = "300px";
Modifies the width of the box element by setting the width property to 300px.

5. box.style.height = "300px";
Modifies the height of the box element by setting the height property to 300px.

6. box.style.border = "5px solid black";
Modifies the border property of the box element.
Sets a 5px wide solid black border around the element.

7. console.log("Box style has been changed!");
Optionally logs a message to the console to confirm that the style of the box element has been updated.

8. }
Closes the changeStyle() function.

How It Works:
The function changeStyle() accesses the div element with the ID "box".
The inline CSS properties for background color, width, height, and border are changed using JavaScript, resulting in:
The background color of the box changing to lightcoral.
The width and height of the box both being set to 300px.
The box getting a solid black border of 5px.
*/