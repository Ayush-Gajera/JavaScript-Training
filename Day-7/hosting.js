// Q18. Variable Hoisting & Promises

// console.log(a);
// var a = 5;

// Promise.resolve().then(() => {
//     console.log(a);
// });

a = 10;
console.log(a);
var a = 5;

Promise.resolve().then(() => {
    console.log(a);
});

//Output will be 10 followed by 5
//it prints 10 because of hoisting. var is hoisted and initilized with undefined so when console.log(a) is executed it refers to the hoisted variable a which is undefined at that time.
//so when execution start a is assigned 10 and then printed.
//now promise is placed in microtask queue and will be executed after the current synchronous code is executed.
//in the promise .then() callback it prints 5 because by that time the entire synchronous code has executed and the variable a has been assigned 5.
