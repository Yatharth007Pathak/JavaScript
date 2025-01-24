class Parent {
    greet() {
        console.log('Hello from Parent');
    }
}

class Child extends Parent {
    greet() {
        console.log('Hello from Child');
    }
}

const child = new Child();
child.greet();  // Output: Hello from Child

/*
Explanation of the Code:

1. Parent Class:
The Parent class has a method greet():
It logs the message: "Hello from Parent" when called.

2. Child Class:
The Child class extends the Parent class:
This means Child inherits all methods of the Parent class.
However, the greet() method is overridden in the Child class:
It replaces the greet() implementation from the Parent class.
Now, when greet() is called on an instance of Child, the Child's implementation is executed.

3. Creating an Instance:
The instance child is created using the Child class.

4. Calling greet():
When child.greet() is invoked:
The overridden greet() method in the Child class is executed.
The message "Hello from Child" is displayed.

Key Concepts:
Inheritance: The Child class extends the Parent class, inheriting its properties and methods.
Method Overriding: The Child class overrides the greet() method of the Parent class to provide its specific implementation.
Polymorphism: The same method name (greet) behaves differently based on the context (object type).
*/