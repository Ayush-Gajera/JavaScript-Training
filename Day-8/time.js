// Task 2: setTimeout Examples
// Objective
// Complete and understand various setTimeout scenarios.
// Exercise 1: Basic setTimeout
// **Task:** Create a function that logs numbers 1 to 5, with a 1-second delay between each number.

// TODO: Implement countWithDelay function
function countWithDelay() {
 // Your code here
 let delay = 1000; // 1 second
    for (let i = 1; i <= 5; i++) {
        setTimeout(() => {
            console.log(i);
        }, i * delay);
    }
 // Should output: 1 (after 1s), 2 (after 2s), 3 (after 3s), 4 (after 4s), 5 (after 5s)
}
countWithDelay();