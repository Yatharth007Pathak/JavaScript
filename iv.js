const URL = "https://cat-fact.herokuapp.com/facts";

const getFacts = async () => {
    console.log("getting data ......");
    let response = await fetch(URL);
    console.log(response);
    console.log(response.status);
    let data = await response.json();
    console.log(data[0].text);
}

// Type getFacts() in console

/*
Code Breakdown:

const URL = "https://cat-fact.herokuapp.com/facts";
Defines a constant URL containing the endpoint for fetching cat facts from a public API.
const getFacts = async () => { ... }

console.log("getting data ......");
Logs "getting data ......" immediately when the getFacts function is called.

let response = await fetch(URL);
Uses the fetch API to make an HTTP GET request to the specified URL.
The await keyword ensures that the function waits until the request completes, and assigns the Response object to the response variable.

console.log(response);
Logs the Response object, which contains information about the HTTP response such as status, headers, and other metadata.

console.log(response.status);
Logs the HTTP status code of the response. A 200 status code indicates success.

let data = await response.json();
The await keyword is used again to wait for the response.json() method to parse the JSON response body into a JavaScript object.
The parsed object is assigned to the data variable.

console.log(data[0].text);
Logs the text field of the first cat fact in the data array. This assumes that the response contains an array of facts, and each fact has a text field.


When You Type getFacts() in the Console:
The getFacts function is called.
The "getting data ......" message is logged immediately.
The fetch request is sent to the URL, and the function pauses until the request completes.
Once the response is received: 
The Response object is logged. 
The status code of the response is logged (likely 200 if successful).
The response body is parsed into JSON, and the first cat fact’s text is logged.
*/