//------- map()--------------------->
// Transforms each element of the array and returns a new array.
let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2); // [2, 4, 6]

const name = [
  { name: 'Sonny', likes: 'Coding' },
  { name: 'Jay', likes: 'Gaming'   },
]

const namesByLikes = name.map((item) => ({
  [item.name]: item.likes,
}));

//------- .filter()--------------------->
// Returns a new array containing all elements that pass the test implemented by the provided function
let filtered = numbers.filter(num => num > 1); // [2, 3]

//------- .reduce()--------------------->
// Accumulates array values using a function, reducing the array to a single value.
let sum = numbers.reduce((acc, curr) => acc + curr, 0); // 6

//------- .some()--------------------->
//Check if at least one element passes the test implemented by the provided function.
let hasEvenNumber = numbers.some(num => num % 2 === 0); // true
//------- .every()--------------------->
//Check if all elements pass the test implemented by the provided function.
let areAllEven = numbers.every(num => num % 2 === 0); // false
//---------- forEach() ------------------>
// Executes a provided function once for each array element.
numbers.forEach(num => console.log(num)); // 1 2 3

//---------- find() ------------------>
const names = ["Sonny", "Jay"]
const result = names.find((name => name.startsWith("J")));

//------------ slice() -------------------->
// Returns a shallow copy of a portion of the array into a new array.
let sliced = numbers.slice(1, 3); // [2, 3]
//------------- Object.assign()------------->
//Used to copy the values of all enumerable properties from one or more source objects to a target object.
let obj1 = { a: 1 };
let obj2 = { b: 2 };
let merged = Object.assign({}, obj1, obj2); // { a: 1, b: 2 }

//-------------- Object.keys() -------------->
// Returns an array of a given object's property names.
let keys = Object.keys(merged); // ['a', 'b']

//-------------- Object.values() ---------------->
// Returns an array of a given object's property values.
let values = Object.values(merged); // [1, 2]
//------------ Object.entries() ------------------>
// Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
let entries = Object.entries(merged); // [['a', 1], ['b', 2]]
