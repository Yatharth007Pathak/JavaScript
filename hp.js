/*
Classes in JavaScript
In JavaScript, classes are a way to define blueprints for creating objects with shared properties and methods. 
JavaScript introduced class syntax in ES6 (ECMAScript 2015), but it is still built on the prototype-based inheritance model. 
Classes provide a more structured and cleaner syntax for working with objects and inheritance.

Class is a program-code template for creating objects.
Those objects will have some state (variables) and some behaviour (functions) inside it.

Key Features of JavaScript Classes:
Class Declaration: Defines a blueprint for objects, including properties and methods.
Constructor Method: Special method that is called when an object is instantiated.
Methods: Functions that are part of the class, defined directly inside the class body.
Inheritance: The ability to create a new class based on an existing class using the extends keyword.

Constructor Method
The constructor() method is a special method for creating and initializing an object created within a class. 
It is called automatically when you create an instance of the class.

Class Inheritance
JavaScript classes support inheritance, allowing one class to extend another and inherit its properties and methods.
extends: The extends keyword is used to create a subclass (child class) that inherits from a parent class.
super(): The super() function calls the constructor of the parent class. 
It's used to initialize the parent class properties before using this in the child class.

Static Methods
Static methods are functions that are not called on instances of the class, but rather on the class itself. 
They are defined using the static keyword. Static methods cannot be called on instances of the class.

Getters and Setters
JavaScript classes support getters and setters to define methods that behave like properties.
Getter: Allows you to access the value of a private property like a regular property.
Setter: Allows you to set the value of a private property with validation.

Class Expressions
Just like functions, classes can also be defined using expressions.


Summary:
Classes in JavaScript provide a more structured way to work with objects and methods.
Constructors are used to initialize properties when an object is created.
Inheritance allows a class to inherit properties and methods from another class using extends and super().
Static methods can be called on the class itself.
Getters and setters provide controlled access to object properties.
Class expressions and shorthand method syntax provide flexibility and conciseness.
Classes make object-oriented programming in JavaScript easier and more readable, allowing developers to write more maintainable code.
*/