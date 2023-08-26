//  Functions

 function name (){
    // Body
 }

 // Call the function
name();

// Arrays

var train = ['Test', 'Test', 'Test']
for(var i =0; i < train.length; i++){
    console.log(train[i]);
}


// Case study

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];

function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]) //display the array item where the index is euqal to i
    }
}

listArrayItems(colors); //display all items in the array at once

function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'red') {
            console.log(i*100, "tomato!")
        } else {
            console.log(i*100, arr[i])
        }
    }
}

// Exercise

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

// ============================ Objects ==========.

// Objects literals

var user = {};  // Create an object

var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
}

assistantManager = {} // initializing the variable

var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
}
console.log(table);//display the object in the developer console
// Return value {legs: 3, color: 'brown', priceUSD: 100}

var house = {
    rooms: 3,
    color: "brown",
    priceUSD: 10000,
}
// Update the values
var house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345;

console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000}
house.windows = 10;
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000, windows: 10}


// Object literals and brackets notation

var house2 = {};
house2["rooms"] = 4;
house2['color']= "pink";
house2["priceUSD"] = 12345;
console.log(house2); // {rooms: 4, color: 'pink', priceUSD: 12345}

var car = {};
car.color = "red";
car["color"] = "green";
car["speed"] = 200;
car.speed = 100;
console.log(car); // {color: "green", speed: 100}

car["number of doors"] = 4;
console.log(car); // {color: 'green', speed: 100, number of doors: 5}

car["2022"] = 1901;
console.log(car); // {2022: 1901, color: 'green', speed: 100, number of doors: 5}



var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}
console.log(drone.altitude)

/*
Using the fact that brackets notation can evaluate expressions, I accessed the arrOfKeys[i] property on the drone object.

This value changed on each loop while the for loop was running.

Specifically, the first time it ran, it was evaluated like this:

The value of i was 0

The value of arrOfKeys[i] was arrOfKeys[0], which was "speed"

Thus, drone[arrOfKeys[i]] was evaluated to drone["speed"] which is equal to 100

This allowed me to loop over each of the values stored inside the drone object, based on each of its properties' keys.
 */

// Arrays

// ------------- Push ------------------------//

var fruits = [];
fruits.push("apple"); // ['apple']
fruits.push('pear'); // ['apple', 'pear']

// --------------- Pop ---------------------//
fruits.pop();
console.log(fruits); // ['apple']


function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    console.log(arr);
}

var simpleArr = arrayBuilder('apple', 'pear', 'plum') // ['apple', 'pear', 'plum']
console.log(simpleArr); // ['apple','pear','plum']
function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}
