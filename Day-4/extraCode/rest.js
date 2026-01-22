const product = {
  id: 101,
  title: "Laptop",
  price: 1000,
  discount: 10
};

const { price, ...rest } = product;
rest.price = 500;

console.log(product.price); // price copy from product 
console.log(rest.title);    // rest of key value paire store in rest object