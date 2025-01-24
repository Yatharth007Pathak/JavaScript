/*
Event handling in JavaScript is a crucial concept in building interactive web applications. 
It allows you to execute code in response to various user interactions or system-generated events 
(such as clicking a button, submitting a form, or resizing the window).
Event handling in JavaScript is the process of responding to events triggered by user actions or other events in the browser.

Basics of Event Handling in JavaScript:
Events: These are actions or occurrences that happen in the browser, such as mouse clicks, keyboard inputs, or page load.
Event Listeners: These are functions that wait for specific events to occur and execute code when those events are triggered.

Steps for Event Handling:
Identify the event (e.g., click, change, keydown).
Attach an event listener to an element.
Define a callback function that will run when the event is triggered.


Event Handling Methods:

1. Using HTML Event Attributes (Inline JavaScript):
Pros: Simple for small tasks.
Cons: Not ideal for separation of concerns (mixing HTML and JavaScript).

2. Using DOM Properties (JavaScript Only):
You can assign event handlers using JavaScript by setting the event property on an element.
Pros: Cleaner than inline JavaScript.
Cons: Can overwrite existing event handlers (if multiple).

3. Using addEventListener() (Recommended Approach):
addEventListener() is the preferred way of handling events in modern JavaScript. 
It allows you to attach multiple event handlers to an element and is more flexible.
Pros: Allows multiple handlers for the same event, better separation of concerns, and supports event capturing and bubbling.
Cons: Slightly more complex than using event properties.


Key Event Types:

Mouse Events:
click, dblclick: Mouse clicks.
mousedown, mouseup: Mouse button press and release.
mousemove, mouseover, mouseout: Mouse movement and hover events.

Keyboard Events:
keydown, keyup: When a key is pressed or released.
keypress: Triggered when a key is pressed (deprecated in favor of keydown and keyup).

Form Events:
submit: When a form is submitted.
focus, blur: When an element gains or loses focus.
change, input: When the value of a form element changes.

Window Events:
load: When the page has fully loaded.
resize: When the window is resized.
scroll: When the page is scrolled.

Touch Events (for mobile devices):
touchstart, touchmove, touchend: Triggered when a touch occurs on the screen.
*/