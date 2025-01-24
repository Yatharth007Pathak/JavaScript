/*
Callback Hell: Nested callbacks stacked below one another forming a pyramid structure (Pyramid of Doom)
This style of programming becomes difficult to understand and manage.
*/

function getData(dataID, getNextData) {
    setTimeout(() => {
        console.log("data", dataID);
        if(getNextData) {
            getNextData();
        }
    }, 3000);
}

getData(1, () => {
    console.log("getting data 2 ....")
    getData(2, () => {
    console.log("getting data 3 ....")
        getData(3, () => {
    console.log("getting data 4 ....")
            getData(4);
        });
    });
});

/*
Here’s a breakdown of the JavaScript code you provided:

function getData(dataID, getNextData) {
This defines a function getData that takes two parameters: dataID (an identifier for the data) 
and getNextData (a callback function that will be executed after the data is logged).

setTimeout(() => {
Inside getData, there is a setTimeout function that delays execution of the following code by 3000 milliseconds (3 seconds).

console.log("data", dataID);
After 3 seconds, it logs the string "data" followed by the value of dataID to the console.

if(getNextData) {
It checks if a getNextData function was provided.

getNextData();
If getNextData exists, it calls the getNextData function, which can trigger the next getData call.

}, 3000);
This closes the setTimeout function, which waits for 3 seconds before executing the provided code.

}
This closes the getData function.

getData(1, () => {
The getData function is called with 1 as dataID and an anonymous function as getNextData. 
This callback function will be executed once the first data is logged.

console.log("getting data 2 ....")
Inside the callback, it logs the message "getting data 2 ...." to the console.

getData(2, () => {
It then calls getData with 2 as the new dataID and another callback function for the next set of data.

console.log("getting data 3 ....")
Inside this callback, it logs "getting data 3 ....".

getData(3, () => {
The same process repeats for dataID 3.

console.log("getting data 4 ....")
Logs "getting data 4 ...." for dataID 3.

getData(4);
Finally, it calls getData(4) to log "data 4" without any further callback.

Execution Flow:
It starts by calling getData(1). After 3 seconds, it logs "data 1" and calls the callback to log 
"getting data 2 ...." and trigger the next data fetch.
The second call fetches data 2, logs "data 2", calls the next callback to log "getting data 3 ....", and triggers the next data fetch.
This continues until data 4 is fetched and logged without any additional callback.
*/