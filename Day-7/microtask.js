// Q19. Microtask vs Macrotask Interleaving

// setTimeout(() => console.log("T1"), 0);

// Promise.resolve().then(() => {
//     console.log("P1");
//     setTimeout(() => console.log("T2"), 0);
// });

// Promise.resolve().then(() => console.log("P2"));

// console.log("End");

// setTimeout(() => console.log("T1"), 0);

Promise.resolve().then(() => {
    console.log("P1");
    setTimeout(() => console.log("T2"), 0);
});

Promise.resolve().then(() => console.log("P2"));

console.log("End");
// Output is End P1 P2 T1 T2
//synchronous code runs first so it prints End first. interpreter start execution from top to bottom it sees setTimeout and puts into callback queue then it sees promise and puts into microtask queue.
// then it sees another promise and puts into microtask queue.
//console.log("End") is executed and printed.
//after call stack is empty event loop checks microtask queue first because it has higher pripority and executes first promise callback and prints P1.
//inside P1 promise callback there is a setTimeout which is put into callback queue.
//then it executes second promise callback and prints P2.
//now both promises are executed so it checks callback queue and executes setTimeout callbacks in order they were added and prints T1 followed by T2.