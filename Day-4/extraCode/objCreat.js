const obj = {};
obj.__proto__ = { secret: "Shhh!" };
const newObj = Object.create(obj);
console.log(newObj.secret);
