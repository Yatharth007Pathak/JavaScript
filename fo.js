/*
The innerText and innerHTML properties in JavaScript are used to retrieve or modify the content of an HTML element, 
but they have key differences in their behavior and use cases.

1. innerText
Retrieves or sets the visible text inside an element.
Ignores any HTML tags and only handles plain text.
Reflects what is visible to the user, taking CSS styling into account (e.g., display: none or visibility: hidden).
If you set innerText, any inserted text will be treated as plain text, not HTML.

2. innerHTML
Retrieves or sets the HTML content inside an element, including tags and nested elements.
Allows inserting HTML elements, which the browser will render.
Does not account for CSS styling or visibility—it includes all HTML content inside the element.
*/


let text = document.getElementById("example").innerText;
console.log(text); // Output: "This is bold text and normal text."
      
// Updating with innerText
document.getElementById("example").innerText = "<b>New Content</b>";
console.log(document.getElementById("example").innerHTML); 
// Output: "&lt;b&gt;New Content&lt;/b&gt;" (Displayed as plain text)



let htmlContent = document.getElementById("example_").innerHTML;
console.log(htmlContent); 
// Output: "<b>This is bold text</b> and normal text."

// Updating with innerHTML
document.getElementById("example_").innerHTML = "<b>New Bold Content</b>";
console.log(document.getElementById("example_").innerText); 
// Output: "New Bold Content"


/*
Code Breakdown (Step-by-Step):

Accessing and Reading innerText:
Code: let text = document.getElementById("example").innerText;
The getElementById("example") fetches the HTML element with id="example".
The .innerText retrieves only the visible text content of the element, ignoring any HTML tags.
Example: For <div id="example"><b>This is bold text</b> and normal text.</div>, innerText would return:
"This is bold text and normal text"

Logging innerText:
Code: console.log(text);
Output: "This is bold text and normal text."

Updating Content with innerText:
Code: document.getElementById("example").innerText = "<b>New Content</b>";
This sets the visible text of the example element to "<b>New Content</b>".
Since innerText treats all input as plain text, the <b> tag will not be interpreted as HTML.
Result: The text content inside the element changes to "<b>New Content</b>".

Logging innerHTML After innerText Update:
Code: console.log(document.getElementById("example").innerHTML);
Output: "&lt;b&gt;New Content&lt;/b&gt;" (HTML-escaped text is displayed).

Accessing and Reading innerHTML:
Code: let htmlContent = document.getElementById("example_").innerHTML;
The innerHTML retrieves the full HTML content of the element, including tags.
Example: For <div id="example_"><b>This is bold text</b> and normal text.</div>, innerHTML would return:
"<b>This is bold text</b> and normal text"

Logging innerHTML:
Code: console.log(htmlContent);
Output: "<b>This is bold text</b> and normal text"

Updating Content with innerHTML:
Code: document.getElementById("example_").innerHTML = "<b>New Bold Content</b>";
This sets the entire HTML content of the example_ element to "<b>New Bold Content</b>".
The <b> tag is rendered as HTML, making the text "New Bold Content" bold.

Logging innerText After innerHTML Update:
Code: console.log(document.getElementById("example_").innerText);
Output: "New Bold Content" (Only the visible text is logged).
*/