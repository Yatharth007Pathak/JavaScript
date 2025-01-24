// Create a toggle button that changes the screen to dark-mode when clicked and light-mode when clicked again

const toggleButton = document.getElementById('toggle-btn');
const body = document.body;

toggleButton.addEventListener('click', () => {
    // Toggle between dark and light modes
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        toggleButton.textContent = 'Switch to Light Mode';
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        toggleButton.textContent = 'Switch to Dark Mode';
    }
});

/*
Here's a line-by-line explanation of the code:

1. const toggleButton = document.getElementById('toggle-btn');
Retrieves the element with the id of toggle-btn from the DOM and assigns it to the toggleButton variable.
This element is typically a button that will trigger the theme toggle functionality.

2. const body = document.body;
Stores a reference to the <body> element of the document in the body variable.
This is the element where the dark mode or light mode class will be toggled.

3. toggleButton.addEventListener('click', () => {
Adds a click event listener to the toggleButton.
When the button is clicked, the arrow function inside the event listener is executed.

4. if (body.classList.contains('light-mode')) {
Checks if the <body> element currently has the light-mode class.
This condition determines whether the page is currently in light mode.

5. body.classList.remove('light-mode');
Removes the light-mode class from the <body> element.
This indicates that the page is transitioning away from light mode.

6. body.classList.add('dark-mode');
Adds the dark-mode class to the <body> element.
This switches the page to dark mode.

7. toggleButton.textContent = 'Switch to Light Mode';
Changes the button’s text to "Switch to Light Mode".
This indicates that clicking the button again will allow the user to switch back to light mode.

8. } else {
Executes this block if the if condition (body.classList.contains('light-mode')) is false.
This means the page is currently in dark mode.

9. body.classList.remove('dark-mode');
Removes the dark-mode class from the <body> element.
This indicates that the page is transitioning away from dark mode.

10. body.classList.add('light-mode');
Adds the light-mode class to the <body> element.
This switches the page to light mode.

11. toggleButton.textContent = 'Switch to Dark Mode';
Changes the button’s text to "Switch to Dark Mode".
This indicates that clicking the button again will allow the user to switch back to dark mode.

Behavior:

Initial Setup:
When the page loads, the button toggles the theme based on the current class (light-mode or dark-mode) applied to the <body>.

Switch to Dark Mode:
If the <body> is in light mode (light-mode class exists), the button switches the theme to dark mode 
by adding dark-mode and removing light-mode.

Switch to Light Mode:
If the <body> is in dark mode (dark-mode class exists), the button switches the theme to light mode 
by adding light-mode and removing dark-mode.
This code implements a simple theme toggler for a webpage.
*/