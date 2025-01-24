/*
Here’s a list of common DOM manipulation techniques used to dynamically interact with 
and modify the structure, content, and style of web pages:

1. Selecting Elements: To interact with elements in the DOM, you first need to select them.
document.getElementById(id): Selects an element by its id.
document.getElementsByClassName(className): Selects all elements with a specific class name.
document.getElementsByTagName(tagName): Selects all elements with a specific tag name.
document.querySelector(selector): Selects the first element that matches a CSS selector.
document.querySelectorAll(selector): Selects all elements that match a CSS selector.

2. Changing Content: Modify the text or HTML content of an element.
tagName: returns tag for element nodes
element.innerText: Returns the text content of the element and all its children, but respects CSS styling (e.g., ignores hidden elements).
element.innerHTML: Gets or sets the HTML content or plain text inside an element.
element.textContent: Gets or sets the text inside an element, even for hidden elements

3. Modifying Attributes: Set, get, or remove attributes of an element.
element.setAttribute(name, value): Sets an attribute on an element.
element.getAttribute(name): Gets the value of an attribute.
element.removeAttribute(name): Removes an attribute.

4. Modifying Classes: Add, remove, toggle, or check for CSS classes on an element.
element.classList.add(className): Adds a class to the element.
element.classList.remove(className): Removes a class from the element.
element.classList.toggle(className): Toggles a class (adds it if missing, removes it if present).
element.classList.contains(className): Checks if the element has a specific class.

5. Styling Elements: Directly modify the inline styles of an element.
element.style.property: Sets a CSS property (camelCase is used for multi-word properties like backgroundColor).

6. Adding and Removing Elements: Manipulate the structure of the DOM by creating or removing elements.
document.createElement(tagName): Creates a new element.
parentElement.appendChild(childElement): Adds a new child element to a parent.
parentElement.removeChild(childElement): Removes a child element from a parent.
parentElement.insertBefore(newElement, referenceElement): Inserts a new element before a reference element.

7. Event Handling: Attach event listeners to elements for user interaction.
element.addEventListener(event, callback): Attaches an event listener to an element.
Inline Events (Not recommended for modern development)

8. Traversing the DOM: Navigate between elements in the DOM tree.
parentElement.children: Gets all child elements of a parent.
element.parentElement: Gets the parent of an element.
element.nextElementSibling: Gets the next sibling element.
element.previousElementSibling: Gets the previous sibling element.

9. Cloning Elements: Create a copy of an existing DOM element.
element.cloneNode(deep): Clones an element. If deep is true, it clones the element and all its children.

10. Advanced Techniques
Using replaceChild(): Replaces an existing child with a new one.
Using element.remove(): Removes an element from the DOM.
Using documentFragment: Improves performance when adding multiple elements.
*/