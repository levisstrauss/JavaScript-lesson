//------------- Pure functions-------------------->
function add(a, b) {
    return a + b;
}
//------------- Immutability -------------------->

const arr = [1, 2, 3];
const newArr = [...arr, 4]; // Instead of mutating arr, create a new one

//------------- Higher-Order Functions----------->
function higherOrder(fn) {
    return function() {
        return fn();
    };
}
//------------- Map/Reduce ---------------------->
const arr = [1, 2, 3];
const squared = arr.map(x => x * x);

const sum = arr.reduce((acc, curr) => acc + curr, 0);
//------------- Currying------------------------->
function curryAdd(a) {
    return function(b) {
        return a + b;
    };
}
const add5 = curryAdd(5);
add5(3); // returns 8
//------------- Composition----------------------->

function double(x) {
    return x * 2;
}
function increment(x) {
    return x + 1;
}
function compose(fn1, fn2) {
    return function(value) {
        return fn1(fn2(value));
    };
}
const doubleThenIncrement = compose(increment, double);
doubleThenIncrement(5); // returns 11
