// Event Properties: You can access event-specific details using the event object, which is passed to the event handler.

const btn = document.getElementById('btn');

btn.addEventListener('click', (event) => {
console.log('Event Type:', event.type); // Output: click
console.log('Element:', event.target); // Output: <button id="btn">Click Me</button>
});

/*
Here’s the line-by-line breakdown of the provided code:

Selecting the Button Element:
const btn = document.getElementById('btn');
This line selects the button element with the ID btn using the getElementById() method and stores it in the btn variable.

Attaching the Event Listener:
btn.addEventListener('click', (event) => {
This line attaches a click event listener to the btn button. When the button is clicked, the provided callback function is executed. 
The function receives the event object as a parameter, which contains all the details about the event.

Logging the Event Type:
console.log('Event Type:', event.type);
Inside the callback function, this line logs the type of the event, which is 'click'. 
The event.type property gives the type of event that was triggered, in this case, the click event.

Logging the Target Element:
console.log('Element:', event.target);
This line logs the element that triggered the event. The event.target property refers to the element that the event was dispatched on, 
which in this case is the button (<button id="btn">Click Me</button>).

Expected Output:
When the button with ID btn is clicked, the console will display:
Event Type: click
Element: <button id="btn">Click Me</button>
*/