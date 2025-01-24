// tagName


function showTagNames() {
    // Select all elements in the body
    let elements = document.body.children;
  
    // Loop through the elements and log their tag names
    for (let i = 0; i < elements.length; i++) {
      console.log(`Element ${i + 1}: ${elements[i].tagName}`);
    }
  }

/*
Here’s an explanation of the code:

1. function showTagNames() {
Defines a function showTagNames that, when called, will log the tag names of all elements inside the <body> of the document.

2. let elements = document.body.children;
document.body.children accesses all the direct child elements inside the <body> tag.
This returns a live HTMLCollection (a collection of HTML elements) of all direct children of the <body> element.

3. for (let i = 0; i < elements.length; i++) {
This is a loop that iterates over each element in the elements collection.
elements.length gives the number of child elements in the body.
The loop continues as long as i is less than elements.length, going through each element one by one.

4. console.log(\Element ${i + 1}: ${elements[i].tagName}`);`
Inside the loop, the console.log() method is used to log the tag name of each element.
elements[i] accesses the ith child element, and .tagName returns the tag name of that element (e.g., "DIV", "P", "H1", etc.).
The string is formatted to display the element number (i + 1) and its tag name.

5. Closing the loop and function:
The loop continues to iterate over all the elements, logging the tag names of each.
Once the loop finishes, the function ends.
*/