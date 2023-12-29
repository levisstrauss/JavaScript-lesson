// Syntax: How JavaScript statements and expressions are written.

// This is a single-line comment

/*
This is
a multi-line
comment
*/

// Statements end with a semicolon
var name = "John";
console.log(name);

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

//------------------------ Logical Operators---------------------->
// AND
console.log(5 > 3 && 6 > 4) // true
// OR
console.log(5 > 3 || 5 < 4) // true
// NOT
console.log(!(5 > 3)) // false
// Truthy and falsy values:
console.log("" && "Hello") // will return "" because the empty string is falsy

console.log("Hello" || "World") // will return Hello because it is the first truthy value encountered

console.log("!NaN") // will return true since NaN is falsy

// Short-circuit Evaluation
console.log("Hello" && "" && "World") // Return "" since AND will return the first falsy or last operand if they are all
// true
console.log("" || undefined || "World") // Will return "World"
