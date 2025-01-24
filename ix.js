const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async () => {
    console.log("getting data ......");
    let response = await fetch(URL);
    console.log(response);
    console.log(response.status);
    let data = await response.json();
    factPara.innerText = data[2].text;
}

btn.addEventListener("click", getFacts);

/*
Code Breakdown:

const URL = "https://cat-fact.herokuapp.com/facts";
Defines a constant URL that points to the cat facts API.

const factPara = document.querySelector("#fact");
Selects the HTML element with the id="fact" and assigns it to the factPara variable. 
This element will be used to display a cat fact.

const btn = document.querySelector("#btn");
Selects the HTML element with the id="btn" and assigns it to the btn variable. 
This element will be used as the button that triggers fetching a new cat fact.
const getFacts = async () => { ... }

console.log("getting data ......");
Logs the message "getting data ......" to the console when the getFacts function is called.

let response = await fetch(URL);
Sends an HTTP GET request to the specified URL using the fetch API.
The await ensures that the function pauses until the request completes, and the response is assigned to the response variable.

console.log(response);
Logs the Response object, which contains details about the HTTP response, such as status and headers.

console.log(response.status);
Logs the HTTP status code of the response, where 200 indicates success.

let data = await response.json();
The response.json() method parses the response body as JSON.
The await ensures the function waits until the JSON parsing completes, and the parsed data is stored in the data variable.

factPara.innerText = data[2].text;
Sets the text content of the HTML element with the id="fact" to the text property of the third cat fact (using data[2].text).

btn.addEventListener("click", getFacts);
Adds an event listener to the button (#btn). When the button is clicked, the getFacts function is called.
*/