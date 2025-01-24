class ToyotaCar{
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
}

let fortuner = new ToyotaCar();
let lexus = new ToyotaCar();


// Type ToyotaCar, fortuner, typeof fortuner, fortuner.start();, lexus.stop(); in console

/*
In this code, you're defining a class ToyotaCar with two methods, start and stop. 
You're then creating two instances of the ToyotaCar class, fortuner and lexus.

Code Breakdown:

ToyotaCar Class:
The class defines two methods:
start(): Logs "start" to the console when called.
stop(): Logs "stop" to the console when called.

Creating Instances:
let fortuner = new ToyotaCar();: Creates a new instance of the ToyotaCar class named fortuner.
let lexus = new ToyotaCar();: Creates another new instance of the ToyotaCar class named lexus.

Expected Behavior: You can call the start() and stop() methods on both instances (fortuner and lexus) as follows:
fortuner.start();  // Output: "start"
fortuner.stop();   // Output: "stop"
lexus.start();     // Output: "start"
lexus.stop();      // Output: "stop"

Explanation:
Class Definition: The ToyotaCar class encapsulates the behavior common to all Toyota cars, 
which in this case are the start and stop functionalities.
Instances: fortuner and lexus are independent instances of the ToyotaCar class. They have access to the same methods 
(start() and stop()), but each instance is separate and can hold different data if more properties are added later.
Thus, both fortuner and lexus can start and stop because they are instances of the same class that contains these methods.
*/