/*
Prototype in JavaScript
In JavaScript, every object has a built-in property called prototype. 
It is an object itself and acts as a blueprint from which other objects can inherit properties and methods.
Prototypes are central to JavaScript's OOP model and allow you to add shared functionality to multiple objects without duplicating code.

A JavaScript object is an entity having state and behaviour (properties and methods).
JS  objects have a special property called prototype. We can set prototype using __proto__
If object and prototype have same method, object's method will be used.

Key Points about Prototypes:

Prototype Property (prototype):
It is present in all functions, enabling you to define properties and methods that other 
instances of objects created from the function can share.

Prototype Chain:
JavaScript uses a prototype chain for inheritance. When you access a property or method of an object, 
the engine looks for it in the object itself. If not found, it searches the object's prototype, and so on, up the chain.

__proto__ vs prototype:
__proto__: The actual prototype of an object (used at runtime for lookups).
prototype: A property of functions used to set up __proto__ for instances created with the function.

Advantages of Prototypes:
Memory Efficiency: Methods and properties defined on the prototype are shared across all instances.
Dynamic Extension: You can add methods or properties at runtime.
Inheritance: Enables you to create a chain of objects with shared functionality.

Prototypes in JavaScript are the foundation of inheritance and allow objects to share methods and properties efficiently. 
They enable dynamic and flexible object-oriented programming in JavaScript. 
Understanding prototypes and the prototype chain is essential for working with objects and classes in JavaScript.
*/