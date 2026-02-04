const input=[1,2,3,4,5,6,7,8];
function chunkarray(arr,size){
return arr.reduce((acc,ar,index)=>{
    if(index%size==0){
        acc.push(arr.slice(index,index+size));
    }
    return acc;
//  if(arr.temp.length==2)
//  {
//     arr.result.push(arr.temp);
//     arr.temp=[];
//  }else{
//     arr.temp.push(ar);
//  }
//     return arr.result;

},[]);
}

const output=chunkarray(input,3);
console.log(output);
