/*
Inheritance in JavaScript
Inheritance in JavaScript allows one class (or object) to acquire the properties and methods of another class (or object). 
It is a fundamental concept in object-oriented programming that promotes code reuse and organization.

Types of Inheritance in JavaScript
Class Inheritance: Introduced in ES6, classes can inherit from other classes using the extends keyword.
Prototypal Inheritance: In JavaScript, objects inherit directly from other objects using prototypes.

Class Inheritance
Key Concepts
extends Keyword:
Used to create a child class (subclass) from a parent class (superclass).
The subclass inherits all properties and methods from the superclass.

super() Function:
Used in the constructor of the subclass to call the parent class's constructor.
It must be called before using this in the subclass's constructor.

Prototypal Inheritance
JavaScript is a prototype-based language, and objects can inherit from other objects directly using prototypes.


If child and parent have same method, child's method will be used (Method Overriding)

You can check if an object is an instance of a particular class (or a class that it inherits from) using the instanceof operator.

Multiple Inheritance: JavaScript does not support multiple inheritance directly. However, you can achieve similar behavior using mixins.

Summary of Inheritance in JavaScript
Class Inheritance: Allows structured inheritance between classes using extends and super().
Prototypal Inheritance: Enables direct inheritance between objects via prototypes.
Method Overriding: Subclasses can redefine methods from parent classes.
Mixins: Provide an alternative to multiple inheritance by combining multiple objects.
Inheritance is a powerful feature of JavaScript, allowing developers to build reusable and maintainable code structures.
*/