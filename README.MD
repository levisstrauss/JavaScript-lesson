What is JavaScript?

       Definition: JavaScript (JS) is a high-level, interpreted programming language.
       Usage: Initially designed to enhance web interactivity, now also used for server-side programming, mobile apps, and more.
       Not Java: Despite the name, JavaScript and Java are entirely different languages.

1. Basics of JavaScript:

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
2. Control Structures:

       Conditional Statements: Using if, else if, and else to control the flow of a program.
       Loops: for, while, and do...while for repeated execution of code.
       Switch Statement: A type of conditional statement used when there are multiple conditions to be checked.
3. Functions:

       Definition: Blocks of reusable code.
       Parameters & Arguments: Passing data to functions.
       Return Values: Getting data back from functions.
4. Objects and Arrays:

       Objects: Collections of key-value pairs.
       Arrays: Ordered lists of values.
       Methods: Functions that are properties of objects.
5. DOM Manipulation:

       DOM: Stands for Document Object Model. It's a tree-like structure representation of a webpage.
       Selecting Elements: Using methods like getElementById or querySelector.
       Modifying Elements: Changing content, attributes, or style.
6. Events:

       How to listen and respond to events like clicks, keyboard presses, or mouse movements using addEventListener.
       
       Remember, the addEventListener method is versatile and can be used with a wide variety of events, making it a 
       powerful tool in the JavaScript developer's toolkit.
7. Basic Error Handling:

       Using try, catch, and finally to handle exceptions in your code.
8. Good Practices:

       Comments: Writing descriptive comments for clarity.
       Consistency: Consistent naming conventions and code style.
       Strict Mode: Using 'use strict'; for catching common coding errors.
9. Getting Started:

       Including JavaScript: How to add JavaScript to an HTML file using the <script> tag.
       Console: Using browser developer tools to test and debug JavaScript code.
       Once you're comfortable with the basics, you can delve into:

       Advanced Topics in JavaScript

        Advanced topics like closures, promises, async/await, and ES6+ features.
        Frameworks and libraries like React, Angular, Vue, or jQuery.
        Server-side JavaScript with Node.js.

10. Closures:

        Definition: A closure is a function that has access to the outer (enclosing) function's variables—scope chain.
        Usage: Commonly used in JavaScript for things like data privacy, factory functions, and dynamic function generation.
        Examples: Creating private variables, function factories, and counters.

        Closures are utilized for:

        Data Privacy: Creating private variables/methods.
        Factory Functions: Generate functions dynamically.
        Event Handlers: Retain state for event callbacks.
        Callbacks: Remember state for asynchronous callbacks.
11. Promises:

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

12. Async/Await:

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

13. ES6 (and beyond) Features:

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
    
14. Advanced Array & Object Manipulation:

        Array Methods: map(), filter(), reduce(), and more.
        Object Methods: Object.assign(), Object.keys(), Object.values(), Object.entries().
15. This Keyword:

        Understand the rules and behavior of (this) keyword, especially in different contexts like global, function, 
        object, class, and event listeners.

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
16. Functional Programming:

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
17. Advanced Asynchronous Patterns:

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

18. Module Systems:

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
19. Transpiler/Bundlers:

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