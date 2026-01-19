var input =[-10, 20, 50, -5]
var output = input.filter((n)=> n>0).map((n)=>{n=2*n; return n});
console.log(output);
//[ 40, 100 ]