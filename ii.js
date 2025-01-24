function getData(dataID, getNextData) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("data", dataID);
        resolve("success");
        if(getNextData) {
            getNextData();
        }
    }, 9000);
});
}

// Type let promise = getData(123);, promise, promise (after 9s), getData() in console

/*
Code Explanation:

function getData(dataID, getNextData) {
This defines a function named getData, which accepts two arguments:
dataID: An identifier for the data being fetched.
getNextData: A callback function to trigger another operation after this one.

return new Promise((resolve, reject) => {
The function returns a new Promise. A Promise represents a value that may be available now, in the future, or never.
The constructor of the Promise accepts a callback function with two parameters:
resolve: A function to mark the promise as fulfilled.
reject: A function to mark the promise as rejected.

setTimeout(() => {
A setTimeout function is used to simulate an asynchronous operation. 
This delays execution of the inner code for 9000 milliseconds (9 seconds).

console.log("data", dataID);
After 9 seconds, it logs "data" followed by the value of dataID to the console.

resolve("success");
Once the data is "retrieved," the promise is fulfilled with the value "success". This indicates the operation completed successfully.

if(getNextData) {
Checks if the getNextData callback is provided.

getNextData();
If the getNextData function exists, it is invoked. This can be used to trigger the next operation.

}, 9000);
Ends the setTimeout function.

});
Ends the Promise definition.

}
Ends the getData function.
*/