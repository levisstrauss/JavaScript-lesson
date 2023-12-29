
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

