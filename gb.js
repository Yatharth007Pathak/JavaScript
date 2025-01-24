// setAttribute


function updateImage() {
    // Access the image element by its ID
    let imgElement = document.getElementById("image");
  
    // Update the 'src' attribute to change the image
    imgElement.setAttribute("src", "https://via.placeholder.com/300");
  
    // Update the 'alt' attribute to reflect the new image
    imgElement.setAttribute("alt", "Updated Image");
  
    // Optional: Provide feedback in the console
    console.log("Image attributes updated!");
  }
  
/*
Line-by-Line Breakdown of Code:

1. function updateImage() {
Defines a new function named updateImage() which will be called to update the image on the page.

2. let imgElement = document.getElementById("image");
Uses document.getElementById() to get the HTML element with the ID "image".
Stores this element (an <img> tag) in the variable imgElement.
Assumption: There is an <img> tag in the HTML with the id="image".

3. imgElement.setAttribute("src", "https://via.placeholder.com/300");
Uses setAttribute() to modify the src attribute of the image element.
Sets the src attribute to the URL "https://via.placeholder.com/300", 
which will change the image displayed to a placeholder image (300x300).

4. imgElement.setAttribute("alt", "Updated Image");
Uses setAttribute() again to modify the alt attribute of the image element.
Sets the alt text to "Updated Image", which provides a description of image for accessibility purposes and when the image is not loaded.

5. console.log("Image attributes updated!");
Logs the message "Image attributes updated!" to the console, providing feedback that the image attributes were successfully updated.


Key Functions Used:

getElementById():
Retrieves an HTML element by its ID, in this case, an image element with the ID "image".

setAttribute():
Modifies an attribute of the selected HTML element. 
Here, it is used to change both the src (image source) and alt (alternative text) attributes of the image.

console.log():
Logs a message to the browser’s developer console, useful for debugging and providing feedback.


Usage:
The function updateImage() can be called when needed (e.g., on a button click or an event). 
When executed, it will change the displayed image to a new placeholder and update its alt text.
*/