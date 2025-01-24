/*
You are creating a website for your college. Create a class User with two properties, name and email.
It also has a method called viewData() that allows user too view website data.

Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data
*/

let DATA = "secret information";

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("website data")
    }
}

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        DATA = "some new value";
    }
}

let student1 = new User("Yath", "yath@email.com");
let student2 = new User("Path", "path@email.com");

let teacher1 = new User("Dean", "dean@email.com");

let admin1 = new Admin("admin", "admin@email.com");


// Type student1, student2.viewData(), teacher.viewData(), admin1, DATA, admin1.editData then DATA in console

/*
Explanation of the Code:

1. The User Class:
The User class has a constructor that initializes the name and email properties.
It also has a method viewData() that logs "website data" to the console.

2. The Admin Class (inherits from User):
The Admin class extends the User class, meaning it inherits the name and email properties from User and also the viewData() method.
The Admin class adds an additional method editData(), which modifies the global DATA variable to "some new value".

3. Creating Instances:
Instances of User are created for student1, student2, and teacher1.
An instance of Admin is created for admin1.

4. Interacting with Instances:
student1, student2, and teacher1 can call the viewData() method, which logs "website data".
admin1 has access to the editData() method, which changes the DATA variable.
Finally, DATA is checked to see if it was changed by admin1.


Code Output in Console:

student1
// Output: User { name: "Yath", email: "yath@email.com" }

student2.viewData()
// Output: "website data"

teacher1.viewData()
// Output: "website data"

admin1
// Output: Admin { name: "admin", email: "admin@email.com" }

DATA
// Output: "secret information"

admin1.editData()

DATA
// Output: "some new value"
*/