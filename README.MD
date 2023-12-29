### This is the JavaScript Notes from the basics to advanced concepts.

    Definition: JavaScript (JS) is a high-level, interpreted programming language.
    Usage: Initially designed to enhance web interactivity, now also used for server-side
    programming, mobile apps, and more.
    Not Java: Despite the name, JavaScript and Java are entirely different languages.
---
### Basics of JavaScript:

    ------------------ Logical Operators -------------------------- 
    - AND (&&): Returns true  if both operands are true
    - OR (||) : Returns true if at least one of the operands is true
    - NOT (!) : Returns false if the operands is true and false otherwise.

    ----------------- Truthy and falsy----------------------------

    - Truthy: Values that evaluate to true in a boolean contect. Almost all values are truthy except for
      the falsy one listed below:
        - "Hello", '42', and {}
    - Falsy: Values that evaluate to false in a boolean context. Falsy values are:
        - false, 'o' and '-o', "", null, undefined, NaN

    ---------- Ahort-Circuit Evaluation --------------------------

    Logical operators in js use short-circuit evaluation:
    - AND (&&) Operator will return the first falsy operand it encounters, or the last operand if they're all truthy
      Ex: "Hello" && "" && "World" will return ""
    - OR (||) Operator will return the first truthy operand it encounters, or th last operand if they're all falsy



    Syntax: How JavaScript statements and expressions are written.
    Variables: How to declare and assign values.
    Data Types: Understanding primitive data types like strings, numbers, booleans, null, undefined, and symbols.
    Operators: Arithmetic (+, -, *, /) and comparison (==, ===, !=, !==, >, <).

Code
```javascript
// Syntax: How JavaScript statements and expressions are written.
// This is a single-line comment
/*
This is
a multi-line
comment
*/
```
```javascript
// Statements end with a semicolon
var name = "John";
console.log(name);
```
```javascript
// ------ Variables: How to declare and assign values.----->
// Using var (older way)
var age = 25;
// Using let (ES6 way)
let city = "New York";
// Constant variable (can't be reassigned)
const PI = 3.14159;
//--------- Data Types: Understanding primitive data types. ---->
// String
let greeting = "Hello, world!";
// Number
let count = 10;
// Boolean
let isOnline = true;
// Null
let emptyVar = null;
// Undefined
let notAssigned;
// Symbol (ES6)
const sym = Symbol("description");
```
```javascript
// ---------- Operators: Arithmetic and comparison. ----------->
// Arithmetic Operators
let sum = 5 + 10;
let difference = 20 - 5;
let product = 4 * 3;
let quotient = 8 / 2;

// Comparison Operators
let isEqual = 5 === "5";   // true, checks value only
let isStrictEqual = 5 === "5"; // false, checks value and type
let isNotEqual = 5 !== "6"; // true
let isNotStrictEqual = 5 !== "5"; // true
let isGreater = 5 > 3;  // true
let isLesser = 3 < 5;  // true
```
```javascript
//------------------------ Logical Operators---------------------->
// AND
console.log(5 > 3 && 6 > 4) // true
// OR
console.log(5 > 3 || 5 < 4) // true
// NOT
console.log(!(5 > 3)) // false
// Truthy and falsy values:
console.log("" && "Hello") // will return "" because the empty string is falsy
console.log("Hello" || "World") // will return Hello because it is the first
// truthy value encountered
console.log("!NaN") // will return true since NaN is falsy
// Short-circuit Evaluation
console.log("Hello" && "" && "World") // Return "" since AND will return the first falsy or last operand if they are all
// true
console.log("" || undefined || "World") // Will return "World"
```
---
### Control Structures:
    Conditional Statements: Using if, else if, and else to control the flow of a program.
    Loops: for, while, and do...while for repeated execution of code.
    Switch Statement: A type of conditional statement used when there are multiple 
    conditions to be checked.
------- Code --------->
```javascript
//---Conditional Statements: Using if, else if, and else to control the flow of a program.--->
let age = 18;
if (age >= 21) {
console.log("You are allowed to drink!");
} else if (age < 21 && age >= 18) {
console.log("You are an adult but not allowed to drink!");
} else {
console.log("You are underage!");
}
```
```javascript
//- Loops: for, while, and do...while for repeated execution of code ---->
// for loop ( Use for loop if we know how many times the loop will run)
for (let i = 0; i < 5; i++) {
console.log("This is loop number " + i);
}

//------- while loop ------
let count = 0;
while (count < 3) {
console.log("Count is: " + count);
count++;
}

//---- do...while loop ----
let value = 0;
do {
console.log("Value is: " + value);
value++;
} while (value < 2);
```
```javascript
//-- Switch Statement: A type of conditional statement used when
// there are multiple conditions to be checked-->

let day = "Tuesday";
switch (day) {
    case "Monday":
    console.log("Today is Monday.");
    break;
    case "Tuesday":
    console.log("Today is Tuesday.");
    break;
    case "Wednesday":
    console.log("Today is Wednesday.");
    break;
    default:
    console.log("It's some other day.");
    break;
}
```
---
### Functions:
    Definition: Blocks of reusable code.
    Parameters & Arguments: Passing data to functions.
    Return Values: Getting data back from functions.
    Arrow Functions: A shorthand way to write functions.
