const employee = {
    calcTax() {
        console.log("Tax rate is 10%");
    },
};

const KaranArjun = {
    salary: 50000,
};

KaranArjun.__proto__ = employee;

// Type KaraqnArjun in console

/*
In this code, you are demonstrating the concept of prototypal inheritance in JavaScript. Here's a breakdown of what's happening:

employee Object:
It has a method calcTax() that logs the tax rate (Tax rate is 10%).

KaranArjun Object:
This object has a property salary set to 50000.

Prototypal Inheritance:
KaranArjun.__proto__ = employee; establishes employee as the prototype of the KaranArjun object.
This means that KaranArjun inherits methods and properties from employee.

When You Type KaranArjun in the Console:
The browser's JavaScript engine will display the contents of the KaranArjun object, 
and it will also show the inherited properties and methods from the employee object.

If you type KaranArjun.calcTax() in the console, it will call the calcTax method from the employee prototype, 
and you will get the following output: Tax rate is 10%

Explanation:

Prototypal Inheritance:
In JavaScript, objects can inherit properties and methods from other objects via their prototype (__proto__).
KaranArjun has salary as its own property, but it inherits the calcTax() method from employee because employee is set as its prototype.

__proto__:
__proto__ is an internal property used to set the prototype of an object. 
It allows the object to inherit methods and properties from another object.
*/