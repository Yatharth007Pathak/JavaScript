const student = {
    fullName: "Yatharth Pathak",
    marks: 95,
    printMarks: function() {
        console.log("marks =", this.marks);
    },
};

// On console, type student, student.fullName, student.marks, student.printMarks()

/*
Breakdown of the student Object:

Object Structure:
The student object is an instance representing a student, containing properties and a method related to that student.

fullName: "Yatharth Pathak"
This property stores the full name of the student.

marks: 95
This property holds the marks obtained by the student, which in this case is 95.

printMarks: function() { ... }
This is a method defined within the student object.
The method, when called, logs the student's marks to the console using console.log("marks =", this.marks).
this.marks refers to the marks property of the student object. The this keyword refers to the current object (student).


Breakdown of the student Object:
Object Structure:
The student object is an instance representing a student, containing properties and a method related to that student.

fullName: "Yatharth Pathak"

This property stores the full name of the student.
marks: 95

This property holds the marks obtained by the student, which in this case is 95.
printMarks: function() { ... }

Explanation of the Method:
printMarks: function() { ... }
This method does not require any parameters.
When it is called, it logs the marks of the student using this.marks.
this refers to the student object, so it accesses the marks property of the student object.

Key Concepts:
Object: The student is an object containing properties (fullName and marks) and a method (printMarks).
this Keyword: Inside the printMarks method, this refers to the student object, enabling access to its properties.
*/