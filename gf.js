/*
In JavaScript, node.style refers to the inline styles of an HTML element, 
allowing you to get or modify the CSS properties directly using JavaScript.

Explanation:
node is a reference to an HTML element in the DOM (Document Object Model).
style is an object that contains the inline style properties for that element (e.g., backgroundColor, fontSize, width, etc.).
The node.style object only represents inline styles applied directly to an element. 
It does not reflect styles applied via external stylesheets or <style> tags.

Key Points:
node.style.propertyName: This is how you access or change individual CSS properties. 
For example, node.style.backgroundColor would give you the background color of the element.
Property names in node.style are camelCased, meaning hyphenated CSS properties like background-color are written in JS as backgroundColor.
This approach is useful when you want to apply styles directly through JavaScript rather than modifying CSS classes or stylesheets.
*/

function changeStyle() {
    // Get the element by its ID
    const box = document.getElementById("box");

    // Access and modify inline styles using node.style
    box.style.backgroundColor = "blue";  // Change background color to blue
    box.style.width = "200px";           // Change width to 200px
    box.style.height = "200px";          // Change height to 200px
}

/*
Line-by-Line Breakdown of Code:

1. function changeStyle() {
Defines a function named changeStyle(). This function will modify the inline CSS styles of an HTML element.

2. const box = document.getElementById("box");
Uses document.getElementById() to get the element with the ID "box".
The reference to this element is stored in the constant variable box.

3. box.style.backgroundColor = "blue";
This line accesses the style property of the box element, which represents the inline CSS styles.
It modifies the backgroundColor property, setting the background color of the box to "blue".

4. box.style.width = "200px";
Similarly, this modifies the width property of the box element.
It sets the width of the box to "200px".

5. box.style.height = "200px";
This modifies the height property of the box element, setting the height to "200px".

6. }
Closes the changeStyle() function.

How It Works:
When the changeStyle() function is invoked, it accesses the element with the ID "box".
The inline styles for background color, width, and height are then modified to the specified values (blue, 200px, and 200px).
This approach directly changes the element's styles via JavaScript, 
overriding any styles defined in external or internal CSS that are not marked as !important.
*/