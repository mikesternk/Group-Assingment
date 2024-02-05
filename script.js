// console.log("Hello, World!")

// This is a comment

/* 

Create multiple lines of comments.
Using a block comment

Windows: Shift + Alt + A
Mac: Shift + Option + A

*/
// ======== DATA TYPES ========
// Number and floats
// console.log(5, 1000, 1.5, -9/8)

// Strings
// console.log("I love card tricks")
// console.log('This is also a string')

// Boolean
// console.log('This is true:', true)
// console.log('This is false:', false)

// Null
// console.log(null)

// Undefined
// console.log(undefined)

// Object

// ======== VARIABLE DECLARATION ========

// Declare variables
// let supply;
// let person;
// const age; // const variables must be initialized

// var firstName = "Michael";
// var lastName = "Kimani";
// const location = "Dallas";

// console.log(firstName)

//  DO NOT USE VAR!!

// THE LET STATEMENT
// let fruit = 'apple';
// console.log(fruit)

// we will get an error for trying to RE-DECLARE
// let fruit = 'banana' // SyntaxError: Identifier 'fruit' has already been declared

// Re-assigning value. Fruit will have a value of apple until it gets to line 52
// fruit = 'strawberry';
// console.log(fruit)

// Below is a block scoped
// {
//     const className = "2024-RTT-03";
//     console.log(className)
//     console.log(fruit)
// }

// console.log(className) // ReferenceError: className is not defined

// CONST
// const PI = 3.141592653589793;
// PI =  3.14; // TypeError: Assignment to constant variable.

// var counter = 4;
// Do soemthing with this counter

// Then, some many lines later...
// function processData() {
    // var counter = 2;
    // Do something with this other counter
// }

// Which counter are we referencing here?
// counter++;

// console.log(counter)

// LITERALS
// console.log(true);
// console.log("Hello World!");
// console.log(42);

// TypeOf
// let myVar = "Hello World!"

// console.log(typeof 42);
// console.log(typeof myVar);
// console.log(typeof("Grapes"));

// console.log(3+4);

// let newNumber = 9;
// newNumber = newNumber + 1;
// newNumber += 1;
// console.log(newNumber);

// data type coercion
// let newNumber = "Okay";
// newNumber += 1;
// console.log(newNumber)
// console.log(typeof newNumber)

// COMPARISON OPERATORS
// console.log(3 > 4);
// console.log(4 < 10);

// console.log(78 >= 90);
// console.log(78 >= 78);

// ! means NOT
// console.log(10 != 30);

// console.log(!true) // THIS WILL COME UP AGAIN

// let isEqual = 3 == 3; // isEqual is true
// let isEqual = 3 == "3"; // isEqual is true
// let isEqual = "3" == "3"; // isEqual is true
// console.log(isEqual);

// LOOSELY COMPARISON AND STRICTLY COMPARISON

// Strictly Comparison
// console.log(3 === 3);
// console.log(3 === "3");

// Loosely Comparison
// console.log(3 == "3");

// LOGCAL OPERATORS
// true && true
// double ampersand or in short "AND"
// let thisLogic = 3 > 2 && 6 == 6; // thisLogic is true

// let thisLogic =!(3 > 2 && 6 == 6); // thisLogic is false

// STRING CONCATENATION

// console.log("Hello" + " World"); // output: Hello World
// console.log("This is" + " a String"); // output: This is a String
// console.log("The number is " + 5); // output: The number is 5
// console.log("Hello" - " World"); // Invalid, cannot use NaN (Not a Number)

// STRING ACCESS
// const fullName = "Michael Kimani"

// console.log(fullName[7]);

// console.log("Apple"[3]);

// const name = "Inigo Montoya";

// name[2] = "X"; // expecting InXgo Montoya

// console.log(name[2]); // i

// const a = "a";
// const b = "b";

// console.log(a < b); // true

// console.log ("Hey" === "Hey"); // true
// console.log ("Hey" == "hey"); // false

// const frost = 
//     "Nature's first green is gold, " +
//     "Her hardest lhue to hold. " +
//     "Her early leaf's a flower; " +
//     "But only so an hour. " +
//     "So Eden sank to grief, " +
//     "So dawn goes down to day. " +
//     "Nothing gold can stay. ";

// const frost = 
//     "Nature's first green is gold, \
// Her hardest lhue to hold.\
// Her early leaf's a flower \
// But only so an hour. \
// So Eden sank to grief, \
// So dawn goes down to day. \
// Nothing gold can stay. ";

// console.log(frost);
// console.log('\0')
// console.log('Hello\n   Goodbye');
// console.log('Hello\rAgain');
// console.log('hello\v   goodbye');
// console.log('first\rlast');

// console.log("\u{1d7de}")

// console.log("They said, \"this string doesn\"t need an escape!\"")

// const a = 5;
// const b = 10;

// console.log("'a' is assigned a value of \"" + a + ",\" and 'b' is assigned a value of \"" + b + ".\"\n" +
// "Therefore, 'a' plus 'b' is equal to " + (a + b) + ".");

// console.log(`a + b = ${10 + 78}`) // use backticks `



