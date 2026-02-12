// Assignment 2: any vs unknown
// Create a function that accepts any and performs operations without checks
// Create the same function using unknown and add proper type guards
// Compare the compiler behavior and runtime safety
// Create one variable using any
// Create another variable using unknown
// Try calling methods directly on both
// Which one forces you to write safer code?
function calculateSum(a, b) {
    return a + b;
}
function multiply(a, b) {
    // if(typeof a=="number" && typeof b == "number"){
    //     return a+b;
    // }else{
    //     console.log("Multiplication is not possible");
    // }
    return a * b;
}
;
var sum = calculateSum(10, "Ayush");
var Multiplication = multiply(10, 5);
var failedProduct = multiply(10, "Ayush");
console.log(sum);
console.log(Multiplication);
