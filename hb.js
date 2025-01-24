/*
Common Methods for Event Handling:
preventDefault(): Prevents the default action associated with the event (e.g., preventing a link from opening or a form from submitting).
stopPropagation(): Prevents the event from bubbling up or capturing down the DOM hierarchy.
*/

// Preventing the default link behavior (navigation) and stopping propagation
const link = document.getElementById('link');
link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevents the default action (navigation)
    alert('Link clicked, but no navigation will occur.');
});

// Stopping event propagation (bubbling) between parent and child elements
const parent = document.getElementById('parent');
const child = document.getElementById('child');

parent.addEventListener('click', () => {
    alert('Parent element clicked!');
});

child.addEventListener('click', (e) => {
    alert('Child element clicked!');
    e.stopPropagation(); // Stops the event from bubbling up to the parent
});

/*
Code breakdown:

Preventing Default Behavior for a Link:
The code selects the link element (#link).
When the link is clicked, the default action (navigation) is prevented using e.preventDefault().
An alert is shown instead of navigating.

Stopping Event Propagation for Parent and Child Elements:
The parent element (#parent) and child element (#child) are selected.
An event listener is added to the parent to alert "Parent element clicked!" when clicked.
The child element also has an event listener that shows an alert "Child element clicked!".
e.stopPropagation() is used in the child’s event listener to stop the event from bubbling up to the parent, 
preventing the parent’s event listener from being triggered.
*/