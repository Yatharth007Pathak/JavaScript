// getAttribute


let div =document.querySelector("div")
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);

/*
Breakdown of the Code:

let div = document.querySelector("div"):
This line selects the first <div> element on the page using querySelector.
div now refers to the first div element in the DOM.

console.log(div):
Outputs the selected <div> element as an object in the console.
It displays the structure and properties of the div element.

let id = div.getAttribute("id"):
getAttribute("id") retrieves the value of the id attribute of the selected div element.
If the div has an id attribute (e.g., <div id="example">), the variable id will store the value "example".
If the div does not have an id attribute, this will return null.

console.log(id):
Outputs the value of the id attribute or null if it does not exist.

let name = div.getAttribute("name"):
getAttribute("name") retrieves the value of the name attribute of the div.
If the div has a name attribute (e.g., <div name="content">), the variable name will store the value "content".
If the div does not have a name attribute, this will return null.

console.log(name):
Outputs the value of the name attribute or null if it does not exist.
*/