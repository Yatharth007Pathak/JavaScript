// Parent class
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

// Child class
class Dog extends Animal {
    constructor(name, breed) {
        super(name);  // Calls the parent class's constructor
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name}, the ${this.breed}, barks.`);
    }
}

const dog = new Dog('Buddy', 'Golden Retriever');
dog.speak();  // Output: Buddy, the Golden Retriever, barks.

// Type Animal, Dog, dog.speak() in console

/*
Code Breakdown:

1. Parent Class: Animal
The Animal class serves as the base class with:
A constructor that takes a name parameter and assigns it to the instance property this.name.
A method speak() that logs a generic message: "name makes a sound.".

2. Child Class: Dog
The Dog class extends Animal using the extends keyword.
constructor(name, breed):
Calls the Animal constructor using super(name), passing the name parameter to initialize the parent class.
Adds an additional property, this.breed, specific to the Dog class.
Overrides the speak() method:
Logs a specific message for a dog, including its name and breed.

3. Creating an Instance: Dog
const dog = new Dog('Buddy', 'Golden Retriever');:
Creates a new instance of the Dog class with the name "Buddy" and breed "Golden Retriever".
The super() call initializes the name property in the parent class.
*/