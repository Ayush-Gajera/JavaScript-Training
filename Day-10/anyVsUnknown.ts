// Assignment 2: any vs unknown
// Create a function that accepts any and performs operations without checks
// Create the same function using unknown and add proper type guards
// Compare the compiler behavior and runtime safety
// Create one variable using any
// Create another variable using unknown
// Try calling methods directly on both
// Which one forces you to write safer code?

function calculateSum(a:any, b:any){

    return a+b;
}
function multiply(a:unknown, b:unknown):number | void{
        if(typeof a=="number" && typeof b == "number"){
            return a+b;
        }else{
            console.log("Multiplication is not possible");
        }
       
};
const sum=calculateSum(10,"Ayush");
const Multiplication =multiply(10,5);
const failedProduct = multiply(10, "Ayush");
console.log(sum);
console.log(Multiplication);
/*
if use any type so do not need to check type explictly but if we use
unknown type so we should use type guard otherwise compiler gives error.
we should use unknown type over to any because it is more safe.
*/


const myName:any="Ayush";
const myFriend:unknown="Dev";
console.log(myName.toLowerCase());
console.log(myFriend.toLowerCase());
/*
type unkonown force to safer code becuase if we use unknown typpe we have to use type guard 
otherwise complier gives error.
*/