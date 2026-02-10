// Q7. Event Loop Basic Race

// console.log("Start");

// setTimeout(() => console.log("Timeout"), 0);

// Promise.resolve().then(() => console.log("Promise"));

// console.log("End");



console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");
// Output is Start End Promise Timeout
//synchronous code run first. Interperter first prints Start then it sees setTimeout and   puts into callback queue then it sees promise and puts into microtask queue then it prints End.
//after call stack is empty it checks microtask queue first because it has higher pripority and executes promise and prints Promise.
//Then it checks callback queue and executes setTimeout and prints Timeout.