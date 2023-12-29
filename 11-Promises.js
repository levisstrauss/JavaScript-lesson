/*
   promise.then(successCallback, failureCallback);

   promise.catch(failureCallback);

   promise.finally(() => {
    // cleanup code, e.g., hiding a spinner
});
 */

let promise = new Promise((resolve, reject) => {
    // some asynchronous operation
    setTimeout(() => {
        if (operation-successful) {
            resolve('Success!');
        } else {
            reject('Failure!');
        }
    }, 1000);
});

promise.then((message) => {
    console.log(message);  // if resolved, logs "Success!"
}).catch((error) => {
    console.log(error);    // if rejected, logs "Failure!"
});
