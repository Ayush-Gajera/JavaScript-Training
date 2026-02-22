/*Assignment 3
Create a function updateField that takes:
object
key
value
Ensure the value type matches the key type.
Try assigning wrong type and observe the error.*/
interface User{
    id:number,
    name:string,
    phone:number,
}
function updateField<T,K extends keyof T>(user:T,key:K,value:T[K]):void{
 user[key]=value;
 console.log(user);
 
}
const student:User={
    id:2,
    name:"dev",
    phone:7854122,
}
updateField(student,"phone",20);
updateField(student, school, 20); //here "school" perameter gives error bcz interface User does not have key school. 