// Window Events

const eventInfo = document.getElementById("eventInfo");

// Function to update event information
function displayEventInfo(eventType, details) {
  eventInfo.innerHTML = `
    <strong>Event:</strong> ${eventType}<br>
    ${details}
  `;
}

// Window Load Event
window.addEventListener("load", () => {
  displayEventInfo("load", "The page has fully loaded.");
  console.log("Page loaded successfully.");
});

// Window Resize Event
window.addEventListener("resize", () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  displayEventInfo("resize", `Window resized to ${width}x${height}.`);
  console.log(`Window resized: ${width}px x ${height}px`);
});

// Window Scroll Event
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  displayEventInfo("scroll", `You scrolled to position: ${scrollY}px.`);
  console.log(`Scroll position: ${scrollY}px`);
});

// Window Unload Event
window.addEventListener("beforeunload", (event) => {
  event.preventDefault();
  event.returnValue = ''; // Required for some browsers to trigger the confirmation dialog
  console.log("User is attempting to leave the page.");
});

/*
Explanation of Events

load Event:
Triggered when the entire page (including all dependent resources such as images, stylesheets, etc.) has loaded.
Useful for initializing content or showing messages.

resize Event:
Triggered whenever the browser window is resized.
Captures the new dimensions of the window to adjust layouts or provide feedback.

scroll Event:
Triggered when the user scrolls the page.
Displays the current scroll position to provide feedback or trigger animations.

unload/beforeunload Event:
Triggered when the user is about to leave the page.
Typically used to warn users or save data before the page unloads.


How It Works
The load event displays a message when the page is fully loaded.
The resize event shows the new window dimensions whenever the browser is resized.
The scroll event updates the current scroll position dynamically as the user scrolls the page.
The beforeunload event logs a message in the console when the user attempts to navigate away from the page. 
Some browsers may show a confirmation dialog.
*/