// Q13. Promise.all Failure

Promise.all([
    Promise.resolve("Success 1"),
    Promise.reject("Error 1"),
    Promise.resolve("Success 2")
])
.then(res => console.log("Result:", res))
.catch(err => console.log("Caught:", err));
//It prints "Caught: Error 1" because Promise.all fails fast. When any promise in the array rejects, 
//the entire promise.all rejects with that error, skipping the resolved promises.