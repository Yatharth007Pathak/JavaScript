/*
HTTP Verbs (Methods) (HTTP stands for hyper text transfer protocol)
In the context of web development, HTTP verbs (or methods) are used to define the actions to be performed on a specific resource on the server. These verbs represent the desired action to be taken, such as retrieving data, sending data, updating data, or deleting data.

The most commonly used HTTP verbs are:

GET:
Purpose: Retrieve data from the server (e.g., a webpage or data).
Idempotent: This means that making multiple identical requests will have the same effect as making a single request.
Example: Fetching a list of users from an API.
Use Case: Fetching information without modifying the server data.
Example: GET /users

POST:
Purpose: Send data to the server to create or update a resource.
Non-idempotent: Sending the same request multiple times may create multiple resources (e.g., submitting a form or creating a new user).
Example: Submitting a registration form.
Use Case: Creating or submitting data that will change the server state.
Example: POST /users

PUT:
Purpose: Update an existing resource on the server or create it if it does not exist (idempotent).
Idempotent: Making the same request multiple times will have the same effect.
Example: Updating a user’s information.
Use Case: Replacing a resource or updating it completely with new data.
Example: PUT /users/1

PATCH:
Purpose: Partially update an existing resource. Unlike PUT, it only modifies the specified fields.
Non-idempotent: It is not guaranteed to always result in the same response.
Example: Updating the email address of a user.
Use Case: Making partial updates to an existing resource.
Example: PATCH /users/1

DELETE:
Purpose: Remove a resource from the server.
Idempotent: Deleting the same resource multiple times will not have additional effects (after the first deletion).
Example: Deleting a user from a database.
Use Case: Deleting a resource from the server.
Example: DELETE /users/1

HEAD:
Purpose: Retrieve the headers of a resource, but without the actual body content. It is similar to GET but without the response body.
Use Case: Checking metadata about a resource (e.g., size, type, etc.) without downloading it.
Example: HEAD /users

OPTIONS:
Purpose: Describe the communication options for the target resource, such as which HTTP methods are allowed.
Use Case: Discovering what methods are supported by the server for a particular resource.
Example: OPTIONS /users

TRACE:
Purpose: Echo the received request so that the client can see what changes (if any) were made by intermediate servers.
Use Case: Debugging or tracing the path of requests.
Example: TRACE /users

CONNECT:
Purpose: Establish a tunnel to the server, typically used for HTTPS connections.
Use Case: Establishing a secure connection to a remote server.
Example: CONNECT example.com:443


HTTP Verbs (GET, POST, PUT, etc.) specify what action should be performed on a resource.
*/