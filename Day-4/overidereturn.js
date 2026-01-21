function SmartPhone(brand) {
  this.brand = brand;
  
  return {
    brand: "Generic",
    os: "Android"
  };
}

SmartPhone.prototype.getBrand = function() {
  return this.brand;
};

const myPhone = new SmartPhone("Apple");

console.log(myPhone.brand);    // if explicitly return brand overridde new keyword property
console.log(myPhone.getBrand); // Bcz we return object so this new object has it's own prototype which hasn't getBrand function that's why output is undefinded
