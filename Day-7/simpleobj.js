
const laptop = {
    brand: "Dell",
    getBrand: function() {
        return this.brand;
    }
};
const myBrand = laptop.getBrand();
console.log(myBrand);
// myBrand will be Dell beacuse laptop.getBrand() returns this.brand and this refers to the laptop object so this.brand = Dell.
