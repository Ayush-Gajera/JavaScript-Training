// Q16. Async Function Order

// async function foo() {
//     console.log("A");
//     await Promise.resolve();
//     console.log("B");
// }

// console.log("C");
// foo();
// console.log("D");


async function foo() {
    console.log("A");
    await Promise.resolve();
    console.log("B");
}
console.log("C");
foo();
console.log("D");
// Output is C A D B
// Interprenter first logs C, then calls foo().
// Inside foo(), it logs A then hits await so execution of foo() is paused and control returns to the main thread.
// The main thread then logs D. After the main thread is done, the promise from await resolves and foo() resumes.
// It then logs B.

