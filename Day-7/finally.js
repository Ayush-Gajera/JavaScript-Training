// Q17. The "Finally" Gotcha

// Promise.resolve("Done")
//     .finally(() => {
//         console.log("Cleanup");
//         return "Modified?";
//     })
//     .then(res => console.log(res));

Promise.resolve("Done")
    .finally(() => {
        console.log("Cleanup");
        return "Modified?";
    })
    .then(res => console.log(res));
// Output is Cleanup Done
// finally() block is executed after the promise is settled but before the next then().
// However, the return value from finally() is ignored and the original resolved value "Done" is passed to the next then() block which logs it.