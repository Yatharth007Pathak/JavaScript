class Parent {
    hello() {
    console.log("hello")
    }
}

class Child extends Parent {}

let obj =  new Child();

// Type Parent, Child, obj, obj.hello() in console

/*
Code Explanation:

1. Class Parent:
The Parent class defines a single method:
hello(): Logs "hello" to the console when invoked.

2. Class Child:
The Child class uses the extends keyword to inherit from the Parent class.
This means Child inherits all the methods and properties of Parent.
Child doesn't define any additional methods or properties in this case, but it can still access hello() from the Parent class.

3. Creating an Instance of Child:
let obj = new Child();:
Creates an instance of the Child class.
Since Child inherits from Parent, obj can access the hello() method.
*/