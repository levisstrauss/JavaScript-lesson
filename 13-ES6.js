
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
