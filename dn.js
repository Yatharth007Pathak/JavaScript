// Palindrome Check of a number

function isPalindrome(str) {
    let reversedStr = ""; // Initialize an empty string to store the reversed version of `str`
    for (let i = str.length - 1; i >= 0; i--) { // Loop from the last character to the first
        reversedStr += str[i]; // Add each character to `reversedStr`
    }
    return str === reversedStr; // Compare the original string with the reversed string
}

function isNumberPalindrome(num) {
    let str = num.toString(); // Convert the number to a string
    return isPalindrome(str); // Use the `isPalindrome` function to check if the string representation is a palindrome
}

console.log(isNumberPalindrome(121));  // true
console.log(isNumberPalindrome(123));  // false

/*
Here's a line-by-line breakdown of the code:

function isPalindrome(str) {
Defines a function named isPalindrome that takes a single parameter, str, which is expected to be a string.

let reversedStr = "";
Initializes an empty string variable reversedStr to store the reversed version of str.

for (let i = str.length - 1; i >= 0; i--) {
Begins a for loop. It starts with the index i set to the last character of the string (str.length - 1) and decrements i until it reaches 0.

reversedStr += str[i];
Inside the loop, appends the character at index i of str to reversedStr, effectively building the reversed string one character at a time.

}
Ends the for loop.

return str === reversedStr;
Compares the original string str with the reversed string reversedStr. 
If they are the same, the function returns true (indicating str is a palindrome); otherwise, it returns false.

}
Ends the isPalindrome function definition.

function isNumberPalindrome(num) {
Defines a function named isNumberPalindrome that takes a single parameter, num, which is expected to be a number.

let str = num.toString();
Converts the number num to a string using the toString method and assigns it to the variable str.

return isPalindrome(str);
Calls the previously defined isPalindrome function, passing the string representation of the number (str) as an argument, 
and returns the result.

}
Ends the isNumberPalindrome function definition.

console.log(isNumberPalindrome(121));
Calls the isNumberPalindrome function with the number 121 and logs the result (true) to the console because 121 is a palindrome.

console.log(isNumberPalindrome(123));
Calls the isNumberPalindrome function with the number 123 and logs the result (false) to the console because 123 is not a palindrome.
*/