//Code Block 4: Complex Async Chain

console.log("1");


setTimeout(function() {
 console.log("2");
}, 0);


queueMicrotask(function() {
 console.log("3");
});


Promise.resolve().then(function() {
 console.log("4");
  queueMicrotask(function() {
   console.log("5");
 });
});


setTimeout(function() {
 console.log("6");
}, 0);


console.log("7");

//Expected Output Prediction: 1 7 3 4 5 2 6
//Explanation:
//console.log("1") and console.log("7") are synchronous and executed first.
//next the microtasks are executed queueMicrotask for "3" then Promise for "4" which schedules another microtask for "5".
//after all microtasks are completed the event loop processes the macrotasks the first setTimeout for "2" followed by the second setTimeout for "6"