```javascript
//----- Definition: Blocks of reusable code ----->
function greet() {
    console.log("Hello, World!");
}
greet(); // Calls the function and prints "Hello, World!"

//--------Parameters & Arguments: Passing data to functions--->
function sayHelloTo(name) {
    console.log("Hello, " + name + "!");
}
sayHelloTo("Alice");  // Calls the function and prints "Hello, Alice!"

//-------- Return Values: Getting data back from function-------->
function add(a, b) {
    return a + b;
}
let sum = add(5, 3); // Calls the function with arguments 5 and 3
console.log(sum);    // Prints 8

// Task 1: Function definition
function letterFinder(word, match) {
    // Task 2: 'for' loop setup
    for (let i = 0; i < word.length; i++) {
        // Task 3: Checking if current letter is a match
        if (word[i] === match) {
            // Task 4: Logging when a match is found
            console.log('Found the', match, 'at', i);
        } else {
            // Task 5: Logging when no match is found
            console.log('---No match found at', i);
        }
    }
}
// Task 6: Call the function
letterFinder("test", "t");

// Arrow Functions: A shorthand way to write functions.
const name = (name) => {
    console.log(name);
}
```
### Objects and Arrays:
    Objects: Collections of key-value pairs.
    Arrays: Ordered lists of values.
    Methods: Functions that are properties of objects.

------------- Code ----------------->
```javascript
//--------------- Objects: Collections of key-value pairs ---->
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};
console.log(person.firstName);  // Prints "John"
//---------- Arrays: Ordered lists of values ------------->
//----Creating Arrays:
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]);  // Prints "apple"
console.log(fruits[2]);  // Prints "cherry"
//----Using the Array constructor:
// let fruit = new Array("apple", "orange", "banana");
// Basic Array Properties and Methods:
console.log(fruits.length); // 3
// ------ push(): Adds one or more elements to the end of an 
// array and returns the new length.
fruits.push("grape"); // fruits becomes ["apple", "orange", "banana", "grape"]

// ------ pop(): Removes the last element from an array and returns that element.
fruits.pop(); // removes "grape" from fruits

// shift(): Removes the first element from an array and returns that removed element.
fruits.shift(); // removes "apple" from fruits

// unshift(): Adds one or more elements to the beginning of an array and returns the new 
// length.----------- Methods: Functions that are properties of objects -------->
fruits.unshift("strawberry"); // fruits becomes ["strawberry", "orange", "banana"]
// slice(): Returns a shallow copy of a portion of an array into a new array object.
let citrusFruits = fruits.slice(1, 3); // gets ["orange", "banana"]
// splice(): Changes the contents of an array by removing or replacing existing elements and/o
//adding new elements in place.
fruits.splice(1, 0, "kiwi"); // fruits becomes ["strawberry", "kiwi", "orange", "banana"]
// indexOf(): Returns the first index at which a certain element can be found, 
// or -1 if the element is not found.
let position = fruits.indexOf("kiwi"); // 1
// forEach(): Executes a provided function once for each array element.
fruits.forEach(function(item) {
    console.log(item);
});
// map(): Creates a new array with the results of calling a function for 
// every array element.
let lengths = fruits.map(item => item.length);
// filter(): Creates a new array with all elements that pass the test 
// implemented by the provided function.
let shortFruits = fruits.filter(item => item.length < 6);
/* reduce(): Applies a function against an accumulator and each element 
in the array (from left to right)
to reduce it to a single value. */
let totalLength = fruits.reduce((acc, curr) => acc + curr.length, 0);
// join(): Joins all elements of an array into a string.
let fruitString = fruits.join(", "); // "strawberry, kiwi, orange, banana"
// reverse(): Reverses the elements of an array in place.
fruits.reverse();
// concat(): Combines two or more arrays.
let vegetables = ["carrot", "broccoli"];
let food = fruits.concat(vegetables);
// isArray(): Determines whether the passed value is an Array.
Array.isArray(fruits); // true
// sort(): Sorts the elements of an array in place and returns the sorted array.
fruits.sort();
// find(): Returns the value of the first element in an array that satisfies 
// the provided testing function.
let found = fruits.find(fruit => fruit.length > 5);
// findIndex(): Returns the index of the first element in an array that satisfies 
// the provided testing function.
let foundIndex = fruits.findIndex(fruit => fruit.length > 5);
// includes(): Determines whether an array includes a certain value.
let hasApple = fruits.includes("apple");
// every(): Checks if all elements in an array pass the test implemented by 
// the provided function.
let areAllFruitsShort = fruits.every(fruit => fruit.length < 10);
// some(): Checks if at least one element in an array passes the test implemented
// by the provided function.
let areSomeFruitsShort = fruits.some(fruit => fruit.length < 5);
//-------------------Objects------------------------->
let dog = {
    name: "Buddy",
    bark: function() {
        console.log("Woof! Woof!");
    }
};
dog.bark();  // Prints "Woof! Woof!"
// Exercise

/*
firstName, lastName, age, and isEmployed are properties of the person object.
greet is a method of the person object.
You can access the properties of the object using dot notation (person.firstName)
or bracket notation (person["firstName"]), and you can call the methods in a similar manner
(person.greet()).
 */

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isEmployed: true,
    greet: function() {
        console.log("Hello, I am " + this.firstName + " " + this.lastName);
    }
};

// Accessing properties of the object
console.log(person.firstName); // Outputs: John

// Calling a method inside the object
person.greet(); // Outputs: Hello, I am John Doe

// Exercise
//example of adding properties and methods to an object
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn()

//-------------------- Exercise----------------->
let purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = this.shoes * this.stateTax;
        console.log("Total price:", calculation)
    }
}
// Execution
purchase1.totalPrice()// Calling the function
------------------- Exercise----------------->
// The simplest way to create an object is using an object literal 
const circle = {
    radius: 1,
    draw: function() {}
};

// To create multiple objects with the same structure and behaviuor (methods), use a factory or a constructor. 

// Factory function 
function createCircle(radius) {
    return {
        radius,
        draw: function() {}
    }
}

// Constructor function 
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {}
}

// Every object has a "constructor" property which returns the function that was used to construct or create that object. 
const x = {};
x.constructor; // returns Object() 

// In JavaScript, functions are objects. They have properties and methods. 
Circle.name;
Circle.length;
Circle.constructor; // returns Function()
Circle.call({}, 1); // to call the Circle function 
Circle.apply({}, [1]);

// Value types are copied by their value, reference types are copied by their reference. 
// Value types in JavaScript are: String, Number, Boolean, Symbol, undefined and null
// Reference types are: Object, Function and Array 

// JavaScript objects are dynamic. You can add/remove properties: 
circle.location = {};
circle['location'] = {};

delete circle.location;

// To enumerate the members in an object: 
for (let key in circle) console.log(key, circle[key]);

Object.keys(circle);
// To see if an object has a given property
if ('location' in circle)
// Abstraction means hiding the complexity/details and showing only the essentials. 
// We can hide the details by using private members. Replace "this" with "let".
    function Circle(radius) {
        // Public member 
        this.radius = radius;

        // Private member                       
        let defaultLocation = {};
    }
// To define a getter/setter, use Object.defineProperty():

Object.defineProperty(this, 'defaultLocation', {
    get: function() { return defaultLocation; },
    set: function(value) { defaultLocation = value; }
});
```
---
### DOM Manipulation:
    DOM: Stands for Document Object Model. It's a tree-like structure representation of a webpage.
    Selecting Elements: Using methods like getElementById or querySelector.
    Modifying Elements: Changing content, attributes, or style.

