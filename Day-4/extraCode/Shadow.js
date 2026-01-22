function Laptop(brand) {
  this.brand = brand;
}

Laptop.prototype.brand = "Generic";
Laptop.prototype.getBrand = function() {
  return this.brand;
};

const myLaptop = new Laptop("Dell");
delete myLaptop.brand;

console.log(myLaptop.brand);      // bcz we delete obj's attribute but prototype have brand=Generic
console.log(myLaptop.getBrand()); // bcz if obj attribute is deleted so it check for it prototype and if it have then print it.