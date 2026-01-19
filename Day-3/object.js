//Broken code
// const user = {
//     name: "Alex",
//     greet: () => {
//         console.log("Hello, " + this.name);
//     }
// };
// user.greet();


//Fixed code:
const user = {
    name: "Alex",
    greet: function () {
        console.log("Hello, " + this.name);
    }
};
user.greet();
// arrow function in class with this keyword is gives undefined.