Code
```javascript
//------------------- Selection by id ----------------------------->
let heading = document.getElementById("para");
heading.style.color = "blue";
console.log(heading.textContent);  // Prints the text of the h1 element


//----------------- Selection using selector ----------------------->
if (typeof document !== 'undefined') {
    let firstParagraph = document.querySelector("p");
    firstParagraph.style.color = "red";
    console.log(firstParagraph.textContent);  // Prints the text of the first p element
}

//----------------- Modifying elements ------------------------------>
let heading = document.getElementById("myHeading");
heading.textContent = "New Heading Text";  // Changes the text of the h1 element

//----------------= Changing Attributes -------------------------->

let link = document.querySelector("a");
link.href = "https://www.example.com";  // Changes the href attribute of the first a element

// --------------- Changing Style -------------------------------------->
let paragraph = document.querySelector("p");
paragraph.style.color = "red";  // Changes the text color of the first p element
```
---
### Events:
    How to listen and respond to events like clicks, keyboard presses, or 
    mouse movements using addEventListener.
    Remember, the addEventListener method is versatile and can be used with 
    a wide variety of events, making it a 
    powerful tool in the JavaScript developer's toolkit.
--------- Code ------------------------>
```javascript
//----- Events listener --------------//
// ------- Listening to a Click Event
// Select the button element
let button = document.getElementById("myButton");
// Add an event listener to the button
button.addEventListener("click", function() {
    console.log("Button was clicked!");
});
//--------- Listening to a Keyboard Event------>
/*
You can listen for keyboard events like keydown, keyup, or keypress.
 */
// Select the input element
let inputField = document.getElementById("myInput");

// Add an event listener to the input field
inputField.addEventListener("keydown", function(event) {
    console.log(`Key pressed: ${event.key}`);
});
// --------------- Listening to Mouse Movements ------------->

// Select the div element
let divElement = document.getElementById("myDiv");
// Add an event listener to the div
divElement.addEventListener("mousemove", function(event) {
    console.log(`Mouse position: X=${event.clientX}, Y=${event.clientY}`);
});
//----------------- Removing Event Listeners --------------->
/* It's also possible to remove event listeners using the removeEventListener method. To use it,
the event handler must be a named function.
 */
function handleClick() {
    alert("Button was clicked!");
}

button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);
```
---
### Basic Error Handling:
    Using try, catch, and finally to handle exceptions in your code.
--------- Code ------------->
```javascript
// ------ Basic Usage ----------->
try {
    // Code that may throw an exception
    let x = y + 1;  // This will fail because y is not defined
} catch (error) {
    console.error("Caught an error:", error.message);
} finally {
    console.log("This will always run!");
}
// --------------Different Error Types ------------>

try {
    let arr = null;
    let len = arr.length;  // This will fail because arr is null
} catch (error) {
    if (error instanceof TypeError) {
        console.error("Type error:", error.message);
    } else {
        console.error("Some other error:", error.message);
    }
}
//-------------------- Throwing Custom Errors-------->

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed!");
    }
    return a / b;
}

try {
    let result = divide(5, 0);
} catch (error) {
    console.error("Caught an error:", error.message);
}
//------------------  The finally Block ----------------->
function readFile(filename) {
    try {
        console.log("Opening file:", filename);
        // Code to read file
        throw new Error("Just a demo error!");
    } catch (error) {
        console.error("Error reading file:", error.message);
    } finally {
        console.log("Closing file:", filename);
    }
}
readFile("demo.txt");
```
---
### Good Practices:
    Comments: Writing descriptive comments for clarity.
    Consistency: Consistent naming conventions and code style.
    Strict Mode: Using 'use strict'; for catching common coding errors.

--------- Code ----------------->
```javascript
//--------------------------- Strict Mode ------------->
/*
    Introduced in ECMAScript 5, strict mode makes several changes to the normal JavaScript semantics. It eliminates
    some silent errors by changing them to throw errors. It's a way to catch common programming bugs.
    How to Enable:
    Place the string "use strict"; at the top of your script or function.
 */
"use strict";   // Enable strict mode
x = 3.14;       // This will cause an error because x is not declared
//------------------- Comments -------------->
// This is a single-line comment
/*
This is a
multi-line comment
*/
// ------------------- Consistency ------------------>
/*
    Having a consistent coding style is crucial for maintainability and readability. Some aspects to consider:
    Naming Conventions: Decide on a convention, like camelCase for variables and PascalCase for constructors.
 */

let userFirstName = "John";   // camelCase for variable names
class UserAccount {}          // PascalCase for class names

// ------------------ Indentation and Bracing -------->

// Use consistent indentation (e.g., spaces vs. tabs)
if (true) {
    console.log("Consistency is key!");
} else {
    console.log("Stay consistent!");
}
```
---
### Getting Started on some general rules:
    Including JavaScript: How to add JavaScript to an HTML file using the <script> tag.
    Console: Using browser developer tools to test and debug JavaScript code.
    Once you're comfortable with the basics, you can delve into:
    Advanced Topics in JavaScript
    Advanced topics like closures, promises, async/await, and ES6+ features.
    Frameworks and libraries like React, Angular, Vue, or jQuery.
    Server-side JavaScript with Node.js.
