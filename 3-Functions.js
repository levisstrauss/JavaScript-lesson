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
