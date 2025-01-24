// innerText vs textContent


console.log(document.getElementById("example").innerText); 
// Output: " "

console.log(document.getElementById("example").textContent); 
// Output: "Hidden heading"

/*
Breakdown of the Code:

innerText:
document.getElementById("example").innerText gets the visible text content of the element with ID "example", 
but it also considers styling and layout. If the text is hidden due to CSS 
(e.g., display: none or visibility: hidden), innerText will return an empty string.
In this case, it returns an empty string (" "), meaning that the text content may not be visible or is hidden due to styling.

textContent:
document.getElementById("example").textContent gets the text content inside the element, 
including hidden content (even if it is not visible due to CSS).
It returns "Hidden heading", which means that textContent will retrieve the text regardless 
of whether it's visible or not, including if it's hidden by CSS rules.


Key Differences:
innerText: Reflects the visible content and can be affected by CSS styles like display or visibility.
textContent: Retrieves the raw text content, including hidden content, unaffected by CSS visibility.
*/