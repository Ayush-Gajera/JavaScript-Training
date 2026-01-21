class Counter {
  static count = 0;
  count = 10;

  constructor() {
    Counter.count++;
  }

  getCount() {
    return this.count;
  }

  static getStaticCount() {
    return this.count;
  }
}

const c1 = new Counter();
const c2 = new Counter();

console.log(c1.getCount());        // prints normal count variable
console.log(Counter.getStaticCount()); // print static count varibal bcz we call satic method by using class name
//console.log(c1.getStaticCount());  // error bcz we can not call static method by using class name.