---
### Closures:
    Definition: A closure is a function that has access to the outer (enclosing) function's 
    variables—scope chain.
    Usage: Commonly used in JavaScript for things like data privacy, factory functions, and 
    dynamic function generation.
    Examples: Creating private variables, function factories, and counters.
    Closures are utilized for:
    Data Privacy: Creating private variables/methods.
    Factory Functions: Generate functions dynamically.
    Event Handlers: Retain state for event callbacks.
    Callbacks: Remember state for asynchronous callbacks.
--------- Code ----------------->
```javascript
// Creating Private Variables
function createPerson(name) {
    let age = 25;  // private variable
    return {
        getName: function() {
            return name;
        },
        getAge: function() {
            return age;
        },
        setAge: function(newAge) {
            age = newAge;
        }
    };
}

let john = createPerson("John");
console.log(john.getName()); // "John"
console.log(john.getAge());  // 25
john.setAge(26);
console.log(john.getAge());  // 26

/*
Here, age is private. There's no way to access age except through the methods provided.
b. Function Factories
Closures allow you to create function factories: functions that return other 
functions, but with certain fixed parameters.
 */
function multiplyBy(factor) {
    return function(x) {
        return x * factor;
    };
}

let double = multiplyBy(2);
console.log(double(5)); // 10

let triple = multiplyBy(3);
console.log(triple(5)); // 15

/*
Counters
Closures can also be used to create stateful functions, such as counters:
 */
function createCounter() {
    let count = 0;
    return function() {
        return count++;
    };
}

let counter = createCounter();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
```
---
### Promises:
    Definition: A promise represents a value which might be available now, or in the future, or never.
    States: A promise can be in one of 3 states: pending, resolved (fulfilled), or rejected.
    Usage: Great for handling asynchronous operations and their success or failure.
    Methods: then(), catch(), and finally().
    Creating: Use the Promise constructor.

    - States: Promises have three states
       - Pending: Initial state; neither fulfilled nor rejected.
       - Fulfilled (Resolved): The operation completed successfully.
       - Rejected: The operation failed.

    - Usage:
       Promises are an excellent tool when working with asynchronous operations. They provide a more powerful and 
       flexible way to handle asynchronous results compared to callbacks.

    - Methods: Promises have severals important methods:
       - then() Attaches callbacks for the resolution and/or rejection of the Promise.
         - promise.then(successCallback, failureCallback);

       - catch() Attaches a callback for only the rejection of the Promise. It's a shorthand for then(undefined, 
          onFailure).
           - promise.catch(failureCallback);

       - finally() A handler that will be called no matter if the promise was resolved or rejected. It doesn't receive
          any argument.
          - promise.finally(() => {// cleanup code, e.g., hiding a spinner});

    Key Takeaway: 
    Promises offer a more powerful way to handle callback hell and allow for better error handling
    compared to traditional callback-based approaches. With the advent of ES6 and later versions,
    Promises have become an integral part of modern JavaScript for handling asynchronous operations.
--------- Code ----------------->
```javascript
/*
   promise.then(successCallback, failureCallback);
   promise.catch(failureCallback);
   promise.finally(() => {
    // cleanup code, e.g., hiding a spinner
});
 */
let promise = new Promise((resolve, reject) => {
    // some asynchronous operation
    setTimeout(() => {
        if (operation-successful) {
            resolve('Success!');
        } else {
            reject('Failure!');
        }
    }, 1000);
});

promise.then((message) => {
    console.log(message);  // if resolved, logs "Success!"
}).catch((error) => {
    console.log(error);    // if rejected, logs "Failure!"
});
```
---

### Async/Await:
    Definition: A syntactic feature of JavaScript which makes it easier to write code that deals with promises in a
    more synchronous fashion.
    Usage: Used to simplify code that uses promises and makes it more readable.
    Error Handling: Typically used with try/catch blocks in asynchronous code.

    ----- Usage --------
    async: Before you can use await, the containing function must be marked as async. 
    An async function always returns a promise, even if you return a non-promise value, it will be automatically 
    wrapped in a resolved promise.

    await: The await keyword can only be used inside an async function and makes JavaScript pause the async function
    execution until the Promise is resolved or rejected, then resumes the async function's execution and returns 
    the resolved value.

    One significant advantage of async/await is how it simplifies error handling. Instead of chaining .then() and 
    .catch() methods, you can use a traditional try/catch block:

    Key Takeaway: async/await doesn't make the operation faster or more efficient; it's all about cleaner, more 
    intuitive syntax. It allows developers to write promise-based code as if it were synchronous but without blocking
    the main thread. It's especially beneficial for linear asynchronous flows.
--------- Code ----------------->
```javascript
//------ Usage -------->
//------- Async------------>
async function fetchData() {
    return "Data fetched";
}
// -------- Await--------->
async function displayData() {
    let data = await fetchData();
    console.log(data);
}
//---------- Error handling-------->
/*
In the above example, if any part of the asynchronous operations throws an error (for instance, if the fetch
operation fails), the code will jump to the catch block.
 */
async function fetchDataWithHandling() {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching the data:', error);
    } finally {
        console.log('Operation completed');
    }
}
```
---
### ES6 (and beyond) Features:
    - Let & Const: Block-scoped variable declarations.
    - Arrow Functions: A concise way to write function expressions. They also have different behavior when it comes to this.
    - Spread/Rest Operator: Used to split an array into separate arguments and vice versa.
    - Destructuring: Extracting multiple properties from an object or array in a shorthand way.
    - Template Literals: Allows embedded expressions and string formatting.
    - Modules: import and export statements allow you to create modular JS applications.
    - Default Parameters: Set default values for function parameters.
    - Classes: Syntactic sugar over JavaScript's existing prototype-based inheritance.
    - Symbol: A new, unique, and immutable data type.
    - Generators & Iterators: Functions which can be exited and later re-entered, allowing for more complex control flow.
    - Map, Set, WeakMap, and WeakSet: New collection data types.
    - Enhanced Object Literals: Shorter syntax for defining object literals.
    - Array Methods: find(), findIndex(), includes(), etc.
    - Promises: A better way to handle asynchronous operations.
--------- Code ----------------->
```javascript

//-------------------Let & Const------------------->
let variable = "This is variable"; // can be reassigned
const constant = "This is constant"; // cannot be reassigned
//-------------- Arrow Functions------------------>
const square = x => x * x;

//-------------------Spread/Rest Operator------------>
let arr = [1, 2, 3];
let newArr = [...arr, 4, 5]; // Spread

const gatherArgs = (...args) => console.log(args); // Rest
//-----------------------Destructuring------------------>
let person = {name: 'John', age: 25};
let {name, age} = person;
//----------------- Template Literals--------------------->
let greeting = `Hello, my name is ${name} and I am ${age} years old.`;

//-------------------- Modules--------------------------------->
// file1.js
export const hello = "Hello";
// file2.js
import { hello } from './file1';

//-------------------- Default Parameters ---------------------->
const greet = (name = "User") => console.log(`Hello, ${name}!`);

//---------------- Classes------------------------------->
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hi, I'm ${this.name}`);
    }
}

