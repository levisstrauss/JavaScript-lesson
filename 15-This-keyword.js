
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
