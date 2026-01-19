let cart=[100, 200, 50]
let total  =cart.reduce((acc,total)=>{acc+=total; return acc},0);
console.log(total);