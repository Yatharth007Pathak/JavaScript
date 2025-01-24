const URL = "https://cat-fact.herokuapp.com/facts";


const getFacts = async () => {
    console.log("getting data ......");
    let response = await fetch(URL);
    console.log(response);
    console.log(response.status);
}

// Type getFacts() in console

/*
Code Breakdown:

const URL = "https://cat-fact.herokuapp.com/facts";
Defines a constant URL that holds the endpoint for fetching cat facts from a public API.

const getFacts = async () => { ... }
Defines an asynchronous arrow function named getFacts.

console.log("getting data ......");
Logs "getting data ......" to the console immediately when the function is called.

let response = await fetch(URL);
Uses the fetch API to send an HTTP GET request to the specified URL.
The await keyword pauses execution of the function until the request completes, and assigns the Response object to the variable response.

console.log(response);
Logs the Response object, which contains details about the HTTP response (e.g., headers, body, status, etc.).

console.log(response.status);
Logs the HTTP status code of the response. A value of 200 indicates success.


When You Type getFacts() in the Console:
The getFacts function is invoked.
The "getting data ......" message is logged immediately.
The fetch request is sent to the URL and the function waits for the response.
Once the response is received:
Logs the Response object.
Logs the HTTP status code (e.g., 200 if successful).


Console Output:
Immediately: getting data ......
After the fetch request completes: Logs the Response object (e.g., something like this in the console):
Response { type: "cors", url: "https://cat-fact.herokuapp.com/facts", redirected: false, status: 200, ok: true, ... }
Logs the HTTP status code: 200


Key Points:
fetch is asynchronous: The function waits for the response using await.
HTTP Status: The .status property on the Response object indicates whether the request succeeded (e.g., 200 for success).
*/