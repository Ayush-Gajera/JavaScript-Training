// Q3. The Broken Chain

// Promise.reject("Error Occurred")
//     .then(() => console.log("Success"))
//     .catch((err) => console.log(err));

Promise.reject("Error Occurred")
    .then(() => console.log("Success"))
    .catch((err) => console.log(err));

//It logs "Error Occurred" because the promise is rejected so .then() block is skipped and control goes to .catch() block which logs the error message.