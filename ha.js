/*
Event Bubbling and Capturing:
Bubbling: Events propagate from the target element up to its ancestors. (Default behavior)
Capturing: Events propagate from the ancestors down to the target element.
*/

document.getElementById('parent').addEventListener('click', () => {
    alert('Parent clicked');
});

document.getElementById('child').addEventListener('click', (event) => {
    alert('Child clicked');
    event.stopPropagation(); // Prevents bubbling
});

/*
Here’s a breakdown of the code:

Adding Event Listener to Parent Element:
document.getElementById('parent').addEventListener('click', () => { alert('Parent clicked'); });
This line adds an event listener to an element with the ID parent. 
When this element is clicked, an alert with the message "Parent clicked" is displayed.

Adding Event Listener to Child Element:
document.getElementById('child').addEventListener('click', (event) => {
This line adds an event listener to an element with the ID child. 
When the child element is clicked, an alert with the message "Child clicked" is displayed.

Stopping Event Propagation:
event.stopPropagation();
Inside the child element's event listener, the stopPropagation() method is called on the event object. 
This prevents the event from bubbling up to the parent element. Without this method, the click event on the child element 
would also trigger the click event listener on the parent element due to event bubbling.

How Event Bubbling Works:
When a child element is clicked, the event is triggered on the child first. 
Afterward, the event bubbles up to its parent element (and potentially to other ancestors). 
In this case, the click event on the child would normally trigger the parent’s event listener as well.
By using event.stopPropagation() on the child, the event stops from bubbling up to the parent, 
so only the child’s event listener is triggered and the parent's event listener is prevented from running.

Expected Behavior:
When the child element is clicked:The alert "Child clicked" will appear. 
The event won't bubble to the parent, so "Parent clicked" won't be triggered.
When the parent element (outside the child) is clicked: The alert "Parent clicked" will appear.

This code demonstrates event delegation with stopPropagation() to control event flow and prevent event bubbling.
*/