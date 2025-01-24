// Manipulating the DOM


// Accessing an element using getElementById()
let title = document.getElementById("title");
let button = document.getElementById("changeTitleBtn");
console.log(title);
console.dir(title);
console.log(button);
console.dir(button);

// Changing text content of an element
button.addEventListener("click", function() {
    title.textContent = "DOM Manipulation is Fun!";
});

/*
Here’s a breakdown of the code:

1. let title = document.getElementById("title");
Retrieves the HTML element with the id of "title" from the DOM and assigns it to the variable title.
If an element with the specified id exists, the variable will store a reference to that element. If not, it will be null.

2. let button = document.getElementById("changeTitleBtn");
Retrieves the HTML element with the id of "changeTitleBtn" from the DOM and assigns it to the variable button.
Similar to the title variable, if the element exists, the variable will store a reference to it.

3. console.log(title); console.dir(title);
console.log(title);
Logs the title element as an HTML representation, allowing you to view its structure and inspect its attributes.
console.dir(title);
Logs the title element as a JavaScript object, showing all its properties and methods (e.g., innerText, textContent, classList, etc.).

4. console.log(button); console.dir(button);
Similar to the above, logs and inspects the button element.

5. button.addEventListener("click", function() { ... });
Attaches an event listener to the button element, listening for a "click" event.
When the button is clicked, the function inside the addEventListener is executed.

6. title.textContent = "DOM Manipulation is Fun!";
Changes the text content of the title element by updating its textContent property.
If the title element initially contained text like "Hello World!", it will be replaced with "DOM Manipulation is Fun!".
*/