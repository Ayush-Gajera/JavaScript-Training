// Word Frequency Counter

let Input = "hi hi hello hello hello";
// Output: { hi: 2, hello: 3 }

let arr = Input.split(" ");
console.log(arr);
const Output = arr.reduce((acc, ans) => {
    if (acc[ans]) {
        acc[ans] += 1;
    }
    else {
        acc[ans] = 1;
    }
    return acc;
}, {})
console.log(Output);
