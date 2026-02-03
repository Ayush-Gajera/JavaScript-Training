// Q6. The "Lost" Context

// const user = {
//     name: "Alex",
//     printName() {
//         console.log(this.name);
//     }
// };
// const print = user.printName;
// print();

const user = {
    name: "Alex",
    printName() {
        console.log(this.name);
    }
};
const print = user.printName;
print();
// Output is undefined because when we assign user.printName to print, the context of 'this' is lost.
// to fix this we can use bind() to bind the correct context. const print = user.printName.bind(user);
