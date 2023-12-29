// Creating Private Variables
function createPerson(name) {
    let age = 25;  // private variable
    return {
        getName: function() {
            return name;
        },
        getAge: function() {
            return age;
        },
        setAge: function(newAge) {
            age = newAge;
        }
    };
}

let john = createPerson("John");
console.log(john.getName()); // "John"
console.log(john.getAge());  // 25
john.setAge(26);
console.log(john.getAge());  // 26

/*
Here, age is private. There's no way to access age except through the methods provided.
b. Function Factories
Closures allow you to create function factories: functions that return other
functions, but with certain fixed parameters.
 */
function multiplyBy(factor) {
    return function(x) {
        return x * factor;
    };
}

let double = multiplyBy(2);
console.log(double(5)); // 10

let triple = multiplyBy(3);
console.log(triple(5)); // 15

/*
Counters
Closures can also be used to create stateful functions, such as counters:
 */
function createCounter() {
    let count = 0;
    return function() {
        return count++;
    };
}

let counter = createCounter();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
