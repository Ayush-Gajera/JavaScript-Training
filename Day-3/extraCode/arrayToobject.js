// const arr = [["name", "Ayush"], ["age", 20]];
// //{ name: "Ayush", age: 20 }

// const obj= Object.fromEntries(arr);
// console.log(obj);

const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 }
];

// const update=products.map((n)=>{
//     n.reduce((acc,res)=>{
//         const a={label:res.name,ammount:n.price}
//         return a;
//     },{})
// })

const newKeys = ["label", "amount"]

const newProducts = [];
products.map((product) => {
    newProducts.push({
        [newKeys[0]] : product.name,
        [newKeys[1]]: product.price
    })
})
console.log(newProducts);
