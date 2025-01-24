/*
Create a <p> tag in html, give it a class and some styling
Now create a new class in CSS and try to append the class to the<p> element
Did you notice how you overwrite the class name when you add a new one?
Solve this problem using classList.
*/

let para = document.querySelector("p");

// para.setAttribute("class", "newClass");

para.classList.add("newClass");