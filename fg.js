/*
Placing the <script> tag inside the <body> tag rather than in the <head> of an HTML document 
is generally considered a good practice for several reasons:

1. Improves Page Load Performance
When <script> is in the <head>: Scripts are loaded and executed before the browser can render any content on the page, 
which may cause delays in displaying the page to the user.
When <script> is at the end of <body>: The browser loads and renders the HTML content first. 
Once the content is visible, the script is executed, ensuring the user sees the page content sooner.

2. Avoids Blocking Rendering
JavaScript is a blocking resource, meaning the browser halts rendering the page until the script is fully downloaded and executed. 
By placing the <script> tag at the end of the <body>, you ensure that the page content is fully rendered before the script runs.

3. Ensures DOM Availability
Scripts often interact with the Document Object Model (DOM). If the script runs before the DOM is fully constructed 
(common when scripts are in the <head>), it might lead to errors. Placing scripts at the bottom ensures the DOM is fully loaded and ready.

4. Better User Experience
Loading and displaying content quickly improves user experience, reducing the perception of a slow or unresponsive page.

5. Recommended for Modern Development
Many modern JS frameworks and libraries assume scripts are placed at the bottom of the <body> to maximize efficiency and performance.

When Can You Place <script> in <head>?
If you need to include scripts in the <head>, use the async or defer attributes:
async: Loads the script asynchronously while the HTML is being parsed. Execution is not in order.
defer: Defers script execution until after the HTML document is fully parsed. Execution is in order.
*/