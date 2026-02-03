// Q9. Chaining Returns

// Promise.resolve(5)
//     .then((val) => {
//         console.log(val);
//         return val + 5;
//     })
//     .then((val) => console.log(val));

Promise.resolve(5)
    .then((val) => {
        console.log(val);
        return val + 5;
    })
    .then((val) => console.log(val));
//It logs 5 followed by 10. The first .then() block receives the resolved value 5, logs it and returns 10.
//The second .then() block receives this returned value 10 and logs it.