//------------------ Symbol ------------------------------>

let sym1 = Symbol();
let sym2 = Symbol("description");


//------------- Generators & Iterators-------------------->
function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}


//---------------------- Map, Set, WeakMap, and WeakSet ---------->
let map = new Map();
map.set("key", "value");

let set = new Set();
set.add(1);

//----------------------- Enhanced Object Literals -------------------->
let obj = {
    // Methods
    doSomething() {
        console.log("Doing something");
    },
    // Dynamic property
    ["prop_dynamic"]: "value"
};

//--------------------------- Array Methods------------------------------>
let numbers = [10, 20, 30, 40, 50];
let found = numbers.find(num => num > 20); // 30
let index = numbers.findIndex(num => num > 20); // 2

//Converts array-like or iterable objects into true arrays. Array.from()
let nodeList = document.querySelectorAll('div');
let arrayFromNodeList = Array.from(nodeList);

//---- Array.of() Creates a new array instance from a variable number of arguments.
let arr = Array.of(1, 2, 3, 4); // [1, 2, 3, 4]

//-----. fill() Fills all or some elements of an array with a static value.------->
let filledArray = [1, 2, 3].fill(0); // [0, 0, 0]

//------- .find() Returns the first element that satisfies the testing function.---->
let array = [5, 12, 8, 130, 44];
let found = array.find(element => element > 10); // 12

//-------.findIndex() Returns the index of the first element that satisfies the testing function ---->
let index = array.findIndex(element => element > 10); // 1

//------.includes(): Determines if an array contains a certain value, returning true or false.------->
let isIncluded = [1, 2, 3].includes(2); // true

//------.keys(): Returns a new Array Iterator object containing the keys (indexes) for each index in the array-->
let arr = ["a", "b", "c"];
let iterator = arr.keys();
for (let key of iterator) {
    console.log(key); // 0 1 2
}

//-----.values() Returns a new Array Iterator object containing the values for each index in the array------->
let valueIterator = arr.values();
for (let value of valueIterator) {
    console.log(value); // "a" "b" "c"
}

//--- .entries(): Returns a new Array Iterator object that contains the key/value pairs for each index in the array.-->
let entryIterator = arr.entries();
for (let entry of entryIterator) {
    console.log(entry); // [0, "a"] [1, "b"] [2, "c"]
}

---------------- ES6 Classes ----------------->
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    // These methods will be added to the prototype. 
    draw() {
    }

    // This will be available on the Circle class (Circle.parse())
    static parse(str) {
    }
}

// Using symbols to implement private properties and methods
const _size = Symbol();
const _draw = Symbol();

class Square {
    constructor(size) {
        // "Kind of" private property 
        this[_size] = size;
    }

    // "Kind of" private method 
    [_draw]() {
    }
    // By "kind of" I mean: these properties and methods are essentally
    // part of the object and are accessible from the outside. But accessing
    // them is hard and awkward. 
}

// using WeakMaps to implement private properties and methods
const _width = new WeakMap();

class Rectangle {
    constructor(width) {
        _width.set(this, width);
    }

    draw() {
        console.log('Rectangle with width' + _width.get(this));
    }
}

// WeakMaps give us better protection than symbols. There is no way 
// to access private members implemented using WeakMaps from the 
// outside of an object.
// Inheritance 
class Triangle extends Shape {
    constructor(color) {
        // To call the base constructor 
        super(color);
    }

    draw() {
        // Call the base method 
        super.draw();

        // Do some other stuff here
    }
}

------------------ ES6 Tooling ----------------->
// Module formats
//  - AMD / Asynchronous Module Definition (Browser)
//  - CommonJS (Node)
//  - UMD / Universal Module Definition (Browser + Node)
//  - ES6 Modules 

