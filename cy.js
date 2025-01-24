/*
Create a function using the "function" keyword that takes a string as an argument and returns the characters present in string
and the number of vowels in the string. Create an arrow function to perform the same task
*/

function countvowels(str) {
    let count = 0;
    for (const char of str) {
        console.log(char);
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    console.log(count);
}

countvowels("yatharth pathak");

/*
Here's a breakdown of each line of code:

function countvowels(str) {
Defines a function named countvowels that takes a string str as an argument.

let count = 0;
Initializes a variable count to 0. This will be used to keep track of the number of vowels in the string.

for (const char of str) {
Starts a for...of loop that iterates over each character (char) in the string str.

console.log(char);
Logs the current character to the console during each iteration.

if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
Checks if the current character is one of the vowels: "a", "e", "i", "o", or "u".

count++;
If the condition is true (the character is a vowel), it increments the count by 1.

}
Closes the if statement block.

}
Closes the for...of loop block.

console.log(count);
Logs the final count of vowels to the console.

}
Closes the function countvowels.

countvowels("yatharth pathak");
Calls the countvowels function with the string "yatharth pathak" as an argument. 
This triggers the function to count the vowels in the string.
*/


const countVow = (str) => {
    let count = 0;
    for (const char of str) {
        console.log(char);
        if(
            char === "a" || 
            char === "e" || 
            char === "i" || 
            char === "o" || 
            char === "u"
        ) {
            count++;
        }
    }
    return count;
}
console.log(countVow("Hare Krishna"));

/*
Here’s a breakdown of the provided code:

const countVow = (str) => {
Defines an arrow function countVow that takes a string str as an argument.

let count = 0;
Initializes a variable count to 0. This will be used to keep track of the number of vowels in the string.

for (const char of str) {
Starts a for...of loop that iterates over each character (char) in the string str.

console.log(char);
Logs the current character to the console during each iteration, useful for debugging.

if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
Checks if the current character is one of the vowels: "a", "e", "i", "o", or "u".

count++;
If the condition is true (the character is a vowel), increments the count by 1.

}
Closes the if statement block.

}
Closes the for...of loop block.

return count;
After the loop finishes, returns the total count of vowels found in the string.

}
Closes the function countVow.

console.log(countVow("Hare Krishna"));
Calls the countVow function with the string "Hare Krishna" as an argument, and logs the returned count of vowels to the console.
*/