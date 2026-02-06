
function calculate(price:number[]):number{
   let sum:number=0;
   sum=price.reduce((acc:number, num:number)=>{
    acc+=num;
    return acc;
   },0)
    return sum;
}
const price:number[]=[1,2,3,4,5];
const output:number=calculate(price);
console.log(output)


function addTwoNumber(num1:number, num2:number):string | number{
    const sum:number=num1+num2;
    return sum>100? "Greter than 100" : sum;
}
const anwer:number | string=addTwoNumber(100,20);
console.log(anwer);