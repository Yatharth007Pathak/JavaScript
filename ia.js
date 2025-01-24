class Person {
    constructor() {
        console.log("enter parent constructor");
        this.species = "homo sapiens"
    }
    eat() {
        console.log("eat");
    }
}

class Engineer extends Person {
    constructor(branch) {
        console.log("enter child constructor");
        super();
        this.branch = branch;
        console.log("exit child constructor");
    }
    work() {
        console.log("Solve problems, build something");
    }
}

let yatharth = new Engineer("Artificial Intelligence");

/*
Explanation of the Code:

1. Parent Class (Person):
The Person class has:
A constructor() that initializes the species property with the value "homo sapiens".
A method eat() that logs "eat" to the console.

2. Child Class (Engineer):
The Engineer class extends the Person class:
It has a constructor(branch) that calls the super() method to invoke the parent class (Person) constructor 
and initialize the properties from the parent class.
After the super() call, it initializes its own property branch with the passed value ("Artificial Intelligence").
It has a work() method that logs "Solve problems, build something".

3. Creating an Instance of Engineer:
When an instance of the Engineer class is created (let yatharth = new Engineer("Artificial Intelligence");), 
the flow of the code is as follows:
The Engineer constructor is called.
Inside the Engineer constructor, it logs "enter child constructor".
The super() method is invoked, which calls the parent class Person constructor.
The parent class constructor logs "enter parent constructor", initializes the species property with "homo sapiens", 
and then returns control back to the Engineer constructor.
The branch property of the Engineer instance is set to "Artificial Intelligence".
Finally, the Engineer constructor logs "exit child constructor".


Flow of Execution:

Parent Constructor (Person):
Logs "enter parent constructor".
Initializes species as "homo sapiens".

Child Constructor (Engineer):
Logs "enter child constructor".
Calls super() to invoke the parent constructor.
Initializes branch as "Artificial Intelligence".
Logs "exit child constructor".
*/