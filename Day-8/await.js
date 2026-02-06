//Code Block 5: Async/Await


console.log("Start");


async function asyncFunction() {
 console.log("Async 1");
  await Promise.resolve();
 console.log("Async 2");
}


asyncFunction();


Promise.resolve().then(function() {
 console.log("Promise 1");
});


setTimeout(function() {
 console.log("Timeout");
}, 0);


console.log("End");
//Expected Output Prediction: Start Async 1 End Async 2 Promise 1 Timeout
//Explanation:
//"Start" is printed first because it's synchronous. then asyncFunction is called, printing "Async 1" synchronously.
//now the await keyword pauses the asyncFunction allowing the event loop to continue.
//controll returns to the main thread pormise is scheduled as a microtask and setTimeout as a macrotask.
//"End" is printed next as it's synchronous.
//after the synchronous code the event loop processes microtasks first so "Async 2" is printed from the resumed asyncFunction followed by "Promise 1" from the promise.
//finally the event loop processes the macrotask, printing "Timeout" last.