// CommonJS (Used in Node)
// Exporting 
module.exports.Cirlce = Circle;
// Importing 
const Circle = require('./circle');

// ES6 Modules (Used in Browser)
// Exporting
export class Square {}
// Importing 
import {Square} from './square';

// We use Babel to transpile our modern JavaScript code 
// into code that browsers can understand (typically ES5). 

// We use Webpack to combine our JavaScript files into a
// bundle. 
```
---
### Advanced Array & Object Manipulation:
    Array Methods: map(), filter(), reduce(), and more.
    Object Methods: Object.assign(), Object.keys(), Object.values(), Object.entries().

--------- Code ----------------->
```javascript
//------- map()--------------------->
// Transforms each element of the array and returns a new array.
let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2); // [2, 4, 6]

const name = [
  { name: 'Sonny', likes: 'Coding' },
  { name: 'Jay', likes: 'Gaming'   },
]

const namesByLikes = name.map((item) => ({
  [item.name]: item.likes,
}));

//------- .filter()--------------------->
// Returns a new array containing all elements that pass the test implemented by the provided function
let filtered = numbers.filter(num => num > 1); // [2, 3]

//------- .reduce()--------------------->
// Accumulates array values using a function, reducing the array to a single value.
let sum = numbers.reduce((acc, curr) => acc + curr, 0); // 6

//------- .some()--------------------->
//Check if at least one element passes the test implemented by the provided function.
let hasEvenNumber = numbers.some(num => num % 2 === 0); // true
//------- .every()--------------------->
//Check if all elements pass the test implemented by the provided function.
let areAllEven = numbers.every(num => num % 2 === 0); // false
//---------- forEach() ------------------>
// Executes a provided function once for each array element.
numbers.forEach(num => console.log(num)); // 1 2 3

//---------- find() ------------------>
const names = ["Sonny", "Jay"]
const result = names.find((name => name.startsWith("J")));

//------------ slice() -------------------->
// Returns a shallow copy of a portion of the array into a new array.
let sliced = numbers.slice(1, 3); // [2, 3]
//------------- Object.assign()------------->
//Used to copy the values of all enumerable properties from one or more source objects to a target object.
let obj1 = { a: 1 };
let obj2 = { b: 2 };
let merged = Object.assign({}, obj1, obj2); // { a: 1, b: 2 }

//-------------- Object.keys() -------------->
// Returns an array of a given object's property names.
let keys = Object.keys(merged); // ['a', 'b']

//-------------- Object.values() ---------------->
// Returns an array of a given object's property values.
let values = Object.values(merged); // [1, 2]
//------------ Object.entries() ------------------>
// Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
let entries = Object.entries(merged); // [['a', 1], ['b', 2]]
```
---

### This Keyword in js:
    Understand the rules and behavior of (this) keyword, especially in different 
---- Code ----------------->
```javascript

//------------------- Global Context--------------->
console.log(this === window); // true
//------------ Inside of the functions -------------->
function exampleFunction() {
    console.log(this);
}
exampleFunction(); // window in non-strict mode, undefined in strict mode

//----------- Inside an object---------------------->
const obj = {
    name: "John",
    sayHello: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};
obj.sayHello(); // Hello, my name is John

//----------- Inside a class ------------------------>

