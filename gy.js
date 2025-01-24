// How to Handle Events:


// 1. Using HTML Attributes: Add the event handler directly in the HTML element:
<button class="red" onclick="alert('Red Button Clicked!')">CLICK ME!</button>

// 2. Using DOM Properties: Assign an event handler to an element using JavaScript:
const green = document.getElementById('greenBtn'); 
green.onclick = function () {
    alert('Green Button Clicked!');
};

// 3. Using addEventListener (Recommended): Attach an event listener to an element for better flexibility and separation of concerns:
const yellow = document.getElementById('yellowBtn');
yellow.addEventListener('click', () => {
    alert('Yellow Button Clicked!');
});


/*
Here's the line-by-line breakdown of the code:

Using HTML Attributes:
<button class="red" onclick="alert('Red Button Clicked!')">CLICK ME!</button>
This line creates a button with the class red. The onclick attribute is used to directly handle the click event. 
When the button is clicked, it triggers an alert with the message "Red Button Clicked!".

Using DOM Properties:
const green = document.getElementById('greenBtn');
This line assigns the button element with the ID greenBtn to the green variable. It uses getElementById() to target the element in the DOM.
green.onclick = function () { alert('Green Button Clicked!'); };
This assigns a function to the onclick event of the green button. 
When the button is clicked, it triggers an alert with the message "Green Button Clicked!".

Using addEventListener:
const yellow = document.getElementById('yellowBtn');
This line assigns the button element with the ID yellowBtn to the yellow variable using getElementById().
yellow.addEventListener('click', () => { alert('Yellow Button Clicked!'); });
This attaches an event listener to the yellow button. The addEventListener() method listens for a click event. 
When the button is clicked, it triggers an alert with the message "Yellow Button Clicked!". 
This method is preferred for adding event listeners because it allows for more flexibility, 
such as adding multiple event listeners to the same element.

In summary, this code demonstrates three ways to handle button click events in JavaScript: 
directly through HTML attributes, by assigning a function using DOM properties, and by using addEventListener for better event handling.
*/