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