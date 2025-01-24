/*
The classList property in JavaScript provides a convenient way to interact with the classes assigned to an HTML element. 
It is a read-only property that returns a DOMTokenList object, which represents the element's list of classes. 
You can use it to add, remove, toggle, or check for specific classes on an element.

Syntax: element.classList


Methods of classList:

add(className1, className2, ...): Adds one or more class names to the element.
element.classList.add('new-class', 'another-class');

remove(className1, className2, ...): Removes one or more class names from the element.
element.classList.remove('old-class');

toggle(className, [force]): Toggles a class on the element. 
Optionally, you can pass a force argument (true/false) to explicitly add or remove the class.
element.classList.toggle('active'); // Toggles 'active' class
element.classList.toggle('hidden', true); // Ensures 'hidden' is added
element.classList.toggle('hidden', false); // Ensures 'hidden' is removed

contains(className): Checks if the element contains a specific class. Returns true or false.
element.classList.contains('my-class'); // true or false

replace(oldClass, newClass): Replaces an existing class with a new one.
element.classList.replace('old-class', 'new-class');
*/

function toggleHighlight() {
    const box = document.getElementById('box');
    box.classList.toggle('highlight');
}

function hideBox() {
    const box = document.getElementById('box');
    box.classList.add('hidden');
}

function checkHighlight() {
    const box = document.getElementById('box');
    if (box.classList.contains('highlight')) {
        alert("The box has the 'highlight' class!");
    } else {
        alert("The box does NOT have the 'highlight' class!");
    }
}

/*
Line-by-Line Breakdown of Code:

function toggleHighlight() { ... }
This function toggles a CSS class on a specific element.

const box = document.getElementById('box');
Selects the element with the ID "box" and assigns it to the variable box.

box.classList.toggle('highlight');
Toggles the CSS class "highlight" on the box element:
If the "highlight" class is present, it is removed.
If the "highlight" class is absent, it is added.

function hideBox() { ... }
This function adds a CSS class to hide the box.

const box = document.getElementById('box');
Selects the element with the ID "box" and assigns it to the variable box.

box.classList.add('hidden');
Adds the "hidden" class to the box element.
Assuming the "hidden" class is defined in your CSS (e.g., display: none;), it will make the element invisible.

function checkHighlight() { ... }
This function checks whether the "highlight" class is applied to the box and alerts the result.

const box = document.getElementById('box');
Selects the element with the ID "box" and assigns it to the variable box.

if (box.classList.contains('highlight')) { ... }
Checks if the box element has the "highlight" class using the classList.contains() method.

alert("The box has the 'highlight' class!");
Displays an alert if the "highlight" class is present.

alert("The box does NOT have the 'highlight' class!");
Displays an alert if the "highlight" class is absent.

*/