class ExampleClass {
    constructor() {
        this.name = "John";
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
const instance = new ExampleClass();
instance.sayHello(); // Hello, my name is John

//----------- Inside Event listeners ------------------------>
button.addEventListener('click', function() {
    console.log(this); // Refers to the button element
});
//----------- Arrow functions ------------------------>
const objWithArrowFunction = {
    name: "John",
    sayHello: () => {
        console.log(`Hello, my name is ${this.name}`);
    }
};
objWithArrowFunction.sayHello(); // Hello, my name is undefined
// (because 'this' is not bound to the object)
// ------ Bind, call, apply----------------------->
function introduce(language) {
    console.log(`I speak ${language} and my name is ${this.name}`);
}
const person = { name: "John" };
introduce.call(person, "English"); // I speak English and my name is John
```
### Contexts like global, function, object, class, and event listeners.
    The behavior of the this keyword in JavaScript can be a bit tricky, but understanding it is crucial for writing 
    predictable and effective JavaScript code. Let's explore its behavior in different contexts:
    ------- Global Context--------------
    In the root level of a script, this refers to the global object.
    In browsers, the global object is window.
    ------- Inside of the functions ------
    If a function is called as a simple function (i.e., not as a method, constructor, etc.), this refers to 
    the global object (or undefined in strict mode).
    ------------ Inside of the Object( Method Invocation)-----
    When a function is called as a method (i.e., a function that is a property of an object), this refers 
    to that object.
    ----------- inside a class ---------------------
    Within a class constructor, methods, and getters/setters, this refers to the instance of the class.
    ----------- inside Event listeners ----------------
    Inside an event listener, this typically refers to the DOM element that the event was bound to.
    ------------ Arrow Functions-----------------------
    Arrow functions do not bind their own this value. Instead, they inherit this from the enclosing scope.
    ------------ Using bind, call, apply --------------
    You can explicitly set what this refers to using the methods bind, call, and apply.
    Tips:
    Remember, the value of this is determined by how a function is called, not where the function is declared.
    If you're unsure of the value of this in a particular context, you can always console.log(this) to inspect its value.
    Using 'use strict'; can change the behavior of this in certain contexts (like inside functions) and is a recommended 
    practice to avoid potential pitfalls.
---
### Functional Programming:
    Concepts like pure functions, immutability, high order functions, map/reduce, currying, and composition.
    ------------- Pure functions -------------
    A function is pure if it always returns the same output given the same input and has no side effects.
    ------------- Immutability --------------
    Immutability means that once an object or data structure is created, it can't be changed. Instead of 
    modifying it, you'd create a new one.
    ------------- Higher-Order Functions -------------
    A function that takes one or more functions as arguments or returns a function as a result.
    ------------- Map/Reduce -------------
    map and reduce are higher-order functions.
    map: Transforms an array by applying a function to each of its elements.
    reduce: Accumulates the elements of an array using a function to produce a single value.
    ------------- Currying -------------
    ransforms a function that takes multiple arguments into a sequence of single-argument functions.
    ------------- Composition -------------
    The act of combining several functions to produce a new function. The output of one function serves as the 
    input to the next.
--------- Code ----------------->
```javascript
//------------- Pure functions-------------------->
function add(a, b) {
    return a + b;
}
//------------- Immutability -------------------->

const arr = [1, 2, 3];
const newArr = [...arr, 4]; // Instead of mutating arr, create a new one

//------------- Higher-Order Functions----------->
function higherOrder(fn) {
    return function() {
        return fn();
    };
}
//------------- Map/Reduce ---------------------->
const arr = [1, 2, 3];
const squared = arr.map(x => x * x);

const sum = arr.reduce((acc, curr) => acc + curr, 0);
//------------- Currying------------------------->
function curryAdd(a) {
    return function(b) {
        return a + b;
    };
}
const add5 = curryAdd(5);
add5(3); // returns 8
//------------- Composition----------------------->

function double(x) {
    return x * 2;
}
function increment(x) {
    return x + 1;
}
function compose(fn1, fn2) {
    return function(value) {
        return fn1(fn2(value));
    };
}
const doubleThenIncrement = compose(increment, double);
doubleThenIncrement(5); // returns 11
```
---
### Advanced Asynchronous Patterns:

    Callbacks, Promises, Async/Await, Generators.
    Libraries like Axios, Fetch for handling AJAX calls.
    -------------- Callbacks ---------------
    Functions that are passed as arguments to other functions and are executed after the completion of that function.
    -------------- Promises ------------------
    Objects that represent the eventual completion or failure of an asynchronous operation
    -------------- Async/Await ---------------
    A way to handle promises in a more synchronous fashion.
    -------------- Generators -----------------
    Functions that can pause and resume their execution.
    -------------- Axios ----------------------
    A popular library for making HTTP requests. It's based on promises, so it's compatible with async/await.
    -------------- Fetch API ------------------
    A modern way to make web requests provided by browsers. Returns promises.
    Tips:
    When it comes to handling asynchronous operations in JavaScript, understanding these concepts is crucial. 
    They each offer different ways to manage async operations, and knowing when and how to use them effectively 
    can significantly improve your web applications' performance and user experience.
--------- Code ----------------->
```javascript
//-------------- Callbacks --------------->
function doSomething(callback) {
    // ... some code ...
    callback();
}
doSomething(() => {
    console.log('Callback executed!');
});

//-------------- Promises --------------->
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved!');
    }, 1000);
});
promise.then(response => console.log(response));

//-------------- Async/Await --------------->
async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
}
fetchData();

//-------------- Generators --------------->
function* generatorExample() {
    yield 'first value';
    yield 'second value';
}
const generator = generatorExample();
console.log(generator.next().value); // 'first value'
console.log(generator.next().value); // 'second value'

//-------------- Axios ------------------>
axios.get('https://api.example.com/data')
    .then(response => console.log(response.data))
    .catch(error => console.log(error));

//-------------- Fetch API ----------------->
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
```
---
### Module Systems:
    Understanding CommonJS (used in Node.js), AMD, UMD, and ES6 modules.
    ------ CommonJS (CJS) ---------------------
    Usage: Predominantly used in Node.js.
    Pros: Synchronous, simple, server-side oriented.
    Cons: Not suitable for browsers due to its synchronous nature (though bundlers like Browserify can help).

    --------- Asynchronous Module Definition(AMD)-----
    Usage: Mainly designed for the browser.
    Pros: Asynchronous, great for browsers.
    Cons: Syntax is a bit more complex than CJS.

    -------- Universal Module Definition (UMD) -------
    Usage: Combines the best of CJS and AMD, aiming to provide compatibility for both server (Node.js) and the browser.
    Pros: Universal, works in most environments.
    Cons: More verbose than other formats.

    ----------- ES6 Modules (ESM) --------------
    Usage: Native JavaScript module system, supported in modern browsers and in Node.js 
    (with the --experimental-modules flag or .mjs extension).

    Pros: Static & asynchronous, tree-shakeable (unused code removal), native support in browsers and newer Node.js versions.
    Cons: Might need transpiling and bundling for older environments or browsers.
--------- Code ----------------->
```javascript
//------ CommonJS (CJS) --------------------->
// Exporting
module.exports = someFunction;
// Importing
const someFunction = require('./someFunction');
//------ Asynchronous Module Definition (AMD) --------------------->
// Define a module
define(['dependency1', 'dependency2'], function(dep1, dep2) {
    return someFunction;
});
// Require a module
require(['module'], function(module) {
    // Use the module here
});
//------ Universal Module Definition (UMD) --------------------->
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['dependency1'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node.js/CommonJS
        module.exports = factory(require('dependency1'));
    } else {
        // Browser global variable
        root.returnedModule = factory(root.dependency1);
    }
}(this, function(dependency1) {
    return someFunction;
}));

//------ ES6 Modules (ESM) --------------------->
// Exporting
export const someFunction = () => {};
export default someFunction;

