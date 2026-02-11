Array.prototype.myReduce=function (cb,acc){
    let accumlator;
    let startIndex;
  if(acc!==undefined){
    accumlator=acc;
    startIndex=0;

  }else{
  
    accumlator=this[0];
    startIndex=1;
  }

  for(let i=startIndex;i<this.length;i++)
  {
    accumlator=(cb(accumlator,this[i],i,this));
  }
  return accumlator;
}

const input =[1,2,3,4,5,6];
const output=input.myReduce((acc,element)=>{
    acc+=element
    return acc;
},0);

console.log(output);
