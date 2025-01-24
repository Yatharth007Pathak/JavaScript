/*
AJAX (Asynchronous JavaScript and XML)
AJAX is a technique used in web development to make asynchronous requests to the server and update parts of a webpage without 
reloading the entire page. This enables a more dynamic and interactive user experience. 
While the name contains "XML", modern AJAX applications often use JSON instead of XML for data interchange.

AJAX allows for:
Asynchronous communication: The web page can send requests to the server and continue executing JavaScript 
without waiting for a response, resulting in a smoother user experience.
Partial page updates: Only parts of the webpage are updated, reducing the amount of data exchanged and improving performance.

How AJAX Works:
User Interaction: A user interacts with a web page (e.g., clicks a button).
AJAX Request: JavaScript sends an asynchronous request to the server.
Server Response: The server processes the request and sends back a response (typically in JSON or XML format).
Update the Web Page: JavaScript processes the server's response and updates the webpage content without refreshing the entire page.


JSON (JavaScript Object Notation)
JSON is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate. 
It is primarily used to send data between a server and a client (e.g., web browser) as a string.

JSON is language-independent but has a syntax that closely resembles JS object literals. It is widely used in APIs to transfer data.

JSON Structure:
Objects: Written in {} with key-value pairs (keys are strings, values can be strings, numbers, arrays, booleans, or other objects).
Arrays: Written in [] and can hold values of any type, including other arrays or objects.


json() Method (in the Context of Fetch API)
The json() method is used to parse the response body from a fetch request into a JavaScript object. 
It is specifically used when the server responds with JSON data. 
The json() method returns a Promise that resolves to the parsed JavaScript object.


Relationship Between AJAX, JSON, and json() Method:
AJAX allows JavaScript to asynchronously interact with the server and update the web page without reloading.
JSON is the format in which the server often sends data back to the client, especially in modern web applications.
The json() method is used to parse the JSON response from the server into a JavaScript object 
so that it can be manipulated within the application.


Summary:
AJAX is a technique for making asynchronous requests to the server and updating parts of a webpage dynamically.
JSON is a lightweight data format commonly used to exchange data between the client and server.
The json() method is used in JS (specifically with the fetch API) to parse a JSON-formatted response into a JS object, 
making it easy to work with the data.
*/