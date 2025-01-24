/*
The Fetch API is a modern, powerful, and flexible interface in JavaScript used to make HTTP requests to servers, 
fetch resources such as data or files, and handle responses. 
It is a replacement for the older XMLHttpRequest (XHR) and provides a more straightforward and readable way to work with network requests.

Key Features of Fetch API:
Promise-Based: Fetch returns a Promise, making it easier to handle asynchronous operations 
and cleaner to work with using .then() and .catch().
JSON Support: Fetch can easily parse JSON responses using the .json() method.
Supports HTTP Methods: Works with GET, POST, PUT, DELETE, and other HTTP methods.
Streamlined Error Handling: Errors can be handled using .catch(), 
but note that HTTP errors like 404 or 500 don’t automatically throw an error—they must be manually checked in the response object.

Syntax of Fetch API: fetch(url, options)
url: The URL of the resource to fetch.
options: An optional object that can include settings like the HTTP method, headers, body, etc.


Key Points to Note:

Response Object:
Fetch does not reject the promise on HTTP errors (e.g., 404 or 500). 
You must manually check the response.ok property or the status code (response.status).
Common response properties:
response.ok: Boolean indicating if the response was successful (status 200-299).
response.status: HTTP status code (e.g., 200, 404).
response.json(): Parses the body as JSON.
response.text(): Reads the response body as plain text.

CORS (Cross-Origin Resource Sharing):
When fetching resources from a different domain, ensure the server supports CORS. Otherwise, the browser will block the request.

Handling Large Data:
For large responses, you can work with streams for efficient handling.


Advantages of Fetch API:
Simpler and more modern than XMLHttpRequest.
Supports async/await for cleaner asynchronous code.
Works seamlessly with Promises for better error handling and chaining.
*/