let div = document.querySelector("div");

console.log(div.tagName)
console.log(div.innerText);
console.log(div.innerHTML);
console.log(div.textContent);

/*
tagName: returns tag for element nodes
innerText: returns the text content of the element and all its children
innerHTMl: returns the plain text or HTML contents in the element
textContent: returns the textual content evewn for hidden elements
*/

/*
Breakdown of the Code:

document.querySelector("div"):
This line selects the first <div> element on the page. querySelector returns the first matching element based 
on the specified selector (in this case, the first div element).

console.log(div.tagName):
div.tagName returns the name of the tag of the selected element in uppercase.
If the selected element is a <div>, this will output "DIV".

console.log(div.innerText):
div.innerText retrieves the text content of the div, considering any CSS styles that might affect the visibility of the text. 
If the text is visible, it will return it as a string, but if hidden (e.g., using display: none), it returns an empty string.
It only returns visible text and respects line breaks and styling.

console.log(div.innerHTML):
div.innerHTML retrieves the HTML content inside the div tag, including any child HTML elements, and returns it as a string. 
This includes all the HTML markup between the opening and closing div tags.
It returns everything inside the div (including nested tags) as a string of HTML.

console.log(div.textContent):
div.textContent returns the raw text content of the div, similar to innerText but without respecting CSS for visibility. 
It retrieves all the text, even if it's hidden due to styling.
It returns the plain text inside the div, excluding any HTML tags.
*/