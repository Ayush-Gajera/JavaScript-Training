// Q5. Math in Promises

// Promise.resolve(10)
//     .then((num) => num * 2)
//     .then((result) => console.log(result));
Promise.resolve(10)
    .then((num) => num * 2)
    .then((result) => console.log(result));
//it logs 20. The first .then() block receives the resolved value 10, multiplies it by 2 and returns 20.
//The second .then() block receives this returned value 20 and prints it.