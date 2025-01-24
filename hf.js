// Create a toggle button that changes the screen to dark-mode when clicked and light-mode when clicked again

let modeBtn = document.querySelector("#mode");
let currMode = "light";

modeBtn.addEventListener("click", () => {
    if(currMode === "light") {
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }

    console.log(currMode);
});

/*
Here's a line-by-line explanation of the code:

1. let modeBtn = document.querySelector("#mode");
Selects the element with the id of mode using document.querySelector() and assigns it to the variable modeBtn.
This is typically a button or some clickable element in the DOM.

2. let currMode = "light";
Initializes a variable currMode to store the current mode of the webpage.
Initially, it is set to "light", indicating the light mode is active.

3. modeBtn.addEventListener("click", () => {
Adds a click event listener to the modeBtn element.
When the button is clicked, the arrow function inside the event listener is executed.

4. if(currMode === "light") {
Checks if the current mode is "light".
If this condition is true, it means the page is in light mode, and the user wants to switch to dark mode.

5. currMode = "dark";
Changes the value of currMode to "dark", indicating the mode is now switched to dark.

6. document.querySelector("body").style.backgroundColor = "black";
Selects the <body> element using document.querySelector("body") and changes its backgroundColor style property to "black".
This visually changes the background to a dark mode appearance.

7. } else {
Executes this block if the condition currMode === "light" is false.
This means the current mode is "dark", and the user wants to switch back to light mode.

8. currMode = "light";
Changes the value of currMode to "light", indicating the mode is now switched to light.

9. document.querySelector("body").style.backgroundColor = "white";
Selects the <body> element and changes its backgroundColor style property to "white".
This visually changes the background to a light mode appearance.

10. console.log(currMode);
Logs the current mode (currMode) to the console.
Useful for debugging to see whether the mode has correctly toggled.

Behavior:

Initial Mode (Light):
The page starts in light mode (currMode is "light") with a white background.

On Button Click:
If currMode is "light", the background changes to black, and currMode is set to "dark".
If currMode is "dark", the background changes to white, and currMode is set to "light".

Console Output:
Each click logs the current mode ("light" or "dark") to the console, indicating the toggle status.
This code provides a simple mechanism to switch between light and dark modes by toggling the background color of the webpage.
*/