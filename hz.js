const canEat = {
    eat() {
        console.log(`${this.name} is eating.`);
    }
};

const canWalk = {
    walk() {
        console.log(`${this.name} is walking.`);
    }
};

const dog = Object.assign({}, canEat, canWalk);
dog.name = 'Buddy';
dog.eat();  // Output: Buddy is eating.
dog.walk();  // Output: Buddy is walking.

/*
Explanation of the Code:

1. Defining Behavior Objects:
Two separate objects are created to encapsulate specific behaviors:
canEat: Contains a method eat() that logs a message indicating that the object is eating.
canWalk: Contains a method walk() that logs a message indicating that the object is walking.

2. Using Object.assign():
Object.assign() is used to copy the properties and methods from canEat and canWalk into a new object dog:
This effectively combines the behaviors defined in canEat and canWalk into a single object.
The resulting dog object inherits the methods eat() and walk().

3. Setting a Property:
The name property is added to the dog object and set to "Buddy".

4. Invoking Methods:
dog.eat():
Calls the eat() method from the canEat object.
Uses the name property of the dog object to display the message: "Buddy is eating."
dog.walk():
Calls the walk() method from the canWalk object.
Uses the name property of the dog object to display the message: "Buddy is walking."

Key Concepts:

Composition Over Inheritance: Instead of creating a class hierarchy, behavior is shared via object composition. 
Behaviors (canEat and canWalk) are modular and reusable.
Object.assign(): Combines properties and methods from multiple objects into a single object.
Dynamic Property Assignment: The name property is added dynamically to the dog object.
*/