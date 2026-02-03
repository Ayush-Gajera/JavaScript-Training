// Q2. Basic Promise Flow
// console.log(1);
// Promise.resolve().then(() => {
//     console.log(2);
// });
// console.log(3);


console.log(1);
Promise.resolve().then(() => {
    console.log(2);
});
console.log(3);
//output will be 1,3,2 because synchronous code run first. Interperter first prints 1 then it sees promise and puts into microtask queue then it prints 3. After call stack is empty it checks microtask queue and executes promise and prints 2.