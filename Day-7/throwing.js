// Q15. Throwing Inside a Chain

Promise.resolve(1)
    .then(x => {
        throw new Error("Invalid");
    })
    .catch(err => {
        console.log("Caught Error");
        return 10;
    })
    .then(x => console.log(x));
//It logs "Caught Error" followed by 10. The first .then() block throws an error which is caught by the .catch() block that logs "Caught Error".
//the .catch() block then returns 10 which is passed to the next .then() block that logs it.