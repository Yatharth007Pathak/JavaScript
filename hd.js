/*
Event Object is a special object that has details about the event.
Every event in JavaScript comes with an event object that provides useful information about the event, 
such as the type, target, and other details. It is automatically passed to the event handler.

Syntax: node.event = (e) => {handle here}
*/

const button = document.getElementById('btn');
button.addEventListener('click', (event) => {
    console.log(event.type);   // "click"
    console.log(event.target); // The button element
});

/*
Here’s the line-by-line breakdown of the code:

const button = document.getElementById('btn');
This line selects the HTML element with the ID btn and stores it in the button variable. 
The getElementById() method is used to access the DOM element by its unique ID.

button.addEventListener('click', (event) => {
This line attaches an event listener for the click event to the button. 
When the button is clicked, the provided arrow function is executed. 
The function receives the event object as an argument, which holds all the details about the event.

console.log(event.type);
This line logs the type of the event. The event.type property holds the type of the event, which in this case is "click". 
This is output to the console whenever the button is clicked.

console.log(event.target);
This line logs the target element of the event. The event.target property refers to the DOM element that triggered the event. 
In this case, it will be the button element (<button id="btn">), and logging it will print the button in the console.
*/