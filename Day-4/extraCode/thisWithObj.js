const workshop = {
  title: "JS Mastery",
  students: ["Alice", "Bob"],
  start() {
    this.students.forEach((student)=> {
      console.log(`${student} is attending ${this.title}`);
    });
  }
};
// here if we use call back function this keyword points to current obj and all set. If we use normal function this keyword points to current scope obj and there was nothing so it's print undefined 
workshop.start();