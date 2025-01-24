// JavaScript program that demonstrates the use of tagName, textContent, innerHTML, and innerText:


// Selecting elements
const mainHeading = document.getElementById("mainHeading");
const paragraph = document.querySelector(".info");
const outputDiv = document.getElementById("output");

// Show the tag name of the mainHeading element
document.getElementById("showTagName").addEventListener("click", () => {
    const tagName = mainHeading.tagName; // Retrieves the tag name
    outputDiv.textContent = `The tag name of the main heading is: ${tagName}`;
});

// Change the text content of the paragraph
document.getElementById("changeTextContent").addEventListener("click", () => {
    paragraph.textContent = "This is new text content! (All HTML tags are removed)";
});

// Change the inner HTML of the paragraph
document.getElementById("changeInnerHTML").addEventListener("click", () => {
    paragraph.innerHTML = "This is new <em>HTML content</em>!";
});

// Toggle visibility of innerText vs innerHTML
document.getElementById("toggleInnerText").addEventListener("click", () => {
    if (outputDiv.classList.contains("hidden")) {
        outputDiv.classList.remove("hidden");
        outputDiv.innerText = "innerText shows only the text, ignoring hidden styles.";
    } else {
        outputDiv.classList.add("hidden");
        outputDiv.innerHTML = "<strong>innerHTML</strong> preserves all tags and styles.";
    }
});


/*
Explanation of Key Points

tagName:
Retrieves the tag name of the selected element (e.g., H1 for <h1>).
The program shows the tag name of the main heading when the "Show Tag Name" button is clicked.

textContent:
Replaces all the text inside the element, removing any nested HTML tags.
Demonstrated when you click "Change Text Content."

innerHTML:
Replaces the content inside the element while preserving or adding new HTML tags.
Demonstrated when you click "Change Inner HTML."

innerText:
Retrieves or sets the visible text while ignoring hidden content or respecting CSS display properties.
Used to toggle between innerText and innerHTML in the "Toggle Inner Text" button.
*/