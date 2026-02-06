// Q8. Arrow Function Pitfall

// const group = {
//     title: "Developers",
//     getTitle: () => {
//         console.log(this.title);
//     }
// };

// group.getTitle();

const group = {
    title: "Developers",
    getTitle: () => {
        console.log(this.title);
    }
};

group.getTitle();
//Output is undefined because arrow function does not have its own 'this' so it refres to the global object or perent scope which does not have title.