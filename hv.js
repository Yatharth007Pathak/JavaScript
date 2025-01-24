class Person {
    eat() {
        console.log("eat");
    }

    sleep() {
        console.log("sleep");
    }
}

class Engineer extends Person {
    work() {
        console.log("Solve problems, build something");
    }
}

let yatharth = new Engineer();

// Type yatharth, yatharth.work(), yatharth.eat(), yatharth.sleep() in console

/*
Code Breakdown:

1. Class Person:
This is a base class that defines two methods:
eat(): Logs "eat" to the console.
sleep(): Logs "sleep" to the console.

2. Class Engineer:
This class extends the Person class using the extends keyword.
It inherits all methods of Person, i.e., eat() and sleep().
Additionally, it defines its own method:
work(): Logs "Solve problems, build something" to the console.

3. Creating an Instance:
let yatharth = new Engineer();:
Creates an instance of the Engineer class named yatharth.
Since Engineer extends Person, the yatharth object has access to methods from both Person and Engineer.

Console Outputs:

When yatharth is typed: Engineer {}
When yatharth.work() is called: "Solve problems, build something"
When yatharth.eat() is called: "eat"
When yatharth.sleep() is called: "sleep"

Observations:
The yatharth object demonstrates inheritance:
It inherits eat() and sleep() from the Person class.
It has its own method, work(), defined in the Engineer class.
This is an example of prototypal inheritance in JavaScript.
*/