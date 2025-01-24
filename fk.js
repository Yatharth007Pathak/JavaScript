// tagName


let heading = document.getElementById("heading");
alert("The tag name of this element is: " + heading.tagName);

let para = document.getElementById("para");                // id
console.log(para.tagName); 

let divi = document.getElementsByClassName("divi");       // class
for (let i = 0; i < divi.length; i++) {
    console.log(divi[i].tagName); 
}

/*
Line-by-line Explanation:

let heading = document.getElementById("heading");
Purpose: This line selects the HTML element with the id of "heading".
How it works: The document.getElementById() method searches the HTML document for an element 
with the provided ID ("heading") and returns a reference to it.

alert("The tag name of this element is: " + heading.tagName);
Purpose: This line creates an alert popup showing the tag name of the heading element.
How it works: .tagName retrieves the tag name of the selected element (in this case, the <h1> element).

let para = document.getElementById("para");
Purpose: This line selects the HTML element with the id of "para".
How it works: Similarly to the first line, this line uses document.getElementById("para") to retrieve the element with the ID "para".

console.log(para.tagName);
Purpose: This line logs the tag name of the para element (the selected <p> element) to the console.
How it works: .tagName is used to retrieve the tag name of the para element.

let divi = document.getElementsByClassName("divi");
Purpose: This line selects all HTML elements with the class name "divi".
How it works: document.getElementsByClassName("divi") returns a live HTMLCollection of elements with the class "divi". 
If there are multiple elements with the same class, all of them will be selected.

for (let i = 0; i < divi.length; i++) {
Purpose: This starts a loop to iterate over all elements in the divi HTMLCollection.
How it works: The loop will iterate from i = 0 to i = divi.length - 1, where divi.length gives number of elements with the class "divi".
In this case, divi.length would be 2 (since there are two <div> elements with the class "divi").

console.log(divi[i].tagName);
Purpose: This logs the tagName of each div element in the divi collection.
How it works: The code divi[i] accesses each individual element in the collection, and .tagName retrieves the tag name of that element.

Closing the for loop with }
This closes the loop after all elements in the divi collection have been processed.
*/