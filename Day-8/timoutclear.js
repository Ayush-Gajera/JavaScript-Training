// ## Exercise 3: setTimeout with Clear


// **Task:** Create a countdown timer that counts from 10 to 0, then stops.

// TODO: Implement countdown function
function countdown(start) {
    // Your code here
    // Should log numbers from start to 0, with 1 second between each
    // Should stop at 0
    let count = 0;
    const interval = setInterval(() => {
        console.log(start);
        start--;
        if (start < 0) {
            clearInterval(interval);
        }
    }, 1000);
}
countdown(10);
