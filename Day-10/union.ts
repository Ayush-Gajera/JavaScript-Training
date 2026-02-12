// Assignment 3: Union Types
// Add one more role (e.g. Guest ) to the User union
// Write a function that accepts User
// Use the role field to safely narrow the type
// Observe how TypeScript prevents invalid property access
// Create a union type for two different user roles using type
// Create another union using two interfaces
// Write a function that accepts the union and narrows the type safely
type User="admin" | "Tester" |"Guest";
function getRole(role:User):string{
    if(role){
        return "admin";
    }else if(role == "Tester"){
        return "Tester";
    }else{
        return "Guest";
    }
    
}
const role:string =getRole("Guest");
console.log(role);

interface Admin{
    role:"Admin"
}
interface Guest{
    role:"Guest"
}
type userUnion = Admin | Guest;

function getUserRole (user:userUnion){
    (user.role=="Admin")?console.log("Hii Admin"):console.log("Hii Guest");

}
const Ayush:userUnion={
    role:"Admin"
}
getUserRole(Ayush);