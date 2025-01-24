// function checks whether a given string or number is a palindrome (reads the same forward and backward).

function isPalindrome(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return str === reversedStr;
}

console.log(isPalindrome("madam"));  // true
console.log(isPalindrome("hello"));  // false

/*
Here’s a detailed plain-text breakdown of the provided code:

function isPalindrome(str) {
Defines a function named isPalindrome that takes one parameter, str, which is expected to be a string.

let reversedStr = "";
Initializes an empty string variable reversedStr to store the reversed version of the input string str.

for (let i = str.length - 1; i >= 0; i--) {
Starts a for loop. It initializes i to the index of the last character in the string (str.length - 1) 
and decrements i with each iteration until it reaches 0.

reversedStr += str[i];
Within the loop, appends the character at index i of the input string str to the variable reversedStr. 
This builds the reversed version of the string one character at a time.

}
Ends the for loop.

return str === reversedStr;
Compares the original string str with the reversed string reversedStr. 
If they are equal, the function returns true (indicating the input is a palindrome); otherwise, it returns false.

}
Ends the function definition.

console.log(isPalindrome("madam"));
Calls the isPalindrome function with the string "madam" and logs the result to the console. 
Since "madam" reads the same backward and forward, the function returns true.

console.log(isPalindrome("hello"));
Calls the isPalindrome function with the string "hello" and logs the result to the console. 
Since "hello" does not read the same backward and forward, the function returns false.
*/