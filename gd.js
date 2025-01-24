// removeAttribute


function showText() {
    // Get the paragraph and button elements
    const text = document.getElementById("hidden-text");
    const button = document.getElementById("special-button");

    // Remove the "display" style to show the hidden text
    text.removeAttribute("style");
    
    // Change the button text
    button.textContent = "The message is now visible!";
    button.disabled = true; // Optionally, disable the button after it's clicked
}

/*
Line-by-Line Breakdown of Code:

1. function showText() {
Defines a function named showText(). 
This function will be triggered (likely by a button click) to reveal hidden text and update the button text.

2. const text = document.getElementById("hidden-text");
Uses document.getElementById() to retrieve the element with the ID "hidden-text".
The selected element, which presumably contains hidden text, is stored in the variable text.

3. const button = document.getElementById("special-button");
Uses document.getElementById() to retrieve the element with the ID "special-button".
This button will likely trigger the showText() function when clicked.

4. text.removeAttribute("style");
Removes the style attribute from the text element.
If the text was previously hidden using CSS (e.g., display: none;), this will remove that style and make the text visible.

5. button.textContent = "The message is now visible!";
Updates the text content of the button to "The message is now visible!", indicating to the user that the hidden text has been revealed.

6. button.disabled = true;
Disables the button by setting its disabled property to true.
This prevents the user from clicking the button again after it's been used.
*/