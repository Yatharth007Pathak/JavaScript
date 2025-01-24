// getAttribute


function showImageInfo() {
    // Access the image element by its ID
    let imgElement = document.getElementById("image");
  
    // Retrieve the 'src' and 'alt' attributes using getAttribute
    let srcValue = imgElement.getAttribute("src");
    let altValue = imgElement.getAttribute("alt");
  
    // Display the attribute values in an alert
    alert(`Image Source: ${srcValue}\nAlt Text: ${altValue}`);
  }


/*
Here’s a detailed line-by-line breakdown of the code:

function showImageInfo() {
Defines a function named showImageInfo.
This function will be executed when called.

let imgElement = document.getElementById("image");
Uses document.getElementById to locate the HTML element with the id attribute of "image".
The selected element (assumed to be an <img> tag) is assigned to the variable imgElement.

let srcValue = imgElement.getAttribute("src");
Calls getAttribute("src") on the imgElement to retrieve the value of its src attribute.
The src attribute typically contains the URL or file path of the image.
The retrieved value is stored in the variable srcValue.

let altValue = imgElement.getAttribute("alt");
Calls getAttribute("alt") on the imgElement to retrieve the value of its alt attribute.
The alt attribute contains alternative text for the image, displayed if the image cannot load.
The retrieved value is stored in the variable altValue.

alert(\Image Source: ${srcValue}\nAlt Text: ${altValue}`);`
Uses an alert dialog to display the image's source (srcValue) and alt text (altValue).
Template literals (```) are used to format the message.
\n adds a line break between the src and alt information.

}
Ends the function definition.


Key Notes:

Error Handling: If the image element does not have src or alt attributes, getAttribute will return null, and the alert will display:
Image Source: null
Alt Text: null

Dynamic Content: If the src or alt attributes are modified dynamically via JavaScript, the function will reflect the updated values.
*/