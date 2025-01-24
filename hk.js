// Keyboard Events


const eventOutput = document.getElementById('eventOutput');

// Handle keydown event
document.getElementById('keydownInput').addEventListener('keydown', (event) => {
  eventOutput.innerHTML = `
    <p><strong>Event Type:</strong> keydown</p>
    <p><strong>Key:</strong> ${event.key}</p>
    <p><strong>Code:</strong> ${event.code}</p>
  `;
});

// Handle keyup event
document.getElementById('keyupInput').addEventListener('keyup', (event) => {
  eventOutput.innerHTML = `
    <p><strong>Event Type:</strong> keyup</p>
    <p><strong>Key:</strong> ${event.key}</p>
    <p><strong>Code:</strong> ${event.code}</p>
  `;
});

// Use keydown as a replacement for keypress
document.getElementById('keypressInput').addEventListener('keydown', (event) => {
  eventOutput.innerHTML = `
    <p><strong>Event Type:</strong> keypress (handled using keydown)</p>
    <p><strong>Key:</strong> ${event.key}</p>
    <p><strong>Code:</strong> ${event.code}</p>
  `;
});

/*
Explanation of Keyboard Events

keydown:
Triggered when a key is pressed down.
Fires for all keys, including special keys like Shift, Arrow, etc.

keyup:
Triggered when a key is released after being pressed.

keypress:
Triggered when a key is pressed and corresponds to a printable character.
Note: The keypress event is deprecated but still works in many browsers for now.

Behavior
Keydown Input (keydownInput): Displays the type of event (keydown), the key pressed, and its code.
Keyup Input (keyupInput): Displays the type of event (keyup), the key released, and its code.
Keypress Input (keypressInput): Displays the type of event (keypress), the key pressed, and its code. Works only for printable keys.
Output Area (eventOutput): Updates dynamically with the details of the last triggered keyboard event.
*/