// innerText vs innerHTML


console.log(document.getElementById("example").innerText); 
// Output: "Hidden Bold Text"

console.log(document.getElementById("example").innerHTML); 
// Output: "<b>Hidden Bold Text</b>" (HTML content is returned)

/*
Practical Use Cases:

innerText:
To read or modify only the visible text content of an element.
Example: Updating the plain text of a label or heading.

innerHTML:
To read or modify the complete HTML content, including tags.
Example: Adding dynamic HTML elements like <b>, <p>, <span> for rich formatting.
*/

/*
Breakdown of the code

Using innerText: Code: console.log(document.getElementById("example").innerText);
Explanation:
The innerText property retrieves the visible text content inside the element, ignoring HTML tags.
The text inside the <b> tag is displayed without formatting.

Using innerHTML: Code: console.log(document.getElementById("example").innerHTML);
Explanation:
The innerHTML property retrieves the entire HTML content of the element, including any nested tags.
In this case, it fetches the <b> tag and its content.
*/