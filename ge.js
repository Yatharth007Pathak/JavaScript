/*
Modifying Attributes:
element.setAttribute(name, value): Sets an attribute on an element.
element.getAttribute(name): Gets the value of an attribute.
element.removeAttribute(name): Removes an attribute.
*/

  function manipulateAttributes() {
    // Access the <h2> element by its ID
    let heading = document.getElementById("heading");

    // 1. Using getAttribute to get the current 'title' attribute
    let currentTitle = heading.getAttribute("title");
    alert(`Current title attribute: ${currentTitle}`);

    // 2. Using setAttribute to change the 'title' attribute
    heading.setAttribute("title", "This is the updated heading");

    // 3. Using setAttribute to change the 'class' attribute
    heading.setAttribute("class", "greenText");

    // Introducing a 5-second gap before removing the 'class' attribute
    setTimeout(function() {
        // 4. Using removeAttribute to remove the 'class' attribute
        heading.removeAttribute("class");

        // Optionally log changes to the console
        console.log("Attributes have been modified and class has been removed!");
    }, 5000); // 5000 milliseconds = 5 seconds
}

/*
Line-by-Line Breakdown of Code:

1. function manipulateAttributes() {
Defines a function named manipulateAttributes(). 
This function manipulates the attributes of an HTML element (an <h2> tag) in various ways when called.

2. let heading = document.getElementById("heading");
Uses document.getElementById() to access the <h2> element with the ID "heading".
The reference to this element is stored in the variable heading.

3. let currentTitle = heading.getAttribute("title");
Uses the getAttribute() method to retrieve the current value of the title attribute of the heading element.
The current title value is stored in the variable currentTitle.

4. alert(Current title attribute: ${currentTitle});
Displays an alert with the current value of the title attribute.
The ${currentTitle} syntax uses string interpolation to insert the value of currentTitle into the string.

5. heading.setAttribute("title", "This is the updated heading");
Uses setAttribute() to update the title attribute of the heading element.
The new title value is set to "This is the updated heading".

6. heading.setAttribute("class", "greenText");
Uses setAttribute() again to change the class attribute of the heading element.
The class attribute is set to "greenText", which could apply specific CSS styles (e.g., making the text green).

7. setTimeout(function() {
setTimeout() is used to delay the execution of the code inside the function by a specified amount of time (in milliseconds).
In this case, the function inside will execute after a delay of 5 seconds (5000 milliseconds).

8. heading.removeAttribute("class");
After the 5-second delay, removeAttribute() is used to remove the class attribute from the heading element.
This means that the "greenText" class will no longer apply to the element, potentially removing any CSS styling.

9. console.log("Attributes have been modified and class has been removed!");
Logs a message to the console indicating that the attributes have been modified, and the class attribute has been removed.

10. }, 5000);
This closes the setTimeout() function, which executes the actions inside after a delay of 5000 milliseconds (5 seconds).


Key Functions Used:
getAttribute(): Retrieves the current value of a specified attribute (in this case, title).
setAttribute(): Sets or updates the value of a specified attribute (in this case, title and class).
removeAttribute(): Removes a specified attribute from an element (in this case, the class attribute).
setTimeout(): Executes the provided function after a specified delay (5000 milliseconds = 5 seconds).
alert(): Displays a popup alert with the specified message.
console.log(): Outputs messages to the browser's console for debugging or information purposes.

Usage:
When the button is clicked, the manipulateAttributes() function is executed.
Initially, an alert shows the current title attribute value.
The title and class attributes of the <h2> element are updated.
After a 5-second delay, the class attribute is removed, and the changes are logged to the console.
*/