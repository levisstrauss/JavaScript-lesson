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

// ------ push(): Adds one or more elements to the end of an array and returns the new length.
fruits.push("grape"); // fruits becomes ["apple", "orange", "banana", "grape"]

// ------ pop(): Removes the last element from an array and returns that element.
fruits.pop(); // removes "grape" from fruits

// shift(): Removes the first element from an array and returns that removed element.
fruits.shift(); // removes "apple" from fruits

// unshift(): Adds one or more elements to the beginning of an array and returns the new length.----------- Methods: Functions that are properties of objects -------->
fruits.unshift("strawberry"); // fruits becomes ["strawberry", "orange", "banana"]

// slice(): Returns a shallow copy of a portion of an array into a new array object.
let citrusFruits = fruits.slice(1, 3); // gets ["orange", "banana"]

// splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
fruits.splice(1, 0, "kiwi"); // fruits becomes ["strawberry", "kiwi", "orange", "banana"]

// indexOf(): Returns the first index at which a certain element can be found, or -1 if the element is not found.
let position = fruits.indexOf("kiwi"); // 1

// forEach(): Executes a provided function once for each array element.
fruits.forEach(function(item) {
    console.log(item);
});

// map(): Creates a new array with the results of calling a function for every array element.
let lengths = fruits.map(item => item.length);

// filter(): Creates a new array with all elements that pass the test implemented by the provided function.
let shortFruits = fruits.filter(item => item.length < 6);

/* reduce(): Applies a function against an accumulator and each element in the array (from left to right)
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

// find(): Returns the value of the first element in an array that satisfies the provided testing function.
let found = fruits.find(fruit => fruit.length > 5);

// findIndex(): Returns the index of the first element in an array that satisfies the provided testing function.
let foundIndex = fruits.findIndex(fruit => fruit.length > 5);

// includes(): Determines whether an array includes a certain value.
let hasApple = fruits.includes("apple");

// every(): Checks if all elements in an array pass the test implemented by the provided function.
let areAllFruitsShort = fruits.every(fruit => fruit.length < 10);

// some(): Checks if at least one element in an array passes the test implemented by the provided function.
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
