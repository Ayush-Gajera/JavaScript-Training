// Task 1: Predict Output of Async Code
// Objective
// Predict the execution order of asynchronous code involving Promises, setTimeout, and the event loop.
// Requirements
// 1. Predict the output order for each code block
// 2. Run the code and compare with your prediction
// 3. Explain the execution order based on the event loop
// Code Block 1: Basic Async
// ```javascript
console.log("1");
setTimeout(function() {
 console.log("2");
}, 0);
Promise.resolve().then(function() {
 console.log("3");
});
console.log("4");

// Expected Output Prediction: 1432
// Explanation: 
// 1 and 4 are printed first beacuse they are synchronous.
//promise.then is a microtask and will be executed before the setTimeout callback which is a macrotask.

