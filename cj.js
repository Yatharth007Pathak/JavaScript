// In JavaScript, you can convert an array to a string using several methods depending on how you want the string to be formatted.


// Using toString(): The toString() method converts an array to a comma-separated string.
let arra = [1, 2, 3, 4];
let stri = arra.toString();
console.log(stri); // Output: "1,2,3,4"


// Using join(separator): The join() method converts an array to a string, allowing you to specify a custom separator.
let arr = ["apple", "banana", "cherry"];
// Default separator (comma)
let str1 = arr.join();
console.log(str1); // Output: "apple,banana,cherry"
// Custom separator (hyphen)
let str2 = arr.join("-");
console.log(str2); // Output: "apple-banana-cherry"
// Custom separator (space)
let str3 = arr.join(" ");
console.log(str3); // Output: "apple banana cherry"


// Using Template Literals: If you need more control over the formatting, you can use map() combined with template literals.
let array = [1, 2, 3];
let string = `${array}`; // Implicitly calls `toString()`
console.log(string); // Output: "1,2,3"


// Using reduce(): You can manually concatenate the elements of the array into a string using the reduce() method.
let arr_ = ["a", "b", "c"];
let str_ = arr_.reduce((acc, curr) => acc + curr, "");
console.log(str_); // Output: "abc"

/*
When to Use Each Method
Use toString() or join() for simple conversions.
Use join() with a custom separator if the output needs a specific format (e.g., space, hyphen).
Use reduce() or template literals for advanced use cases that require additional transformations or formatting.
*/