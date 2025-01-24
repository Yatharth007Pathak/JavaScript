// JavaScript program demonstrating the use of the following DOM selection methods:


// Selecting the output div
const outputDiv = document.getElementById("output");

// 1. Select an element by ID
document.getElementById("selectById").addEventListener("click", () => {
    const heading = document.getElementById("mainHeading"); // Select element by ID
    heading.classList.add("highlight"); // Add a highlight style
    outputDiv.textContent = `Selected by ID: ${heading.textContent}`;
});

// 2. Select elements by class name
document.getElementById("selectByClassName").addEventListener("click", () => {
    const descriptions = document.getElementsByClassName("description"); // Select elements by class name
    Array.from(descriptions).forEach((desc, index) => {
        desc.classList.add("highlight");
        outputDiv.textContent += `\nSelected by Class (${index + 1}): ${desc.textContent}`;
    });
});

// 3. Select elements by tag name
document.getElementById("selectByTagName").addEventListener("click", () => {
    const listItems = document.getElementsByTagName("li"); // Select elements by tag name
    Array.from(listItems).forEach((item, index) => {
        item.classList.add("highlight");
        outputDiv.textContent += `\nSelected by Tag Name (${index + 1}): ${item.textContent}`;
    });
});

// 4. Select the first matching element with querySelector
document.getElementById("selectByQuerySelector").addEventListener("click", () => {
    const firstParagraph = document.querySelector(".description"); // Select first element matching the selector
    firstParagraph.classList.add("highlight");
    outputDiv.textContent = `Selected by Query Selector: ${firstParagraph.textContent}`;
});

// 5. Select all matching elements with querySelectorAll
document.getElementById("selectByQuerySelectorAll").addEventListener("click", () => {
    const allListItems = document.querySelectorAll(".listItem"); // Select all matching elements
    allListItems.forEach((item, index) => {
        item.classList.add("highlight");
        outputDiv.textContent += `\nSelected by Query Selector All (${index + 1}): ${item.textContent}`;
    });
});

/*
Explanation

getElementById:
Selects a single element with the given id.
The "Select By ID" button highlights the <h1> element with the id="mainTitle" and displays its content.

getElementsByClassName:
Returns a live HTMLCollection of all elements with the specified class name.
The "Select By Class" button highlights all <p> elements with the class="description" and displays their text.

getElementsByTagName:
Returns a live HTMLCollection of elements with the specified tag name.
The "Select By Tag" button highlights all <li> elements and displays their text.

querySelector:
Selects the first element matching the specified CSS selector.
The "Select By Query Selector" button highlights the first <p> with the class="description".

querySelectorAll:
Returns a static NodeList of all elements matching the specified CSS selector.
The "Select By Query Selector All" button highlights all <p> elements with the class="description" and displays their text.
*/