// Q20. Object Method Assigned to Class

// class Manager {
//     constructor(name) {
//         this.name = name;
//     }

//     print = () => {
//         console.log(this.name);
//     }
// }

// const m = new Manager("Sarah");
// const p = m.print;
// p();

class Manager {
    constructor(name) {
        this.name = name;
    }

    print = () => {
        console.log(this.name);
    }
}

const m = new Manager("Sarah");
const p = m.print;
p();
//It logs "Sarah" because the print method is defined as an arrow function which captures the 'this' context of the class instance.
//When we assign m.print to p and call p(), it still refers to the original instance 'm' and logs the name "Sarah".
