const inventory = [
    { name: "Laptop", price: 1000, stock: 5 },
    { name: "Phone", price: 500, stock: 0 },
    { name: "Mouse", price: 50, stock: 10 }
];
var outOfStock = inventory.filter((n)=>n.stock==0 );
console.log(outOfStock);

var RemainIteamValue=inventory.filter((n)=>n.stock>0).map((n)=>n.price*n.stock);
console.log(RemainIteamValue);

var Total = RemainIteamValue.reduce((acc,total)=>{total+=acc; return total;},0);
console.log(Total);

