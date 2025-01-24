/*
HTTP Response Status Codes
HTTP status codes are returned by the server to indicate the result of a request. 
They are divided into five categories based on the first digit of the code:

1xx (Informational):
These codes indicate that the server has received the request and is continuing to process it.
Example:
100 Continue: The server has received the request headers and the client should proceed with the request.

2xx (Successful):
These codes indicate that the request was successfully received, understood, and processed by the server.
Common 2xx codes:
200 OK: The request was successful, and the server has returned the requested data.
201 Created: The request was successful, and a new resource was created (usually for POST requests).
204 No Content: The request was successful, but there is no content to return (often used for DELETE requests).

3xx (Redirection):
These codes indicate that further action is needed to fulfill the request (e.g., redirecting the user to another URL).
Common 3xx codes:
301 Moved Permanently: The resource has been permanently moved to a new URL.
302 Found: The resource is temporarily located at a different URL.
304 Not Modified: The resource has not been modified since the last request.

4xx (Client Error):
These codes indicate that there was an error with the request sent by the client.
Common 4xx codes:
400 Bad Request: The server cannot process the request due to malformed syntax.
401 Unauthorized: The client must authenticate itself to get the requested response.
403 Forbidden: The server understands the request, but the client does not have permission to access the resource.
404 Not Found: The requested resource could not be found on the server.
405 Method Not Allowed: The HTTP method used is not allowed for the requested resource.

5xx (Server Error):
These codes indicate that the server has failed to fulfill a valid request.
Common 5xx codes:
500 Internal Server Error: A generic error message when the server encounters an unexpected condition.
502 Bad Gateway: The server received an invalid response from the upstream server it accessed in attempting to fulfill the request.
503 Service Unavailable: The server is temporarily unable to handle the request, often due to overload or maintenance.
504 Gateway Timeout: The server did not receive a timely response from the upstream server.


HTTP Response Status Codes indicate the result of the request made to the server.
2xx codes indicate success.
4xx codes indicate client-side errors.
5xx codes indicate server-side errors.
*/