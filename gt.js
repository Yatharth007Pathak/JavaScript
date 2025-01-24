/*
Create a new button element. Give it a text "click me!", background color of red and text color of white.
Insert the button as the first element inside the body tag.
*/

let newBtn = document.createElement("button");
newBtn.innerText = "Click me!";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn);