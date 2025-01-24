/*
In JavaScript, variable names (also called identifiers) must follow specific rules:

Start with a Letter, Underscore (_), or Dollar Sign ($): Variable names must begin with a letter (A-Z or a-z), an underscore (_), 
or a dollar sign ($). Numbers are allowed but cannot be the first character

Case-Sensitive: JavaScript is case-sensitive, so myVar and myvar are considered different variables.

No Reserved Keywords: You cannot use JavaScript reserved keywords as variable names, like let, const, var, function, class, if, else, etc.

Meaningful Names: Although not a strict rule, it’s best practice to choose descriptive names that indicate the purpose of the variable.

Camel Case Convention: By convention, JavaScript uses camel case for variable names, 
where the first word is lowercase, and each subsequent word begins with an uppercase letter.
*/

let _name = "Alice";
let $price = 25;
let count1 = 10;

// Invalid variable names:
/*
let let = 5; // Error
let function = "test";  // Error
*/

let userName = "Alice";   // Clear and meaningful
let x = "Alice";          // Less clear

let firstName = "Alice";
let totalAmount = 50;

// Invalid variable names:
/*
let 1stUser;       // Cannot start with a number
let user-name;     // Hyphens are not allowed
let var;           // Reserved keyword
*/


/*
JavaScript has a set of reserved words that you cannot use as identifiers such as variable names, function names, 
or any other name that you define in your code because they are used by the language itself. Here’s a list of reserved keywords in JavaScript:

JavaScript Reserved Keywords:-

Control Flow:-
break    case    catch    continue    default    do    else    finally    for    if    return    switch    throw    try    while    with

Variable Declarations:-
const    let    var

Functions and Classes:-
class    function    extends    super    this    new

Primitive Types and Values:-
null    true    false

Other Keywords:-
delete    export    import    in    instanceof    typeof    void    yield

Future Reserved Keywords:-
These words are reserved for future use and shouldn’t be used as identifiers, as they may have special meanings in upcoming versions:
enum    await (when used in async functions)

Strict Mode Reserved Keywords:-
When in strict mode, JavaScript reserves additional keywords:
implements    interface    package    private    protected    public    static

Global Object Names:-
Some global objects, methods, and properties are also reserved and should not be redefined. 
Examples include undefined, NaN, Infinity, eval, arguments, Math, Date, Object, Array, String, Number, etc.
*/


/*
Here’s an overview of different naming conventions used in programming:

In camel case, each word (after the first) starts with a capital letter, with no spaces or underscores between them. 
It’s commonly used for variables and functions in languages like JavaScript, Java, and Python.
Example in JavaScript:
let userName = "John";
function getUserInfo() {}

In snake case, all words are written in lowercase and separated by underscores (_). It’s often used in Python and for naming constants.
Example in python:
user_name = "John"
def get_user_info():
    pass

In kebab case, words are lowercase and separated by hyphens (-). 
It’s mainly used in URLs and CSS class names, as hyphens are often restricted in many programming languages.
Example in css:
.user-name {
    color: blue;
}

In Pascal case, each word begins with an uppercase letter, with no separators in between. 
It’s typically used for class names in languages like Java, C#, and JavaScript.
Example in Javascript:
class UserName {}
*/