//### Code Block 3: Multiple Microtasks

console.log("A");

Promise.resolve().then(function() {
 console.log("B");
  Promise.resolve().then(function() {
   console.log("C");
 });
  console.log("D");
});

Promise.resolve().then(function() {
 console.log("E");
});

setTimeout(function() {
 console.log("F");
}, 0);

console.log("G");
//Expected output prediction: A G B D E C F
//Explanation: 
//"A" and "G" are printed first because they are synchronous.
//next, the microtasks are executed in the order they were created   
//"B" is printed fisrt from fisrt promise. then "D" is printed immediately after "B" because it's still within the same microtask
//Then "E" is printed from the second promise
//finally "C" is printed from the nested promise after "D"
//after all microtasks are completed, the event loop moves to macrotasks, executing the setTimeout callback last, printing "F".