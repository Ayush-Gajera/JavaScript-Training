Array.prototype.myMap=function (cb){
const arr= new Array(this.length);
for(let i=0;i<this.length;i++)
{
    arr[i]=cb(this[i],i,this);
}
return arr;
}
let mapArray=[1,2,3,4,5];
let answer= mapArray.myMap((n)=>{
    return n*2;
});
console.log(answer);