// Importing
import { someFunction } from './module';
import * as allExports from './module';
import someFunction from './module'; // if using default export
```
---
### Transpiler/Bundlers:
    Tools like Babel (to convert ES6+ code to ES5) and Webpack or Rollup for bundling modules.
    -------------- Babel -------------------
    Babel is a highly configurable transpiler that converts ECMAScript 2015+ (ES6+) code into a backwards compatible
    version for older browsers or environments.
    Why use it? To leverage the benefits of the latest JS features while ensuring compatibility with older browsers.

    -------------- Webpack -----------------
    Webpack is a module bundler. It takes modules with dependencies and generates static assets that represent 
    those modules.
    Why use it? For bundling multiple JS files into one, managing dependencies, and optimizing for production 
    (minification, tree shaking).
--------- Code ----------------->
```javascript
//-------------- Babel ------------------->
npm install --save-dev @babel/core @babel/cli @babel/preset-env
   - Create a .babelrc config file
       {
        "presets": ["@babel/preset-env"]
       }
   - Transpile JS:
        npx babel src --out-dir dist
//-------------------- Webpack ---------------->
       - Install Webpack:
       npm install --save-dev webpack webpack-cli
       - Create a webpack.config.js
       module.exports = {
         entry: './src/index.js',
         output: {
            filename: 'bundle.js',
            path: __dirname + '/dist'
         }
       };
       - Bundle JS
         npx webpack --config webpack.config.js
```
---
### Prototyping 
    Prototypes: Understanding the prototype chain and how to use it to your advantage.
    Prototypal Inheritance: How to create objects that inherit from other objects.
    Object.create(): A better way to create objects that inherit from other objects.
    Object.setPrototypeOf(): A better way to set the prototype of an existing object.
    Object.getPrototypeOf(): A better way to get the prototype of an object.
    Object.prototype: The prototype of all objects.
    Function.prototype: The prototype of all functions.
    Constructor Functions: A better way to create objects that inherit from other objects.
    new: A better way to create objects that inherit from other objects.
    Classes: Syntactic sugar over JavaScript's existing prototype-based inheritance.
    Tips:
    Understanding the prototype chain is crucial for writing effective JavaScript code. It's a powerful feature 
    that allows you to reuse existing code and avoid unnecessary duplication. It's also the foundation of JavaScript's 
    object-oriented programming model.
--------- Code ----------------->
```javascript
// Every object (except the root object) has a prototype (parent). 
// To get the prototype of an object:
Object.getPrototypeOf(obj); 

// In Chrome, you can inspect "__proto__" property. But you should 
// not use that in the code. 

// To get the attributes of a property:
Object.getOwnPropertyDescriptor(obj, 'propertyName');

// To set the attributes for a property:
Object.defineProperty(obj, 'propertyName', {
    configurable: false,    // cannot be deleted
    writable: false,
    enumerable: false
});

// Constructors have a "prototype" property. It returns the object 
// that will be used as the prototype for objects created by the constructor. 
Object.prototype === Object.getPrototypeOf({})
Array.prototype === Object.getPrototypeOf([])

// All objects created with the same constructor will have the same prototype. 
// A single instance of this prototype will be stored in the memory. 
const x = {};
const y = {};
Object.getPrototypeOf(x) === Object.getPrototypeOf(y); // returns true 

// Any changes to the prototype will be immediately visible to all objects 
// referencing this prototype. 

// When dealing with large number of objects, it's better to put their
// methods on their prototype. This way, a single instance of the methods
// will be in the memory. 
Circle.prototype.draw = function() {}

// To get the own/instance properties:
Object.keys(obj);

// To get all the properties (own + prototype): 
for (let key in obj) {}
```
---
### Prototyping inheritance
    Prototypal Inheritance: How to create objects that inherit from other objects.
    Object.create(): A better way to create objects that inherit from other objects.
    Object.setPrototypeOf(): A better way to set the prototype of an existing object.
    Object.getPrototypeOf(): A better way to get the prototype of an object.
    Object.prototype: The prototype of all objects.
    Function.prototype: The prototype of all functions.
    Constructor Functions: A better way to create objects that inherit from other objects.
    new: A better way to create objects that inherit from other objects.
    Classes: Syntactic sugar over JavaScript's existing prototype-based inheritance.
    Tips:
    Understanding the prototype chain is crucial for writing effective JavaScript code. It's a powerful feature 
    that allows you to reuse existing code and avoid unnecessary duplication. It's also the foundation of JavaScript's 
    object-oriented programming model.
--------- Code ----------------->
```javascript
function Shape() {}
function Circle() {}

// Prototypical inheritance 
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle; 

function Rectangle(color) {
    // To call the super constructor 
    Shape.call(this, color);
}

// Method overriding 
Shape.prototype.draw = function() {}
Circle.prototype.draw = function() {
    // Call the base implementation 
    Shape.prototype.draw.call(this);

    // Do additional stuff here 
}
// Don't create large inheritance hierarchies. 
// One level of inheritance is fine. 

// Use mixins to combine multiple objects 
// and implement composition in JavaScript. 
const canEat = { 
    eat: function() {}
};

const canWalk = {
    walk: function() {}
};

function mixin(target, ...sources) {
    // Copies all the properties from all the source objects 
    // to the target object. 
    Object.assign(target, ...sources);
}
function Person() {}
mixin(Person.prototype, canEat, canWalk);
```
---
### Testing with Jest:
    Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase.
    Why use it? To ensure that your code works as expected and to prevent regressions.
    
    ----- Installation and Setup ------------>
    ----  node --version
    ----- npm --version
    ----- npm init -y => Adding the node module
    ----- npm install --save-dev jest  => To install jest
    ----- Don't forget to change "test": "jest" in the package.json file
    ----- npm run test  => To run the test
    ----- Create a testing file
--------- Code ----------------->
```javascript
//------ AddFive.js --------->
function addFive(val) {
    return val + 5;
}
module.exports = addFive;

//------ AddFive.test.js --------->
const addFive = require('./addFive');
test('returns the numbers plus 5', () => {
    expect(addFive(1)).toBe(6);
})
