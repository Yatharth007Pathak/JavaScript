/*
The constructor() in JavaScript
In JS, the constructor() is a special method within a class that is automatically invoked when an instance of the class is created. 
It is used to initialize the object and assign values to the object's properties. 
The constructor() is fundamental to class-based object creation.

Key Points about constructor():
Special Method: The constructor() is a special method in classes.
Initialization: It is typically used to initialize properties of the object when the class is instantiated.
Automatic Invocation: The constructor() method is called automatically when you create an object using the new keyword.
Only One Constructor: A class can only have one constructor() method.

Using constructor() to Initialize Properties
When a new object is created from the class, the constructor() method runs and initializes the properties for that specific instance.


How constructor() Works:

When the new Keyword is Used:
A new empty object is created.
The constructor() method is invoked with the arguments passed to new ClassName().
The properties are initialized with this inside the constructor().
The newly created object is returned.

Default Constructor:
If you don't define a constructor(), JavaScript provides a default empty constructor.
This default constructor doesn't initialize any properties, 
so you'll need to manually define the constructor() if you want to initialize properties.

Constructor in Inheritance
In the case of inheritance, the child class’s constructor() can call the parent class’s constructor() using the super() function.
super(): This calls the parent class's constructor() method, 
ensuring that the parent class is properly initialized when the child class is instantiated.

Constructor with Default Parameters
You can also use default values for constructor parameters. 
This can be useful if certain properties might not be passed when creating an instance.

Constructor with this Keyword
Inside the constructor(), you use the this keyword to refer to the instance of the object being created. 
This allows you to set properties and methods for that specific instance.


Summary of constructor():
The constructor() method is used to initialize an object's properties when an instance of a class is created.
It is automatically called when you use the new keyword to create an instance of the class.
In inheritance, the super() method calls the parent class's constructor to initialize the inherited properties.
You can set default parameter values in the constructor().
this refers to the current instance inside the constructor.
*/