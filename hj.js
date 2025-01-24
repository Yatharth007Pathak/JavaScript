// Mouse Events

// Click event
document.getElementById('clickBox').addEventListener('click', () => {
    alert('Box clicked!');
  });
  
  // Double-click event
  document.getElementById('dblClickBox').addEventListener('dblclick', () => {
    alert('Box double-clicked!');
  });
  
  // Mousedown event
  document.getElementById('mousedownBox').addEventListener('mousedown', () => {
    document.getElementById('mousedownBox').textContent = 'Mouse down!';
  });
  
  // Mouseup event
  document.getElementById('mouseupBox').addEventListener('mouseup', () => {
    document.getElementById('mouseupBox').textContent = 'Mouse released!';
  });
  
  // Mousemove event
  document.getElementById('mousemoveBox').addEventListener('mousemove', (event) => {
    document.getElementById('mousemoveBox').textContent =
      `X: ${event.offsetX}, Y: ${event.offsetY}`;
  });
  
  // Mouseover and Mouseout events
  const hoverBox = document.getElementById('hoverBox');
  hoverBox.addEventListener('mouseover', () => {
    hoverBox.style.backgroundColor = '#1d70b8';
    hoverBox.textContent = 'Mouse is over!';
  });
  
  hoverBox.addEventListener('mouseout', () => {
    hoverBox.style.backgroundColor = '#337ab7';
    hoverBox.textContent = 'Hover Over Me';
  });

/*
How It Works

Click Event (clickBox):
Triggers an alert when the box is clicked.

Double-Click Event (dblClickBox):
Triggers an alert when the box is double-clicked.

Mouse Down Event (mousedownBox):
Changes the text to "Mouse down!" when the mouse button is held down.

Mouse Up Event (mouseupBox):
Changes the text to "Mouse released!" when the mouse button is released.

Mouse Move Event (mousemoveBox):
Displays the mouse coordinates (relative to the box) as the mouse moves within the box.

Mouse Over & Out Events (hoverBox):
Changes the background color and text when the mouse enters (mouseover) and reverts when it leaves (mouseout).
*/