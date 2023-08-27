//-------------- Callbacks --------------->
function doSomething(callback) {
    // ... some code ...
    callback();
}
doSomething(() => {
    console.log('Callback executed!');
});

//-------------- Promises --------------->
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved!');
    }, 1000);
});
promise.then(response => console.log(response));

//-------------- Async/Await --------------->
async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
}
fetchData();

//-------------- Generators --------------->
function* generatorExample() {
    yield 'first value';
    yield 'second value';
}
const generator = generatorExample();
console.log(generator.next().value); // 'first value'
console.log(generator.next().value); // 'second value'

//-------------- Axios ------------------>
axios.get('https://api.example.com/data')
    .then(response => console.log(response.data))
    .catch(error => console.log(error));

//-------------- Fetch API ----------------->
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));