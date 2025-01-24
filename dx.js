// Function to Generate a Random Integer

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInteger(1, 10)); // Output: Random number between 1 and 10
