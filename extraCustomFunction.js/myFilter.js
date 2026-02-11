Array.prototype.myFilter = function (cb) {
    let filtered = [];
    for (let i = 0; i < this.length; i++) {
        let isInclude = cb(this[i]);
        if (isInclude) { 
            filtered.push(this[i],i,this);
         }
    }
    return filtered;
}

const input=[1,2,3,4];
const output=input.myFilter((n)=>{
    return n>2;
});
console.log(output);
