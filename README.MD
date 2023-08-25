Course syllabus

    This course is the second of a series that aims to help you learn more about web development.

    In this course, you will explore the following:

    Module 1: Introduction to JavaScript

    In this module, you are introduced to JavaScript. You'll learn why JavaScript is so integral to software development. And you'll get an overview of how to write JavaScript code inside the browser. Furthermore, you will learn about the most common operators as well as conditional statements and loops.

    After completing this module, you will be able to:

    Explain the importance of JavaScript in software development

    Demonstrate how to write JavaScript code inside the browser

    Demonstrate how to write basic JavaScript code

    List common operators, conditional statements and loops

    Demonstrate how to use variables and output their value in the console

    Module 2: The building blocks of a program

    Here you'll learn how to use objects, arrays and functions. In addition, you will learn about the most common built-in methods, and the difference between undefined, null and empty strings. And you'll explore both error handling and defensive programming.

    After completing this module, you will be able to:

    Build and use objects, arrays, and functions

    List some common built-in methods on built-in objects

    Describe handling bugs and errors using try, catch, throw, and defensive programming

    Explain the difference between undefined, null, and empty strings

    Demonstrate how to write basic code using arrays, objects and functions

    Module 3: Programming paradigms

    This module is about functional programming and the object oriented programming paradigm. You will learn what scope is in JavaScript. You'll explore the differences between var, let and const. And you'll learn how to use classes and inheritance in object oriented programming. Additionally, you'll explore how to use write JavaScript using modern features like spread and rest. You will build code that can manipulate the DOM and handle events. And you will use JSON in JavaScript.

    After completing this module, you will be able to:

    Outline the tenets of the functional programming and object oriented programming paradigm

    Describe how scope works in JavaScript

    List the differences between var, let, and const

    Use classes and inheritance in OOP in JavaScript

    Write JavaScript code using more modern features like spread, rest, template strings and modules

    Build code that manipulates the DOM and handles events

    Use JSON in JavaScript

    Module 4: Testing and compatibility

    Here you will learn about Node.js and npm. And you will explore how to install npm packages and how to work with package.json. Furthermore, you will learn about testing in JavaScript and you'll code a simple unit test in Jest.

    After completing this module, you will be able to:

    Describe Node.js and npm

    Explain how to install npm packages

    Describe how to work with package.json

    Explain the process of testing in JavaScript

    List the three most prevalent kinds of testing

    Demonstrate how to code a simple unit test in Jest

    Module 5: Graded assessment

    In the final module, you'll learn about the graded assessment. After you complete the individual units in this module, you'll synthesize the skills you gained from the course to create code for the "Little lemon receipt maker ".


/*---------*/, // Test          
1. Additional operators
Logical AND operator: && 

Logical OR operator: || 

Logical NOT operator: ! 

The modulus operator: % 

The equality operator: ==

The strict equality operator: ===

The inequality operator: !=

The strict inequality operator: !==

The addition assignment operator: += 

The concatenation assignment operator: += (it's the same as the previous one - more on that later)

The logical AND operator in JavaScript: &&
The logical AND operator is, for example, used to confirm if multiple comparisons will return true.

In JavaScript, this operator consists of two ampersand symbols together: &&.

Let's say you're tasked with coming up with some code that will check if the currentTime variable is between 9 a.m. and 5 p.m. The code needs to console.log true if currentTime > 9 and if currentTime < 17.

Now, the question is, what will be the result of console.log(true && true)?

To understand the answer, you need to know the behavior of the && logical operator.

The && logical operator returns a single value: the boolean true or false, based on the following rules: 

It returns true if both the values on its right and on its left are evaluated to true 

It returns false in all the other instances

In other words: 

console.log(true && true) will output: true 

console.log(true && false) will output: false 

console.log(false && true) will output: false 

console.log(false && false) will output: false

The logical OR operator in JavaScript: ||
The logical OR operator in JavaScript consists of two pipe symbols together: ||.

It is used when you want to check if at least one of the given comparisons evaluates to true.

Consider the following task: You need to write a program in JavaScript which will return true if the value of the currentTime variable is not between 9 and 17. Put differently, your code needs to console.log true if the value of the variable currentTime is either less than 9 or greater than 17.