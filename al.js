/*
JavaScript has several types of operators used to perform different operations on variables and values. 
These include Arithmetic, Assignment, Comparison, Logical, Bitwise, String, and Other operators.
*/


/*
Arithmetic Operators: Used for basic mathematical operations.
+	Addition	
-	Subtraction	
*	Multiplication  
/	Division
%	Modulus (remainder)
**	Exponentiation (ES6)
++	Increment
--	Decrement
*/
let a = 10;
let b = 3;
console.log(a + b); // Addition: 13
console.log(a - b); // Subtraction: 7
console.log(a * b); // Multiplication: 30
console.log(a / b); // Division: 3.333...
console.log(a % b); // Modulus: 1
console.log(a ** b); // Exponentiation: 1000
console.log("a++ =", a++); // a = 10
console.log(a)  // a =11
console.log("b-- =", b--); // b = 3
console.log(b); // b =2
console.log("++a =", ++a); // a = 12
console.log("--b =", --b); // b = 1


/*
Assignment Operators: Used to assign values to variables.
=	Assignment
+=	Addition assignment
-=	Subtraction assignment
*=	Multiplication assignment
/=	Division assignment
%=	Modulus assignment
**=	Exponentiation assignment
*/
let x = 10;
x += 5;  // Equivalent to x = x + 5
console.log(x); // 15
x -= 2;  // Equivalent to x = x - 2
console.log(x); // 13
x *= 3;  // Equivalent to x = x * 3
console.log(x); // 39
x /= 3;  // Equivalent to x = x / 3
console.log(x); // 13
x %= 5;  // Equivalent to x = x % 5
console.log(x); // 3


/*
Comparison Operators: Used to compare two values and return a boolean result (true or false).
==	Equal to	
===	Strict equal (type + value)	
!=	Not equal 
!==	Strict not equal
>	Greater than
<	Less than
>=	Greater than or equal to
<=	Less than or equal to
*/
let age = 20;
console.log(age == "20"); // true, as == does type coercion
console.log(age === "20"); // false, strict equality (no type coercion)
console.log(age != "25"); // true
console.log(age !== "20"); // true
console.log(age > 18); // true
console.log(age <= 20); // true


/*
Logical Operators: Used to combine or invert boolean values.
&&	Logical AND	
||  Logical OR
!	Logical NOT	
*/
let isAdult = true;
let hasPermission = false;
console.log(isAdult && hasPermission); // false, both must be true for AND
console.log(isAdult || hasPermission); // true, only one must be true for OR
console.log(!isAdult); // false, NOT operator negates the value


/*
Bitwise Operators: Operate on the binary representations of numbers.
&	AND	
|   OR
^	XOR	
~	NOT	
<<	Left shift	
>>	Right shift	
>>>	Zero-fill right shift
*/
let num1 = 5; // binary 0101
let num2 = 3; // binary 0011
console.log(num1 & num2); // AND: 1 (binary 0001)
console.log(num1 | num2); // OR: 7 (binary 0111)
console.log(num1 ^ num2); // XOR: 6 (binary 0110)
console.log(~num1);       // NOT: -6 (binary complement)
console.log(num1 << 1);   // Left Shift: 10 (binary 1010)
console.log(num1 >> 1);   // Right Shift: 2 (binary 0010)


/*
String Operators: Used for string concatenation.
+	Concatenate strings	
+=	Concatenate and assign
*/
let greeting = "Hello";
let name = "Alice";
let fullGreeting = greeting + " " + name; // Concatenation
console.log(fullGreeting); // "Hello Alice"
greeting += " World";
console.log(greeting); // "Hello World"


// Conditional (Ternary) Operator: A shorthand for if statements.
let age_ = 18;
let canVote = (age_ >= 18) ? "Yes" : "No";
console.log(canVote); // "Yes"


// Typeof Operator: Returns the type of a variable.
let text = "Hello";
let number = 100;
let isAvailable = true;
console.log(typeof text); // "string"
console.log(typeof number); // "number"
console.log(typeof isAvailable); // "boolean"


// Delete Operator: Removes a property from an object.
let user = {
    name: "Alice",
    age: 25
  };
delete user.age; // Removes the 'age' property
console.log(user); // { name: "Alice" }


// In Operator: Checks if a property exists in an object.
let person = { name: "Bob", age: 30 };
console.log("name" in person); // true
console.log("address" in person); // false


// Instanceof Operator: Checks if an object is an instance of a particular class.
let currentDate = new Date();
console.log(currentDate instanceof Date); // true
let text_ = "Hello World";
console.log(text_ instanceof String); // false, as literals are not instances