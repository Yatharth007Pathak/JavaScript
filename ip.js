function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        }, 4000);
    });
}

async function getWeatherData() {
    await api();
    await api();
}

// Type getWeatherData() in console

/*
Code Breakdown:

function api()
Defines a function api that returns a Promise.

Inside the Promise:
A setTimeout is used to simulate a 4-second delay for asynchronous behavior.
After 4 seconds, "weather data" is logged to the console.
The promise is resolved with the value 200.

async function getWeatherData()
Defines an async function named getWeatherData.

Inside the function:
The first await api(); waits for the api function to complete its operation (takes 4 seconds).
After the first call to api() completes, the second await api(); begins, which also takes 4 seconds to complete.

When You Type getWeatherData() in the Console:
The getWeatherData function is called.
The async function returns a Promise immediately. This promise resolves when all the await calls inside the function are completed.

Execution Flow:

Immediately:
The function call getWeatherData() returns a pending Promise:
Promise {<pending>}
Execution enters the getWeatherData function.

After 4 seconds (first await api()):
The api function logs "weather data" to the console.
The first await resolves, and the second await api() starts.

After another 4 seconds (second await api()):
The api function logs "weather data" again.
The second await resolves, and the getWeatherData function completes.

Console Output:
Immediately: The console shows: Promise {<pending>}
After 4 seconds: "weather data" is logged.
After another 4 seconds: "weather data" is logged again.

Key Points:
Sequential Execution: Each await ensures that the second call to api does not start until the first one finishes.
The total time taken for getWeatherData() to resolve is 8 seconds (4 seconds for each api call).
*/