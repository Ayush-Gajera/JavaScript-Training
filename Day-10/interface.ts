// Assignment 1: Type Inference
// Declare variables using let and const with initial values and observe inferred types
// Try reassigning incompatible values and note the compiler errors
// Write a function without a return type and inspect what TypeScript infers
let value = 451;
const myName ="Ayush";
console.log(value,myName);
function withoutReturntype(){
    console.log("A function without return type");
}

/*
if we reassigne number value to myName variable complier will gives error type of myName is string.
so we cannot assigne number value to myName variable.
*/
