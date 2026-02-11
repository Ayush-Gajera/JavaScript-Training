
function mySetInterval(callback, delay, ...args) {
  if (typeof callback !== "function") {
    throw new TypeError("callback must be a function");
  }

  let timeoutId = null;
  let stopped = false;

  function repeat() {
    if (stopped) return;
    callback(...args);
    timeoutId = setTimeout(repeat, delay);
  }
  timeoutId = setTimeout(repeat, delay);
  return function clearMySetInterval() {
    stopped = true;
    clearTimeout(timeoutId);
    
  };
}
let count = 0;

const stop = mySetInterval(() => {
  console.log("tick", count++);

  if (count === 5) {
    stop(); 
    console.log("stopped");
  }
}, 1000);
