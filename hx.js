const animal = {
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
};

const dog = Object.create(animal);
dog.name = 'Buddy';
dog.speak();  // Output: Buddy makes a sound.

/*
Explanation of the Code:

1. Object animal:
The animal object is created with a single method speak():
It logs a message: "name makes a sound.", where this.name will refer to the name property of any object that inherits from animal.

2. Object dog:
dog is created using Object.create(animal), which sets animal as the prototype of dog:
This means dog inherits the speak() method from animal.
A new property, name, is added to the dog object with the value 'Buddy'.

3. Calling dog.speak():
When dog.speak() is called:
The speak() method is found in the prototype chain (inherited from animal).
Inside speak(), this.name resolves to the name property of the dog object, which is 'Buddy'.
*/