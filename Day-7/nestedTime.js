// Q11. The Nested Timeout

// console.log('A');

// setTimeout(() => {
//     console.log('B');
// }, 0);

// Promise.resolve().then(() => {
//     console.log('C');
//     Promise.resolve().then(() => console.log('D'));
// });

// console.log('E');

console.log('A');

setTimeout(() => {
    console.log('B');
}, 0);

Promise.resolve().then(() => {
    console.log('C');
    Promise.resolve().then(() => console.log('D'));
});

console.log('E');
// Output is A E C D B
//Interperter first logs A, then it sees settimeout and puts into callback queue then it sees promise and puts into microtask queue then it prints E.
//after call stack is empty it checks microtask queue first because it has higher pripority and executes promise and prints C.
//inside that promise another promise is created and put into microtask queue.Then it checks microtask queue again and executes that promise and prints D.
//then it checks callback queue and executes settimeout and prints B.