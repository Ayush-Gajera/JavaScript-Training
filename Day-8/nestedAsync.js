//Code Block 2: Nested Async
console.log("Start");
setTimeout(function() {
 console.log("Timeout 1");
  Promise.resolve().then(function() {
   console.log("Promise 1");
 });
}, 0);
Promise.resolve().then(function() {
 console.log("Promise 2");
  setTimeout(function() {
   console.log("Timeout 2");
 }, 0);
});
console.log("End");
//Expected Output Prediction: Start End Promise 2 Timeout 1 Promise 1 Timeout 2
//Explanation: 
//"Start" and "End" are printed first because they are synchronous.
//setTimeout callbacks are macrotasks and Promise.then callbacks are microtasks.
//"Promise 2" is a microtask and will be executed next.It also schedules a macrotask "Timeout 2".
//Then the event loop processes the macrotasks "Timeout 1" first, which contains another microtask "Promise 1" that gets executed immediately after.
//Finally, "Timeout 2" is executed as the last macrotask.