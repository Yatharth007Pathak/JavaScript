// getAttribute


// Get the paragraph element
const paragraph = document.getElementById("paragraph");
const displayInfo = document.getElementById("display-info");

// Add a mouseover event listener
paragraph.addEventListener("mouseover", function () {
    // Get the value of the custom "data-info" attribute
    const info = paragraph.getAttribute("data-info");
    // Display the info in another paragraph
    displayInfo.textContent = info;
});

// Add a mouseout event listener to clear the info
paragraph.addEventListener("mouseout", function () {
    displayInfo.textContent = "";
});

/*
Line-by-Line Breakdown of the Code:

const paragraph = document.getElementById("paragraph");
Selects the HTML element with the id attribute of "paragraph".
Assigns this element to the variable paragraph.

const displayInfo = document.getElementById("display-info");
Selects another HTML element with the id attribute of "display-info".
Assigns this element to the variable displayInfo.
This element will be used to display or clear information dynamically.

paragraph.addEventListener("mouseover", function () {
Adds an event listener to the paragraph element that listens for the mouseover event.
The mouseover event triggers when the user moves the cursor over the paragraph element.
Executes the provided function when this event occurs.

const info = paragraph.getAttribute("data-info");
Retrieves the value of the custom attribute data-info from the paragraph element.
Stores this value in the variable info.
Custom attributes like data-info are commonly used to store additional information in HTML elements.

displayInfo.textContent = info;
Sets the textContent of the displayInfo element to the value of info.
This action dynamically updates the content of displayInfo to display the retrieved data-info value.

});
Closes the function definition for the mouseover event listener.

paragraph.addEventListener("mouseout", function () {
Adds another event listener to the paragraph element, listening for the mouseout event.
The mouseout event triggers when the user moves the cursor away from the paragraph element.
Executes the provided function when this event occurs.

displayInfo.textContent = "";
Clears the textContent of the displayInfo element.
This removes any displayed information when the cursor moves away from the paragraph.

});
Closes the function definition for the mouseout event listener.
*/