const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");

const getFacts = async () => {
    console.log("getting data ......");
    let response = await fetch(URL);
    console.log(response);
    console.log(response.status);
    let data = await response.json();
    factPara.innerText = data[1].text;
}


// Type getFacts() in console

/*
Code Breakdown:

const URL = "https://cat-fact.herokuapp.com/facts";
Defines a constant URL which contains the endpoint for fetching cat facts from a public API.

const factPara = document.querySelector("#fact");
Selects an HTML element with the id="fact" and assigns it to the factPara variable. This element will be used to display the cat fact.
const getFacts = async () => { ... }

console.log("getting data ......");
Logs "getting data ......" immediately when the function is called.

let response = await fetch(URL);
Sends an HTTP GET request to the specified URL using the fetch API.
The await keyword ensures that the function pauses until the request completes, and Response object is assigned to variable response.

console.log(response);
Logs the Response object, which contains information about the HTTP response (e.g., status, headers, etc.).

console.log(response.status);
Logs the HTTP status code of the response. A status code of 200 indicates success.

let data = await response.json();
The response.json() method parses the JSON response body into a JavaScript object.
The await ensures that the function waits until the parsing completes, and the parsed data is assigned to the variable data.

factPara.innerText = data[1].text;
Updates the text content of the HTML element selected by #fact (stored in factPara).
It sets the inner text to text field of the second cat fact (using data[1].text), assuming the API response returns an array of facts.


When You Type getFacts() in the Console:
The getFacts function is called.
The "getting data ......" message is logged immediately.
The fetch request is sent to the API, and the function pauses until the request completes.
Once the response is received:
The Response object is logged.
The HTTP status code (e.g., 200 for success) is logged.
The response body is parsed into JSON.
The second cat fact’s text field is inserted into the HTML element with the ID #fact.
*/