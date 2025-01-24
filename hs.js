class ToyotaCar{
    constructor(brand, mileage) {
        console.log("creating new object");
        this.brand = brand;
        this.mileage = mileage;
    }
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
}

let fortuner = new ToyotaCar("fortuner", 10);  // constructor
console.log(fortuner);
let lexus = new ToyotaCar("lexus", 12);
console.log(lexus);

// Type ToyotaCar, fortuner, lexus, fortuner.brand, lexus.mileage in console

/*
Code Breakdown
Class ToyotaCar:
A class is created with:
constructor(brand, mileage): This is a special method called when a new object is created. 
It initializes the object's brand and mileage properties.
Logs "creating new object" to the console when a new instance is created.

Methods:
start(): Logs "start" to the console when called.
stop(): Logs "stop" to the console when called.

Creating Instances:
let fortuner = new ToyotaCar("fortuner", 10);
Creates a new ToyotaCar object with brand = "fortuner" and mileage = 10.
Logs "creating new object" during object creation.

The object fortuner now has properties:
brand: "fortuner"
mileage: 10

let lexus = new ToyotaCar("lexus", 12);
Similarly creates a new ToyotaCar object with brand = "lexus" and mileage = 12.

console.log(fortuner);:
Displays the fortuner object in the console. Expected output:
ToyotaCar {brand: "fortuner", mileage: 10}

console.log(lexus);:
Displays the lexus object. Expected output:
ToyotaCar {brand: "lexus", mileage: 12}
*/